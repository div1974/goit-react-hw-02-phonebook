import React from "react";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, onRemove }) => (
  <li className={styles.ContactListItem}>
    <p className={styles.ContactListText}>
      {name}:<br />
      {number}
    </p>

    <button
      type="button"
      className={styles.ContactListButton}
      onClick={onRemove}
    >
      Удалить
    </button>
  </li>
);

export default ContactListItem;
