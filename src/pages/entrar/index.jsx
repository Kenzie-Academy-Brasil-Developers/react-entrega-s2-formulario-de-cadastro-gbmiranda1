import {Button, Container} from "./style.js"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory }  from 'react-router-dom'
import {useState} from "react"
import PopupSenhaInvalida from "../../components/loginInvalido"
import { motion } from "framer-motion"


function Entrar({usuarios}){
    const history = useHistory();
    const [mostrarPopUp, setMostrarPopUp] = useState(false)

    const formSchema = yup.object().shape({
        username: yup.string().required("Usuário obrigatório"),
        password: yup.string().required("Senha obrigatória"),
    })
    
    const { register, 
              handleSubmit, 
              formState: { errors },
      } = useForm({
        resolver:yupResolver(formSchema),
    })
    
    const onSubmitFunction = data => {
        if(usuarios.filter((item)=>item.nameUser === data.username && item.senha===data.password).length===1){
            history.push(`/inicio/${data.username}`)
        }else{
            setMostrarPopUp(!mostrarPopUp)
        }
    }


    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
        >
            <Container>
                
                {mostrarPopUp && <PopupSenhaInvalida setMostrarPopUp={setMostrarPopUp}></PopupSenhaInvalida>}
                <form className="forms" onSubmit={handleSubmit(onSubmitFunction)}>
                    <h1 className="cadastro-h1">Entrar</h1>
                    <input placeholder="Usuário" type="text" {...register("username")}/>
                    <p className="error">{errors.username?.message}</p>
                    <input placeholder="Senha" type="password" {...register("password")} />
                    <p className="error">{errors.password?.message}</p>
                    <Button type="submit" className="button">Entrar</Button>
                    <Button onClick={() => history.push("/cadastrar")} className="button">Cadastrar</Button>
                </form>

                
            </Container>
        </motion.div>
    )
}

export default Entrar;