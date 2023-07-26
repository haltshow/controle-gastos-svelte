<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData

    $: ({entrada, origemEntrada} = data)
</script>

<section class="text-[18px] text-center">
    <a href="/entrada">
        <button type="submit" class="bg-blue-500 text-sky-50 rounded-sm p-2 mb-4">
            Voltar
        </button>
    </a>
    <div>
        <p class="text-[32px] mb-8">
            Editar Entrada
        </p>
    </div>
    <div class="flex justify-center">
        <form action="?/editEntrada" method="POST">

            <label class="block mb-4 text-[16px]">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700">
                    Origem
                </span>
                <select name="origem" id="origem" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {#each origemEntrada as origem}
                        {#if origem.nome == entrada.origem?.nome}
                            <option value={origem.id} selected>{origem.nome}</option>
                        {:else}
                            <option value={origem.id}>{origem.nome}</option>
                        {/if}
                    {/each}
                </select>
            </label>
            
            <label class="block mb-4 text-[16px]">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700">
                    Valor
                </span>
                <input type="text" name="valor" id="valor" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                    placeholder="Insira a Origem da Entrada"
                    value={entrada.valor} />
            </label>

            <button type="submit" class="bg-green-500 text-sky-50 rounded-sm p-2">
                Salvar
            </button>
        </form>
    </div>
</section>