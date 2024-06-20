<script>

    import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

</script>

<div class="main-container p-5">
    <Breadcrumb aria-label="Default breadcrumb example">
        <BreadcrumbItem href="/" home>Select mixture</BreadcrumbItem>
        <BreadcrumbItem href="/">Choose reference</BreadcrumbItem>
        <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
    </Breadcrumb>
    <div class="carousel">
        <slot />
    </div>
</div>

<style lang="scss">
    .main-container {
        height: 100%;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        @apply gap-5;
        .carousel {
            display: flex;
            flex-direction: row;
            @apply gap-5;
            height: 90%;
        }
    }
</style>