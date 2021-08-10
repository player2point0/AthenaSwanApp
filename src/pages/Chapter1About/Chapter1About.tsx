import { FC } from "react";
import styles from "./Chapter1About.module.css";
import {
	DoubleColumnProps,
	DoubleColumn,
} from "../../core/DoubleColumn/DoubleColumn";
import QUBLogo from "./qub.jpg";
import UKRILogo from "./ukri.jpg";
import TextBox from "../../core/TextBox";
import PictureFrame from "../../core/PictureFrame";

//TODO source proper images
const Chapter1About: FC<DoubleColumnProps> = ({
	addRefsToParent,
	isMobile,
}) => {
	const logos = (
		<div className={styles.logo}>
			<PictureFrame imgSrc={QUBLogo} altText={"QUB logo"} />
			<PictureFrame imgSrc={UKRILogo} altText={"UKRI logo"} />
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
