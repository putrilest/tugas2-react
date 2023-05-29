import KotakTeks from "./KotakTeks"
import Tombol from "./Tombol"

function Login(){
    return(
        <div>
            <label htmlFor="email">Email</label>
            <KotakTeks/>
            <label htmlFor="password">Password</label>
            <KotakTeks/>
            <Tombol>Login</Tombol>
        </div>
    ) 
  }

  export default Login