import axios from 'axios';

const API_URL = 'http://localhost:8080';

class InvestimentoService{

    retrieveAllInvestimentos(){                             //retorna todos os investimentos
        return axios.get(`${API_URL}/investimentos`);
    }

    saveInvestimento(investimento){                         //salvar investimentos
        return axios.post(`${API_URL}/investimentos`, investimento);
    }

    deleteInvestimento(codigo){                             //deletar investimentos
        return axios.delete(`${API_URL}/investimentos/${codigo}`);
    }
}

export default new InvestimentoService();