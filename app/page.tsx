
'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router=useRouter();
  return (

    <div className="flex items-center align-middle justify-center space-x-32 mt-11">
      <button className="h-96 w-80 bg-amber-500 rounded-3xl outline outline-8 outline-amber-400 hover:outline-yellow-300 hover:bg-yellow-500 text-3xl text-white" onClick={()=>router.push('\solve')}> Solve Problems </button>
      <button className="h-96 w-80 bg-amber-500 rounded-3xl outline outline-8 outline-amber-400 hover:outline-yellow-300 hover:bg-yellow-500 text-3xl text-white" onClick={()=>router.push('\ask')}> Create Problems </button>
    </div>

  )
}
