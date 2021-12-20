<script>
    export let name;
    export let description;
    export let src
    let innerWidth = window.innerWidth;
    let mrAtefiMahdi = "user/mrAtefiMahdi.jpg";
    let mrAtefiHamed = "user/mrAtefiHamed.jpg";
    let mrAllahverdiTaha = "user/mrAllahverdiTaha.jpg";
</script>
<svelte:window bind:innerWidth />

    {#if innerWidth > 1024}
        <diV class="listManagers">
            <div class="boxListManagers">
                <h5 class="boxListManagersTitle">{name}</h5>
                <p class="boxListManagersText">{description}</p>
            </div>
        <img class="listManagersImg" src={src === "mrAtefiMahdi" ? mrAtefiMahdi : src === "mrAtefiHamed" ? mrAtefiHamed : src === "mrAllahverdiTaha" ? mrAllahverdiTaha : "" } alt="partobita">
        </diV>
        {:else }
        <diV class="listManagersM">
            <div class="boxZ">
                <img class="listManagersImgM" src={src === "mrAtefiMahdi" ? mrAtefiMahdi : src === "mrAtefiHamed" ? mrAtefiHamed : src === "mrAllahverdiTaha" ? mrAllahverdiTaha : "" } alt="partobita">
            </div>
            <div class="boxListManagersM">
                <h5 class="boxListManagersTitleM">{name}</h5>
                <p class="boxListManagersTextM">{description}</p>
            </div>
        </diV>
        {/if}



<style>
    .listManagers{
        position:relative;
        margin: 0 50px;
        width: 230px;
        height: 230px;
    }
    .listManagersM{
        position:relative;
        width: 230px;
        height: 330px;
    }
    .boxZ{
        width: 100%;
        height: 260px;
    }
    .listManagers:hover .boxListManagers{
        /*display: flex;*/
        opacity: 1;
        transition: opacity 1s ease;
    }
    .listManagersImg{
        width: 100%;
        height: 100%;
        border-radius: 100%;
        z-index: 100;
    }
    .listManagersImgM{
            width: 100%;
            height: 100%;
            border-radius: 10px;
            z-index: 100;
    }
    .boxListManagers{
        padding: 20px 20px 30px;
        border-radius: 7px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 1000;
        position: absolute;
        top: -90px;
        right: -50%;
        width: 445px;
        opacity: 0;
        transition: opacity 1s ease;

    }
    .boxListManagersM{
        border-radius: 0 0 10px 10px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        display: flex;
        justify-content: start;
        align-items: start;
        flex-direction: column;
        z-index: 1000;
        position: relative;
        bottom: 50px;
        right: 0;
        left: 0;
        background: #e5e5e599;
        padding: 10px 0;
    }
    .boxListManagersTitle{
        color: var(--text-color-again);
        font-size: var(--font20);
        font-weight: bold;
        text-align: center;
        margin: 0 0 12px;
    }
    .boxListManagersTitleM{
        color: #000;
        font-size: var(--font16);
        font-weight: bold;
        text-align: center;
        margin: 0 0 12px;
        width: 100%;
        background: #e5e5e5;
        border-radius: 17px;
        padding: 2px 0;
    }
    .boxListManagersText{
        color: var(--text-color-again);
        font-size: var(--font18);
        text-align: center;
        margin: 0;
    }
    .boxListManagersTextM{
        color: #000;
        font-size: var(--font16);
        text-align: center;
        margin: 0;
    }
    @media screen and (max-width: 480px) {
        .boxListManagersM{
          padding: 5px 0;
            bottom: 30px;
        }
        .listManagersM{
            width: 120px;
            height: 175px;
        }
        .boxZ{
            width: 100%;
            height: 127px;
        }
        .boxListManagersTitleM{
            font-size: var(--font14);
        }
        .boxListManagersTextM{
            font-size: var(--font14);
        }
    }
</style>