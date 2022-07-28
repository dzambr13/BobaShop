import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const BASE_URL = 'http://localhost:3001/api'

const BobaDetails = (props) => {
    
    const [boba, setBoba] = useState('')
    let { id } = useParams()
    // console.log('entering use effect')
    useEffect(() => {
        const getBobaById = async () => {
            let data = await axios.get(`${BASE_URL}/boba/${id}`)
            // console.log(data.data.bobas)
            // for(let i = 0; i < data.data.bobas.length; i++){
            //     if(id == data.data.bobas[i]._id){
            //         setBoba(data.data.bobas[i])
            //         break;
            //     }
            // }
            setBoba(data.data)
            // console.log(data)
        }
        getBobaById()
    }, [])
    // console.log(props.bobas)
    // console.log(boba)
    return boba ? (
        <div className="detail">
            <div className="detail-header">
                <img className="imgdetail" style={{display: 'block', width: '6em', height: '6em', justifyContent: 'center', alignItems: 'center'}} src={boba.image} />
                <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1>{boba.name}</h1>
                </div>
            </div>
            <div className="info-wrapper">
                <div style={{display: 'flex', justifyContent:'flex-end', alignItems: 'right', flexDirection: 'column'}}>
                    <h2>{boba.price}</h2>
                    <h2>{boba.rating}</h2>
                </div>
                <h3>{boba.description}</h3>
            </div>
        </div>
    ) : null;
}

export default BobaDetails