import { FC } from "react";
import styles from "./Chapter1Title.module.css";
import {
	DoubleColumnProps,
	DoubleColumn,
} from "../../core/DoubleColumn/DoubleColumn";
import team from "./team.jpg";

const Chapter1Title: FC<DoubleColumnProps> = ({
	addRefsToParent,
	isMobile,
}) => {
	const title = <div className={styles.title}>CHAPTER 1: Who are we?</div>;
	const teamImage = (
		<div className={styles.teamImage}>
			<img src={team} alt="QUB team" />
		</div>
	);

	return (
		<DoubleColumn
			addRefsToParent={addRefsToParent}
			isMobile={isMobile}
			leftElement={title}
			rightElement={teamImage}
		/>
	);
};

export default Chapter1Title;
