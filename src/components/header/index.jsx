import logoKenzie from "../../assets/img/logo.png"
import {Div} from "./style"

function Header(){
    return(
        <Div>
            <img src={logoKenzie} alt="logoKenzie" />
        </Div>
    )
}

export default Header;