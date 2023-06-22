import styles from './main-footer.module.css'

const MainFooter = () => {
  return (
    <footer className={styles.footer}>
      <p> &copy;2023 Adopta una mascota. </p>
      <strong><i><a href="https://cvjuanvaldivia.web.app/">Juan Valdivia Front End Developer</a></i></strong>
    </footer>
  )
}

export default MainFooter