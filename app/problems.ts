import { prisma } from '../prisma/client/client';
export const getProblems = async () => {
    await prisma.$connect();
    const problems = await prisma.problem.findMany();
    return {
        problems: { problems },
        revalidate:5
    }
}
