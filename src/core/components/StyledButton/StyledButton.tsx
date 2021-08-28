import { FC } from "react";
import styles from "./StyledButton.module.css";

type Props = {
	onClick: () => void;
	text: string;
	fillWidth?: boolean;
	noMargin?: boolean;
};

const StyledButton: FC<Props> = ({ onClick, text, fillWidth, noMargin }) => {
	return (
		<button
			style={{
				width: fillWidth ? "100%" : "fit-content",
				margin: noMargin ? 0 : "1rem",
			}}
			onClick={onClick}
			className={styles.container}
		>
			{text}
		</button>
	);
};

export default StyledButton;
