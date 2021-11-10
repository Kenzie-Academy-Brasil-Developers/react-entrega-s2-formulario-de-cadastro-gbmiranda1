import {useParams, useHistory} from "react-router-dom"
import {Container} from "./style"

function Inicio({usuarios}){
    const history = useHistory()
    const params = useParams()
    const user = usuarios.find((item)=> item.nameUser === params.nameUser)
    return (
        <Container>
            <p>Bem-vindo(a), {(user.name).toUpperCase()}!</p>
            <button onClick={()=> history.push("/")} className="button">Sair</button>
        </Container>
    )

}

export default Inicio;