'use client'

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Page({params}) {
    console.log(params.id) 
    
    const[data, setData] = useState({})

    useEffect(() => {
        fetch (`https://viacep.com.br/ws/${params.id}/json/`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => {
        console.log ("Erro na requisição," + error)
        setData({error: "CEP não valido"})
        })
    }, [params.id])

    console.log(data)

    if(data.error || data.error)
        return(
            <div className="flex flex-col justify-center h-screen bg-[#1f2937] text-white font-bold items-center
            gap-4">
                <p>teste</p>
            </div>
        )

    return(
        <main className="flex flex-col justify-center items-center h-screen bg-[#1f2937] text-white font-bold">
            <div className="text-2x1 py-10">
                
                <h1>CEP:{params.id}</h1>

                <p>Rua: {data.logradouro}</p>
                <p>Bairro: {data.bairro}</p>
                <p>Cidade {data.localidade}:</p>
                <p>Estado: {data.uf}</p>

            </div>
            <div>
                <Link href="/" className="bg-blue-700 px-8 py-3 rounded-lg font-bold text-white text-lg hover:bg-blue-transition-all 
          duration-300 ease-int-out">Buscar outro CEP</Link>
            </div>
        </main>
    )
}