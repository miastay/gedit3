<script>
    import Input from "../lib/component/input.svelte";
    import Main from "../lib/component/main.svelte";
    import Navbar from "../lib/component/navbar.svelte";
    import Slide from "../lib/component/slide.svelte";
</script>

<div class="content">
    <Navbar />
    <Main>
        <Input />
    </Main>
</div>

<style lang="scss">
    .content {
        display: grid;
        grid-template-rows: 1fr 8fr;
        height: 100vh;
        max-height: 100vh;
    }
</style>