<script>
    import { Alert, Button, Spinner } from 'flowbite-svelte';
    import { ArrowDownOutline, ArrowRightOutline } from 'flowbite-svelte-icons';
    import { advancedSettings, analysisError, analysisResult, loadingResults, mixtureMatrix, referenceMatrix } from '../../store';
    import Message from './message.svelte';
    import { Exception } from 'sass';

    const key = '6LfWCQYqAAAAANlVkMAH0b9k5IRl1Ch-VM-5ninF';

    let State = {
        idle: "idle",
        requesting: "requesting",
        success: "success"
    };
    let token;
    let state = State.idle;

    function onSubmit() {
        state = State.requesting;
        doRecaptcha();
    }

    function doRecaptcha() {
        grecaptcha.ready(function() {
            grecaptcha.execute(key, { action: "submit" }).then(function(token) {
                state = State.success;
                postAnalysis(token)
            });
        });
    }

    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = "ValidationError";
        }
    }

    function scrollToResults() {
        let container = document.querySelector(".main-container")
        container.scrollTo({top: container.scrollHeight, behavior: 'smooth'});
    }

    async function postAnalysis(token) {

        $analysisError = undefined;

        try {

            let formData = new FormData();

            if(!$mixtureMatrix) throw new ValidationError("Mixture not chosen")
            formData.append("Mixture", $mixtureMatrix.file ?? $mixtureMatrix.name)

            if(!$mixtureMatrix.name) throw new ValidationError("Invalid mixture name")
            formData.append("mixtureName", $mixtureMatrix.name)

            if(!$referenceMatrix) throw new ValidationError("Reference not chosen")
            formData.append("refMat", $referenceMatrix.file ?? $referenceMatrix.name)

            if(!$advancedSettings.signatureGenes.minimum || $advancedSettings.signatureGenes.minimum < 1) throw new ValidationError("Minimum signature genes must be greater than 0")
            formData.append("MinGenes", $advancedSettings.signatureGenes.minimum)

            if(!$advancedSettings.signatureGenes.average || $advancedSettings.signatureGenes.average < 1) throw new ValidationError("Number of signature genes must be greater than 0")
            formData.append("AvgGenes", $advancedSettings.signatureGenes.average)

            if(!$advancedSettings.primaryRankingMetric) throw new ValidationError("Ranking metric not recognized")
            formData.append("Method", $advancedSettings.primaryRankingMetric)

            formData.append("SampleClust", $advancedSettings.heatmapClustering.row)
            formData.append("RefClust", $advancedSettings.heatmapClustering.column)

            console.log($advancedSettings.rowScalingDegree)
            if(Number.parseFloat($advancedSettings.rowScalingDegree) < 0 || Number.parseFloat($advancedSettings.rowScalingDegree) > 1) throw new ValidationError("Row scaling degree must be in the range [0,1]")
            formData.append("RowScaling", $advancedSettings.rowScalingDegree)

            if(!$referenceMatrix.selectedCellTypes || $referenceMatrix.selectedCellTypes.length < 2) throw new ValidationError("At least two cell types must be selected")
            if($referenceMatrix.selectedCellTypes.some(cell => !$referenceMatrix.cellTypes.includes(cell))) throw new ValidationError("Unknown cell types selected")
            formData.append("SelectedCellTypes", JSON.stringify($referenceMatrix.selectedCellTypes))

            console.log(formData)
            console.log($mixtureMatrix)

            $loadingResults = true;
            const response = await fetch("/cgi-bin/sandbox/GEDIT.py", {
                method: "POST",
                body: formData,
            });
            let result = await response.json();
            if(result?.desc === "success" && result.uid) {
                let heatmap = document.querySelector("#heatmap")
                heatmap.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `/Downloads/${result.uid}_Heatmap.svg`);
                heatmap.setAttribute('href', `/Downloads/${result.uid}_Heatmap.svg`);
                $analysisResult = result;
                scrollToResults();
            } else {
                console.log("Failed to process result.")
            }

        } catch(e) {

            if(e instanceof ValidationError) {
                $analysisError = {
                    "type": "error",
                    "message": e.message
                };
            } else {
                $analysisError = {
                    "type": "unexpected",
                    "message": "Unexpected error reported to admin: " + e.message
                };
            }

        }
        $loadingResults = false;
        
    }

</script>

<svelte:head>
  <script src="https://www.google.com/recaptcha/api.js?render={key}" async defer></script>
</svelte:head>

<div class="submit-container">
    <form on:submit|preventDefault={onSubmit}>
        <Button type="submit" size="xl" class="bg-primary-600 text-nowrap min-w-[150px]">
            {#if !$loadingResults}
                Run Analysis <ArrowDownOutline class="w-6 h-6 ml-2"/>
            {:else}
                <Spinner size={6} />
            {/if}
        </Button>
    </form>
    {#if $analysisError !== undefined}
        <Message message={$analysisError}/>
    {/if}
</div>

<style lang='scss'>
    @import '../style/containers.scss';
    .submit-container {
        @include slide;
        @apply p-8;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        @apply gap-4;
    }
    .submit {
        min-width: 200px !important;
    }
</style>
