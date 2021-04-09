import {Container, Text, Content, Alert, TextAlert, ContainerAlert} from './styled'
import { Item } from '../../pages/App/index';
import { useEffect, useState } from 'react';

interface PropsTotal{
  items: Item[];
}

const Total = ({items}: PropsTotal) =>{
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    setTotal(items.reduce((acumulador, produto) => acumulador + produto.sellingPrice, 0))
  },[items])

  return(
    <Container>
      <Content>
        <Text>Total</Text>
        <Text>R${((total)/100).toString().replace(".", ",")}</Text>
      </Content>
      {parseFloat(((total)/100).toString().replace(".", ",")) > 10 && 
      <ContainerAlert>
        <Alert>
          <TextAlert>Parebéns, sua compra tem frete grátis!</TextAlert>
        </Alert>
      </ContainerAlert>
      }
    </Container>
  )
}

export default Total