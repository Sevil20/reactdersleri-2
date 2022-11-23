import { Component } from 'react'
import Wine from './Components/Wine/Wine'

class App extends Component{
  render(){
    return(
      <div>
        <Wine title = 'Sevil'
        description = 'red'
        rating = '1'/>
      </div>
    )
  }
}


export default App
