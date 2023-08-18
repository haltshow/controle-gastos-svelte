<script lang="ts">
    export let status = ''
    export let mensagem = ''

    let showToast = true
</script>

<div>
    {#if showToast}
        {#if status == 'success'}
            <div class="bg-green-500 text-white rounded-md p-2 absolute top-10 left-[50%] translate-x-[-50%] flex justify-center items-center gap-2">
                <button on:click={() => {showToast=false}} class="bg-white text-black rounded-full px-1.5 py-0 text-[14px]">x</button>
                <p class="text-[16px]">{mensagem}</p>
            </div>
        {/if}
    {/if}
    
</div>

<style>

</style>