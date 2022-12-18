import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

function Backdrop(props) {
  return <div className="{styles.backdrop}" onClick={props.onClick}></div>;
}

function ModalOverlay(props) {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onClick}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={props.onClick}>Okay</Button>
          </footer>
        </Card>
      </div>
    </>
  );
}

function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ErrorModal;
