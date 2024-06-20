import { writable } from "svelte/store";

export const referenceMatrix = writable({
    name: "name",
    author: "author",
    type: "type",
    sourceRef: "sourceRef",
    dataRef: "dataRef",
    celltypes: [],
    selectedCellTypes: []
});

export const collapseInputs = writable(false);