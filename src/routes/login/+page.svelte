<script lang="ts">
    import type { ActionData } from "./$types";

    export let form: ActionData
</script>

<section>
    <p class="text-[32px] text-center mb-8">
        Login
    </p>

    <form action="?/login" method="POST">
        <label class="block mb-4 text-[16px]">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700">
                Username
            </span>
            <input type="text" name="username" id="username" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                placeholder="Insira um Username para realizar Login" />
        </label>

        <label class="block mb-4 text-[16px]">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700">
                Senha
            </span>
            <input type="text" name="password" id="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                placeholder="Insira a sua Senha" />
        </label>

        {#if form?.invalid}
            <p class="text-red-500"> {form.mensagem} </p>
        {/if}

        {#if form?.credentials}
            <p class="text-red-500"> {form.mensagem} </p>
        {/if}

        <button type="submit" class="bg-blue-500 text-sky-50 rounded-sm p-2">
            Login
        </button>
    </form>
</section>

<style>

</style>