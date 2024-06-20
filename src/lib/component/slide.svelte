<script>
    export let number = 1;
    export let enabled = true;
    export let header = '';
</script>

<div class={`slide-container border-gray-900 ${enabled ? 'enabled' : 'disabled'}`}>
    <div class="slide-header">
        <h1 class="font-bold text-3xl">{number ?? 1}</h1>
        <h2 class="text-2xl">{header}</h2>
    </div>
    <slot />
</div>

<style lang="scss">
    .slide-container {
        height: 100%;
        max-width: 70%;
        border: solid 1px;
        border-bottom: solid 10px;
        border-radius: 10px; 
        display: flex;
        flex-direction: column;
        @apply p-8;
        @apply gap-5;
        .slide-header {
            display: flex;
            flex-direction: row;
            align-items: center;
            @apply gap-8;
            @apply mb-2;
        }
        &.disabled {
            opacity: 40%;
        }
    }
</style>