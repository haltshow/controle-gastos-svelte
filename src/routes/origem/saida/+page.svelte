<script lang="ts">
	import type { PageData } from "./$types";
    export let data: PageData

    const { origens } : any = data
</script>   

<section class="text-[22px] text-center">
    <div class="mb-10">
        <p class="text-[32px]"> Origem Saida </p>
    </div>
    <div class="flex justify-start gap-4 mb-4">
		<a href="/origem/saida/cadastrar">
			<button type="button" class="bg-green-500 text-sky-50 text-[16px] p-2 rounded-md flex justify-center items-center gap-2">
				Cadastrar Origem Saida
			</button>
		</a>										
	</div>
    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
        <thead class="bg-gray-100 dark:bg-gray-700">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                    Descrição
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                    Dt. Registro
                </th>
                <th scope="col" colspan="2" class="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                    Ações
                </th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {#each origens as origem}
                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{origem.nome}</td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {(origem.createdAt.getDate() < 10 ? '0' + origem.createdAt.getDate() : origem.createdAt.getDate()) + '/' + 
                        (origem.createdAt.getMonth() < 10 ? '0' + origem.createdAt.getMonth() : origem.createdAt.getMonth()) + '/' + 
                        (origem.createdAt.getFullYear())}
                    </td>
                    <td class="py-2 px-3 text-sm font-medium text-right whitespace-nowrap">
                        <a href="/origem/saida/{origem.id}"> <button class="text-blue-600 outline outline-1 rounded-md p-1"> Editar </button> </a>
                    </td>
                    <td class="py-2 px-3 text-sm font-medium text-right whitespace-nowrap">
                        <form action="?/deleteOrigem&id={origem.id}" method="POST">
                            <button type="submit" class="text-red-600 outline outline-1 rounded-md p-1">Excluir</button>
                        </form>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</section>