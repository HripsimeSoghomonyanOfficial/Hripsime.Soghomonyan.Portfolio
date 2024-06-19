import React from "react";
import styles from "./Experiance.module.css";

export default function Experiance() {
  return (
    <div className={styles.edu}>
      <h1>Experiance</h1>
      <table className={styles.table}>
        <tr>
          <th>Year</th>
          <th>Position</th>
          <th>Company</th>
        </tr>
        <tr>
          <td>2023</td>
          <td>Wordpress Developer</td>
          <td>Twenty Temple</td>
        </tr>
        <tr>
          <td>2023 - 2024</td>
          <td>Wordpress Developer</td>
          <td>DBC Yerevan</td>
        </tr>
        <tr>
          <td>2022 - 2023</td>
          <td>Mark up || Front End Developer</td>
          <td>Web Foundation</td>
        </tr>
        <tr>
          <td>2019 - 2022</td>
          <td>Call Center Agent</td>
          <td>Team Telecom Armenia</td>
        </tr>
        <tr>
          <td>2017</td>
          <td>Sales Manager</td>
          <td>Bookinist</td>
        </tr>
      </table>
    </div>
  );
}
