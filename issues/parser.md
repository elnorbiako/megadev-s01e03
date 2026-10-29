## Problem
The shared date parser reads every date month-first, although the affected tenants write day-first. This flips the intended day and month in bookings, reminders and calendar invites.

**Reports covered: 379 unique report IDs from #4471.** Received 2026-04-01 through 2026-10-04 across 11 tenants. Counts are from the supplied 4 October export, not live queue state.

## Evidence and reproduction
- R-41200, harbour.dental, en-GB, booking-v2, app: intended 7 April, reminder used 4 July.
- Resolve the tenant locale and submit 07/04/2026 through the shared parser path. Expected: 7 April. Current month-first interpretation: 4 July.
- For day-first tenants this group includes app/email channels and booking-v2 form submissions; booking-v3 form submissions belong to the separate hint issue #2.

## Scope and counting
Use `uniqueById`, filter `mergedInto === 4471`, then `groupByCause` with the tenant directory (`causes.ts`, `locales.ts`). The 427 exported rows contain 412 unique reports. This group is 379; the hint group is 33. Intake labels in this group: parser 356, hint 23. Browser locale/intake tag is not authoritative. Full membership: [audit.json](../blob/main/audit.json).

## Uncertain reports retained, not diagnosed away
R-41202, R-41209, R-41236, R-41344 and R-41620 describe one-day shifts or unusual timing. The supplied classifier counts all five under parser. Preserve that placement for this export with an explicit caveat; inspect original timestamps, time zones and invite payloads before asserting any further root cause. These reports do not prove a separate timezone bug.

## Proposed fix and acceptance checks
Resolve tenant locale explicitly or accept unambiguous ISO dates; preserve the intended calendar date through parsing and invite generation. Test ambiguous day-first input, dates with day > 12, month-first controls, booking-v2, and app/email channels. Do not mark the booking-v3 hint issue fixed by this change.

## Desk guidance
“Known” does not mean fixed. The July merge spike reflects processing of reports received since April, not a July onset. Replace subject-only merging with matching verified cause; unknown tenants remain separate pending investigation.
