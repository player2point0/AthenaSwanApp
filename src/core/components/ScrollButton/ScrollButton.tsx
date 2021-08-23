import { FC } from "react";
import { useScrollPosition } from "../../hooks/Window";
import StyledButton from "../StyledButton";
import styles from "./ScrollButton.module.css";

type Props = {
	onClick: () => void;
};

const ScrollButton: FC<Props> = ({ onClick }) => {
	const height = document.body.scrollHeight;
	const scrollPosition = useScrollPosition();

	const mapRange = (
		val: number,
		in_min: number,
		in_max: number,
		out_min: number,
		out_max: number
	) => ((val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

	//TODO fix for different screen sizes
	const percentage = (scrollPosition / height) * 100;
	const mappedPercentage = mapRange(percentage, 0, 92, 0, 100);
	const percentageScrolled = Math.round(mappedPercentage) || 0;

	return (
		<div className={styles.scrollContainer}>
			<div className={styles.scrollPercentage}>
				{percentageScrolled}% complete
			</div>
			<StyledButton text="Scroll" onClick={onClick} />
		</div>
	);
};

export default ScrollButton;
