<script>


    import {Motion} from "svelte-motion";

    export let text="" , delay;

</script>

<Motion
        initial={{opacity: 0 }}
        animate={{opacity : 1 , transition: {delay: (delay + 1) * 0.25}}}
        transition={{ duration: (delay + 1) * 0.25 }}
        let:motion
>
    <li use:motion>{text}</li>
</Motion>