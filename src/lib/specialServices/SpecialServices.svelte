<script>
    import IconSpecialServices from "../../icon/iconSpecialServices.svelte"
    import AnimSpecialServices from "$lib/specialServices/component/AnimSpecialServices.svelte";
    import {Motion} from "svelte-motion";
    let innerWidth = window.innerWidth;
</script>
<svelte:window bind:innerWidth />
<div class="specialServices">
    <div class="specialServicesHelp" />
    <div class="fixSpecialServices">
        <div class="boxSpecialServices">
            <h2 class="specialServicesTitle">خدمات ویژه</h2>
            <p class="specialServicesText">
                شرکت پرتو بیتا، یک شرکت دانش بنیان در حوزه فناوری اطلاعات است،
                <br />
                این شرکت از سال ۱۳۸۸ تاسیس شده و از ابتدا در صنعت طیور و مالی کشور مشغول به فعالیت است.
            </p>
        </div>
        <div class="specialServicesMain">
            <ul class="boxUl">
                <Motion
                        initial={{opacity: 0  , x: "-20vw"}}
                        animate={{opacity : 1 , x:0}}
                        transition={{ duration:  1.1 * 0.3 }}
                        let:motion
                >
                <li use:motion>
                    تولید سامانه های سفارشی
                </li>
                </Motion>
                <Motion
                        initial={{opacity: 0  , x: "-20vw"}}
                        animate={{opacity : 1 , x:0}}
                        transition={{ duration:  1.5 * 0.3 }}
                        let:motion
                >
                <li use:motion>
                    مشارکت در ایده های فناورانه در صنعت کشاورزی
                </li>
                </Motion>
            </ul>
            <div class="boxSpecialServicesAnim">
                <AnimSpecialServices />
            </div>
                <ul class="boxUl">
                    <Motion
                            initial={{opacity: 0  , x: "-20vw"}}
                            animate={{opacity : 1 , x:0}}
                            transition={{ duration:  1.1 * 0.4 }}
                            let:motion
                    >
                    <li use:motion>
                        مشاوره حوزه فناوری اطلاعات در صنعت کشاورزی
                    </li>
                    </Motion>
                    <Motion
                            initial={{opacity: 0  , x: "-20vw"}}
                            animate={{opacity : 1 , x:0}}
                            transition={{ duration:  1.5 * 0.4 }}
                            let:motion
                    >
                    <li use:motion>
                        ارائه اطلاعات تکمیلی در صنعت طیور کشور
                    </li>
                    </Motion>
                </ul>
        </div>
    </div>
</div>

<style>
    .specialServices{
        margin-top: 85px;
        width: 100%;
        height: calc(100% - 85px);
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: url("../../../static/background/specialServices.png") no-repeat right center;
        background-size: 85% 95%;
        background-origin: padding-box;
        position: relative;
        z-index: 100;
    }
    .fixSpecialServices{
        width: 100%;
        max-width: 1520px;
        height: 100%;
        padding: 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .specialServicesHelp{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-image: linear-gradient(to top, rgba(255, 255, 255, 0.3) 0%, #f8f9fc 100%);
        z-index: 1;
    }
    .boxSpecialServices{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        z-index: 100;
        margin-top: 10px;
    }
    .specialServicesTitle{
        font-size: var(--font30);
        color: var(--text-color);
        margin: 0;
        font-weight: bold;
        z-index: 100;
    }
    .specialServicesText{
        font-size: var(--font16);
        color: var(--text-color-again);
        margin: 15px 0 0 0;
        text-align: center;
        z-index: 100;
    }
    .specialServicesMain{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 100;
    }
    .boxUl{
        margin: 0;
        padding: 0;
        list-style: circle;
        z-index: 100;
    }
    .boxUl li {
        padding: 35px 0;
        z-index: 100;
    }
    .boxSpecialServicesAnim{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 470px;
        height: 470px;
    }
    @media screen and (max-width: 1024px ) {
        .boxSpecialServicesAnim{
            transform: scale(0.9);
        }
    }
    @media screen and (max-width: 900px) {
        .fixSpecialServices{
            justify-content: space-evenly;
        }
        .specialServicesMain{
            flex-direction: column;
            height: auto;
        }
        .leftLi{
            margin-right: 0;
        }
    }
    @media screen and (max-width: 480px){
        .specialServices{
            margin-top: 55px;
            height: calc(100vh - 55px);
        }
    }
    @media screen and (max-width: 432px) {
        .boxSpecialServicesAnim{
            transform: scale(1);
            width: 300px;
            height: 300px;
        }
        .boxUl li {
            padding: 10px 0;
        }
    }
</style>