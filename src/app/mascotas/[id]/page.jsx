import styles from './styles.module.css'
const MascotaId = ({params}) => {
  return (
    <>
      <h1 className={styles.title}>Mascota {params.id}</h1>
    </>
  )

}

export default MascotaId