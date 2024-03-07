'use client'

import Image from "next/image";

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/navigation';
import { cepForSchema } from '@/components/zod';

export default function Home() {

const {
  register,
  handleSubmit,
  formState: {errors},
} = useForm({
  resolver: zodResolver(cepForSchema)
})

const router = useRouter()



function onSubmit(data) {
  console.log(data)
  router.push(`/cep/${data.cep}`)
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#1f2937]">
  
      <div>
        <h1 className="text-white text-center font-bold text-2xl py-4">Buscador de CEP</h1>
        <form className="flex flex-col gap-y-8 items-center" onSubmit={handleSubmit(onSubmit)}>

          <input type="text"className="w=1/2 p-2 rounded-lg text-center font-bold text-lg" {...register("cep")}/>
          {errors.cep && (
          <span>
            <p className="text-red-500 text-center font-bold"> {errors.cep.message}</p>
          </span>)}

          <button type="submit" className="bg-blue-700 px-8 py-3 rounded-lg font-bold text-white text-lg hover:bg-blue-transition-all 
          duration-300 ease-int-out">Buscar</button>
        </form>
      </div>

    </main>
  );
}
