'use client'
import React, { useEffect } from 'react'
import { TextField } from '@radix-ui/themes';
import { useState } from 'react';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import Loading from './Loading';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
interface IssueForm{
    answer: string;
}
export default function ProblemCard (props: {id: number, question:string, answer:string, key:number}) {
    const {register, control, handleSubmit}=useForm<IssueForm>();
    const[isSubmitting, setSubmitting]=useState(false);
    const[isCorrect, setCorrect]=useState(false);
    const[deleted, setDeleted]=useState(false);
    const router=useRouter();

    // useEffect(async () => {
    //     if (deleted) {
    //         await axios.delete(`/api/problems/${props.id}`);
    //     }
    //   }, [deleted]);
  return (

    <div className={ (isCorrect ?"bg-green-500 outline-green-300 ":"bg-orange-400 outline-orange-500 ") +"m-5 rounded-2xl w-74 h-96 outline-8 outline items-center relative flex flex-col p-4 pt-8"}>
        {!isCorrect ? (<p className='bg-white w-72 h-48 break-words text-xl text-wrap rounded-lg outline outline-orange-500 outline-2 flex items-center justify-center p-4'>
            {props.question}
        </p>): (<p className='text-white text-7xl'>Correct!</p>)}

        <form className='inset-y-64 h-fit absolute w-72 flex-col flex items-center'
            onSubmit={handleSubmit(async(data)=>{
                if (data.answer == props.answer){
                    setSubmitting(true);
                    setCorrect(true);
                    //await axios.delete(`/api/problems/${props.id}`);
                    fetch('/api/problems', {
                        method: 'DELETE',
                        headers: {
                            "Content-Type": "application/json",

                          },
                        body: JSON.stringify({ id: props.id })
                      }).then(()=>router.refresh())


                } else{
                    alert('Wrong Answer!')
                }

                })}>
        { (!isCorrect) ? ( <div>
            <TextField.Root className='w-72'>
            <TextField.Input placeholder='Answer' size={"3"} {...register('answer')}/>
        </TextField.Root>
            <button disabled={isSubmitting} className='bg-cyan-700 mt-5 text-white h-fit'>Submit {isSubmitting && <Loading />}</button>
            </div>
        ): <p className='text-white text-4xl'>Good Job!</p> }
        </form>
        {!isCorrect && <Link href={{pathname:'/workspace',query:{question: props.question}}}><button className='bg-yellow-500 text-white bottom-6 right-4 absolute rounded-full'>Use Blocks </button></Link>}

    </div>
  )
}
