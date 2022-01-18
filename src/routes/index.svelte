<script context="module">
	export const prerender = true;
</script>

<script>
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { Fullpage, FullpageSection } from 'svelte-fullpage'
	import Header from "../lib/header/Header.svelte";
	import Product from "../lib/product/Product.svelte";
	import AboutCompany from "../lib/aboutCompany/AboutCompany.svelte";
	import SpecialServices from "../lib/specialServices/SpecialServices.svelte";
	import Background from "../lib/background/Background.svelte";
	import CooperationRequest from "../lib/cooperationRequest/CooperationRequest.svelte";
	import Managers from "../lib/managers/Managers.svelte";
	import Sidebar from "../lib/header/component/Sidebar.svelte";
	import {DATA_HEADER} from "../lib/header/data";
	import Modal from "../lib/cooperationRequest/component/Modal.svelte";

	let num = 0
	let open = false
	const sections = [
		'Product',
		'AboutCompany',
		'SpecialServices',
		"Background",
		"CooperationRequest",
		"Managers"
	];
	let isCv = false
	const setActiveSection = (e) => {
		const {detail : {sectionNumber }} = e
		num = sectionNumber
		isCv = false
	}
	const handleClickScroll = (e) =>{
		const {detail : {number}} = e
		num = number
	}
	let scrolled = true
	const handleWheel = (e)=>{
		if(scrolled === true){
			scrolled = false
			const isUp = e.wheelDelta > 0
			if(isUp){
					num--
					num = num >= 0 && num <= 5 ? num-- : 0
				setTimeout(()=>{
					scrolled = true
				},300)
			}else {
					num++
					num = num >= 0 && num <= 5 ? num++ : 5
				setTimeout(()=>{
					scrolled = true
				},300)
			}
		}

	}

	const handleCv = () => {
	  isCv = true
	}
</script>

<svelte:head>
	<title>Parto Bita | پرتوبیتا</title>
</svelte:head>
<svelte:window on:wheel={handleWheel} />
<Sidebar bind:open values="{DATA_HEADER}" num="{num}" on:clickActive="{setActiveSection}"/>
<header>
	<Header on:clickActive="{setActiveSection}" num="{num}" bind:sidebar={open}  />
</header>
<main>
<section>
	{#if !isCv}
		<Fullpage {sections}   activeSection="{num}" drag="{true}" pullDownToRefresh="{true}">
			<FullpageSection center >
				<Product on:onScroll={handleClickScroll} />
			</FullpageSection>
			<FullpageSection center>
				<AboutCompany />
			</FullpageSection>
			<FullpageSection center>
				<SpecialServices />
			</FullpageSection>
			<FullpageSection center>
				<Background />
			</FullpageSection>
			<FullpageSection center>
				<CooperationRequest on:onCv={handleCv} />
			</FullpageSection>
			<FullpageSection center>
				<Managers />
			</FullpageSection>
		</Fullpage>
	{:else }
		<Modal />
	{/if}

</section>
</main>

<style>
	header{
		width: 100%;
		height: 85px;
		position: fixed;
		z-index: 1000;
		top: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow:  0 3px 6px 0 rgba(0, 0, 0, 0.16);
		background-color: var(--bg-main);
	}
	main{
		margin-top: 85px;
		width: 100%;
		height: calc(100vh - 85px);
		z-index: 100;
	}
	section{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	footer{
		height: 50px;
		width: 100%;
		background-color: #007fff;
	}
	@media screen and (max-width: 480px){
		header{
			height: 55px;
		}
		main{
			margin-top: 55px;
			height: calc(100vh - 55px);
		}
	}
</style>
