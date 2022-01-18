<script>
    import {Motion} from "svelte-motion";

    import PcIcon from "./iconAnim/pc.svelte"
    import LayoutPc from "./iconAnim/laoutPc.svelte"
    import LayoutPcTwo from "./iconAnim/layoutPcTwo.svelte"
    import TextAbout from "./iconAnim/textAout.svelte"
    import TextAboutTwo from "./iconAnim/textAboutTwo.svelte"
    import TextAboutThree from "./iconAnim/textAboutThree.svelte"
    import ImgAbout from "./iconAnim/imgAbout.svelte"
    import ImgAboutText from "./iconAnim/imgAboutText.svelte"

</script>
<div class="pc">
    <div class="pcIcon">
        <PcIcon />
        <Motion initial={{translateX : -55 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 0.2 }} let:motion>
            <div class="layoutPc" use:motion>
                <LayoutPc />
            </div>
        </Motion>
        <Motion initial={{translateX : -60 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 0.5 }} let:motion>
                <div class="layoutPcTwo" use:motion>
                    <LayoutPcTwo />
                </div>
            </Motion>
        <Motion initial={{translateX : -65 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 0.55 }} let:motion>
                <div class="textAbout" use:motion>
                    <TextAbout />
                </div>
            </Motion>
        <Motion initial={{translateX : -65 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 0.55 }} let:motion>
                <div class="textAboutTwo" use:motion>
                    <TextAboutTwo />
                </div>
            </Motion>
        <Motion initial={{translateX : -65 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 0.55 }} let:motion>
                <div class="textAboutThree" use:motion>
                    <TextAboutThree />
                </div>
            </Motion>
        <Motion initial={{translateX : -65 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 0.55 }} let:motion>
                <div class="imgAbout" use:motion>
                    <ImgAbout />
                </div>
            </Motion>
        <Motion initial={{translateX : -65 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 0.65 }} let:motion>
                <div class="imgAboutText" use:motion>
                    <ImgAboutText />
                </div>
            </Motion>
    </div>




</div>
<style>
    .pc{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
    }
    .pcIcon{
        width: 465px;
        height: 500px;
        position: absolute;
        left: 0;
        bottom: 20%;
    }
    .layoutPc{
        width: 100%;
        height: 88%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 2%;
    }
    .layoutPcTwo{
        width: 100%;
        height: 86%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 4%;
        left: 6%;
    }
    .textAbout{
        width: 40%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 33%;
        left: 16%;
    }
    .textAboutTwo{
        width: 40%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 47%;
        left: 16%;
    }
    .textAboutThree{
        width: 40%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 60%;
        left: 16%;
    }
    .imgAbout{
        width: 37%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 13%;
        left: 59.5%;
    }
    .imgAboutText{
        width: 27%;
        height: 42%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 11.5%;
        left: 72.5%;
    }
<<<<<<< HEAD
@media screen and (max-height: 730px) {
    .pcIcon{
        bottom: 5%;
    }
}
    @media screen and (max-width:1550px ) {
=======

    @media screen and (max-width:1400px ) {
>>>>>>> 87e88aa9336b58572c8b975c9e80bdabfec76eb4
        .pcIcon{
            transform: scale(0.85);
            bottom: 10%;
        }
    }
    @media screen and (max-width: 1100px) {
        .pcIcon{
            transform: scale(0.6);
            bottom: -18%;
        }
    }
        @media screen and (max-width: 1000px) {
        .pc{
            justify-content: center;
            align-items: end;
        }
        .pcIcon{
            left: unset;
            margin: auto;
            bottom: 5%;
        }
    }
    @media screen and (max-width: 432px) {
        .pcIcon{
            transform: scale(1);
            width: 314px;
            height: 330px;
            bottom: 3%;
        }
    }
    @media screen and (max-width: 360px) {
        .pcIcon{
            transform: scale(0.9);
            width: 215px;
            height: 310px;
            bottom: 0;
        }
    }
</style>