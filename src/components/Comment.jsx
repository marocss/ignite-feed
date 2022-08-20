import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

const avatarPic = 'https://avatars.githubusercontent.com/u/34945925?v=4'
const name = 'Marcos L'

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src={avatarPic} className={styles.avatar} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{name}</strong>
              <time title='11 de maio ás 8h 13min' dateTime='2022-05-11 08:13:00'>Published 3h ago</time>
            </div>

            <button title='Delete comment'>
              <Trash size={20} />
            </button>
          </header>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Clap
            {' '}
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
};
