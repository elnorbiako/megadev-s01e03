import{a as i,f,t as g}from"./twBrWIfU.js";import"./DCnygfqA.js";import{A as e,i as b,G as v}from"./B8aHharX.js";import{l as k,s as y}from"./1zyv7jhh.js";import{R as w}from"./BXEyyjwp.js";import{C as _,Q as x}from"./DxLQIyE4.js";import{D as R}from"./BnjbTcV0.js";import{R as T}from"./B0EgyRGK.js";import{C as $}from"./B3dm_7_P.js";const t={layout:"runbook",title:"0002 · Split #4471 and deduplicate by cause",owner:"elnorbiako",status:"accepted",reviewed:"2026-10-29",signature:"elnorbiako · S01E03 · 2026-10-29"},{layout:F,title:q,owner:G,status:K,reviewed:Q,signature:D}=t;var S=f(`<p><strong>Replaces:</strong> <a href="/kb/decisions/0001-dedupe-by-subject">decision 0001</a>.
The accepted original remains unchanged as the historical record.</p> <h2>What the desk should do now</h2> <p>Do not treat <a href="/kb/incidents/4471">#4471</a> as one known problem. Split its reports into
the shared parser issue and the booking-v3 date-hint issue. The table below computes
the counts from unique report IDs, tenant locales and booking forms.</p> <ul><li><a href="https://github.com/elnorbiako/megadev-s01e03/issues/1" rel="nofollow">Parser ticket</a>: the shared parser reads month first although these tenants write day first.</li> <li><a href="https://github.com/elnorbiako/megadev-s01e03/issues/2" rel="nofollow">Hint ticket</a>: booking-v3 prints MM/DD/YYYY while its form reads dates in the tenant’s day-first order.</li></ul> <!> <p>The intake tag is a browser-based guess, not a diagnosis. Classify using the tenant’s
locale and booking form, together with the report’s channel. Use the actual runtime
logic in causes.ts and locales.ts rather than a second hand-maintained list.</p> <h2>Evidence and limits</h2> <p>Parser example R-41200: Harbour Dental (en-GB, booking-v2, app) intended 7 April;
the reminder used 4 July. Hint example R-41230: Copper Studio (es-ES, booking-v3,
form) intended 6 January; the client came on 1 June.</p> <p>The five desk-note reports R-41202, R-41209, R-41236, R-41344 and R-41620 describe
one-day shifts or unusual timing. The current classifier files them under parser;
the table footnotes them there. Their words do not establish another root cause.
Keep these IDs and investigate timestamps, time zones and invite payloads before
reclassifying. Do not silently exclude them or claim a time-zone fix is proven.</p> <p>The export contains overlapping pages. Count each report ID once, not every row.
Different report IDs remain separate reports even if their text is identical.</p> <h2>Received is not merged</h2> <!> <p>Reports arrived from April onward, but the desk only merged the accumulated queue
in July. That merge spike is desk activity, not evidence that the defect started
then. Reports continued afterward; “known” is not “fixed.” These views describe the
4 October export, not a live feed. Refresh the export and rerun before relying on
its totals for today’s desk.</p> <h2>Replacement triage rule</h2> <p>Read the report, resolve its tenant, and compare the affected path and cause with
the open ticket. Merge only when the cause matches. Matching subjects alone do not
prove duplication; different subjects alone do not prove separate problems.</p> <p>For an unknown tenant or conflicting symptoms, keep the report separate pending
investigation. Never merge merely because the subject matches. The old triage page
and decision 0001 are historical advice superseded by this record.</p> <!> <!> <h2>Separate fixes and checks</h2> <p>For the parser, resolve the tenant locale explicitly or accept an unambiguous ISO
date; preserve the intended calendar date through parsing and invite generation.
Test day-first dates such as 07/04/2026 against month-first control locales.</p> <p>For booking-v3, make the displayed hint agree with the date order the form accepts.
Test form submissions for Alder Physio, Copper Studio and Pale Harbour separately
from their app and email reports; those other channels still follow the parser path.
Check booking-v2 as a regression control. A parser fix alone does not establish
that the hint is fixed.</p> <h2>Maintenance</h2> <p>Keep computed values in components, not prose. Rebuild the page when reports or
tenant settings change. Review the split after fixes and retain the anomalous
reports until their evidence supports a diagnosis.</p> <!>`,1);function C(d,l){const p=k(l,["children","$$slots","$$events","$$legacy"]);w(d,y(()=>p,()=>t,{children:(h,P)=>{var a=S(),r=e(b(a),8);_(r,{ticket:4471});var o=e(r,14);x(o,{ticket:4471});var s=e(o,10);R(s,{});var n=e(s,2);$(n,{kind:"warn",children:(u,j)=>{v();var m=g(`The old pages have recent-looking prose and accepted statuses, but those are not
proof that their advice is correct. The triage rule and decision 0001 were last
reviewed in 2024; the layout flags them as stale. Check the rendered evidence.`);i(u,m)},$$slots:{default:!0}});var c=e(n,12);T(c,{get signature(){return D}}),i(h,a)},$$slots:{default:!0}}))}const B=Object.freeze(Object.defineProperty({__proto__:null,default:C,metadata:t},Symbol.toStringTag,{value:"Module"}));export{B as _,C as a};
