import "antd/dist/antd.css";
import { Table, Button, message, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import InvestimentoService from "../../service/InvestimentoService";

const { Header, Content, Footer } = Layout;
const { Column } = Table;

export default function ListarInvestimentos() {
  const [investimentos, setInvestimentos] = useState([]);

  useEffect(()=>{
    refreshInvestimentos();
    return () => {
    }
  },[])

  async function refreshInvestimentos(){
    InvestimentoService.retrieveAllInvestimentos()
      .then(
        response => {
          setInvestimentos(response.data)
        }
      )
  }

  function remove(record) {
    InvestimentoService.deleteInvestimento(record.codigo);
    message.success("Investimento removido com sucesso!");
  }

  return (
    <div className="container">
      <Layout className="layout">
        <Header>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">
                <Link to="/cadastrar-investimento">Cadastrar Investimento</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/listar-investimentos">Listar Investimentos</Link>
              </Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
            <h2>Investimentos</h2>
              <Table dataSource={investimentos}>
                <Column
                  title="Código do ativo"
                  dataIndex="codigoAtivo"
                  key="codigoAtivo">
                </Column>
                <Column
                  title="Valor" 
                  dataIndex="valorCota" 
                  key="valorCota">
                </Column>
                <Column
                  title="Quantidade de Cotas"
                  dataIndex="quantidadeCota"
                  key="quantidadeCota">
                </Column>
                <Column
                  title="Data da Compra"
                  dataIndex="dataCompra"
                  key="dataCompra">
                </Column>
                <Column
                  title="Remover"
                  key="atualizar"
                  render={(text, record) => (
                    <Button onClick={() => remove(record)} type="primary">
                      Remover
                    </Button>
                  )}>
                </Column>
              </Table>
          </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>My Invest ©2021 Created by Daiane Matos</Footer>
      </Layout>
    </div>
  );
}
