<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<div class="gradient">
    <Navbar class="py-4" fluid=true>
        <NavBrand href="/" class="flex-col gap-0 items-start">
          <span class="whitespace-nowrap text-4xl font-semibold dark:text-white">gedit<sup>3</sup></span>
          <span class="text-md">the gene expression deconvolution interactive tool</span>
        </NavBrand>
        <NavHamburger  />
        <NavUl ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 text-lg font-medium">
            <NavLi href="/about">About</NavLi>
            <NavLi href="/">Read the Paper</NavLi>
            <NavLi href="/cite">Cite GEDIT3</NavLi>
        </NavUl>
    </Navbar>
</div>


<style lang="scss">
    .gradient {
        border-image-slice: 1;
        border-bottom: solid 5px;
        border-image-source: linear-gradient(to left, #743ad5, #d53a9d, #d5563a);
        height: min-content;
        //border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
    }
</style>