<script>
    import { Dropzone } from 'flowbite-svelte';
    import { UploadSolid } from 'flowbite-svelte-icons';

    export let full = true;
    export let classStr = '';
    export let update;
  
    let value = "";
    const dropHandle = (event) => {
      value = "";
      event.preventDefault();
      if (event.dataTransfer.items) {
        let item = event.dataTransfer.items[0];
        if(item?.kind === 'file') {
            value = item.getAsFile().name;
            value = value;
        }
      } else {
        value = event.dataTransfer.files[0]?.name ?? '';
      }
    };
  
    const handleChange = (event) => {
        // modified to only handle one file
        const files = event.target.files;
        value = files[0].name;
        update(value)
    };
  
    const showFiles = (file) => {
      return file
    };
  </script>
  
<Dropzone
    id="dropzone"
    on:drop={dropHandle}
    on:dragover={(event) => {
        event.preventDefault();
    }}
    on:change={handleChange}
    class={classStr}>
    {#if full}
        <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
        {#if value.length === 0}
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">TSV, CSV, TXT (Max. 1GB)</p>
        {:else}
            <p>{showFiles(value)}</p>
        {/if}
    {/if}
    {#if !full}
        <p class="text-md flex flex-row gap-2"><UploadSolid class="w-5 h-5"/>Upload custom</p>
    {/if}
</Dropzone>