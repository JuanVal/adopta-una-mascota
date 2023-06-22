import stylesMenu from './main-menu.module.css'
import Link from 'next/link'


export default function MainMenu() {
  return (
    <nav className={stylesMenu.navegacion}>
      <button type="button" className={stylesMenu.menuBar}>Menu</button>
      <ul className={stylesMenu.menu}>
        <li className={stylesMenu.itemMenu}>
          <Link href="/">Home</Link>
        </li>
        <li className={stylesMenu.itemMenu}>
          <Link href="/quienes-somos">Quienes somos?</Link>
        </li>
        <li className={stylesMenu.itemMenu}>
          <Link href="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}