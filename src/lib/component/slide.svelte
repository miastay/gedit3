<script>
    import { slide } from 'svelte/transition';
    import { collapseInputs } from '../../store';

    export let number = 1;
    export let enabled = true;
    export let header = '';
    export let desc = '';
    export let full = false;
    export let classStr = '';

</script>

<div class={`slide-container border-gray-900 ${enabled ? 'enabled' : 'disabled'} ${full ? 'full': ''} ${classStr}`}>
    <div class="flex flex-row items-center justify-between">
        <div class="slide-header">
            <h1 class="font-bold text-3xl">{number ?? 1}</h1>
            <h2 class="text-2xl">{header}</h2>
        </div>
        <h4 class="text-gray-600">{desc}</h4>
    </div>
    <!-- {#if (flipCollapse ? !$collapseInputs : $collapseInputs)} -->
        <div transition:slide|local>
            <slot />
        </div>
    <!-- {/if} -->
</div>

<style lang="scss">
    .slide-container {
        &.row {
            width: calc(1/3 * 100%);
            max-width: calc(1/3 * 100%);
        }
        width: max(50%, 600px);
        max-width: max(50%, 600px);
        scroll-snap-align: center;
        scroll-snap-type: mandatory;
        &.full {
            max-width: 100%;
            width: 100%;
        }
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
            justify-content: space-between;
            @apply gap-8;
            @apply mb-2;
        }
        &.disabled {
            opacity: 40%;
        }
        transition: height 0.2s ease;
    }
</style>