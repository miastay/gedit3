<script>
    import Examples from "./examples.svelte";
    import Slide from "./slide.svelte";
    import Upload from "./upload.svelte";

    import { Button, Dropzone, Radio } from 'flowbite-svelte';
    import { Tabs, TabItem } from 'flowbite-svelte';

    import { ArrowRightOutline, DnaOutline, InfoCircleOutline, UploadSolid, UsersOutline } from 'flowbite-svelte-icons';
    
    export let next = false;

    import { referenceMatrix } from '../../store.js';

    const referenceMatrices = [
        {
            name: "LM22",
            author: "Newman et al",
            type: "RNA-seq",
            sourceRef: "https://www.nature.com/articles/nmeth.3337",
            dataRef: "http://webtools.mcdb.ucla.edu/Downloads/LM22.tsv",
            celltypes: ["B_cells_naive","B_cells_memory","Plasma_cells","T_cells_CD8","T_cells_CD4_naive","T_cells_CD4_memory_resting","T_cells_CD4_memory_activated","T_cells_follicular_helper","T_cells_regulatory_Tregs","T_cells_gamma_delta","NK_cells_resting","NK_cells_activated","Monocytes","Macrophages_M0","Macrophages_M1","Macrophages_M2","Dendritic_cells_resting","Dendritic_cells_activated","Mast_cells_resting","Mast_cells_activated","Eosinophils","Neutrophils"],
            selectedCellTypes: ["B_cells_naive","B_cells_memory","Plasma_cells","T_cells_CD8","T_cells_CD4_naive","T_cells_CD4_memory_resting","T_cells_CD4_memory_activated","T_cells_follicular_helper","T_cells_regulatory_Tregs","T_cells_gamma_delta","NK_cells_resting","NK_cells_activated","Monocytes","Macrophages_M0","Macrophages_M1","Macrophages_M2","Dendritic_cells_resting","Dendritic_cells_activated","Mast_cells_resting","Mast_cells_activated","Eosinophils","Neutrophils"]
        },
        {
            name: "ImmunoStates",
            author: "Vallania et al",
            type: "RNA-seq",
            sourceRef: "https://www.nature.com/articles/s41467-018-07242-6",
            dataRef: "http://webtools.mcdb.ucla.edu/Downloads/ImmunoStates.csv",
            celltypes: ["CD14_positive_monocyte","CD16_positive_monocyte","CD4_positive_alpha_beta_T_cell","CD56bright_natural_killer_cell","CD56dim_natural_killer_cell","CD8_positive_alpha_beta_T_cell","MAST_cell","basophil","eosinophil","gamma_delta_T_cell","hematopoietic_progenitor","macrophage_m0","macrophage_m1","macrophage_m2","memory_B_cell","myeloid_dendritic_cell","naive_B_cell","neutrophil","plasma_cell","plasmacytoid_dendritic_cell"],
            selectedCellTypes: ["CD14_positive_monocyte","CD16_positive_monocyte","CD4_positive_alpha_beta_T_cell","CD56bright_natural_killer_cell","CD56dim_natural_killer_cell","CD8_positive_alpha_beta_T_cell","MAST_cell","basophil","eosinophil","gamma_delta_T_cell","hematopoietic_progenitor","macrophage_m0","macrophage_m1","macrophage_m2","memory_B_cell","myeloid_dendritic_cell","naive_B_cell","neutrophil","plasma_cell","plasmacytoid_dendritic_cell"]
        },
        {
            name: "Blueprint",
            author: "Martens and Stunnenberg",
            type: "RNA-seq",
            sourceRef: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3789449/",
            dataRef: "http://webtools.mcdb.ucla.edu/Downloads/BluePrintImmuneCellsV2_1-11.csv",
            celltypes: ["CD14.positive..CD16.negative.classical.monocyte","CD38.negative.naive.B.cell","CD4.positive..alpha.beta.T.cell","cytotoxic.CD56.dim.natural.killer.cell","macrophage","mature.neutrophil","memory.B.cell","memory.CD4.positive.alpha.beta.T.cell","memory.CD8.positive.alpha.beta.T.cell"],
            selectedCellTypes: ["CD14.positive..CD16.negative.classical.monocyte","CD38.negative.naive.B.cell","CD4.positive..alpha.beta.T.cell","cytotoxic.CD56.dim.natural.killer.cell","macrophage","mature.neutrophil","memory.B.cell","memory.CD4.positive.alpha.beta.T.cell","memory.CD8.positive.alpha.beta.T.cell"]
        },
        {
            name: "ENCODE",
            author: "ENCODE Project Consortium",
            type: "RNA-seq",
            sourceRef: "http://www.nature.com/nature/journal/v489/n7414/full/nature11247.html",
            dataRef: "http://webtools.mcdb.ucla.edu/Downloads/ENCODE_ReferenceDataset_3-3.csv",
            celltypes: ["aortic.smooth.muscle.cell","articular.chondrocyte.of.knee.joint","bronchial.smooth.muscle.cell","cardiac.ventricle.fibroblast","dermal.cell.papilla.or.fibroblast","endothelial.cell.large.blood.vessel","endothelial.cell.microvascular.mammary.or.endometrial","endothelial.cell.microvascular.non.reproductive","fibroblast.of.arm","fibroblast.of.lung","fibroblast.of.the.aortic.adventitia","hair.follicular.keratinocyte","mammary.epithelial.cell","melanocyte.of.skin","mononuclear.cell","myometrial.cell","osteoblast","pluripotent.MSC-like.cell","PolyA_B.cell_PolyA","PolyA_CD14.positive.monocyte_PolyA","PolyA_fibroblast.of.lung_PolyA","regular.cardiac.myocyte","renal.cortical.epithelial.cell","respiratory.epithelial","smooth.muscle.cell.of.bladder","smooth.muscle.cell.of.the.coronary.artery","smooth.muscle.cell.of.the.pulmonary.artery","smooth.muscle.cell.of.trachea","uterine.smooth.muscle.cell"],
            selectedCellTypes: ["aortic.smooth.muscle.cell","articular.chondrocyte.of.knee.joint","bronchial.smooth.muscle.cell","cardiac.ventricle.fibroblast","dermal.cell.papilla.or.fibroblast","endothelial.cell.large.blood.vessel","endothelial.cell.microvascular.mammary.or.endometrial","endothelial.cell.microvascular.non.reproductive","fibroblast.of.arm","fibroblast.of.lung","fibroblast.of.the.aortic.adventitia","hair.follicular.keratinocyte","mammary.epithelial.cell","melanocyte.of.skin","mononuclear.cell","myometrial.cell","osteoblast","pluripotent.MSC-like.cell","PolyA_B.cell_PolyA","PolyA_CD14.positive.monocyte_PolyA","PolyA_fibroblast.of.lung_PolyA","regular.cardiac.myocyte","renal.cortical.epithelial.cell","respiratory.epithelial","smooth.muscle.cell.of.bladder","smooth.muscle.cell.of.the.coronary.artery","smooth.muscle.cell.of.the.pulmonary.artery","smooth.muscle.cell.of.trachea","uterine.smooth.muscle.cell"]
        },
        {
            name: "Human Body Atlas",
            author: "Su et al",
            type: "Affymetrix U133A/GNF1H",
            sourceRef: "http://www.pnas.org/content/101/16/6062.full",
            dataRef: "http://webtools.mcdb.ucla.edu/Downloads/HumanBodyAtlas.tsv",
            celltypes: ["721_B_lymphoblasts","Adipocyte","BDCA4+_DentriticCells","BronchialEpithelialCells","CD105+_Endothelial","CD14+_Monocytes","CD19+_BCells(neg","CD33+_Myeloid","CD34+","CD4+_Tcells","CD56+_NKCells","CD71+_EarlyErythroid","CD8+_Tcells","CardiacMyocytes","Colorectaladenocarcinoma","Leukemia_chronicMyelogenousK-562","Leukemia_promyelocytic-HL-60","Leukemialymphoblastic(MOLT-4)","Lymphoma_burkitts(Daudi)","Lymphoma_burkitts(Raji)","SkeletalMuscle","SmoothMuscle","Spinalcord","TestisGermCell","TestisLeydigCell"],
            selectedCellTypes: ["721_B_lymphoblasts","Adipocyte","BDCA4+_DentriticCells","BronchialEpithelialCells","CD105+_Endothelial","CD14+_Monocytes","CD19+_BCells(neg","CD33+_Myeloid","CD34+","CD4+_Tcells","CD56+_NKCells","CD71+_EarlyErythroid","CD8+_Tcells","CardiacMyocytes","Colorectaladenocarcinoma","Leukemia_chronicMyelogenousK-562","Leukemia_promyelocytic-HL-60","Leukemialymphoblastic(MOLT-4)","Lymphoma_burkitts(Daudi)","Lymphoma_burkitts(Raji)","SkeletalMuscle","SmoothMuscle","Spinalcord","TestisGermCell","TestisLeydigCell"]
        },
        {
            name: "Skin Signatures",
            author: "Swindell et al",
            type: "Affymetrix Genome Plus 2.0/Illumina Human HT-12 V3",
            sourceRef: "https://www.ncbi.nlm.nih.gov/pubmed/23915137",
            dataRef: "http://webtools.mcdb.ucla.edu/Downloads/Swindell1NKField.csv",
            celltypes: ["B_cells","Blood_CD34+_cells","Dendritic_cells","Eosinophils","Fibroblasts","Keratinocytes","Lymphatic_endothelial_cells","Macrophages","Monocytes","NK_cells","Neutrophils","Plasma_cells_CD138+","Platelets","Reticulocytes","Subcutaneous_Adipose","T_cells_CD3+","T_cells_CD4+","T_cells_CD8+","T_cells_Gamma_Delta","T_cells_Regulatory","Vascular_Endothelial_Cells"],
            selectedCellTypes: ["B_cells","Blood_CD34+_cells","Dendritic_cells","Eosinophils","Fibroblasts","Keratinocytes","Lymphatic_endothelial_cells","Macrophages","Monocytes","NK_cells","Neutrophils","Plasma_cells_CD138+","Platelets","Reticulocytes","Subcutaneous_Adipose","T_cells_CD3+","T_cells_CD4+","T_cells_CD8+","T_cells_Gamma_Delta","T_cells_Regulatory","Vascular_Endothelial_Cells"]
        },
        {
            name: "Human Primary Cell Atlas",
            author: "Mabbott et al",
            type: "Affymetrix U133 Plus 2.0",
            sourceRef: "http://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-14-632",
            dataRef: "http://webtools.mcdb.ucla.edu/Downloads/HPCAOrthogonalSubset.csv",
            celltypes: ["Endothelial_cells","Fibroblasts","Keratinocytes","M(IFNa)","M1(IFNg)","M2(IL-4)","Macrophage","Monocytes_CD14+CD16-","Monocytes_CD16+CD14-","MSC","Neutrophils","Neutrophils_LPS","NK_cells","Platelets","Schwann_cells","Smooth_muscle_cells","T_cells_(CD4+)","T_cells_(CD8+)","T_cells_(gamma-delta)"],
            selectedCellTypes: ["Endothelial_cells","Fibroblasts","Keratinocytes","M(IFNa)","M1(IFNg)","M2(IL-4)","Macrophage","Monocytes_CD14+CD16-","Monocytes_CD16+CD14-","MSC","Neutrophils","Neutrophils_LPS","NK_cells","Platelets","Schwann_cells","Smooth_muscle_cells","T_cells_(CD4+)","T_cells_(CD8+)","T_cells_(gamma-delta)"]
        },
    ]

    import { Modal } from 'flowbite-svelte';
    let showInfoModal = false;
    let modalInfo = referenceMatrices[0] ?? null;

    let allowCustomReference = false;

