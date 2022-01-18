<script>

    import ListBackground from "$lib/background/component/ListBackground.svelte";
    import {DATA_BACKGROUND} from "$lib/background/data";
    import AnimBackground from "$lib/background/component/AnimBackground.svelte";
</script>

<div class="boxBackground">
    <div class="fixBoxBackground">
        <div class="boxBackgroundTitle">
            <ListBackground {...DATA_BACKGROUND}  />
        </div>
        <div class="boxBackgroundAnim">
            <AnimBackground />
        </div>
    </div>
</div>

<style>
    .boxBackground{
        margin-top: 85px;
        width: 100%;
        height: calc(100% - 85px);
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url("../../../static/background/background.png") no-repeat center center;
        background-size: 70% 100%;
        background-origin: content-box;
        position: relative;
    }
    .fixBoxBackground{
        width: 100%;
        max-width: 1520px;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .boxBackgroundTitle{
        width: 50%;
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
    }
    .boxBackgroundAnim{
        width: 50%;
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
    }
    @media screen and (max-width: 1400px){
        .boxBackgroundTitle{
            padding-right: 20px;
        }
    }
    @media screen and (max-width: 1000px) {
        .fixBoxBackground{
            flex-direction: column;
        }
        .boxBackgroundTitle{
            width: 100%;
        }
        .boxBackgroundAnim{
            width: 100%;
            justify-content: center;
        }
        .boxBackgroundTitle{
            flex-direction: row;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }
    }
    @media screen and (max-width: 480px) {
.boxBackgroundAnim{
    display: none;
}
        .boxBackground{
            margin-top: 55px;
            height: calc(100vh - 55px);
        }

    }
</style>