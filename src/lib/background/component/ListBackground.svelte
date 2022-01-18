<script>
    import MotionLiBackground from "$lib/background/component/MotionLiBackground.svelte";

    export let title
    export let text
    export let description
</script>

<div class={"boxListBackground"}>
    <h2>{title}</h2>
    <p class="boxListBackgroundText">{text}</p>

    <ul class="boxUl">
        {#each description as text , i}
            <MotionLiBackground text="{text}" delay="{i}" />
        {/each}
    </ul>
</div>

<style>
    .boxUl{
    padding-right: 15px;
    color: var(--text-color-base);
    font-size: var(--font18);
        list-style: circle;
}
    .boxUl li{
        margin-top: 4px;
    }
    .boxListBackground{
        width: 100%;
        padding: 25px 0;
        margin: 10px 0;
        border-radius: 2px;
        transition: all .5s;
    }


    .boxListBackground > h2{
        color: var(--text-color-again);
        font-size: var(--font30);
        font-weight: bold;
        margin: 0 0 10px;
        transition: all .5s;
    }
    .boxListBackgroundActive > h2{
        color: var(--text-color-again);
        font-size: var(--font30);
        font-weight: bold;
        margin: 0 0 10px;
    }
    .boxListBackgroundText{
        font-size: var(--font20);
        color: var(--text-color-again);
        font-weight: bold;
        margin: 0 0 8px;

    }
    @media screen and (max-width: 1024px) {
        .boxListBackground{
            padding: 10px;
            margin: 0;
        }
    }

</style>