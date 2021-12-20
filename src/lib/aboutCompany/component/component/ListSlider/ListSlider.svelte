<script>
    import DescriptionAbout from "$lib/aboutCompany/component/DescriptionAbout.svelte";
    export let valueOne
    export let valueTwo = false
    export let valueThree = false
</script>

<div class="boxDescriptionAboutSlider">
    <DescriptionAbout {...valueOne} icon="{1}" />
    {#if valueTwo}
        <DescriptionAbout {...valueTwo} icon="{2}" />
    {/if}
        {#if valueThree}
            <DescriptionAbout {...valueThree} icon="{3}" />
        {/if}
</div>
<style>
    .boxDescriptionAboutSlider{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        height: 100%;
    }
</style>