<script>
    import {Motion} from "svelte-motion";
    import LaptopIcon from "./iconAnim/laptop.svelte";
    import PhoneIcon from "./iconAnim/phone.svelte";
    import TextOneIcon from "./iconAnim/textOne.svelte";
    import TextTwoIcon from "./iconAnim/textTwo.svelte";
    import SwitchIcon from "./iconAnim/switch.svelte";
    import ChartIcon from "./iconAnim/chart.svelte";
    import AppIcon from "./iconAnim/app.svelte";
    import LayoutIcon from "./iconAnim/layout.svelte";
    import LineIcon from "./iconAnim/line.svelte";
    import StoreIcon from "./iconAnim/store.svelte";
    import AppPhone from "./iconAnim/appPhone.svelte";
    import LayoutPhoneIcon from "./iconAnim/layputPhone.svelte";
    import TextPhoneIcon from "./iconAnim/textPhone.svelte";
    import LayoutLaptopIcon from "./iconAnim/layoutLaptop.svelte";
</script>


<div class="boxAnim">
    <div class="app">
        <AppIcon />
        <Motion initial={{translateY : 15 , opacity:0}} animate={{translateY: 0 , opacity :1}} transition={{ duration: 0.7 }} let:motion>
            <div class="line" use:motion>
                <LineIcon />
            </div>
        </Motion>
        <Motion initial={{translateY : 40 , opacity:0}} animate={{translateY: 0 , opacity :1}} transition={{ duration: 0.8 }} let:motion>
            <div class="layout" use:motion>
                <LayoutIcon />
            </div>
        </Motion>
        <Motion initial={{translateY : 80 , opacity:0}} animate={{translateY: 0 , opacity :1}} transition={{ duration: 1.5 }} let:motion>
            <div class="store" use:motion>
                <StoreIcon />
            </div>
        </Motion>
    </div>
    <div class="laptop">
        <LaptopIcon />
        <Motion initial={{translateX : 50 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 0.9 }} let:motion>
            <div class="layoutLaptop" use:motion>
                <LayoutLaptopIcon />
            </div>
        </Motion>
        <Motion initial={{translateX : -50 , opacity:0}} animate={{translateX: 0 , opacity :1}} let:motion>
            <div class="textOne" use:motion>
                <TextOneIcon />
            </div>
        </Motion>
            <Motion initial={{translateX : -52 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 0.5 }} let:motion>
                <div class="textTwo" use:motion>
                    <TextTwoIcon />
                </div>
            </Motion>
            <Motion initial={{translateX : 54 , opacity:0}} animate={{translateX: 0 , opacity :1}} transition={{ duration: 0.7 }} let:motion>
                <div class="switch" use:motion>
                    <SwitchIcon />
                </div>
            </Motion>
            <Motion initial={{translateY : -56 , opacity:0}} animate={{translateY: 0 , opacity :1}} transition={{ duration: 0.7 }} let:motion>
                <div class="chart" use:motion>
                    <ChartIcon />
                </div>
            </Motion>
    </div>
    <div class="phone">
        <PhoneIcon />
            <Motion initial={{translateY : 28 , opacity:0}} animate={{translateY: 0 , opacity :1}} transition={{ duration: 0.88 }} let:motion>
                <div class="appPhone" use:motion>
                    <AppPhone />
                </div>
            </Motion>
            <Motion initial={{translateY : 28 , opacity:0}} animate={{translateY: 0 , opacity :1}} transition={{ duration: 1 }} let:motion>
                <div class="layoutPhoneOne" use:motion>
                   <LayoutPhoneIcon />
                </div>
            </Motion>
            <Motion initial={{translateY : 28 , opacity:0}} animate={{translateY: 0 , opacity :1}} transition={{ duration: 1.1 }} let:motion>
                <div class="layoutPhoneTwo" use:motion>
                    <LayoutPhoneIcon />
                </div>
            </Motion>
            <Motion initial={{translateY : 28 , opacity:0}} animate={{translateY: 0 , opacity :1}} transition={{ duration: 1.1 }} let:motion>
                <div class="textPhone" use:motion>
                    <TextPhoneIcon />
                </div>
            </Motion>
    </div>
</div>



<style>
    .boxAnim{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 710px;
        height: 600px;
        position: relative;
    }
    .laptop{
        width: 515px;
        height: 550px;
        display: flex;
        justify-content: flex-start;
        align-items: start;
        position: absolute;
        right: -3px;
        bottom: 2%;
    }
   .phone{
       width: 247px;
       height: 146px;
       display: flex;
       justify-content: center;
       align-items: center;
       position: absolute;
       right: 58%;
       bottom: 8%;
   }
    .app{
        width: 250px;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 64%;
        bottom: 43%;
    }
   .textOne{
       width: 21%;
       height: 14%;
       display: flex;
       justify-content: center;
       align-items: center;
       position: absolute;
       right: 38%;
       bottom: 100%;
   }
    .textTwo{
        width: 21%;
        height: 14%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 38%;
        bottom: 93%
    }

    .switch{
        width: 15%;
        height: 12%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 61%;
        bottom: 92%;
    }
    .chart{
        width: 32%;
        height: 37%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 65%;
        bottom: 40%;
    }

    .line{
        width: 200px;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 11%;
        bottom: 22%;
    }
    .layout{
        width: 240px;
        height: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 3%;
        bottom: 27%;
    }
    .store{
        width: 240px;
        height: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 3%;
        bottom: 39%;;
    }
    .appPhone{
        width: 44%;
        height: 39%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 45%;
        bottom: 54%;
    }
    .layoutPhoneOne{
        width: 44%;
        height: 39%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 45%;
        bottom: 50%;
    }
    .layoutPhoneTwo{
        width: 44%;
        height: 39%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 45%;
        bottom: 45%;
    }
    .textPhone{
        width: 48.5%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 13%;
        bottom: 4%;
    }
    .layoutLaptop{
        width: 56%;
        height: 67%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 7%;
        bottom: 29%;
    }
    @media screen and (max-width: 1024px){

        .phone{
            right: 78%;
        }
.app{
    right: 87%;
}
    }
    @media screen and (max-width: 432px) {
        .boxAnim{
            width: 100%;
            height: 100%;
        }
        .laptop{
            width: 252px;
            height: 275px;
            right: 0;
            bottom: 4%;
        }
        .app{
            width: 86px;
            height: 94px;
            bottom: 34%;
        }
        .line{
            width: 85px;
            height: 75px;
        }
        .layout{
            width: 85px;
            height: 75px;
        }
        .store{
            width: 85px;
            height: 75px;
        }
        .phone{
            width: 141px;
            height: 81px;
            bottom: 11%;
        }
    }
    @media screen and (max-width: 395px) {
        .boxAnim{
            width: 100%;
            height: 100%;
        }
        .laptop{
            width: 220px;
            height: 205px;
            right: 0;
            bottom: 4%;
        }
        .app{
            width: 95px;
            height: 85px;
            right: 64%;
            bottom: 34%;
        }
        .line{
            width: 85px;
            height: 75px;
        }
        .layout{
            width: 85px;
            height: 75px;
        }
        .store{
            width: 85px;
            height: 75px;
        }
       .phone{
           width: 122px;
           height: 80px;
           bottom: 8%;
           right: 55%;
       }
    }
</style>