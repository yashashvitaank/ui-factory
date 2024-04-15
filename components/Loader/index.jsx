import styles from "./styles.module.scss";

function Loader(props) {
  return (
    <div className={styles.screen}>
      <div className={styles.loader} style={props.style}></div>
    </div>
  );
}

export default Loader;
