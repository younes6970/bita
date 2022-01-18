<script>
    import ListManagers from "$lib/managers/component/ListManagers.svelte";
    import Footer from "$lib/Footer.svelte";
</script>
<div class="main">
    <div class="managers">
        <div class="fixManagers">
            <div class="boxManagers">
                <h2 class="boxManagersTitle">مدیران</h2>
            </div>
            <div class="boxManagersImg">
                <ListManagers name="مهندس مهدی عاطفی" src='mrAtefiMahdi' description="هم بنیان گذار و نائب رئیس هیئت مدیره و معاون مالی"/>
                <ListManagers name="مهندس حامد عاطفی" src="mrAtefiHamed"  description="هم بنیان گذار و مدیر عامل و عضو هیئت مدیره"/>
                <ListManagers name="مهندس طاها الله وردی" src="mrAllahverdiTaha" description="هم بنیان گذار و رئیس هیئت مدیره و معاون مارکتینگ"/>
            </div>
        </div>
    </div>
    <footer>
        <div class="boxFooter">
            <div class="boxFooterContextX">
                <div class="boxFooterContext">
                     <Footer context="تلفن :  66902342 -- 66900564 (021)" isPhone />
                    <Footer context="ایمیل : info@partobita.com" />
                </div>
            </div>
            <Footer context="ادرس شرکت : خیابان آزادی-خیابان اسکندری شمالی-پلاک 21-طبقه پنجم -واحد 10" isAddress />

<!--            <p class="textFooter">-->
<!--            </p>-->
        </div>
    </footer>
</div>
<style>
    .main{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .managers{
        margin-top: 85px;
        width: 100%;
        height: calc(100% - 135px);
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .fixManagers{
        width: 100%;
        max-width: 1520px;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        padding: 35px 10px;
    }
    .boxManagers{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
    }
    .boxManagersTitle{
        font-size: var(--font30);
        color: var(--text-color);
        font-weight: bold;
        text-align: center;
        margin: 0 0 20px;
    }
    .boxManagersImg{
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    footer{
        width: 100%;
        background-color: var(--text-blue);
        display: flex;
        justify-content: center;
        height: 50px;
    }
    .boxFooter{
        width: 100%;
        max-width: 1520px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        padding: 0 20px;
    }
    .boxFooterContextX{
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
    }
    .boxFooterContext{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /*margin-bottom: 10px;*/
    }
    .textFooter{
        font-size:var(--font14);
        color: #fff;
        margin: 0;
    }
    @media screen and (max-width: 1400px) {
        .boxManagersImg{
            justify-content: space-around;
            flex-wrap: wrap;
        }
    }
    @media screen and (max-width: 1000px) {

        .boxFooter{
            flex-direction: column;
            justify-content: space-around;
        }
        footer{
            height: 80px;
        }
        .managers{
            height: calc(100% - 160px);

        }
    }
    @media screen and (max-width: 480px) {
        .boxFooterContext{
            width: 100%;
            justify-content: space-between;
        }
        .fixManagers{
            padding: 0;
        }
        .boxManagers{
            margin-top: 0;
        }
        .managers{
            margin-top: 55px;
            height: 100%;
        }
    }
</style>