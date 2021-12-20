<script>
    import {Motion} from "svelte-motion";
    import MotionLi from "$lib/product/component/iconAnim/MotionLi.svelte";

    export let title;
    export let data;
    export let textOne;
    export let textTwo;

    const variants = {
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.3,
            },
        }),
        hidden: { opacity: 0 },
    };
</script>
<div class="boxSliders">
    <Motion
            initial={{opacity: 0 }}
            animate={{opacity : 1 , transition: {delay: 0.15}}}
            transition={{ duration: 0.15}}
            let:motion
    >
    <h2 class="title" use:motion>
        {title}
    </h2>
    <h4 class="text" use:motion>
        {textOne}
    </h4>
    </Motion>
    <Motion
            initial={{opacity: 0 }}
            animate={{opacity : 1 , transition: {delay: 0.2}}}
            transition={{ duration: 0.2 }}
            let:motion
    >
        <ul class="boxUl" use:motion>
            {#each data as text , i}
                <MotionLi text="{text}" delay="{i}" />
            {/each}
                </ul>
    </Motion>
    <Motion
            initial={{opacity: 0 }}
            animate={{opacity : 1 , transition: {delay: 0.15}}}
            transition={{ duration: 0.15 }}
            let:motion
    >
    <h4 class="text" use:motion>
        {textTwo}
    </h4>
    </Motion>
</div>

<style>
    .boxSliders{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        padding: 0 50px;
    }
    .title{
        color: var(--text-color);
        font-size: var(--font30);
        margin: 10px 0;
        text-align: right;
    }
    .text{
        color: var(--text-color);
        font-size: var(--font20);
        margin: 0 5px;
        text-align: right;
    }
    .boxUl{
        padding-right: 15px;
        color: var(--text-color-base);
        font-size: var(--font18);
        margin-right: 15px;
    }
    .boxUl li{
        margin-top: 4px;
    }

    @media screen and (max-width: 432px) {
        .boxUl{
            padding-right: 5px;
        }
        .boxSliders{
            margin-top: 5px;
            padding: 0 5px;
        }
    }
    @media screen and (max-width: 395px) {
        .boxUl{
            padding-right: 5px;
        }
        .boxSliders{
            margin-top: 5px;
            padding: 0 5px;
        }
    }
</style>