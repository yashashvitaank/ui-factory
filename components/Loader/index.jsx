import styles from "./styles.module.scss";

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} />
    </div>
  );
}

export default Loader;
