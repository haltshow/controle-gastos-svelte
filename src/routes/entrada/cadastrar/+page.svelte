<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData

    $: ({origemEntrada} = data)
</script>

<section class="text-[18px] text-center">
    <div>
        <p class="text-[32px]">
            Cadastro de Entradas
        </p>
    </div>
    <div class="flex justify-center">
        <form action="?/createEntrada" method="POST">
            <label for="origem">Nome</label>
            <select name="origem" id="origem">
                {#each origemEntrada as origem}
                    <option value={origem.id}>{origem.nome}</option>
                {/each}
            </select>
        
        
            <label 
                for="valor"
                class="text-black block mb-2 text-sm font-medium"
            > 
                Valor 
            </label>
            <input type="text" name="valor" id="valor" class="bg-white rounded-lg border-gray text-black text-base w-full py-3.5 px-2.5">
            

            <button type="submit" class="bg-green-500 text-sky-50 rounded-sm p-2">
                Salvar
            </button>
        </form>
    </div>
</section>