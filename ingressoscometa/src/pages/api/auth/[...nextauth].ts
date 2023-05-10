import NextAuth,{NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { signOut } from "next-auth/react";

const authOptions : NextAuthOptions = {
    
    providers: [CredentialsProvider({
        type: 'credentials',
        credentials: {cpf: {
            label: "CPF",
            type: "text"
        },password: {
            label: "Senha",
            type: "password"
        } },
        authorize(credentials, req){
            
            //{ id:"1", name:"alisson", email: "alissonbomfimsilva@outlook.com"}
            const {cpf, password} = credentials as {cpf:string; password:string;};
            const user = api.get('/api/usuario',{cpf:cpf})
            console.log(user.nome)
            if(cpf === user.cpf_cnpj && password === "123"){
                return user;
            }

            return null;
            
        }
    })],
    callbacks: {
        jwt: async ({ token, user }) => {
          if (user) {
            token.id = user.id;
          }
    
          return token;
        },
        session:  ({ session, token }) => {
            
            return session;
          },
      },
    secret: "jwttoken",
    pages: {
        signIn :"/login",
        signOut: "/login",
    },
    jwt: {
        secret: "jwttoken",
      },

}



export default NextAuth(authOptions);