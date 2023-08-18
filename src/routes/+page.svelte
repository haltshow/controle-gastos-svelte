<script lang="ts">
	import 'iconify-icon';
	import type { PageData } from "./$types";
    export let data: PageData

    const { entrada, saida, entradasByOrigem, saidasByOrigem } : any = data
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
		<div class="bg-sky-500 text-sky-50 rounded-sm p-2 flex justify-center items-center gap-2">
			<iconify-icon icon="dashicons:money"></iconify-icon>
			<p>
				Total: R$ {Number(total).toFixed(2).replace('.', ',')}
			</p>
		</div>

		<div class="bg-green-500 text-sky-50 rounded-sm p-2 flex justify-center items-center gap-2">
			<iconify-icon icon="ph:plus-fill"></iconify-icon>
			<p>
				Entrada: R$ {Number(entrada).toFixed(2).replace('.', ',')}
			</p>
		</div>

		<div class="bg-red-500 text-sky-50 rounded-sm p-2 flex justify-center items-center gap-2">
			<iconify-icon icon="ph:minus-fill"></iconify-icon>
			<p>
				Saída: R$ {Number(saida).toFixed(2).replace('.', ',')}
			</p>
		</div>
	</div>

	<div class="mt-8">
		<p class="text-[20px] mt-8 mb-4">
			Valor Total das Entradas por Origem
		</p>
		<table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 shadow-md shadow-blue-300">
			<thead class="bg-gray-100 dark:bg-gray-700 text-[14px] font-semibold">
				<tr>
					<th scope="col" class="py-3 px-6 tracking-wider text-gray-700 uppercase dark:text-gray-400">
						Descrição
					</th>
					<th scope="col" class="py-3 px-6 tracking-wider text-gray-700 uppercase dark:text-gray-400">
						Valor
					</th>
				</tr>
			</thead>
			<tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 text-[14px]">
				{#each entradasByOrigem as entrada}
					<tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
						<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{entrada.origem ? entrada.origem : ''}</td>
						<td class="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">R$ {entrada._sum.valor.toFixed(2)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="mt-8">
		<p class="text-[20px] mt-8 mb-4">
			Valor Total das Saidas por Origem
		</p>
		<table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 shadow-md shadow-blue-300">
			<thead class="bg-gray-100 dark:bg-gray-700 text-[14px] font-semibold">
				<tr>
					<th scope="col" class="py-3 px-6 tracking-wider text-gray-700 uppercase dark:text-gray-400">
						Descrição
					</th>
					<th scope="col" class="py-3 px-6 tracking-wider text-gray-700 uppercase dark:text-gray-400">
						Valor
					</th>
				</tr>
			</thead>
			<tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 text-[14px]">
				{#each saidasByOrigem as saida}
					<tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
						<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{saida.origem ? saida.origem : ''}</td>
						<td class="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">R$ {saida._sum.valor.toFixed(2)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
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
