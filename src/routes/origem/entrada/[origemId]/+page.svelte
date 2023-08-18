<script lang="ts">
	import type { PageData } from "./$types";
    import type { ActionData } from "./$types";
    import Toast from '../../../../components/Toast.svelte';

    export let data: PageData
    export let form: ActionData

    $: ({origemEntrada} = data)
</script>

<section class="text-[18px] text-center">
    <a href="/origem/entrada">
        <button type="submit" class="bg-blue-500 text-sky-50 rounded-sm p-2 mb-4">
            Voltar
        </button>
    </a>
    <div>
        <p class="text-[32px] mb-8">
            Editar Origem Entrada
        </p>
    </div>
    <div class="flex justify-center">
        <form action="?/editOrigem" method="POST">

            <label class="block mb-4 text-[16px]">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700">
                    Nome
                </span>
                <input name="origem" id="origem" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" value={origemEntrada.nome} />
            </label>

            <button type="submit" class="bg-green-500 text-sky-50 rounded-sm p-2">
                Salvar
            </button>
        </form>
    </div>

    {#if form?.success } 
        <Toast status="success" mensagem="Origem Entrada editada com sucesso!"></Toast>
    {/if}
</section>