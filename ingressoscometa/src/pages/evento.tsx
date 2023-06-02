
import { useRouter } from 'next/router';
import PaginaEvento from "@/components/Evento/PaginaEvento";
import Layout from "@/components/CabecalhoCadastro/layout";

export default function Evento() {
    const router = useRouter();
    const { id } = router.query;
  
    return (
      <Layout pagina={<PaginaEvento id={id} />} exibirBotao={false} exibirBotao2={true} exibirBotao3={true} />
    );
  }