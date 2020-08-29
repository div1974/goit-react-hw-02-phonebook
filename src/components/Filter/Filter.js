import React from "react";
import styles from "./Filter.module.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        className={styles.ContactFormInput}
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
