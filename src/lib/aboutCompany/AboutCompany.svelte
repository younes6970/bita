<script>
    import Logo from "../../icon/logoTwo.svelte"
    import {DATA_ABOUT} from "$lib/aboutCompany/data";
    import AnimAboutCompany from "$lib/aboutCompany/component/AnimAboutCompany.svelte";
    import DescriptionAbout from "$lib/aboutCompany/component/DescriptionAbout.svelte";
    let innerWidth = window.innerWidth;

</script>
<svelte:window bind:innerWidth />
<div class="boxAbout">
    <div class="boxAboutHelp" />
    <div class="fixBoxAbout">
        <div class="boxAboutText">
            <div class="boxDescriptionAbout">
                <h2 class="textAbout">
                    <span class="text">
                        درباره شرکت
                    </span>
                    <Logo class="iconLogo" />
                </h2>
                <DescriptionAbout values={DATA_ABOUT} />
            </div>
        </div>
        <div class="boxAboutAnim">
            <AnimAboutCompany />
        </div>
    </div>
</div>

<style>

  .boxAbout{
      margin-top: 85px;
      width: 100%;
      height: calc(100% - 85px);
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(to top, rgba(255, 255, 255, 0.3) 0%, #f8f9fc 100%);
      position: relative;
  }
  .fixBoxAbout{
      width: 100%;
      max-width: 1520px;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .boxAboutHelp{
      position: absolute;
      padding: 0 0 45px 0;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: url("../../../static/background/about.png") no-repeat left center;
      background-size: 1189px 686px;
      background-origin: content-box;
  }
  .boxAboutAnim{
      width: 50%;
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
  }
  .boxAboutText{
      width: 100%;
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .boxDescriptionAbout{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      margin-top: 10px;
  }
  .textAbout{
      color: var(--text-color);
      font-size: var(--font30);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0;
  }
  .text{
      margin: 0 0 0 10px;
  }
    @media screen and (max-width: 1400px) {
        .boxDescriptionAbout{
            padding-right: 20px;
        }
    }
    @media screen and (max-width: 1024px) {


    }
  @media screen and (max-width: 1000px) {
      .fixBoxAbout{
          flex-direction: column;
      }
      .boxAboutText{
          justify-content: center;
      }
      .boxAboutAnim{
          width: 100%;
          justify-content: center;
          align-items: end;
      }
  }
    @media screen and (max-width: 480px){
        .boxAbout{
            margin-top: 55px;
            height: calc(100vh - 55px);
        }
    }
    @media screen and (max-width: 432px) {
        .boxDescriptionAbout{
            width: 100%;
        }
    }
</style>