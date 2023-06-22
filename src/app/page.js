import Portada from '@/components/portada/Portada'
import styles from './page.module.css'

export default function Home() {
  return (
    <section className={`${styles.inicio}`}>
      <Portada titulo={`Presentamos a tus nuevos amigos`} descripcion={`Ayúdanos a mejorar la vida de estos pequeños amigos, que necesitan de tu ayuda, para poder tener una vida mejor.`}/>
      <section className={styles.zonas}>
        <section className={styles.contenedor}>
          <article className={styles.articulo}>
            <h2 className={styles.titleArticulo}>¿Por qué adoptar?</h2>
            <p className={styles.descripcionArticulo}>
              Adoptar una mascota es una de las mejores cosas que puedes hacer en tu vida. Si adoptas una mascota, no solo le das una nueva oportunidad de vida, sino que también le das una nueva oportunidad a tu vida.
            </p>
          </article>
        </section>
      </section>
      <section className={styles.zonas}>
        <section className={styles.contenedor}>
          <article className={styles.articulo}>
            <h2 className={styles.titleArticulo}>¿Por qué adoptar?</h2>
            <p className={styles.descripcionArticulo}>
              Adoptar una mascota es una de las mejores cosas que puedes hacer en tu vida. Si adoptas una mascota, no solo le das una nueva oportunidad de vida, sino que también le das una nueva oportunidad a tu vida.
            </p>
          </article>
        </section>
      </section>
    </section>
  )
}

