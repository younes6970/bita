<script>
    import Mouse from "../../../icon/mouse.svelte"
    import Arrow from "../../../icon/arrow.svelte"
    import {createEventDispatcher} from "svelte";
    import {Motion} from "svelte-motion";
    const dispatch = createEventDispatcher()
    const handleScroll = () =>{
        dispatch("onScroll" , {
            number : 1
        })
    }
</script>

<button class="boxScroll" on:click={handleScroll}>
   <Mouse />
    <Motion initial={{translateY : -8 }} animate={{translateY: 0 , }} transition={{ duration: 0.6 , repeat: Infinity }} let:motion>
        <div class="boxArrow" use:motion>
            <Arrow />
            <span class="textScroll">scroll down</span>
        </div>
    </Motion>
</button>

<style>
    .boxScroll{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        position: absolute;
        left: 10%;
        bottom: 8%;
        background: none;
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }
    .boxArrow{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: row-reverse;
        margin-top: 8px;
        margin-left: 12px;
    }
    .textScroll{
        font-size: var(--font12);
        color: var(--text-color-base);
        margin: 0 5px;
    }
    @media  screen and (max-width: 769px) {
        .boxScroll{
            left: 3%;
            bottom: 3%;
            transform: scale(0.9);
        }
    }
</style>