import { useNavigate } from 'react-router-dom'

const Bobas = (props) => {
    let navigate = useNavigate()

    const showBoba = (boba) => {
        navigate(`${boba._id}`)
    }
    console.log(props)
return (
    <div className="boba-grid">
            {
                props.bobas?.map((boba) => (
                    <div className="boba-card" onClick={() => showBoba(boba)} key={boba.id}>
                    <img className="imgdetail"style={{display: 'block', width: '5em', height: '5em', justifyContent: 'center', alignItems: 'center'}} src={boba.image} />
                    <h3 className="bobatitles">{boba.name}</h3>
                    </div>
                ))}
    </div>
    )
}

export default Bobas

