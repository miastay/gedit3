<script>
    import { Alert } from 'flowbite-svelte';
</script>

<div class="blurb">
    <Alert color='gray'>
        <span>
            Welcome to the Gene Expression Deconvolution Interactive Tool! This open-source app allows you to deconvolve gene expression data into cell type fractions in seconds, without the need for expensive flow cytometry. To get started, upload your expression data and select a reference. For more information, <a class="underline underline-offset-2" href="https://www.biorxiv.org/content/10.1101/728493v2" target="_blank">read the paper here</a>.
        </span>
    </Alert>
</div>

<style lang='scss'>
    @import '../style/containers.scss';
    .blurb {
        @apply m-4;
        width: 100%;
        min-width: 200px;
        z-index: 0;
        display: block;
        position: sticky;
        top: 0;
    }
</style>
