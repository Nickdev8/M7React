import './App.css'
import { HelloWorld } from './helloworld'
import { Article } from './article'

function App() {
  return (
    <div className="app">
      <HelloWorld title="HelloWorld" />
      <Article 
        title="Title"
        text="Text"
      />
    </div>
  )
}

export default App
