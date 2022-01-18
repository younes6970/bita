<script>
	import Hamburger from "$lib/header/component/Hamburger.svelte";

	export let num
	export let sidebar = false
	import LogoIcon from "../../icon/logoIcon.svelte"
	import PhoneIcon from "../../icon/phoneIcon.svelte"
	import {DATA_HEADER} from "$lib/header/data";
	import {createEventDispatcher} from "svelte"

	const dispatch = createEventDispatcher()
	const handleClick = (activeSection ) =>{
		dispatch("clickActive" , {
			sectionNumber : activeSection
		})
	}
</script>

	<nav>
		<div class="boxBurger">
			<Hamburger bind:open={sidebar}  />
		</div>
		<ul class="boxMenu">
			<li class="boxItemMenuLogo">
				<LogoIcon />
			</li>
			{#each DATA_HEADER as header (header.id)}
				<li class="boxItemMenu"><button class:active={(header.id - 1)  === num} on:click={()=>handleClick(header.id - 1)} sveltekit:prefetch>{header.title}</button></li>
			{/each}
		</ul>
		<button class="btnContactUs" on:click={()=>handleClick(5)}>
			<PhoneIcon />
			<span class="textBtn">
				تماس با ما
			</span>
		</button>
	</nav>


<style>
	.boxBurger{
		width: 100px;
		height: 100%;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		display: none;
	}
	nav{
		width: 100%;
		max-width: 1520px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		padding: 0 10px;
	}
	.active{
		color: var(--text-blue) !important;
		border-bottom: 1px solid var(--text-blue) !important;
	}
	.boxMenu{
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.boxItemMenuLogo{
		margin-left: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.boxItemMenu{
		margin:0;
		color: var(--text-color);
		font: var(--font16);
	}
	.boxItemMenu button{
		background: none;
		border: none;
		outline: none;
		margin: 0;
		cursor: pointer;
		padding: 6px 15px;
	}
	.btnContactUs{
		outline: none;
		background-color: var(--bg-main);
		color : var(--text-blue);
		border: 1px solid var(--color-border);
		font-size: var(--font14);
		padding:6px 14px;
		border-radius: 5px;
		cursor: pointer;
	}
	.textBtn{
		margin-right: 7px;
	}
	@media screen and (max-width: 1020px) {
		.boxMenu{
			display: none;
		}
		.boxBurger{
			display: flex;
		}
	}
</style>
