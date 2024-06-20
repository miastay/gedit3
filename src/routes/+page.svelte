<script>
    import Mixture from "../lib/component/mixture.svelte";
    import Main from "../lib/component/main.svelte";
    import Navbar from "../lib/component/navbar.svelte";
    import Slide from "../lib/component/slide.svelte";
    import Reference from '../lib/component/reference.svelte';
    import Settings from '../lib/component/settings.svelte';
</script>

<div class="content">
    <Navbar />
    <Main>
        <Mixture />
        <Reference />
        <Settings />
    </Main>
</div>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: column;
        height: 100vh;
        max-height: 100vh;
    }
</style>