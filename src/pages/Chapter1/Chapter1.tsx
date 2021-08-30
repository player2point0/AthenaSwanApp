import { FC } from "react";
import DoubleColumn from "../../core/components/DoubleColumn";
import PictureFrame from "../../core/components/PictureFrame";
import TextBox from "../../core/components/TextBox";
import Title from "../../core/components/Title";
import team from "./team.jpg";
import QUBLogo from "./qub.jpg";
import UKRILogo from "./ukri.jpg";
import { ChapterProps } from "../../core/types";

const Chapter1: FC<ChapterProps> = ({ addRefsToParent, isMobile }) => {
	const title = <Title text={"CHAPTER 1: Who are we?"} />;
	const teamImage = <PictureFrame imgSrc={team} altText={"QUB team"} />;

	const logos = (
		<>
			<PictureFrame imgSrc={QUBLogo} altText={"QUB logo"} />
			<PictureFrame imgSrc={UKRILogo} altText={"UKRI logo"} />
		</>
	);
	const aboutText = (
		<>
			<TextBox>
				<p>
					The following online resource was produced by the Inclusion Matters
					project team based at Queen’s University Belfast.
				</p>
			</TextBox>
			<TextBox>
				<p>
					The project was conducted in collaboration with the University of
					Glasgow and University of Warwick, and was funded by a UK Engineering
					& Physical Sciences Research Council Inclusion Matters Grant.
				</p>
			</TextBox>
		</>
	);

	return (
		<>
			<DoubleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter1-title", refs)}
				isMobile={isMobile}
				leftElement={title}
				rightElement={teamImage}
			/>
			<DoubleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter1-about", refs)}
				isMobile={isMobile}
				leftElement={aboutText}
				rightElement={logos}
			/>
		</>
	);
};

export default Chapter1;
