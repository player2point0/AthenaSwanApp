import { FC } from "react";
// import styles from "./Chapter1Title.module.css";
import {
	DoubleColumnProps,
	DoubleColumn,
} from "../../core/DoubleColumn/DoubleColumn";
import team from "./team.jpg";
import Title from "../../core/Title";
import PictureFrame from "../../core/PictureFrame";

const Chapter1Title: FC<DoubleColumnProps> = ({
	addRefsToParent,
	isMobile,
}) => {
	const title = <Title text={"CHAPTER 1: Who are we?"} />;
	const teamImage = <PictureFrame imgSrc={team} altText={"QUB team"} />;

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
