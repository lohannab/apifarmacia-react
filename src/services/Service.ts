import axios from "axios";

const api = axios.create({
  baseURL: "https://projeto-final-bloco-02-1-12bi.onrender.com"
});

export const buscar = async ( url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
}

export const cadastrar = async ( url: string, dados: Object) => {
  const resposta = await api.post(url, dados);
  return resposta;
}

export const atualizar = async ( url: string, dados: Object) => {
  const resposta = await api.put(url, dados);
  return resposta;
}

export const deletar = async ( url: string) => {
  await api.delete(url);
}