import { FC } from "react";
import DoubleColumn from "../../core/components/DoubleColumn";
import SingleColumn from "../../core/components/SingleColumn";
import TextBox from "../../core/components/TextBox";
import Title from "../../core/components/Title";
import YoutubePlayer from "../../core/components/YoutubePlayer";
import { ChapterProps } from "../../core/types";

const Chapter3: FC<ChapterProps> = ({ addRefsToParent, isMobile }) => {
	const title = (
		<Title text={"CHAPTER 3: What do we know about gender bias?"} />
	);
	const titleText = (
		<>
			<TextBox>
				<p>
					Despite some progress in recent years, research has suggested that
					gender biases & stereotypes in STEM fields are still prevalent.
				</p>
				<p>
					Please watch this short video about some of the causes & consequences
					of these gender biases:
				</p>
			</TextBox>
		</>
	);

	return (
		<>
			<DoubleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter3-title", refs)}
				isMobile={isMobile}
				leftElement={title}
				rightElement={titleText}
			/>
			<SingleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter3-video", refs)}
			>
				<YoutubePlayer url="https://www.youtube.com/embed/S1aYsLs9B8U" />
			</SingleColumn>
		</>
	);
};

export default Chapter3;
