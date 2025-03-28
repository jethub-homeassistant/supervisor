"""Testing handling with CoreState."""

from datetime import timedelta

from aiohttp.hdrs import USER_AGENT

from supervisor.coresys import CoreSys
from supervisor.dbus.timedate import TimeDate
from supervisor.utils.dt import utcnow


async def test_timezone(coresys: CoreSys):
    """Test write corestate to /run/supervisor."""
    # pylint: disable=protected-access
    coresys.host.sys_dbus._timedate = TimeDate()
    # pylint: enable=protected-access

    assert coresys.timezone == "UTC"
    assert coresys.config.timezone is None

    await coresys.dbus.timedate.connect(coresys.dbus.bus)
    assert coresys.timezone == "Etc/UTC"

    await coresys.config.set_timezone("Europe/Zurich")
    assert coresys.timezone == "Europe/Zurich"


async def test_now(coresys: CoreSys):
    """Test datetime now with local time."""
    await coresys.config.set_timezone("Europe/Zurich")

    zurich = coresys.now()
    utc = utcnow()

    assert zurich != utc
    assert zurich - utc <= timedelta(hours=2)


def test_custom_user_agent(coresys: CoreSys):
    """Test custom useragent."""
    assert (
        "HomeAssistantSupervisor/9999.09.9.dev9999"
        in coresys.websession._default_headers[USER_AGENT]  # pylint: disable=protected-access
    )
