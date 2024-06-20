<script>
    import Slide from './slide.svelte';
</script>

<div class="min-h-[80vh] scrollsnap">
    <Slide number="4" header="Results" full classStr="mb-8">
        xyz
    </Slide>
</div>

<style lang="scss">
    .scrollsnap {
        scroll-snap-align: start;
    }
</style>
