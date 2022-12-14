import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

const coverImage = 'https://images.unsplash.com/photo-1660228652863-891f27cbe45c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
const avatarPic = 'https://avatars.githubusercontent.com/u/34945925?v=4'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img src={coverImage} className={styles.cover} />

      <div className={styles.profile}>
        <img src={avatarPic} className={styles.avatar} />

        <strong>Marcos L</strong>
        <span>Investor. Mobile Developer.</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit profile
        </a>
      </footer>
    </aside>
  )
}