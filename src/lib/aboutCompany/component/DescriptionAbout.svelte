<script>
   import {Motion} from "svelte-motion";
   import MotionLiAbout from "$lib/aboutCompany/component/component/MotionLiAbout.svelte";

   export let values


</script>


    <div class="boxDescriptionText">
        <Motion
                initial={{opacity: 0 }}
                animate={{opacity : 1 , transition: {delay: 0.2}}}
                transition={{ duration: 0.2 }}
                let:motion
        >
            <ul class="boxUl" use:motion>
                {#each values as value , i}
                    <MotionLiAbout text="{value}" delay="{i}" />
                {/each}
            </ul>
        </Motion>
    </div>


<style>
    .boxUl{
        color: var(--text-color-base);
        font-size: var(--font18);
        margin-right: 15px;
        padding: 0;
    }
    .boxUl li{
        margin-top: 5px;
    }
   .boxDescriptionText{
       display: flex;
       flex-direction: column;
       justify-content: flex-start;
       align-items: flex-start;
   }

</style>