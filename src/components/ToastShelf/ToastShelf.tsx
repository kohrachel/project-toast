import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastProps } from "../Toast";

type ToastShelfProps = {
  toastArray: React.JSX.Element[];
};

function ToastShelf({ toastArray }: ToastShelfProps) {
  return (
    <ol className={styles.wrapper}>
      {toastArray.map(
        (toast) => toast
        // <li className={styles.toastWrapper}>{toast}</li>
      )}
    </ol>
  );
}

export default ToastShelf;
