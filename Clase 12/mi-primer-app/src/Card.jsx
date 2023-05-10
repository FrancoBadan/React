import "./Card.css"

function Card({apellido,nacimiento,clubes,mundial,late}){
    let nombre= "leonel"
    return(
        <>
        <h1>{nombre}</h1>
        <h2>{apellido}</h2>
        <small style={{backgroundColor:"blue"}}>{nacimiento}</small>
        <p>{clubes}</p>
        <p>{mundial?"gano un mundial 🥇":"Sigue participando 💔"}</p>
        <small>{late?"Late ✅":"Nola ❌"}</small>
        </>
    )
}


export default Card;