import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";
import { redirect } from "@sveltejs/kit";
import { goto } from '$app/navigation';

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user) {
        goto('/login');
    }
    async function getEntradaTotal() {
        const ag = await prisma.entrada.aggregate({
            _sum: {valor: true}, 
            where: {
                idUser: locals.user.id
            }
        });
        return Number(ag._sum.valor);
    }

    async function getSaidaTotal() {
        const ag = await prisma.saida.aggregate({
            _sum: {valor: true},
            where: {
                idUser: locals.user.id
            }
        });
        return Number(ag._sum.valor);
    }

    async function sumEntradaGroupByOrigem() {
        let res = await prisma.entrada.groupBy({
            by: ['idOrigem'],
            _sum: {
                valor: true,
            },
            where: {
                idUser: locals.user.id
            }
        });

        const data = await Promise.all(res.map(async (r) => {
            const origem = await prisma.origemEntrada.findFirst({where: {id: Number(r.idOrigem)}});
            return {...r, origem: origem?.nome};
        }));

        return data;
    }

    async function sumSaidaGroupByOrigem() {
        let res = await prisma.saida.groupBy({
            by: ['idOrigem'],
            _sum: {
                valor: true,
            },
            where: {
                idUser: locals.user.id
            }
        });

        const data = await Promise.all(res.map(async (r) => {
            const origem = await prisma.origemSaida.findFirst({where: {id: Number(r.idOrigem)}});
            return {...r, origem: origem?.nome};
        }));

        return data;
    }

    return {
        entrada: getEntradaTotal(), 
        saida: getSaidaTotal(),
        entradasByOrigem: sumEntradaGroupByOrigem(),
        saidasByOrigem: sumSaidaGroupByOrigem(),
    }
}