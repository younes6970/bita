<script>
    import Description from "$lib/product/component/Description.svelte";
    import {DATA_TITLE} from "$lib/product/data";
    import Scroll from "$lib/product/component/Scroll.svelte";
    import AnimProduct from "$lib/product/component/AnimProduct.svelte";
</script>


<div class="boxProduct">
    <div class="fixBoxProduct">
        <div class="boxProductAnim">
            <AnimProduct />
        </div>
        <div class="boxProductText">
            <div class="boxSliderText">
                <Description {...DATA_TITLE} />
            </div>
        </div>
        <Scroll on:onScroll />
    </div>
</div>


<style>

    .boxProduct{
        margin-top: 85px;
        width: 100%;
        height: calc(100% - 85px);
        display: flex;
        align-items: center;
        justify-content: center;
        background: url("../../../static/background/product.png") no-repeat right center;
        background-size: 70% 96%;
        background-origin: content-box;
        position: relative;
    }
    .fixBoxProduct{
        width: 100%;
        max-width: 1520px;
        height: 100%;
        padding: 10px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .boxProductAnim{
        width: 50%;
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
    }
    .boxProductText{
        width: 100%;
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .boxSliderText{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 650px;
        height: 300px;
    }

    @media screen and (max-width: 1440px) {
        .boxProductAnim{
            transform: scale(0.75);
        }
        .boxProductText{
            transform: scale(0.85);
        }
    }
    @media screen and (max-width: 1336px) {
        .boxProductAnim{
            transform: scale(0.65);
        }
        .boxProductText{
            transform: scale(0.85);
        }
    }
    @media screen and (max-width: 1100px){
        .boxProductAnim{
            transform: scale(0.6);
        }
        .boxProductText{
            transform: scale(0.7);
        }

    }
    @media screen and (max-width: 1000px) {
        .fixBoxProduct{
            flex-direction: column;
        }
    }
    @media screen and (max-width: 991px){
        .boxProductAnim{
            width: 100%;
            justify-content: center;
            transform: scale(0.8);
        }
        .boxProductText{
            transform: scale(0.8);
        }
    }
    @media screen and (max-width: 768px){
        .boxProductAnim{
            width: 100%;
            justify-content: center;
            transform: scale(0.7);
        }
        .boxProductText{
            transform: scale(0.7);
        }
    }
    @media screen and (max-width: 480px){
        .boxProduct{
            margin-top: 55px;
            height: calc(100vh - 55px);
        }
    }
    @media screen and (max-width: 432px){
        .boxProductAnim{
            width: 100%;
            justify-content: center;
            transform: scale(1);
        }
        .boxProductText{
            transform: scale(1);
        }
        .boxSliderText{
            width: 100%;
            height: 100%;
        }
        .boxSliderText{
            width: 100%;
            height: 100%;
        }

    }
    @media screen and (max-width: 395px){
        .boxProductAnim{
            width: 100%;
            justify-content: center;
            transform: scale(1);
        }
        .boxProductText{
            transform: scale(1);
        }
        .boxSliderText{
            width: 100%;
            height: 100%;
        }
        .boxSliderText{
            width: 100%;
            height: 100%;
        }

    }


</style>



