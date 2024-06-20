<script>
    import Main from "../lib/component/main.svelte";
    import Navbar from "../lib/component/navbar.svelte";
    import Slide from "../lib/component/slide.svelte";
</script>

<div class="content">
    <Navbar />
    <Main />
</div>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: column;
        height: 100vh;
        max-height: 100vh;
    }
</style>