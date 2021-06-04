import {Layout, Form, Button, message, DatePicker, Input, Select, Menu, InputNumber} from "antd";
import{Link} from "react-router-dom";
import{useEffect, useState} from "react";
import CategoriaService from "../../service/CategoriaService";
import InvestimentoService from "../../service/InvestimentoService";

const {Header, Content, Footer} = Layout;
const {Option} = Select;

export default function CadastrarInvestimento() {

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(null);

  useEffect(()=>{
    refreshCategorias();
    return () => {
    }
  },[])

  async function refreshCategorias(){
    CategoriaService.retrieveAllCategorias()
      .then(
        response => {
          setCategorias(response.data)
        }
      )
  }

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 3,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 4,

    },
  };

  const onFinish = (values) =>{
    InvestimentoService.saveInvestimento(values);
    message.success("Investimento Salvo com sucesso!");
  }

  const onFinishFailed = (erroInfo) =>{
    message.danger("Erro ao salvar!");
    console.log("Failed", erroInfo);
  }

  function handleChange(value){
    setCategoria(value);
  }

  return (
    <div className="container">
      <Layout className="layout">
        <Header>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
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
            <h2>Cadastrar Investimento</h2>
            <Form {...layout} name="basic" initialValues={{remember: true,}} onFinish={onFinish} 
            onFinishFailed={onFinishFailed}>
              <Form.Item 
                label="Código do ativo"
                name="codigoAtivo"
                rules={[
                  {
                    required: true,
                    message: 'Insira o código do ativo!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item 
                label="Valor" 
                name="valorCota"
                rules={[
                  {
                    required: true,
                    message: 'Insira o valor da cota!',
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item 
                label="Quantidade de cotas" 
                name="quantidadeCota"
                rules={[
                  {
                    required: true,
                    message: 'Insira a quantidade de cotas!',
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item 
                label="Data da compra" 
                name="dataCompra"
                rules={[
                  {
                    required: true,
                    message: 'Insira a data da compra!',
                  },
                ]}
              >
                <DatePicker/>
              </Form.Item>
              <Form.Item 
                label="Categoria" 
                name="categoria"
              >
                <Select onChange={handleChange}>
                  {categorias.map((item, index) =>{
                    return(
                      <Option key={item.id} value={item.id}>
                        {item.nome}
                      </Option>
                    )
                  })}
                </Select>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Salvar
                </Button>
              </Form.Item>
            </Form>
        </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>My Invest ©2021 by Daiane Matos</Footer>
      </Layout>
    </div>
  );
}
