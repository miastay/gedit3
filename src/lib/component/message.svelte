<script>
    import { Alert } from 'flowbite-svelte';
    import { ExclamationCircleOutline, FlagOutline, InfoCircleOutline, QuestionCircleOutline } from 'flowbite-svelte-icons';

    export let message;

</script>

<Alert color={message.type == "success" ? "green" : (message.type === "warning" ? "yellow" : (message.type === "unexpected" ? "purple" : "red"))}>
    <div class="flex flex-row message">
        {#if message.type === "error"}
            <ExclamationCircleOutline class="w-6 h-6 mr-2"/>
        {/if}
        {#if message.type === "warning"}
            <FlagOutline class="w-5 h-5 mr-2"/>
        {/if}
        {#if message.type === "success"}
            <InfoCircleOutline class="w-6 h-6 mr-2"/>
        {/if}
        {#if message.type === "unexpected"}
            <QuestionCircleOutline class="w-6 h-6 mr-2"/>
        {/if}
        {message.message ?? "Unknown Error, please retry."}
    </div>
</Alert>

<style lang='scss'>
    .message {
        overflow: hidden;
        white-space: nowrap;
        @apply gap-2 items-center;
    }
</style>
