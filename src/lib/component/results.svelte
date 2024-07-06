<script>
    import { Button, Skeleton, Spinner } from 'flowbite-svelte';
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

    $analysisResult = JSON.parse('{"desc": "success", "uid": "b07bd462-3b4d-11ef-a86d-0050569a963b", "name": "gc_day4_proteincoding.txt", "exec_time": "0:00:13.879137", "predict_time": "0:00:00.355934", "start_time": "2024-07-05 21:10:30.479858", "numCellTypes": 22, "numSharedMix": 504, "numSharedRef": 504, "numSigMix": 220 }')

</script>

<svelte:head>
    <script src='https://unpkg.com/panzoom@9.4.0/dist/panzoom.min.js'></script>
</svelte:head>

<div class={`results w-[100%] ${!$analysisResult ? 'empty' : ''}`}>
    <Slide number="4" header="Results" full classStr="mb-8" hide={!$analysisResult}>
        <div class="results-container">
            <div class="results-drawer p-4">
                {#if $analysisResult && !$loadingResults}
                <div>
                    <h2 class="text-2xl font-semibold">{$analysisResult.name ?? "Analysis Result"}</h2>
                    <code>{$analysisResult.uid ?? "Unknown UID"}</code>
                    <div class="mt-4 flex flex-col gap-4 analysis">
                        <table class="block">
                            <thead>Execution</thead>
                            <tbody>
                                <tr>
                                    <td>Time Started</td>
                                    <td>{$analysisResult.start_time ?? "Unknown"}</td>
                                </tr>
                                <tr>
                                    <td>Execution Time</td>
                                    <td>{$analysisResult.exec_time ?? "Unknown"}</td>
                                </tr>
                                <tr>
                                    <td>Prediction Time</td>
                                    <td>{$analysisResult.predict_time ?? "Unknown"}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="block">
                            <thead>Details</thead>
                            <tbody>
                                <tr>
                                    <td>Cell Types</td>
                                    <td>{$analysisResult.numCellTypes ?? "Unknown"}</td>
                                </tr>
                                <tr>
                                    <td>Genes shared with reference</td>
                                    <td>{$analysisResult.numSharedMix ?? "Unknown"}</td>
                                </tr>
                                <tr>
                                    <td>Significant genes in mixture</td>
                                    <td>{$analysisResult.numSigMix ?? "Unknown"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-6 flex flex-col w-full gap-2">
                    <Button on:click={() => window.open(`/Downloads/${$analysisResult.uid}_Heatmap.svg`, '_blank')} class={'bg-primary-100 text-primary-700 hover:bg-primary-100'}>{`Download heatmap (SVG)`}</Button>
                    <Button on:click={() => window.open(`/Downloads/${$analysisResult.uid}_SigMix.tsv`, '_blank')} class={'bg-primary-100 text-primary-700 hover:bg-primary-100'}>{`Download significant genes (TSV)`}</Button>
                    <Button on:click={() => window.open(`/Downloads/${$analysisResult.uid}_SigMix.tsv`, '_blank')} class={'bg-primary-600 text-white hover:bg-primary-600'}>{`Download results (TSV)`}</Button>
                </div>
                {:else}
                    <Skeleton size={"sm"} />
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
            .results-drawer {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
        &.empty {
            opacity: 0.3;
            min-height: 0px;
            height: 100px;
            overflow-y: hidden;
        }
    }
    .analysis {
        white-space: nowrap;
        td {
            @apply pl-4;
        }
    }
</style>
