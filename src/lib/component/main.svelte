<script>

    import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

</script>

<div class="main-container p-5">
    <Breadcrumb aria-label="Default breadcrumb example">
        <BreadcrumbItem href="/" home>Select mixture</BreadcrumbItem>
        <BreadcrumbItem href="/">Choose reference</BreadcrumbItem>
        <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
    </Breadcrumb>
    <slot />
</div>

<style lang="scss">
    .main-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        @apply gap-5;
    }
</style>