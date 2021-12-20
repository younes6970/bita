<script>
    import {Motion} from "svelte-motion";
    import IconBase from "./ainmIcon/iconBase.svelte"
    import IconOne from "./ainmIcon/iconOne.svelte"
    import IconTwo from "./ainmIcon/iconTwo.svelte"
    import TextOne from "./ainmIcon/textOne.svelte"
    import TextTwo from "./ainmIcon/textTwo.svelte"
    import TextThree from "./ainmIcon/textThree.svelte"
    import Layout from "./ainmIcon/layout.svelte"
    import AppOne from "./ainmIcon/appOne.svelte"
    import AppTwo from "./ainmIcon/appTwo.svelte"
    import LayoutApp from "./ainmIcon/layoutApp.svelte"
</script>
<div class="boxIconBase">
    <div class="iconBase">
        <IconBase />
            <Motion initial={{translateX : -60 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 0.7 }} let:motion>
                <div class="iconOne" use:motion>
                    <IconOne />
                </div>
            </Motion>
            <Motion initial={{translateX : -60 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 0.95 }} let:motion>
                <div class="iconTwo" use:motion>
                    <IconTwo />
                </div>
            </Motion>
            <Motion initial={{translateX : -60 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 1.2 }} let:motion>
                <div class="textOne" use:motion>
                    <TextOne />
                </div>
            </Motion>
            <Motion initial={{translateX : -60 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 1.2 }} let:motion>
            <div class="textTwo" use:motion>
                <TextTwo />
            </div>
            </Motion>
            <Motion initial={{translateX : -60 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 1.2 }} let:motion>
                <div class="textThree" use:motion>
                    <TextThree />
                </div>
            </Motion>
            <Motion initial={{translateX : -60 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 1.2 }} let:motion>
                <div class="layout" use:motion>
                    <Layout />
                </div>
            </Motion>
            <Motion initial={{translateX : -60 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 1.3 }} let:motion>
                <div class="appOne" use:motion>
                    <AppOne />
                </div>
            </Motion>
            <Motion initial={{translateX : -60 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 1.3 }} let:motion>
                <div class="appTwo" use:motion>
                    <AppTwo />
                </div>
            </Motion>
        <Motion initial={{translateX : -60 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 1.3 }} let:motion>
            <div class="layoutApp" use:motion>
                <LayoutApp />
            </div>
        </Motion>
    </div>
</div>

<style>
    .boxIconBase{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .iconBase{
        position: relative;
        width: 423px;
        height: 495px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .iconOne{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        right: -3%;
        top: 3%;
    }
    .iconTwo{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        right: -8%;
        top: 6%;
    }
    .textOne{
        position: absolute;
        width: 36%;
        height: 26%;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 47%;
        top: 37%;
    }
    .textTwo{
        position: absolute;
        width: 36%;
        height: 26%;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 45%;
        top: 54%;
    }
    .textThree{
        position: absolute;
        width: 36%;
        height: 26%;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 45%;
        top: 71%;;
    }
    .layout{
        position: absolute;
        width: 50%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        right: -8%;
        top: 14%;
    }
    .appOne{
        position: absolute;
        width: 30%;
        height: 13%;
        display: flex;
        justify-content: center;
        align-items: center;
        right: -12%;
        top: 15%;
    }
    .appTwo{
        position: absolute;
        width: 23%;
        height: 16%;
        display: flex;
        justify-content: center;
        align-items: center;
        right: -9%;
        top: 24%;
    }
    .layoutApp{
        position: absolute;
        width: 23%;
        height: 16%;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 14%;
        top: 26%;
    }
    @media screen and (max-width: 1024px) {
        .boxIconBase{
            justify-content: center;
        }
    }
    @media screen and (max-width: 768px) {
        .iconBase{
            width: 315px;
            height: 375px;
        }
    }
</style>