'use client';
import React from 'react';
import { TextField,TextArea, Button } from '@radix-ui/themes';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import Loading from '../components/Loading';

interface IssueForm{
    question: string;
    answer: string;
}


const AskPage = () => {
    const router=useRouter();
    const {register, control, handleSubmit}=useForm<IssueForm>();
    const[isSubmitting, setSubmitting]=useState(false);
  return (
    <form className='w-2/6 space-y-4'
    onSubmit={handleSubmit(async(data)=>{
        try{
            setSubmitting(true);
            await axios.post('/api/problems',data);
            window.location.reload()
        } catch(error){
            setSubmitting(false);
            alert('Submission is invalid')
        }

        })}>
        <h1>
            Submit a math problem for others to solve!
        </h1>
        <TextArea placeholder='Question' size={'3'}  {...register('question')}/>
        <TextField.Root>
            <TextField.Input placeholder='Answer' size={"3"} {...register('answer')}/>
        </TextField.Root>
        <button disabled={isSubmitting} className="bg-orange-500 text-white">Submit Problem {isSubmitting && <Loading />}</button>
    </form>
  )
}

export default AskPage
