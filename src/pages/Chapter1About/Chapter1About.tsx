import { FC } from "react";
import styles from "./Chapter1About.module.css";
import {
	DoubleColumnProps,
	DoubleColumn,
} from "../../core/DoubleColumn/DoubleColumn";
import QUBLogo from "./qub.jpg";
import UKRILogo from "./ukri.jpg";
import TextBox from "../../core/TextBox";

//TODO source proper images
const Chapter1About: FC<DoubleColumnProps> = ({
	addRefsToParent,
	isMobile,
}) => {
	const logos = (
		<div className={styles.logo}>
			<img src={QUBLogo} alt="QUB logo" />
			<img src={UKRILogo} alt="UKRI logo" />
		</div>
	);
	const aboutText = (
		<div className={styles.aboutText}>
			<TextBox
				text={
					"The following online resource was produced by the Inclusion Matters project team based at Queen’s University Belfast."
				}
			/>
			<TextBox
				text={
					"The project was conducted in collaboration with the University of Glasgow and University of Warwick, and was funded by a UK Engineering & Physical Sciences Research Council Inclusion Matters Grant."
				}
			/>
		</div>
	);

	return (
		<DoubleColumn
			addRefsToParent={addRefsToParent}
			isMobile={isMobile}
			leftElement={logos}
			rightElement={aboutText}
		/>
	);
};

export default Chapter1About;
