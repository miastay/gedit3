<script>
    import { slide } from 'svelte/transition';
    import { collapseInputs } from '../../store';

    export let number = 1;
    export let enabled = true;
    export let header = '';
    export let desc = '';
    export let full = false;
    export let classStr = '';

    export let bordered = false;
    export let shadowed = false;

</script>

<div class={`slide-container border-gray-900 ${enabled ? 'enabled' : 'disabled'} ${full ? 'full': ''} ${classStr} ${bordered ? 'bordered' : ''} ${shadowed ? 'shadowed' : ''}`}>
    <div class="flex flex-row items-center justify-between">
        <div class="slide-header">
            <h1 class="text-3xl font-medium text-primary-700">{number ?? 1}</h1>
            <h2 class="text-2xl">{header}</h2>
        </div>
        <h4 class="text-gray-600">{desc}</h4>
    </div>
    <!-- {#if (flipCollapse ? !$collapseInputs : $collapseInputs)} -->
        <div class={`inner`} transition:slide|local>
            <slot />
        </div>
    <!-- {/if} -->
</div>

<style lang="scss">
    @import '../style/containers.scss';
    .slide-container {
        @include slide;
        &.row {
            width: 100%;
            max-width: 100%;
        }
        scroll-snap-align: center;
        &.full {
            max-width: 100%;
            width: 100%;
        }
        &.bordered {
            border: solid 1px;
            border-bottom: solid 10px;
        }
        &.shadowed {
            box-shadow: 0px 0px 20px #0001;
        }
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