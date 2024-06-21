<script>
    import Examples from "./examples.svelte";
    import Slide from "./slide.svelte";
    import Upload from "./upload.svelte";

    import { Button, Card, Dropdown, DropdownItem, Radio } from 'flowbite-svelte';
    import { Tabs, TabItem } from 'flowbite-svelte';

    import { ArrowRightOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
    import { referenceMatrix } from '../../store.js';

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
                            <h3 class="text-lg">Reference Cell Types</h3>
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
                            {#each $referenceMatrix.celltypes.sort((a,b) => b < a) as cell}
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
            <div class="card w-[100%]">
                <h3 class="text-lg">Run Settings</h3>
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
    :global(.up) {
        transform: rotate(180deg);
    }
    :global(.down) {
        transform: rotate(0deg);
    }
</style>