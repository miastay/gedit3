<script>
    import Examples from "./examples.svelte";
    import Slide from "./slide.svelte";
    import Upload from "./upload.svelte";

    import { Button, Radio } from 'flowbite-svelte';
    import { Tabs, TabItem } from 'flowbite-svelte';

    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    
    export let next = false;

</script>

<Slide number="1" header="Select mixture">
    <div class="container">
        <div class="tabs">
            <Tabs tabStyle="pill">
                <TabItem open>
                    <h3 slot="title">Upload gene expression data</h3>
                    <div class="tab">
                        <Upload />
                        <p class="desc">Upload a gene expression matrix where the first column is gene symbols and the first row is sample names. See an example input file <a href="/">here</a>.</p>
                    </div>
                </TabItem>
                <TabItem>
                    <h3 slot="title">Use example data</h3>
                    <div class="tab">
                        <Radio name="upload">Human Immune Cells -- Illumina HT12 beadarray</Radio>
                        <Radio name="upload">Human Skin Diseases -- Various Platforms</Radio>
                        <p class="desc">Upload a gene expression matrix where the first column is gene symbols and the first row is sample names. See an example input file <a href="/">here</a>.</p>
                    </div>
                </TabItem>
            </Tabs>
        </div>
        <div class="next">
            <Button disabled={!next} size="xl" class={`${next ? 'bg-primary-600' : 'bg-gray-500'}`}>Next Step <ArrowRightOutline class="w-5 h-5 ms-2" /></Button>
        </div>
    </div>
</Slide>

<style lang="scss">
    .tab, .tabs {
        display: flex;
        flex-direction: column;
        @apply gap-4;
    }
    a {
        text-decoration: underline;
    }
    :global(.desc) {
        @apply text-gray-600 dark:text-gray-500;
    }
    :global([role="tabpanel"]) {
        margin-top: 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .next {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
    }
</style>