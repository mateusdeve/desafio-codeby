import {Btn, Container} from './styled'

interface PropsButton{
  text: string;
}

const BtnFinalizar = ({text}:PropsButton) =>{

 return(
   <Container>
     <Btn>{text}</Btn>
   </Container>
 )
}

export default BtnFinalizar