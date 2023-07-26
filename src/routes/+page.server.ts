import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {

    async function getEntradaTotal() {
        const ag = await prisma.entrada.aggregate({_sum: {valor: true}});
        return Number(ag._sum.valor);
    }

    async function getSaidaTotal() {
        const ag = await prisma.saida.aggregate({_sum: {valor: true}});
        return Number(ag._sum.valor);
    }

    return {
        entrada: getEntradaTotal(), 
        saida: getSaidaTotal(),
    }
}