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
        margin: 10px 0 10px 40px;
    }
    .boxFooterIcon{
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 35px;
    }
    .footerTextContext{
        font-size: var(--font18);
        color: #fff;
        margin: 0;
    }

    @media screen and (max-width: 480px) {
        .footerTextContext{
            font-size: var(--font14);
        }
        .boxFooter{
            margin: 0;
        }
        .boxFooterIcon{
            width: 30px;
            height: 30px;
            margin-left: 5px;
        }
    }
</style>