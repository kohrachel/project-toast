import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastProps } from "../Toast";

type ToastShelfProps = {
  toastArray: ToastProps[];
};

function ToastShelf({ toastArray }: ToastShelfProps) {
  return (
    <ol className={styles.wrapper}>
      <p>hello</p>
      {toastArray.map(({ children, variant, setShowToast }) => (
        <li className={styles.toastWrapper}>
          <Toast variant={variant} setShowToast={setShowToast}>
            {children}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
