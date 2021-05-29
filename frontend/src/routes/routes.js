import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastrarInvestimento from "../pages/CadastrarInvestimento";
import ListarInvestimentos from "../pages/Listarinvestimentos";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListarInvestimentos}></Route>
        <Route exact path="/cadastrar-investimento" component={CadastrarInvestimento}></Route>
        <Route exact path="/listar-investimentos" component={ListarInvestimentos}></Route>
      </Switch>
    </BrowserRouter>
  );
}
