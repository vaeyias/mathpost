'use client'
import React, { useEffect, useRef } from 'react'
import TensBlock from '../components/TensBlock';
import OnesBlock from '../components/OnesBlock';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Workspace = () => {
const containerRef = useRef<HTMLDivElement>(null);
const searchParams=useSearchParams();
const router= useRouter();
  const tensBlocks =[1,2,3,4,5,6,7,8,9,10];
  const onesBlocks =[1,2,3,4,5,6,7,8,9,10];
  return (
    <div className='flex items-center flex-col'>
        <p className='text-center text-xl'>Use number blocks to help you solve problems!</p>
        <button className= "text-white bg-orange-500 m-5" onClick={()=>window.location.reload()}>Reset</button>
        <div className='flex items-center'>

      <div ref={containerRef} className="items-center container flex bg-orange-300 h-96 relative overflow-hidden rounded-xl">

        {tensBlocks.map((block,i) => (
            <TensBlock key={i} id={i} containerRef={containerRef}/>
          ))}
        {onesBlocks.map((block,i) => (
            <OnesBlock key={i} id={i} containerRef={containerRef}/>
          ))}
      </div>
      <div className='bg-orange-400 outline text-white flex items-center text-4xl p-4 outline-orange-300 outline-8 w-96 h-96 ml-10 rounded-xl' onDoubleClick={()=> router.push("/solve")}>{searchParams.get('question')}</div>

      </div>
      </div>

  );
}

export default Workspace
