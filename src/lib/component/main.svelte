<script>
    import Mixture from './mixture.svelte';
    import Reference from './reference.svelte';
    import Results from './results.svelte';
    import Settings from './settings.svelte';
</script>

<div class="main-container p-5">
    <!-- <Breadcrumb aria-label="Default breadcrumb example">
        <BreadcrumbItem href="/" home>Select mixture</BreadcrumbItem>
        <BreadcrumbItem href="/">Choose reference</BreadcrumbItem>
        <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
    </Breadcrumb> -->
    <div class="carousel">
        <Mixture />
        <Reference />
        <Settings />
    </div>
    <Results flipCollapse/>
</div>

<style lang="scss">
    .main-container {
        height: auto;
        overflow-y: scroll;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        @apply gap-5;
        .carousel {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            @apply gap-5;
            //min-height: 70%;
            height: max-content;
            width: 100%;
        }
        scroll-snap-type: y mandatory;
    }
</style>