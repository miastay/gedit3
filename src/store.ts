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
    author?: string,
    sourceRef?: string,
    dataRef?: string,
    celltypes: Array<string>,
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
    primaryRankingMetric: "Minimum entropy",
    rowScalingDegree: 0.0,
    signatureGenes: {
        minimum: 0,
        average: 10
    }
})