import { FC } from "react";
import styles from "./Title.module.css";

type Props = {
	text: String;
};

const Title: FC<Props> = ({ text }) => {
	return <h1 className={styles.titleText}>{text}</h1>;
};

export default Title;
