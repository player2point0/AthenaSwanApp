import { FC } from "react";
import styles from "./TextBox.module.css";

const TextBox: FC = ({ children }) => {
	return <div className={styles.TextBoxText}>{children}</div>;
};

export default TextBox;
