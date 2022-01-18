<script>
import {createEventDispatcher} from "svelte";
import Grid from "svelte-grid-responsive"
import {createForm} from "svelte-forms-lib"
import {DATA_DAY, DATA_MONTH, DATA_YEAR} from "$lib/cooperationRequest/data";
import FileUpload from "../../../icon/fileUplod.svelte"
import * as yup from "yup"
const dispatch = createEventDispatcher()
const {form, handleChange , handleSubmit ,errors} = createForm({
   initialValues:{
      name: "",
      nationalCode: "",
      phoneNumber: "",
      // dateOfBirth: "",
      email: "",
      cooperation: "",
      cv: "",
      day: "",
      months: "",
      year: ""
   },
   validationSchema: yup.object().shape({
      name: yup.string().required("این فیلد الزامی است."),
      nationalCode: yup.string().required("این فیلد الزامی است."),
      phoneNumber:yup.string().required("این فیلد الزامی است."),
      email: yup.string().email("ایمیل نادرست است.").required("این فیلد الزامی است."),
      day: yup.string().required("این فیلد الزامی است."),
      months: yup.string().required("این فیلد الزامی است."),
      year: yup.string().required("این فیلد الزامی است.")
   }),
   onSubmit:values => {
      console.log("values is" , values)
   }
})
const handleModal = () =>{
    dispatch("onModal")
}
let activeBtn = null
export let isMobile
const handleBtn = (e) =>{
   activeBtn = activeBtn === e ? null : e
}
let innerWidth = window.innerWidth;
</script>
<svelte:window bind:innerWidth />
<div class="backdrop">
   <h2>در خواست همکاری با ما</h2>
