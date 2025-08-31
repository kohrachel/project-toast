import React, { useState } from "react";

import Button from "../Button";
import Toast from "../Toast/Toast";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastProps } from "../Toast/Toast";

export type VariantType = "notice" | "warning" | "success" | "error";
const VARIANT_OPTIONS: VariantType[] = [
  "notice",
  "warning",
  "success",
  "error",
];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState<VariantType>(VARIANT_OPTIONS[0]);
  const [showToast, setShowToast] = useState(false);
  const [toastArray, setToastArray] = useState<ToastProps[]>([]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastArray={toastArray} />

      <div className={styles.controlsWrapper}>
        <form
          className={styles.row}
          onSubmit={(e) => {
            e.preventDefault();
            setMessage("");
          }}
        >
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </form>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label key={`${option}`} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={`${option}`}
                  checked={variant === option}
                  onChange={(e) => setVariant(e.target.value as VariantType)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              onClick={() => {
                setShowToast(true);
                setToastArray((prev) => [
                  ...prev,
                  {
                    children: message,
                    variant: variant,
                    setShowToast: setShowToast,
                  },
                ]);
              }}
            >
              Pop Toast!
            </Button>
            <p>message: {message}</p>
            <p>variant: {variant}</p>
            <p>showToast: {showToast}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
