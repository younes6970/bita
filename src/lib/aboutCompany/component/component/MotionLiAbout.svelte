<script>


    import {Motion} from "svelte-motion";

    export let text="" , delay;

</script>

<Motion
        initial={{opacity: 0  , x: "-20vw"}}
        animate={{opacity : 1 , x:0}}
        transition={{ duration: (delay + 1) * 0.25 }}
        let:motion
>
    <li use:motion>{text}</li>
</Motion>