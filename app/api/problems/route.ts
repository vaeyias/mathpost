import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/client/client";
import { createProblemSchema } from "../../validationSchemas";
async function POST (request:NextRequest){
    const body = await request.json();
    const validation = createProblemSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, {status:400})
    const newProblem = await prisma.problem.create({
        data: {question: body.question, answer: body.answer}
    })

    return NextResponse.json(newProblem, { status:201});
}

async function DELETE (request:NextRequest){
    const body = await request.json();
    const deleteProblem = await prisma.problem.delete({
        where: {
          id:body.id,
        },})
    return NextResponse.json(deleteProblem);
}

export { POST, DELETE }
