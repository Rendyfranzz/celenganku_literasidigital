
import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Tambah = ({celengans,setCelengans}) => {
    const navigate =useNavigate()
    
    const [nama,setNama]=useState("")
    const [target,setTarget]=useState("")
    const [nominal,setNominal]=useState("")
    const [rencana,setRencana]=useState(0)

    const handleSubmit =  (e) =>{
        e.preventDefault()
        let estimate = target/nominal
        if(parseInt(nominal) > parseInt(target)){
            return alert("salah")
        }
        const now = new Date(Date.now())
        let temp={
            id :+new Date(),
            nama:nama,
            target:target,
            nominal:nominal,
            rencana:rencana,
            dibuat:now.toLocaleDateString(),
            progres:0,
            estimate:estimate.toFixed(),
            terkumpul:0,
            kurang:0,
            data:[
            ],
            selesai:false
        }
        setCelengans([...celengans,temp])
        navigate("/")
    }

    return (
        <div className='h-screen w-full'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 border-2">
                <div className='flex space-x-2'>
                    <p>Nama</p>
                    <input onChange={(e)=> setNama(e.target.value)} name='nama' type='text' placeholder='Nama tabungan' required /> 
                </div>
               
                <div className='flex space-x-2'>
                    <p>Target</p>
                    <input onChange={(e)=> setTarget(e.target.value)} name='target' type='number' placeholder='Target Tabungan' required /> 
                </div>
                <div className='flex space-x-2'>
                    <p>Nominal</p>
                    <input onChange={(e)=> setNominal(e.target.value)} name='nominal' type='number' placeholder='Nominal Pengisian' required /> 
                </div>
                <div>
                <p>Rencana Pengisian</p>
                <select onChange={(e)=>setRencana(e.target.value)} value={rencana} name="cars" id="cars" required>
                    <option value="0">Harian</option>
                    <option value="1">Mingguan</option>
                    <option value="2">Bulanan</option>
                </select>
                </div>
               <input type='submit'/>
            </form>
        </div>
    )
}

export default Tambah