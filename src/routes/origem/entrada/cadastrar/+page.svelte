<script lang="ts">
	
</script>

<section class="text-[18px] text-center">
    <a href="/entrada">
        <button type="submit" class="bg-blue-500 text-sky-50 rounded-sm p-2 mb-4">
            Voltar
        </button>
    </a>
    <div class="mb-5">
        <p class="text-[28px]">
            Cadastro de Origem de Entrada
        </p>
    </div>
    <div class="flex justify-center">
        <form action="?/createOrigem" method="POST">
            <label class="block mb-4 text-[16px]">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700">
                    Nome
                </span>
                <input type="text" name="nome" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                    placeholder="Insira a Origem da Entrada" />
            </label>
        
            <button type="submit" class="bg-green-500 rounded-md text-sky-50 p-2 text-[16px]">
                Salvar
            </button>
        </form>
    </div>
</section>