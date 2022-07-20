import React from 'react'
import { Button} from 'react-bootstrap'
import Stack from 'react-bootstrap/esm/Stack'
 
    state = {
      quantity: 0
    }
  
    handleMinus = () => {
      if (this.state.quantity > 0) {
          this.setState({
              quantity: this.state.quantity - 1
          })
  
      }
  }
  
   handlePlus = () => {
  
      if (this.state.quantity <= 9)
          this.setState({
              quantity: this.state.quantity + 1
          })
  }

const App = () => {
  return (
    <Stack direction="horizontal" gap={2}>
      <Button onClick={this.handleMinus} as="a" variant="primary" style={{fontWeight: "bolder", fontSize: "20px"}}>
        -
      </Button>

      <input type="text" aria-label="First name" className="form-control" style={{ backgroundColor: "aqua", width: "5%", fontSize: "20px", fontWeight: "bolder", textAlign: "center" }} value={this.state.quantity} />

      <Button onClick={this.handlePlus} as="a" variant="success" style={{fontWeight: "bolder", fontSize: "20px"}}>
        +
      </Button>
    </Stack>
  )
}

export default App