import {useParams, useHistory} from "react-router-dom"
import {Container} from "./style"
import { motion } from "framer-motion"

function Inicio({usuarios}){
    const history = useHistory()
    const params = useParams()
    const user = usuarios.find((item)=> item.nameUser === params.nameUser)
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
        >
            <Container>
                <p>Bem-vindo(a), {(user.name).toUpperCase()}!</p>
                <button onClick={()=> history.push("/")} className="button">Sair</button>
            </Container>
        </motion.div>
    )

}

export default Inicio;