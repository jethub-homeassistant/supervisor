"""Utilities for sentry."""

import logging
from typing import Any

import sentry_sdk
from sentry_sdk.integrations.aiohttp import AioHttpIntegration
from sentry_sdk.integrations.atexit import AtexitIntegration
from sentry_sdk.integrations.dedupe import DedupeIntegration
from sentry_sdk.integrations.excepthook import ExcepthookIntegration
from sentry_sdk.integrations.logging import LoggingIntegration
from sentry_sdk.integrations.threading import ThreadingIntegration

from ..const import SUPERVISOR_VERSION
from ..coresys import CoreSys
from ..misc.filter import filter_data

_LOGGER: logging.Logger = logging.getLogger(__name__)

only_once_events: set[str] = set()


def init_sentry(coresys: CoreSys) -> None:
    """Initialize sentry client."""
    if not sentry_sdk.is_initialized():
        _LOGGER.info("Initializing Supervisor Sentry")
        #    dsn="https://9c6ea70f49234442b4746e447b24747e@o427061.ingest.sentry.io/5370612",
        sentry_sdk.init(
            dsn="https://47ea2fbffc454c6b877d1d41966873c7@o4505208810110976.ingest.sentry.io/4505208844386304",
            before_send=lambda event, hint: filter_data(coresys, event, hint),
            auto_enabling_integrations=False,
            default_integrations=False,
            integrations=[
                AioHttpIntegration(),
                ExcepthookIntegration(),
                DedupeIntegration(),
                AtexitIntegration(),
                ThreadingIntegration(),
                LoggingIntegration(level=logging.INFO, event_level=logging.CRITICAL),
            ],
            release=SUPERVISOR_VERSION,
            max_breadcrumbs=30,
        )


def capture_event(event: dict[str, Any], only_once: str | None = None):
    """Capture an event and send to sentry."""
    if sentry_sdk.is_initialized():
        if only_once and only_once not in only_once_events:
            only_once_events.add(only_once)
            sentry_sdk.capture_event(event)


def capture_exception(err: Exception) -> None:
    """Capture an exception and send to sentry."""
    if sentry_sdk.is_initialized():
        sentry_sdk.capture_exception(err)


def close_sentry() -> None:
    """Close the current sentry client.

    This method is irreversible. A new client will have to be initialized to re-open connetion.
    """
    if sentry_sdk.is_initialized():
        _LOGGER.info("Closing connection to Supervisor Sentry")
        sentry_sdk.get_client().close()
