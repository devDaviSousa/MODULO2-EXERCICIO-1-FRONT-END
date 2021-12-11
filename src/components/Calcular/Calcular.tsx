import { useState } from "react"
import { Container } from "./styles"

export function Calcular() {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [total, setTotal] = useState(0)

  return (

    <Container>

      <form >
        <input className="input01" type="number"
          value={num1}
          onChange={(event) => setNum1(Number(event.target.value))} />
        <p>+</p>
        <input type="number"

          value={num2}
          onChange={(event) => setNum2(Number(event.target.value))}
        />
      </form>


      <div>
        <button onClick={() => { setTotal(num2 + num1) }}>=</button>

        <label>{total}</label>
      </div>
    </Container >
  )
}