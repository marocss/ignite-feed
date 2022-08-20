import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />

        <main>
          <Post 
            author='Marcos L'
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum assumenda qui veritatis expedita voluptatem, illo provident ducimus neque? Dolorem facere dolorum rem modi nulla impedit odit molestiae ipsa, aliquam pariatur?"
          />
          <Post 
            author='Marcos L'
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum assumenda qui veritatis expedita voluptatem, illo provident ducimus neque? Dolorem facere dolorum rem modi nulla impedit odit molestiae ipsa, aliquam pariatur?"
          />
        </main>
      </div>
    </div>
  )
}

export default App