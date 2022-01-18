<script>
    export let open = false;
    export let values;
    export let num;
    import LogoIcon from "../../../icon/logoIcon.svelte";
    import {createEventDispatcher} from "svelte"

    const dispatch = createEventDispatcher()
    const handleClick = (activeSection ) =>{
        dispatch("clickActive" , {
            sectionNumber : activeSection
        })
    };
</script>
<div class="boxSlide" class:open on:click={()=> open=!open} >
    <aside class:open>
        <ul class="boxMenu">
            <li class="boxItemMenuLogo">
                <LogoIcon />
            </li>
            {#each values as header (header.id)}
                <li class="boxItemMenu"><button class:active={(header.id - 1)  === num} on:click={()=>handleClick(header.id - 1)} sveltekit:prefetch>{header.title}</button></li>
            {/each}
        </ul>
    </aside>
</div>
<style>
    .boxSlide{
        position: absolute;
        top: 0;
        bottom: 0;
        right: -100%;
        transition: right 0.5s ease-in-out;
        background-color: #00000020;
        z-index: 10000;
        width: 100%;
    }
    aside {
        right: -100%;
        transition: right 0.3s ease-in-out;
        position: absolute;
        padding: 40px 20px 20px 40px;
        height: 100%;
        top: 0;
        background-color: #FFF;
        z-index: 100000;
    }
    .open {
        right: 0
    }
    .boxMenu{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .boxItemMenuLogo{
        margin-left: 20px;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .boxItemMenu{
        margin:10px 0 0;
        color: var(--text-color);
        font: var(--font16);
        width: 100%;
    }
    .boxItemMenu button{
        background: none;
        border: none;
        outline: none;
        margin: 0;
        cursor: pointer;
        padding: 6px 0 6px 12px;
    }
    .active{
        color: var(--text-blue) !important;
        border-bottom: 1px solid var(--text-blue) !important;
    }
</style>