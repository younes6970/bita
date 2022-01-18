<script>
    import {Motion} from "svelte-motion";
    import AppOne from "./iconAnim/AppOne.svelte"
    import AppTwo from "./iconAnim/appTwo.svelte"
    import AppThree from "./iconAnim/appThree.svelte"
    import AppFour from "./iconAnim/appFour.svelte"
    import AppFive from "./iconAnim/appFive.svelte"
    import AppSix from "./iconAnim/appSix.svelte"
    import AppSeven from "./iconAnim/appSeven.svelte"
    import AppEight from "./iconAnim/appEight.svelte"
    import AppNine from "./iconAnim/appNine.svelte"
    import AppSitting from "./iconAnim/appSitting.svelte"
</script>
<Motion initial={{translateY : -65 , opacity:0}} animate={{translateY:0  , opacity :1}} transition={{ duration: 0.7 }} let:motion>
    <div class="appOne" use:motion>
        <AppOne />
    </div>
</Motion>
<Motion initial={{translateY : -65 , opacity:0}} animate={{translateY: 0   , opacity :1}} transition={{ duration: 0.8 }} let:motion>
<div class="appTwo" use:motion>
    <AppTwo />
</div>
</Motion>
<Motion initial={{translateY : -65 , opacity:0}} animate={{translateY: 0   , opacity :1}} transition={{ duration: 0.9 }} let:motion>
<div class="appThree" use:motion>
    <AppThree />
</div>
</Motion>
<Motion initial={{translateY : -65 , opacity:0}} animate={{translateY: 0   , opacity :1}} transition={{ duration: 1 }} let:motion>
<div class="appFour" use:motion>
    <AppFour />
</div>
</Motion>
<Motion initial={{translateY : -65 , opacity:0}} animate={{translateY: 0   , opacity :1}} transition={{ duration: 1.1 }} let:motion>
<div class="appFive" use:motion>
    <AppFive />
</div>
</Motion>
<Motion initial={{translateY : -65 , opacity:0}} animate={{translateY: 0   , opacity :1}} transition={{ duration: 1.2 }} let:motion>
<div class="appSix" use:motion>
    <AppSix />
</div>
</Motion>
<Motion initial={{translateY : -65 , opacity:0}} animate={{translateY: 0   , opacity :1}} transition={{ duration: 1.3 }} let:motion>
<div class="appSeven" use:motion>
    <AppSeven />
</div>
</Motion>
<Motion initial={{translateY : -65 , opacity:0}} animate={{translateY: 0   , opacity :1}} transition={{ duration: 1.4 }} let:motion>
<div class="appEight" use:motion>
    <AppEight />
</div>
</Motion>
<Motion initial={{translateY : -65 , opacity:0}} animate={{translateY: 0   , opacity :1}} transition={{ duration: 1.5 }} let:motion>
<div class="appNine" use:motion>
    <AppNine />
</div>
</Motion>
<Motion initial={{translateY : -95 , opacity:0}} animate={{translateY: 0   , opacity :1}} transition={{ duration: 1.65 }} let:motion>
<div class="appSitting" use:motion>
    <AppSitting />
</div>
</Motion>
<style>
    .appOne{
        width: 38%;
        height: 24%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
    }
    .appTwo{
        width: 38%;
        height: 24%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 60px;
        right: 250px;
    }
    .appThree{
        width: 38%;
        height: 24%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 120px;
        right: 358px;
    }
    .appFour{
        width: 38%;
        height: 24%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 60px;
        right: 42px;
    }
    .appFive{
        width: 38%;
        height: 24%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 126px;
    }
    .appSix{
        width: 38%;
        height: 24%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 188px;
        right: 252px;
    }
    .appSeven{
        width: 38%;
        height: 24%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 123px;
        right: -60px;
    }
    .appEight{
        width: 38%;
        height: 24%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 190px;
        right: 43px;
    }
    .appNine{
        width: 38%;
        height: 24%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 250px;
    }
    .appSitting{
        width: 38%;
        height: 24%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 275px;
    }
    @media screen and (max-width: 432px) {
        .appOne{
            width: 34%;
            height: 20%;
            bottom: 30px;
        }
        .appTwo{
            width: 34%;
            height: 20%;
            bottom: 22%;
            right: 53%;
        }
        .appThree{
            width: 34%;
            height: 20%;
            bottom: 34%;
            right: 72%;
        }
        .appFour{
            width: 34%;
            height: 20%;
            bottom:22%;
            right: 14%
        }
        .appFive{
            width: 34%;
            height: 20%;
            bottom: 34%;
        }
        .appSix{
            width: 34%;
            height: 20%;
            bottom: 45%;
            right: 52%;
        }
        .appSeven{
            width: 34%;
            height: 20%;
            bottom: 34%;
            right: -4%;
        }
        .appEight{
            width: 34%;
            height: 20%;
            bottom: 45%;
            right: 15%;
        }
        .appNine{
            width: 34%;
            height: 20%;
            bottom: 57%;
        }
        .appSitting{
            width: 34%;
            height: 20%;
            bottom: 63%;
        }
    }
</style>