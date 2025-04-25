import { readonly, writable } from "svelte/store";

// class ReferenceMatrix {

//     constructor() {
//       this.mat = writable({});
//       this.complete = false;
//     }
  
//     update(o) {
//         this.mat.update(o)
//         this.complete = this.mat?.selectedCellTypes?.length !== 0;
//     }

//     subscribe(run) {
//         return this.mat.subscribe(run);
//     }
// }
  
// export const referenceMatrix = new ReferenceMatrix();
type ReferenceMatrix = {
    name: string,
    type: string,
    file?: File,
    author?: string,
    sourceRef?: string,
    dataRef?: string,
    cellTypes: Array<string>,
    selectedCellTypes: Array<string>,
    complete: boolean
};

export const referenceMatrix = writable<ReferenceMatrix>()
// export const referenceMatrix = writable({
//     name: "name",
//     author: "author",
//     type: "type",
//     sourceRef: "sourceRef",
//     dataRef: "dataRef",
//     celltypes: [],
//     selectedCellTypes: [],
//     complete: false
// });


type MixtureMatrix = {
    name: string,
    type: string,
    file?: File,
    dataRef?: string
};

//export const mixtureMatrix = writable<MixtureMatrix>()
export const mixtureMatrix = writable<MixtureMatrix>();
export const uploadedMixtureMatrix = writable<MixtureMatrix>();

export const collapseInputs = writable(false);

export enum Colormap {
    "Rocket" = "rocket",
    "Viridis" = "viridis",
    "Gedit" = "gedit"
}
export enum RankingMetric {
    "Entropy" = "Entropy",
    "Zscore" = "Z-score"
}
export enum Transpose {
    "Cells" = "Cells as columns",
    "Samples" = "Samples as columns"
}

type AdvancedSettings = {
    heatmapClustering: {
        row: boolean,
        column: boolean
    },
    primaryRankingMetric: RankingMetric,
    rowScalingDegree: number,
    signatureGenes: {
        minimum: number,
        average: number
    },
    colormap: Colormap,
    showCellValues: boolean,
    drawCellOutlines: boolean,
    squareCells: boolean,
    transpose: Transpose
}

export const advancedSettings = writable<AdvancedSettings>({
    heatmapClustering: {
        row: true,
        column: true
    },
    primaryRankingMetric: RankingMetric.Entropy,
    rowScalingDegree: 0,
    signatureGenes: {
        minimum: 10,
        average: 10
    },
    colormap: Colormap.Rocket,
    showCellValues: true,
    drawCellOutlines: true,
    squareCells: false,
    transpose: Transpose.Samples,
})

export const customMatrices = writable([])
export const loadingResults = writable(false);

type Message = {
    type: string,
    message: string
}
export const analysisError = writable<Message>(undefined);
export const analysisResult = writable(null);

export const tabulaSapiensOptions = writable<ReferenceMatrix[]>(
    [
        {
            name: "LM22",
            author: "Newman et al",
            type: "RNA-seq",
            file: null,
            sourceRef: "https://www.nature.com/articles/nmeth.3337",
            dataRef: "http://webtools.mcdb.ucla.edu/Downloads/LM22.tsv",
            cellTypes: ["B_cells_naive","B_cells_memory","Plasma_cells","T_cells_CD8","T_cells_CD4_naive","T_cells_CD4_memory_resting","T_cells_CD4_memory_activated","T_cells_follicular_helper","T_cells_regulatory_Tregs","T_cells_gamma_delta","NK_cells_resting","NK_cells_activated","Monocytes","Macrophages_M0","Macrophages_M1","Macrophages_M2","Dendritic_cells_resting","Dendritic_cells_activated","Mast_cells_resting","Mast_cells_activated","Eosinophils","Neutrophils"],
            selectedCellTypes: ["B_cells_naive","B_cells_memory","Plasma_cells","T_cells_CD8","T_cells_CD4_naive","T_cells_CD4_memory_resting","T_cells_CD4_memory_activated","T_cells_follicular_helper","T_cells_regulatory_Tregs","T_cells_gamma_delta","NK_cells_resting","NK_cells_activated","Monocytes","Macrophages_M0","Macrophages_M1","Macrophages_M2","Dendritic_cells_resting","Dendritic_cells_activated","Mast_cells_resting","Mast_cells_activated","Eosinophils","Neutrophils"]
        }, 
    ]
)
export const tabulaSapiens = readonly<ReferenceMatrix[]>(tabulaSapiensOptions)