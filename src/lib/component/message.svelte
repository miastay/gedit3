<script>
    import { Alert } from 'flowbite-svelte';
    import { BullhornOutline, ExclamationCircleOutline, FlagOutline, InfoCircleOutline, QuestionCircleOutline } from 'flowbite-svelte-icons';

    export let message;

</script>

<Alert color={message.type == "success" ? "green" : (message.type === "warning" || message.type === "announcement" ? "yellow" : (message.type === "unexpected" ? "purple" : (message.type === "info" ? "blue" : "red")))}>
    <div class="flex flex-row message">
        {#if message.type === "error"}
            <ExclamationCircleOutline class="w-6 h-6 mr-2"/>
        {:else if message.type === "warning"}
            <FlagOutline class="w-5 h-5 mr-2"/>
        {:else if message.type === "success" || message.type === "info"}
            <InfoCircleOutline class="w-6 h-6 mr-2"/>
        {:else if message.type === "unexpected"}
            <QuestionCircleOutline class="w-6 h-6 mr-2"/>
        {:else if message.type === "announcement"}
            <BullhornOutline class="w-6 h-6 mr-2"/>
        {/if}
        {#if !message.message}
            <slot></slot>
        {:else}
            <span>{message.message ?? "Unknown message"}</span>
        {/if}
    </div>
</Alert>

<style lang='scss'>
    .message {
        overflow: hidden;
        white-space: nowrap;
        @apply gap-2 items-center;
    }
</style>
