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
            <NavLi href="/">About</NavLi>
            <NavLi href="/">Read the Paper</NavLi>
            <NavLi href="https://scholar.google.com/scholar?cluster=10492765248119991160&hl=en&as_sdt=0,5#d=gs_cit&t=1719196159912&u=%2Fscholar%3Fq%3Dinfo%3AeGvBbWbKnZEJ%3Ascholar.google.com%2F%26output%3Dcite%26scirp%3D0%26scfhb%3D1%26hl%3Den">Cite GEDIT</NavLi>
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