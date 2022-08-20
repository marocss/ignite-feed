import styles from './Post.module.css'

const avatarPic = 'https://avatars.githubusercontent.com/u/34945925?v=4'
const name = 'Marcos L'
const jobTitle = 'Investor | Developer'

export const Post = (props) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={avatarPic} className={styles.avatar} />

          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{jobTitle}</span>
          </div>
        </div>

        <time title='11 de maio ás 8h 13min' dateTime='2022-05-11 08:13:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p>Minima, maxime nulla. Voluptatibus, quisquam consequatur.</p>
        <p>Unde facere atque ipsam? Fuga eaque impedit fugit accusamus? Nulla amet necessitatibus beatae minus deleniti? Et corporis vel culpa quasi officiis sint.</p>
        <p>
          <a href="http://" target="_blank" rel="noopener noreferrer">#lorem</a>
          {' '}
          <a href="http://" target="_blank" rel="noopener noreferrer">#ipsum</a>
        </p>
      </div>
    </article>
  )
}