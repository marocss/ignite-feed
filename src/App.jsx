import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <Post 
        author='Marcos L'
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum assumenda qui veritatis expedita voluptatem, illo provident ducimus neque? Dolorem facere dolorum rem modi nulla impedit odit molestiae ipsa, aliquam pariatur?"
      />
    </>
  )
}

export default App