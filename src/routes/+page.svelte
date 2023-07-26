<script lang="ts">

	import type { PageData } from "./$types";
    export let data: PageData

    const { entrada, saida } : any = data
	const total = entrada - saida;
</script>	

<svelte:head>
	<title> Sistema de Controle de Gastos </title>
	<meta name="description" content="Sistema de Controle de Gastos" />
</svelte:head>

<section class="text-[22px]">

	<h1 class="text-[32px] text-sky-500 mb-8">
		Sistema de Controle de Gastos
	</h1>

	<div class="flex flex-col gap-4">
		<div class="bg-sky-500 text-sky-50 rounded-sm p-2">
			<p>
				Total: R$ {Number(total).toFixed(2).replace('.', ',')}
			</p>
		</div>

		<div class="bg-green-500 text-sky-50 rounded-sm p-2">
			<p>
				Entrada: R$ {Number(entrada).toFixed(2).replace('.', ',')}
			</p>
		</div>

		<div class="bg-red-500 text-sky-50 rounded-sm p-2">
			<p>
				Saída: R$ {Number(saida).toFixed(2).replace('.', ',')}
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
