<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Icon from 'svelte-icons-pack/Icon.svelte';
  	import AiOutlineNodeExpand from 'svelte-icons-pack/ai/AiOutlineNodeExpand';
</script>

<svelte:head>
	<title> Sistema de Controle de Gastos </title>
	<meta name="description" content="Sistema de Controle de Gastos" />
</svelte:head>

<section class="text-[22px]">

	<Icon src={AiOutlineNodeExpand} />

	<!-- <span class="welcome">
		<picture>
			<source srcset={welcome} type="image/webp" />
			<img src={welcome_fallback} alt="Welcome" />
		</picture>
	</span> -->


	
	<!-- <Counter /> -->

	<h1 class="text-[32px] text-sky-500 mb-10">
		Sistema de Controle de Gastos
	</h1>

	<div class="flex flex-col gap-4 mb-10">
		<a href="/entrada">
			<button type="button" class="bg-yellow-500 button-home text-sky-50 p-2 rounded-md flex justify-center gap-2">
				<Icon src={AiOutlineNodeExpand} />
				Cadastrar Nova Entrada
			</button>
		</a>

		<a href="/saida">
			<button type="button" class="bg-yellow-500 button-home text-sky-50 p-2 rounded-md flex justify-center gap-2">
				<Icon src={AiOutlineNodeExpand} />
				Cadastrar Nova Saída
			</button>
		</a>										
	</div>

	<div class="flex flex-col gap-4">
		<div class="bg-sky-500 text-sky-50 rounded-sm p-2">
			<!-- icon -->
			<p>
				Total: R$ 1700,00
			</p>
		</div>

		<div class="bg-green-500 text-sky-50 rounded-sm p-2">
			<!-- icon -->
			<p>
				Entrada: R$ 3700,00
			</p>
		</div>

		<div class="bg-red-500 text-sky-50 rounded-sm p-2">
			<!-- icon -->
			<p>
				Saída: R$ 1000,00
			</p>
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	/* .welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
