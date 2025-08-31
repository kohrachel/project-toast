import React, { useState } from "react";

import Button from "../Button";
import Toast from "../Toast/Toast";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [showToast, setShowToast] = useState(true);

  const dismissToast = () => {};

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* {showToast && ( */}
      <Toast message={message} variant={variant} dismissToast={dismissToast} />
      {/* )} */}

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
                  onChange={(e) => setVariant(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
            <p>message: {message}</p>
            <p>variant: {variant}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
