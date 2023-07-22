<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
  	import AiOutlineNodeExpand from 'svelte-icons-pack/ai/AiOutlineNodeExpand';
</script>

<svelte:head>
	<title> Sistema de Controle de Gastos </title>
	<meta name="description" content="Sistema de Controle de Gastos" />
</svelte:head>

<section class="text-[22px]">

	<Icon src={AiOutlineNodeExpand} />

	<h1 class="text-[32px] text-sky-500 mb-8">
		Sistema de Controle de Gastos
	</h1>

	<div class="flex justify-center gap-4 mb-10">
		<a href="/entrada">
			<button type="button" class="bg-yellow-500 button-home text-sky-50 p-2 rounded-md flex justify-center items-center gap-2">
				<Icon src={AiOutlineNodeExpand} />
				Entradas
			</button>
		</a>

		<a href="/saida">
			<button type="button" class="bg-yellow-500 button-home text-sky-50 p-2 rounded-md flex justify-center items-center gap-2">
				<Icon src={AiOutlineNodeExpand} />
				Saídas
			</button>
		</a>										
	</div>

	<div class="flex flex-col gap-4">
		<div class="bg-sky-500 text-sky-50 rounded-sm p-2">
			<!-- icon -->
			<p>
				Total: R$ {Number(2700).toFixed(2).replace('.', ',')}
			</p>
		</div>

		<div class="bg-green-500 text-sky-50 rounded-sm p-2">
			<!-- icon -->
			<p>
				Entrada: R$ {Number(3700).toFixed(2).replace('.', ',')}
			</p>
		</div>

		<div class="bg-red-500 text-sky-50 rounded-sm p-2">
			<!-- icon -->
			<p>
				Saída: R$ {Number(1000).toFixed(2).replace('.', ',')}
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
</style>
