import { FC } from "react";
import { useScrollPosition } from "../../hooks/Window";
import StyledButton from "../StyledButton";
import styles from "./ScrollButton.module.css";
import { FaAngleDoubleDown } from "react-icons/fa";

const mapRange = (
	val: number,
	in_min: number,
	in_max: number,
	out_min: number,
	out_max: number
) => ((val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

type Props = {
	onClick: () => void;
	isMobile: boolean;
};

const ScrollButton: FC<Props> = ({ onClick, isMobile }) => {
	const height = document.body.scrollHeight;
	const windowHeight = window.innerHeight;
	const scrollPosition = useScrollPosition();
	const windowHeightPercentage = (windowHeight / height) * 100;

	const percentage = (scrollPosition / height) * 100;
	const mappedPercentage = mapRange(
		percentage,
		0,
		100 - windowHeightPercentage,
		0,
		100
	);
	let percentageScrolled = Math.round(mappedPercentage) || 0;

	// TODO for mobile swap out scroll text for icon
	isMobile = false;

	return (
		<div className={styles.scrollContainer}>
			<div className={styles.scrollPercentage}>
				{percentageScrolled}% complete
			</div>
			{isMobile ? (
				<FaAngleDoubleDown size="4rem" onClick={onClick} />
			) : (
				<StyledButton text="Scroll" onClick={onClick} fillWidth noMargin />
			)}
		</div>
	);
};

export default ScrollButton;
