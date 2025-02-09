<script>
  import Grantt from "$lib/components/Grantt.svelte";
  import history from "$lib/models/history";
</script>

<Grantt roles={history.getRolesChronologically()} />
