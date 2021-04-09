import { useContext, useEffect, useState } from 'react'
import {Container, Content, Title, Head, Footer, Group, Loading} from './styled'
import Product from '../../components/Product'
import Total from '../../components/Total'
import BtnFinalizar from '../../components/Button/BtnFinalizar'
import BtnExchangeApi from '../../components/Button/BtnExchangeApi'
import { GlobalContext } from '../../Context/GlobalContext';
import jsonAbaixo10 from '../../Api/abaixo-10-reais.json'
import jsonAcima10 from '../../Api/acima-10-reais.json'

export interface Item{
  id: number;
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
}

const FreeShipping = () =>{

  const {isShippingFree} = useContext(GlobalContext)
  console.log(isShippingFree);
  
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  async function getApiFreeShipping(){
    try{
      setLoading(true)
      const response: any = jsonAcima10.items;
      setItems(response)
    }catch(e){
      console.log(e);
      setLoading(false)
    }
    finally{
      setLoading(false)
    }
  }

  async function getApiPaidShipping(){

    try{      
      setLoading(true)
      const response: any = jsonAbaixo10.items;
      setItems(response)
    }catch(e){
      console.log(e);
      setLoading(false)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    if(isShippingFree){
      getApiPaidShipping();
    } else {
      getApiFreeShipping();
    }
  },[isShippingFree])
  return(
    <Container>
      <Content>  
      <Head>
        <Title>Meu Carrinho</Title>
      </Head>
      {loading ?
        <Loading>
          <p>Carregando...</p>
        </Loading>
      : 
      <>
        <Group>
          {items.length !== 0 && items.map((item:Item) => (
              <Product key={item.id} product={item} />
          ))}
        </Group>
        <Footer>
          <Total items={items} />
          <BtnFinalizar text="Finalizar compra" />
          <BtnExchangeApi text="Alternar API" />
        </Footer>
      </>
      }
      </Content>
    </Container>
  )
}


export default FreeShipping