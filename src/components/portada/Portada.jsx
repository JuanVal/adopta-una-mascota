import stylesPortada from './portada.module.css'

export default function Portada({titulo, descripcion}) {

  return (
    <section className={stylesPortada.portada}>
        <section className={stylesPortada.contendor}>
          <article className={stylesPortada.infoBanner}>
            <h1 className={stylesPortada.tituloInfo}>{titulo}</h1>
            <p className={stylesPortada.descripcionInfo}>
              {descripcion}
            </p>
          </article>
        </section>
      </section>
  )
}