<script>
    import { Spinner } from 'flowbite-svelte';
    import { analysisResult, loadingResults } from '../../store';
    import Slide from './slide.svelte';
    import { onMount } from 'svelte';

    onMount(() => {
        panzoom(document.querySelector("#heatmap"), {
            bounds: true,
            boundsPadding: 0.65,
            zoomSpeed: 0.065
        })
    })

</script>

<svelte:head>
    <script src='https://unpkg.com/panzoom@9.4.0/dist/panzoom.min.js'></script>
</svelte:head>

<div class={`results w-[100%] ${!$analysisResult ? 'empty' : 'min-h-[80vh]'}`}>
    <Slide number="4" header="Results" full classStr="mb-8" hide={!$analysisResult}>
        <div class="results-container">
            <div class="results-drawer">
                {#if $analysisResult}
                    <p>{JSON.stringify($analysisResult)}</p>
                {/if}
            </div>
            <div class="results-render">
                {#if $loadingResults}
                    <div class="relative z-10 w-full h-full flex flex-row items-center justify-center">
                        <Spinner size={32}/>
                    </div>
                {/if}
                <div class={'relative z-0 w-full h-full ' + ($loadingResults ? 'opacity-30' : 'opacity-100')}>
                    <svg width={`100%`} height={`100%`}>
                        <image xlink:href={null} id="heatmap"/>
                    </svg>
                </div>
                <div class="controls">

                </div>
            </div>
        </div>
    </Slide>
</div>

<style lang="scss">
    .results {
        border-top: solid 1px black;
        scroll-snap-align: start;
        .results-container {
            display: grid;
            grid-template-columns: 1fr 4fr;
            @apply gap-2;
            > * {
                outline: solid 1px;
                @apply outline-gray-300 rounded-lg;
            }
            .results-render {
                display: grid;
                grid-template: "container";
                place-items: center;
                overflow: hidden;
                > * {
                    grid-area: container;
                }
                height: 800px;
            }
        }
        &.empty {
            opacity: 0.3;
            min-height: 0px;
            height: 100px;
            overflow-y: hidden;
        }
    }
</style>