<form on:submit={handleSubmit}>
   {#if innerWidth > 480}
      <Grid container gutter="{12}">
         <Grid>
            <div class="boxGrid">
               <label for="name">
                  نام و نام خانوادگی
                  <span>*</span>
               </label>
               <input
                       id="name"
                       name="name"
                       on:change={handleChange}
                       bind:value={$form.name}
               />
               {#if $errors.name}
                  <small>{$errors.name}</small>
               {/if}
            </div>
         </Grid>
         <Grid>
            <div class="boxGrid">
               <label for="nationalCode">
                  کد ملی
                  <span>*</span>
               </label>
               <input
                       id="nationalCode"
                       name="nationalCode"
                       on:change={handleChange}
                       bind:value={$form.nationalCode}
               />
               {#if $errors.nationalCode}
                  <small>{$errors.nationalCode}</small>
               {/if}
            </div>
         </Grid>
         <Grid>
            <div class="boxGrid">
               <label for="phoneNumber">
                  شماره همراه
                  <span>*</span>
               </label>
               <input
                       id="phoneNumber"
                       name="phoneNumber"
                       on:change={handleChange}
                       bind:value={$form.phoneNumber}
               />
               {#if $errors.phoneNumber}
                  <small>{$errors.phoneNumber}</small>
               {/if}
            </div>
         </Grid>
      </Grid>
      <Grid container gutter="{12}">
         <Grid>
            <div class="boxGrid">
               <label>تاریخ تولد
                  <span>*</span>
               </label>
               <div class="boxSelect">

                  <select
                          name="day"
                          id="day"
                          on:change={handleChange}
                          bind:value={$form.day}
                          class="two"
                  >
                     {#each DATA_DAY() as day  ,i}
                        <option>{day}</option>
                     {/each}
                  </select>


                  <select
                          name="months"
                          id="months"
                          on:change={handleChange}
                          bind:value={$form.months}
                          class="one"
                  >
                     {#each DATA_MONTH as month (month.id)}
                        <option>{month.title}</option>
                     {/each}
                  </select>


                  <select
                          name="year"
                          id="year"
                          on:change={handleChange}
                          bind:value={$form.year}
                          class="two"
                  >
                     {#each DATA_YEAR(1380) as x , i}
                        <option>{x}</option>
                     {/each}
                  </select>

               </div>
               {#if $errors.day || $errors.months || $errors.year}
                  <small>این فیلد الزامی است.</small>
               {/if}
            </div>
         </Grid>
         <Grid>
            <div class="boxGrid">
               <label for="email">پست الکتریکی
                  <span>*</span>
               </label>
               <input
                       id="email"
                       name="email"
                       on:change={handleChange}
                       bind:value={$form.email}
               />
               {#if $errors.email}
                  <small>{$errors.email}</small>
               {/if}
            </div>
         </Grid>
         <Grid>
            <div class="boxGrid">
               <label>نحوه همکاری</label>
               <div class="boxBtn">
                  <button on:click={()=>handleBtn(1)} class:active={activeBtn === 1}>تمام وقت</button>
                  <button on:click={()=>handleBtn(2)} class:active={activeBtn === 2}>نیمه وقت</button>
                  <button on:click={()=>handleBtn(3)} class:active={activeBtn === 3}>پروژه ای</button>
               </div>
            </div>
         </Grid>
      </Grid>
      <Grid container gutter="{12}">
         <div class="boxCv">
            <label>
               فایل رزومه
               <span>*</span>
            </label>
            <div class="btnCv">
               <FileUpload />
               <span>انتخاب فایل رزومه</span>
               <input type="file" accept="application/pdf,application/vnd.ms-excel" />
            </div>

         </div>
      </Grid>
      <div class="boxBtnSent">
         <button type="submit">ارسال درخواست</button>
      </div>
      {:else }
      <Grid container gutter="{12}">
         <Grid>
            <div class="boxGrid">
               <label for="nameM">
                  نام و نام خانوادگی
                  <span>*</span>
               </label>
               <input
                       id="nameM"
                       name="name"
                       on:change={handleChange}
                       bind:value={$form.name}
               />
               {#if $errors.name}
                  <small>{$errors.name}</small>
               {/if}
            </div>
         </Grid>
      </Grid>
      <Grid container gutter="{12}">
         <Grid>
            <div class="boxGrid">
               <label for="nationalCodeM">
                  کد ملی
                  <span>*</span>
               </label>
               <input
                       id="nationalCodeM"
                       name="nationalCode"
                       on:change={handleChange}
                       bind:value={$form.nationalCode}
               />
               {#if $errors.nationalCode}
                  <small>{$errors.nationalCode}</small>
               {/if}
            </div>
         </Grid>
      </Grid>
      <Grid container gutter="{12}">
         <Grid>
            <div class="boxGrid">
               <label for="phoneNumberM">
                  شماره همراه
                  <span>*</span>
               </label>
               <input
                       id="phoneNumberM"
                       name="phoneNumber"
                       on:change={handleChange}
                       bind:value={$form.phoneNumber}
               />
               {#if $errors.phoneNumber}
                  <small>{$errors.phoneNumber}</small>
               {/if}
            </div>
         </Grid>
      </Grid>
      <Grid container gutter="{12}">
         <Grid>
            <div class="boxGrid">
               <label for="emailM">پست الکتریکی
                  <span>*</span>
               </label>
               <input
                       id="emailM"
                       name="email"
                       on:change={handleChange}
                       bind:value={$form.email}
               />
               {#if $errors.email}
                  <small>{$errors.email}</small>
               {/if}
            </div>
         </Grid>
      </Grid>
      <Grid container gutter="{12}">
         <Grid>
            <div class="boxGrid">
               <label>تاریخ تولد
                  <span>*</span>
               </label>
               <div class="boxSelect">

                  <select
                          name="day"
                          id="dayM"
                          on:change={handleChange}
                          bind:value={$form.day}
                          class="two"
                  >
                     {#each DATA_DAY() as day  ,i}
                        <option>{day}</option>
                     {/each}
                  </select>


                  <select
                          name="months"
                          id="monthsM"
                          on:change={handleChange}
                          bind:value={$form.months}
                          class="one"
                  >
                     {#each DATA_MONTH as month (month.id)}
                        <option>{month.title}</option>
                     {/each}
                  </select>


                  <select
                          name="year"
                          id="yearM"
                          on:change={handleChange}
                          bind:value={$form.year}
                          class="two"
                  >
                     {#each DATA_YEAR(1380) as x , i}
                        <option>{x}</option>
                     {/each}
                  </select>

               </div>
               {#if $errors.day || $errors.months || $errors.year}
                  <small>این فیلد الزامی است.</small>
               {/if}
            </div>
         </Grid>
      </Grid>
      <Grid container gutter="{12}">
         <Grid>
            <div class="boxGrid">
               <label>نحوه همکاری</label>
               <div class="boxBtn">
                  <button on:click={()=>handleBtn(1)} class:active={activeBtn === 1}>تمام وقت</button>
                  <button on:click={()=>handleBtn(2)} class:active={activeBtn === 2}>نیمه وقت</button>
                  <button on:click={()=>handleBtn(3)} class:active={activeBtn === 3}>پروژه ای</button>
               </div>
            </div>
         </Grid>
      </Grid>
      <Grid container gutter="{12}">
         <div class="boxCv">
            <label>
               فایل رزومه
               <span>*</span>
            </label>
            <div class="btnCv">
               <FileUpload />
               <span>انتخاب فایل رزومه</span>
               <input type="file" accept="application/pdf,application/vnd.ms-excel" />
            </div>

         </div>
      </Grid>
      <div class="boxBtnSent">
         <button type="submit">ارسال درخواست</button>
      </div>
      {/if}
</form>
</div>

<style>
    .backdrop{

       width: 100%;
       height: calc(100vh - 55px);
       max-width: 1520px;
       padding: 10px;
    }
    .boxGrid{
       display: flex;
       flex-direction: column;
       justify-content: flex-start;
       align-items:  start;
       width: 100%;
       position: relative;
       margin-bottom: 23px;
    }
    .boxGrid > small {
       color: #ee5a66;
       position: absolute;
       bottom: -25px;
    }
    .boxGrid > label {
       font-size: var(--font18);
       color: var(--text-color-again);
       font-weight: bold;
       margin: 0 0 20px;
       width: 100%;
    }
    .boxGrid > label > span {
       color: #ee5a66;
       margin: 0 2px 8px;
    }
    .boxGrid > input {
       border: none;
       outline: none;
       border-radius: 5px;
       padding: 10px;
       font-size: var(--font18);
       background-color: #f5f5f5;
       color: var(--text-color-again);
       width: 100%;
    }
    .boxSelect{
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: space-between;
    }
    .boxSelect select{
       border-radius: 5px;
       border: none;
       outline: none;
       background-color: #f5f5f5;
       color: var(--text-color-again);
       padding: 10px 0;
       font-size: var(--font18);
    }
    .two{
       flex: 1;
    }
    .one{
       flex: 2;
       margin: 0 8px;
    }
    .boxBtn{
       display: flex;
       justify-content: space-between;
       align-items: center;
       width: 100%;
    }
    .boxBtn button{
       flex: 1;
       background-color: #f5f5f5;
       color: var(--text-color-again);
       padding: 10px;
       display: flex;
       justify-content: center;
       align-items: center;
       border: 1px solid var(--text-color-again);
       cursor: pointer;
    }
    .boxBtn button:first-child{
       border-radius: 0 5px 5px 0;
    }
    .boxBtn button:last-child{
       border-radius: 5px 0 0 5px;
    }
    .active{
       background-color: var(--text-blue) !important;
       color: #fff !important;
    }
    .boxCv{
       width: 250px;
       display: flex;
       flex-direction: column;
       justify-content: flex-start;
       align-items: start;
    }
    .boxCv > label {
       font-size: var(--font18);
       color: var(--text-color-again);
       font-weight: bold;
       margin: 0 0 20px;
       width: 100%;
    }
    .boxCv > label > span {
       color: #ee5a66;
       margin: 0 2px 8px;
    }
    .btnCv{
       width: 100%;
       background-color: #f5f5f5;
       color: var(--text-color-again);
       font-size: var(--font18);
       padding: 10px;
       border-radius: 5px;
       position: relative;
       display: flex;
       justify-content: space-evenly;
       align-items: center;
       z-index: 10;
    }
    .btnCv > input{
       position: absolute;
       top: 0;
       bottom: 0;
       right: 0;
       left: 0;
       opacity: 0;
       z-index: 100;
       cursor: pointer;
    }
    .boxBtnSent{
       width: 100%;
       display: flex;
       justify-content: flex-end;
       align-items: center;
       margin: 30px 0 60px;
    }
    .boxBtnSent button{
       padding: 15px 45px;
       background-color: var(--text-blue);
       color: #fff;
       font-size: var(--font18);
       border: none;
       outline: none;
       border-radius: 5px;
       cursor: pointer;
    }
    @media screen and (max-width: 480px) {
       .boxGrid{
          margin-bottom: 20px;
       }

    }
</style>