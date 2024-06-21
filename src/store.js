import { writable } from "svelte/store";

export const referenceMatrix = writable({
    name: "name",
    author: "author",
    type: "type",
    sourceRef: "sourceRef",
    dataRef: "dataRef",
    celltypes: [],
    selectedCellTypes: [],
    complete: () => { return this.selectedCellTypes.length !== 0 }
});

export const collapseInputs = writable(false);