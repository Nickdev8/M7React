import './App.css'
import { HelloWorld } from './helloworld'
import { Article } from './article'
import { Top10 } from './Top10'

function App() {
  return (
    <div className="app">
      <HelloWorld title="HelloWorld" />
      <Article 
        title="Title"
        text="Text"
      />
      <Top10 />
    </div>
  )
}

export default App
