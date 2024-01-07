
import React from 'react'
import { prisma } from '../../prisma/client/client';
import ProblemCard from '../components/ProblemCard';
import { getProblems } from '../problems';
export const revalidate = 0;

const solvePage = async () => {
  await prisma.$connect();
  const problems = (await getProblems()).problems.problems;

  // const handleDelete = async (id:number) => {
  //   console.log("deleting");
  //   prisma.problem.delete
  //   const deleteProblem = await prisma.problem.delete({
  //     where: {
  //       id:id,
  //     },
  //   })

  // };

//   useEffect(() => {
//     let handler = () => {
//       if (reload){
//         setReload(false);
//       }
//       else{
//         setReload(true);
//       }
//     };

//     document.addEventListener("mousedown", handler);

//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   });

  return (

    <div className='flex justify-center flex-wrap'>
      {problems.map((problem) => (
            <ProblemCard key={problem.id} id={problem.id} question={problem.question} answer={problem.answer}/>
          ))}

    </div>
  )
}

export default solvePage
