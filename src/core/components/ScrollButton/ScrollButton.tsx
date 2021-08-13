import { FC } from "react";
import { useScrollPosition } from "../../hooks";
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
	const percentageScrolled = Math.round(mappedPercentage);

	return (
		<div className={styles.scrollButton}>
			<div>{percentageScrolled}% complete</div>
			<button onClick={onClick}>scroll</button>
		</div>
	);
};

export default ScrollButton;
