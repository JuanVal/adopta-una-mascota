import styles from './logo.module.css'
import Image from 'next/image'
const Logo = ({url, titleWeb}) => {
    return (
        <section className={styles.logo}>
            <h1 className={styles.titleWeb}>{titleWeb}</h1>
            {url ? <Image src={url} alt="logo" width={34} height={34} /> : ''}
        </section>
    )
}

export default Logo