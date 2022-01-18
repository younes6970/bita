<script>
    export let title
    export let iconId
    import IconOne from "../../../icon/crOne.svelte"
    import IconTwo from "../../../icon/crTwo.svelte"
    import IconThree from "../../../icon/crThree.svelte"
    import IconFour from "../../../icon/crFour.svelte"
    import IconFive from "../../../icon/crFive.svelte"
    import IconSix from "../../../icon/crSix.svelte"
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher()
    const handleCv = () =>{
        dispatch("onCv")
    }

</script>

<div class="boxCR">
    <h3 class="boxCRTitle">{title}</h3>
    {#if iconId === 1}
        <IconOne />
    {:else if iconId === 2}
        <IconTwo />
    {:else if iconId === 3}
        <IconThree />
    {:else if iconId === 4}
        <IconSix />
    {:else if iconId === 5}
        <IconFive />
    {:else if iconId === 6}
        <IconFour />
    {:else}
        partobita
    {/if}
        <button class="boxCRBtn" on:click={handleCv}>
            <div class="btnMore">
                <div class="circle" />
                <div class="circle" />
                <div class="circle" />
            </div>
            <span class="btnText">
                ارسال رزومه
            </span>
        </button>
    <div class="line"  />
</div>


<style>
    .btnMore{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .circle{
        width: 3px;
        height: 3px;
        border-radius: 100%;
        background-color: #fff;
        margin: 0 1px;
    }
    .btnText{
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50% , -50%);
        width: 100%;
        opacity: 0;
    }
    .boxCRBtn{
        width: 34px;
        height: 34px;
        background-color: var(--text-blue);
        color: #fff;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border: none;
        cursor: pointer;
        z-index: 100;
        font-size: var(--font14);
        position: relative;
    }

    .boxCR{
        width: 235px;
        height: 220px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        margin: 10px;
        position: relative;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #fcfcfc;
    }
    .boxCR:hover    .boxCRBtn{
        width: 112px;
        height: 34px;
        border-radius: 5px;
        transition: width 0.9s;
    }
    .boxCR:hover  .btnMore{
        display: none;
    }
    .boxCR:hover .btnText{
        opacity: 1;
        transition: opacity 2.2s;
    }
    .boxCRTitle{
        margin: 0;
        width: 100%;
        text-align: center;
        padding-bottom: 15px;
        border-bottom: 1px solid var(--text-color-again);
        font-size: var(--font16);
        color: var(--text-color-again);
        font-weight: bold;
    }
    .line{
       position: absolute;
        width: calc(100% - 40px);
        height: 1px;
        background-color: var(--text-color-again);
        bottom: 35px;
        z-index: 10;
    }
</style>