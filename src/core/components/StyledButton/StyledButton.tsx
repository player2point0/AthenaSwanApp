import { FC } from "react";
import styles from "./StyledButton.module.css";

type Props = {
	onClick: () => void;
	text: string;
};

const StyledButton: FC<Props> = ({ onClick, text }) => {
	return (
		<div onClick={onClick} className={styles.container}>
			{text}
		</div>
	);
};

export default StyledButton;
