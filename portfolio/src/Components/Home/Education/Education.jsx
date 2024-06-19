import React from "react";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <div className={styles.edu}>
      <h1>Education</h1>
      <table className={styles.table}>
        <tr>
          <th>Year</th>
          <th>Proffecion</th>
          <th>Building</th>
        </tr>
        <tr>
          <td>2023 - Present</td>
          <td>JavaScript (ReactJS, NodeJS)</td>
          <td>Tumo Labs</td>
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
