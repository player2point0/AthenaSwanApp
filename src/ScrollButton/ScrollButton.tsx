import { FC } from "react";
import styles from "./ScrollButton.module.css";

type Props = {
	onClick: () => void;
};

const ScrollButton: FC<Props> = ({ onClick }) => {
	return (
		<button className={styles.scrollButton} onClick={onClick}>
			scroll
		</button>
	);
};

export default ScrollButton;
