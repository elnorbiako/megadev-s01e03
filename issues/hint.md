## Problem
The booking-v3 date field prints **MM/DD/YYYY**, but the form reads input using its tenant's day-first locale. People following the hint therefore submit a date that the form interprets with day and month reversed. This is separate from the shared parser issue #1.

**Reports covered: 33 unique report IDs from #4471.** Received 2026-04-17 through 2026-09-22 across Alder Physio, Copper Studio and Pale Harbour. Counts describe the 4 October export, not live queue state.

## Evidence and reproduction
- R-41230, copper.studio, es-ES, booking-v3, form: intended 6 January; client came on 1 June.
- Enter 01/06/2026 following the MM/DD/YYYY hint for 6 January. Expected: 6 January. The tenant's day-first form reads 1 June.
- R-41241, alder.physio, de-DE, booking-v3, form: booked 6 August; people arrived 8 June.
- These tenants' app/email reports still use the parser classification; tenant alone is not enough.

## Scope and counting
Use `uniqueById`, filter `mergedInto === 4471`, then `groupByCause` with the tenant directory. Select form channel, day-first locale, and a form whose hint begins MM. This yields 33 reports, not the 41 tagged “hint” by intake. Here 15 are tagged parser and 18 hint; 23 hint-tagged reports actually belong to parser. Full membership: [audit.json](../blob/main/audit.json). Total split: 379 parser + 33 hint = 412 unique reports; 15 additional exported rows repeat IDs.

## Proposed fix and acceptance checks
Make the date hint and accepted input order agree for the tenant locale. Test booking-v3 form submissions for all three tenants, locale changes and ambiguous dates; verify booking-v2 and app/email paths as controls. Fixing the shared parser alone does not demonstrate this form hint is fixed.

## Desk guidance
File and track separately from #1 even when subjects match. Dedupe by verified cause and affected path, not by subject or browser-based intake labels. Keep unknown tenants separate pending investigation.
