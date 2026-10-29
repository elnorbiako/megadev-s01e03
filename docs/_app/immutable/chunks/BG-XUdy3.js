import{c as y,a as p,f as u,t as w}from"./BGvbGKlH.js";import"./24EdNpyt.js";import{w as _,i as v,y as x,L as f,aP as R,A as l,a5 as T,z as D,a6 as $,x as C,a7 as S}from"./Bli0wQkA.js";import{i as P,l as A,s as M}from"./BwZsoyTv.js";import{R as I}from"./DYxOxZMy.js";import{C as j,Q as E}from"./Bb751DSe.js";import{D as H}from"./DDlwb7hg.js";import{s as z}from"./BYTsrra7.js";import{C as B}from"./Bpld3Mzl.js";const J="0123456789ABCDEFGHJKMNPQRSTVWXYZ";function g(o,t){let e=t>>>0;for(let a=0;a<o.length;a++)e^=o.charCodeAt(a),e=Math.imul(e,16777619)>>>0;return e}function Y(o){const t=o.trim(),e=g(t,2166136261),a=g(t,2654435769);let d=BigInt(e)<<8n|BigInt(a&255),s="";for(let i=0;i<8;i++)s=J[Number(d&31n)]+s,d>>=5n;return`DR-${s.slice(0,4)}-${s.slice(4)}`}var F=u('<p class="stamp svelte-1280m42">desk ref <b class="svelte-1280m42"> </b></p>'),O=u(`<p class="stamp missing svelte-1280m42">no desk ref: this page isn't signed (no <code>signature</code> in its frontmatter)</p>`);function K(o,t){_(t,!0);const e=R(()=>t.signature?Y(t.signature):null);var a=y(),d=v(a);{var s=r=>{var n=F(),h=l(T(n)),c=D(h,!0);$(n),C(()=>z(c,f(e))),p(r,n)},i=r=>{var n=O();p(r,n)};P(d,r=>{f(e)?r(s):r(i,-1)})}p(o,a),x()}const m={layout:"runbook",title:"0002 · Split #4471 and deduplicate by cause",owner:"elnorbiako",status:"accepted",reviewed:"2026-10-29",signature:"elnorbiako · S01E03 · 2026-10-29"},{layout:se,title:re,owner:oe,status:ne,reviewed:ie,signature:N}=m;var Q=u(`<p><strong>Replaces:</strong> <a href="/kb/decisions/0001-dedupe-by-subject">decision 0001</a>.
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
reports until their evidence supports a diagnosis.</p> <!>`,1);function q(o,t){const e=A(t,["children","$$slots","$$events","$$legacy"]);I(o,M(()=>e,()=>m,{children:(a,d)=>{var s=Q(),i=l(v(s),8);j(i,{ticket:4471});var r=l(i,14);E(r,{ticket:4471});var n=l(r,10);H(n,{});var h=l(n,2);B(h,{kind:"warn",children:(b,G)=>{S();var k=w(`The old pages have recent-looking prose and accepted statuses, but those are not
proof that their advice is correct. The triage rule and decision 0001 were last
reviewed in 2024; the layout flags them as stale. Check the rendered evidence.`);p(b,k)},$$slots:{default:!0}});var c=l(h,12);K(c,{get signature(){return N}}),p(a,s)},$$slots:{default:!0}}))}const le=Object.freeze(Object.defineProperty({__proto__:null,default:q,metadata:m},Symbol.toStringTag,{value:"Module"}));export{le as _,q as a};
