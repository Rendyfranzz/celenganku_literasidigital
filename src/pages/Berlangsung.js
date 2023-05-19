
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Card from '../components/Card'

const Berlangsung = ({ celengans, setCelengans }) => {
    const navigate = useNavigate()
    let filtered = celengans?.filter((data) => {
        return !data.selesai
    })
    const handleOnclick = () => {
        navigate("/tambah")
    }
    return (
        <>
            <Navbar />
            <div>
                <button onClick={handleOnclick}>
                    sasa
                </button>
                <div className='w-full flex flex-col justify-center items-center'>
                    {
                        filtered ? filtered.map((data) => {
                            return <Card key={data.nama} data={data} />
                        }) : <p>kosongh</p>
                    }
                </div>

            </div>

        </>
    )
}

export default Berlangsung