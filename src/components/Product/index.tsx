import {Item} from '../../pages/App'
import {Container, Image, Title, Price, Group, SellingPrice} from './styled'

interface PropsProduct{
  product: Item
}

const Product = ({product}:PropsProduct) =>{
  return (
    <Container>
      <Image src={product.imageUrl} />
      <Group>
        <Title>{product.name}</Title>
        <Price>R$ {((product.price)/100).toString().replace(".", ",")}</Price>
        <SellingPrice>R$ {((product.sellingPrice)/100).toString().replace(".", ",")}</SellingPrice>
      </Group>
    </Container>
  )
}

export default Product