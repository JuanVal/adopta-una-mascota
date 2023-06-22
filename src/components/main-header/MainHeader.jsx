import MainMenu from "@/components/main-menu/MaInMenu"
import styles from './header.module.css'
import Logo from "../logo/Logo"

export default function MainHeader()  {
  return (
    <header className={`${styles.main}`}>
      <section className={`contenedor ${styles.contenedor}`}>
        <Logo titleWeb="Adopta una mascota" />
        <MainMenu />
      </section>
    </header>
  )
}