import { Container } from "./styles"

export function Header() {
  return (

    <Container>
      < h1 > {process.env.REACT_APP_NAME}</h1 >
    </Container>


  )
}