</script>

<Modal title={modalInfo.name ?? ""} bind:open={showInfoModal} autoclose outsideclose>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">{`Author: ${modalInfo.author}`}</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">{`Assay type: ${modalInfo.type}`}</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">Original paper: <a target="_blank" href={modalInfo.sourceRef}>{modalInfo.sourceRef}</a></p>
</Modal>

<Slide number="2" header="Choose reference">
    <div class="container">
        <div class="tabs">
            <div class="tab">
                <div class="grid gap-4 w-full md:grid-cols-2">
                    {#if allowCustomReference}
                        <Radio name="custom" custom value={"x"} bind:group={$referenceMatrix} class="uploader">
                            <div class="inline-flex justify-between items-center p-0 h-full w-full text-gray-500 bg-white rounded-lg outline outline-1 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:outline-primary-600 peer-checked:text-primary-600 peer-checked:outline-4 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <Dropzone class="w-full h-full !outline-none">
                                    <p class="text-gray-500 text-md flex flex-row gap-2"><UploadSolid class="w-5 h-5"/>Upload custom</p>
                                </Dropzone>
                            </div>
                        </Radio>
                    {/if}
                    {#each referenceMatrices as mat}
                        <Radio name="custom" custom value={mat} bind:group={$referenceMatrix}>
                            <div class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg outline outline-1 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:outline-primary-600 peer-checked:text-primary-600 peer-checked:outline-4 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="w-full">
                                    <div class="w-full text-lg font-semibold flex flex-row flex-grow-0 items-center justify-between">{mat.name}<button class="hover:bg-gray-200 dark:bg-gray-600 ml-4 p-1 rounded-md" on:click={() => {showInfoModal = true; modalInfo = mat}}><InfoCircleOutline class="w-5 h-5"/></button></div>
                                    <div class="w-full flex flex-row"><UsersOutline class="w-5 h-5 mr-2" />{mat.author}</div>
                                </div>
                            </div>
                        </Radio>
                    {/each}
                </div>
            </div>
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
    :global(.uploader) {
        > div {
            @apply border-2 border-gray-300 cursor-pointer border-dashed;
            outline: none !important;
        }
    }
</style>