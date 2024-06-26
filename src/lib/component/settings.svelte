<script>
    import Examples from "./examples.svelte";
    import Slide from "./slide.svelte";
    import Upload from "./upload.svelte";

    import { Button, Card, Dropdown, DropdownItem, Label, NumberInput, Radio, Range } from 'flowbite-svelte';
    import { Tabs, TabItem } from 'flowbite-svelte';

    import { AdjustmentsHorizontalOutline, ArrowRightOutline, ChevronDownOutline, CodeForkOutline, GridOutline, InfoCircleOutline, SortOutline } from 'flowbite-svelte-icons';
    import { referenceMatrix, advancedSettings } from '../../store.ts';

    import { Checkbox } from 'flowbite-svelte';
    
    export let next = false;

    let collapseCellTypes = false;
    export let allowCollapse = false;

</script>

<Slide number="3" header="Configure run">
    <div class="container w-[100%]">
        <div class="flex flex-col gap-6">
            <div class="card w-[100%]">
                {#if $referenceMatrix?.celltypes?.length !== 0}
                    <div class="flex flex-row justify-between mb-2">
                        <button class="flex flex-row gap-2 items-center" on:click={() => { if(allowCollapse) collapseCellTypes = !collapseCellTypes } }>
                            {#if allowCollapse} <ChevronDownOutline class={`w-6 h-6 text-gray-700 dark:text-white ${collapseCellTypes ? 'up' : 'down'}`} /> {/if}
                            <h3 class="section-title">Reference Cell Types</h3>
                        </button>
                        {#if !collapseCellTypes}
                            <div class="text-sm text-gray-400">
                                <a href="" on:click={() => $referenceMatrix.selectedCellTypes = [...$referenceMatrix.celltypes]}>select all</a>
                                &nbsp;|&nbsp;
                                <a href="" on:click={() => $referenceMatrix.selectedCellTypes = []}>select none</a>
                            </div>
                        {/if}
                    </div>
                    {#if !collapseCellTypes && $referenceMatrix?.celltypes}
                        <div class="flex flex-row flex-grow-0 gap-2 flex-wrap max-w-[100%]">
                            {#each $referenceMatrix.celltypes.sort((a,b) => b.toLowerCase() < a.toLowerCase()) as cell}
                                <Checkbox custom bind:group={$referenceMatrix.selectedCellTypes} value={cell}>
                                    <div class="font-normal p-2 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-primary-600 peer-checked:text-primary-500 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="w-full text-md font-semibold select-none">{cell}</div>
                                    </div>
                                </Checkbox>
                            {/each}
                        </div>
                    {/if}
                {/if}
            </div>
            <div class="card w-[100%] grid grid-cols-2 gap-4">
                <div class="item">
                    <div class="header">
                        <h4>
                            <CodeForkOutline class="w-6 h-6" />Heatmap Clustering
                        </h4>
                        <button class="text-gray-400 hover:bg-gray-200 dark:bg-gray-600 ml-4 p-1 rounded-md" on:click={() => console.log("Unimplemented")}><InfoCircleOutline class="w-5 h-5"/></button>
                    </div>
                    <div class="items">
                        <Checkbox checked>Rows</Checkbox>
                        <Checkbox checked>Columns</Checkbox>
                    </div>
                </div>
                <div class="item">
                    <div class="header">
                        <h4>
                            <SortOutline class="w-6 h-6" />Primary Ranking Metric
                        </h4>
                        <button class="text-gray-400 hover:bg-gray-200 dark:bg-gray-600 ml-4 p-1 rounded-md" on:click={() => console.log("Unimplemented")}><InfoCircleOutline class="w-5 h-5"/></button>
                    </div>
                    <div class="items">
                        <Radio name="ranking-metric" value="Minimum entropy" bind:group={$advancedSettings.primaryRankingMetric}>Minimum entropy</Radio>
                        <Radio name="ranking-metric" value="Z-score" bind:group={$advancedSettings.primaryRankingMetric}>Z-score</Radio>
                    </div>
                </div>
                <div class="item">
                    <div class="header">
                        <h4>
                            <GridOutline class="w-6 h-6" />Signature Genes per Cell Type
                        </h4>
                        <button class="text-gray-400 hover:bg-gray-200 dark:bg-gray-600 ml-4 p-1 rounded-md" on:click={() => console.log("Unimplemented")}><InfoCircleOutline class="w-5 h-5"/></button>
                    </div>
                    <div class="items row">
                        <div>
                            <Label for="signatureGenes-minimum" class="mb-1">Minimum</Label>
                            <NumberInput id="signatureGenes-minimum" class="w-[100%]" bind:value={$advancedSettings.signatureGenes.minimum}></NumberInput>
                        </div>
                        <div>
                            <Label for="signatureGenes-average" class="mb-1">Average</Label>
                            <NumberInput id="signatureGenes-average" class="w-[100%]" bind:value={$advancedSettings.signatureGenes.average}></NumberInput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="header">
                        <h4>
                            <AdjustmentsHorizontalOutline class="w-6 h-6" />Degree of Row Scaling
                        </h4>
                        <button class="text-gray-400 hover:bg-gray-200 dark:bg-gray-600 ml-4 p-1 rounded-md" on:click={() => console.log("Unimplemented")}><InfoCircleOutline class="w-5 h-5"/></button>
                    </div>
                    <div class="items">
                        <div class="flex flex-row gap-4 items-center">
                            <NumberInput class="w-[30%]" bind:value={$advancedSettings.rowScaling}></NumberInput>
                            <Range size="sm" color="primary" bind:value={$advancedSettings.rowScaling} max=1 min=0 step=0.01></Range>
                        </div>
                    </div>
                </div>
            </div>
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
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        :global(.card > div) {
            @apply shadow-none;
        }
    }
    .next {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
    }

    .section-title {
        @apply text-lg;
    }

    .item {
        .header {
            @apply flex flex-row justify-between items-center;
        }
        @apply flex flex-col flex-grow gap-2 p-4 border border-solid border-gray-200;
        h4 {
            @apply flex flex-row gap-1 ml-[-0.25rem];
            //@apply text-primary-800 dark:text-gray-500 tracking-tight text-lg;
        }
        .items {
            display: flex;
            flex-direction: column;
            &.row {
                flex-direction: row;
                @apply gap-4;
            }
            @apply gap-1 ml-0;
        }
    }

    :global(.up) {
        transform: rotate(180deg);
    }
    :global(.down) {
        transform: rotate(0deg);
    }
    :global(input[type="range"]) {
        &::-moz-range-progress {
            @apply bg-primary-500;
        }
        &::-moz-range-thumb {
            @apply bg-primary-500;
        }
    }
</style>