<script>
    export let context
    export let isPhone
    export let isAddress
    import Phone from "../icon/phone.svelte"
    import Email from "../icon/email.svelte"
    import Address from "../icon/address.svelte"
</script>

<div class="boxFooter">
    <div class="boxFooterIcon">
        {#if isPhone}
            <Phone />
        {:else if isAddress}
            <Address />
        {:else }
            <Email />
        {/if}
    </div>
    <p class="footerTextContext">{context}</p>
</div>

<style>
    .boxFooter{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 0 0 30px;
    }
    .boxFooterIcon{
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
    .footerTextContext{
        font-size: var(--font12);
        color: #fff;
        margin: 0;
    }

    @media screen and (max-width: 480px) {


        .boxFooterIcon{
            margin-left: 5px;
        }
    }
</style>