<script lang="ts">
  import reports from '#lib/data/reports-4471.json';
  import update from '#lib/data/outcome-4471.json';
  import { groupByCause, uniqueById, type Report } from '#lib/kb/causes';
  import { tenantOf } from '#lib/kb/locales';
  const groups = groupByCause(uniqueById(reports as Report[]).filter(r => r.mergedInto === 4471), tenantOf);
</script>
<p>The desk closed #4471 on {update.closedOn}. Source checked {update.checkedOn}.</p>
<table>
  <thead><tr><th>cause</th><th>export reports</th><th>engineering outcome</th><th>reason</th><th>ticket</th></tr></thead>
  <tbody>
    {#each update.outcomes as outcome (outcome.cause)}
      <tr>
        <td>{outcome.cause}</td>
        <td>{groups.find(g => g.cause === outcome.cause)?.reports.length ?? 'unplaced'}</td>
        <td>{outcome.state}: {outcome.detail}</td>
        <td>{outcome.reason}</td>
        <td><a href={'https://github.com/elnorbiako/megadev-s01e03/issues/' + outcome.issue}>#{outcome.issue}</a></td>
      </tr>
    {/each}
  </tbody>
</table>
