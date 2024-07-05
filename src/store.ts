import { writable } from "svelte/store";

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

type AdvancedSettings = {
    heatmapClustering: {
        row: boolean,
        column: boolean
    },
    primaryRankingMetric: string,
    rowScalingDegree: number,
    signatureGenes: {
        minimum: number,
        average: number
    }
}

export const advancedSettings = writable<AdvancedSettings>({
    heatmapClustering: {
        row: true,
        column: true
    },
    primaryRankingMetric: "Entropy",
    rowScalingDegree: 0,
    signatureGenes: {
        minimum: 10,
        average: 10
    }
})

export const customMatrices = writable([])

export const loadingResults = writable(false);

type Message = {
    type: string,
    message: string
}
export const analysisError = writable<Message>(undefined);
export const analysisResult = writable(null);