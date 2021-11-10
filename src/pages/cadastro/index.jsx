import "./style.css"
import * as yup from 'yup';
import {Container} from "./style.js"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory }  from 'react-router-dom'

function Cadastrar({setUsers, usuarios}){

    const history = useHistory();

    const formSchema = yup.object().shape({
        nameUser: yup.string().required("Usuário obrigatório").matches(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/, "Minimo 5 caracteres;Sem Espaços"),
        name: yup.string().required("Nome obrigatório").matches(/^[a-zA-Z '.-]*$/, "Somente letras"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        senha: yup.string().required("Senha obrigatória").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "No mínimo 8 caracters;Pelo menos uma letra;Pelo menos uma número;Pelo menos um caractere especial"),
        confirmacaoSenha: yup.string().oneOf([yup.ref('senha'), null], "Senhas não coincidem"),
        checkbox: yup.bool().oneOf([true], "Seleção Obrigatória")
    })
    
      const { register, 
              handleSubmit, 
              formState: { errors },
      } = useForm({
        resolver:yupResolver(formSchema),
      })
    
      const onSubmitFunction = data => {
        if(usuarios.filter((item)=> item.nameUser === data.nameUser).length === 0){
          setUsers([...usuarios, data])
          history.push(`/inicio/${data.nameUser}`)
        }
      }


    return (
        <Container >
          
          <form className="forms" onSubmit={handleSubmit(onSubmitFunction)}>
            <h1 className="cadastro-h1">Cadastre-se</h1>
              <input placeholder="Nome de usuário" {...register("nameUser")}/>
              <ul className="error">
                    {
                    errors.nameUser?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                  </ul>
              <input placeholder="Nome Completo" {...register("name")}/>
              <ul className="error">
                    {
                    errors.name?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                  </ul>
              <input placeholder="Endereço de E-mail" {...register("email")}/>
              <ul className="error">
                    {
                    errors.email?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                  </ul>
              <div className="senha">
                <div className="error-senha">
                  <input type="password" className="senha-input" placeholder="Senha *" {...register("senha")}/>
                  <ul className="error">
                    {
                    errors.senha?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                  </ul>
                </div>
                <div className="error-senha">
                  <input type="password" className="senha-input" placeholder="Confirme Sua Senha *" {...register("confirmacaoSenha")}/>
                  <p className="error">{errors.confirmacaoSenha?.message}</p>
                </div>
              </div>
              <div className="checkbox">
                <div className="checkbox-internal">
                  <input type="checkbox" id="salvar" {...register("checkbox")}/>
                  <label htmlFor="salvar">Eu aceito os termos de uso da aplicação</label>
                </div>
                <ul className="error">
                    {
                    errors.checkbox?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                  </ul>
              </div>
              <button type="submit" className="button">Cadastrar-se</button>
              <button className="button" onClick={()=> history.push("/")}>Voltar</button>
          </form>
        </Container>
    )
}

export default Cadastrar;