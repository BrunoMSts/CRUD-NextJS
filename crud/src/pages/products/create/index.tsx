import styles from './styles.module.scss'

export default function Create() {
  return (
    <div className={styles.formContainer}>
      <form action="">
        <div className={styles.labelFloat}>
          <input type="text" placeholder=" "/>
          <label>Product name</label>
        </div>
        <div className={styles.labelFloat}>
          <input type="text" placeholder=" "/>
          <label>Price</label>
        </div>
      </form>
    </div>
  )
}