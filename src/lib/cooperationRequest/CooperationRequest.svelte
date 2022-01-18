<script>
    import LisCooperationRequest from "$lib/cooperationRequest/component/LisCooperationRequest.svelte";
    let innerWidth = window.innerWidth;
</script>
<svelte:window bind:innerWidth />
<div class="cooperationRequest">
    <div class="fixCooperationRequest">
        <div class="boxCooperationRequest">
            <h2 class="boxCooperationRequestTitle">درخواست همکاری با ما</h2>
            <p class="boxCooperationRequestText">
                ما در شرکت پرتوبیتا محیطی گرم، صمیمی و پرشور با ایده های خلاقانه داریم. ممکنه شما هم بخواید به جمع ما بپیوندید، اگه این طوره روی تخصص خود کلیک کنید.
            </p>
        </div>
        <div class="boxCRItem">
            {#if innerWidth > 1100}
                <LisCooperationRequest title="مارکتینگ"  iconId="{1}" isMobile="{innerWidth > 480}" on:onCv />
                <LisCooperationRequest title="تیم محصول" iconId="{2}" isMobile="{innerWidth > 480}" on:onCv />
                <LisCooperationRequest title="پشتیبانی" iconId="{3}" isMobile="{innerWidth > 480}" on:onCv />
                <LisCooperationRequest title="اداری و مالی" iconId="{4}" isMobile="{innerWidth > 480}" on:onCv />
                <LisCooperationRequest title="تیم فنی" iconId="{5}" isMobile="{innerWidth > 480}" on:onCv />
                <LisCooperationRequest title="آموزش و رویداد" iconId="{6}" isMobile="{innerWidth > 480}" on:onCv />
            {:else }
                <LisCooperationRequest title="فرم در خواست همکاری"  iconId="{1}" isMobile="{innerWidth > 480}" on:onCv />
            {/if}

        </div>
    </div>
</div>

<style>
   .cooperationRequest{
       margin-top: 85px;
       width: 100%;
       height: calc(100% - 85px);
       padding: 15px;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: column;
       position: relative;
   }
   .fixCooperationRequest{
       width: 100%;
       max-width: 1520px;
       height: 100%;
       position: relative;
       display: flex;
       align-items: center;
       justify-content: space-around;
       flex-direction: column;
   }
   .boxCooperationRequest{
       display: flex;
       align-items: center;
       justify-content: flex-start;
       flex-direction: column;
       margin-bottom: 20px;
       width: 100%;
   }
   .boxCooperationRequestTitle{
       font-size: var(--font30);
       color: var(--text-color);
       text-align: center;
       font-weight: bold;
       margin: 0 0 10px;
   }
   .boxCooperationRequestText{
       width: 85%;
       text-align: center;
       font-size: var(--font18);
       color: var(--text-color-again);
       margin: 0;
   }
   .boxCRItem{
       max-width: 1300px;
       width: 98%;
       padding: 15px;
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
       align-items: center;
   }

   @media screen and (max-width: 480px){
       .boxCooperationRequestText{
           width: 100%;
       }
       .cooperationRequest{
           margin-top: 55px;
           height: calc(100vh - 55px);
       }
   }
</style>