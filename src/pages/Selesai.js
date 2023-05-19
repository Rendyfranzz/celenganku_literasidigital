import React from 'react'
import { Navbar } from '../components/Navbar'
import Card from '../components/Card'

const Selesai = ({celengans}) => {
    let filtered = celengans?.filter((data)=>{
        return data.selesai
    })
    return (
        <>
            <Navbar />
            {
                filtered ? filtered.map((data) => {
                    return <Card key={data.nama} data={data} />
                }) : <p>kosongh</p>
            }
        </>
    )
}

export default Selesai