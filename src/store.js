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


export const referenceMatrix = writable({
    name: "name",
    author: "author",
    type: "type",
    sourceRef: "sourceRef",
    dataRef: "dataRef",
    celltypes: [],
    selectedCellTypes: [],
    complete: false
});

export const collapseInputs = writable(false);