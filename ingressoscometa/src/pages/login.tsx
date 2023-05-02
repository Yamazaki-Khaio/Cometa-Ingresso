import Layout from "@/components/layout";
import Login from "@/components/Login";

export default function login(){
    return(
        <div>
            <Layout pagina={<Login/>}/>
        </div>
    )
}