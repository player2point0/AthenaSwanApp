import { FC } from "react";
import DoubleColumn from "../../core/components/DoubleColumn";
import TextBox from "../../core/components/TextBox";
import { ChapterProps } from "../../core/types";

const Intro: FC<ChapterProps> = ({ addRefsToParent, isMobile }) => {
	const overview = (
		<>
			<TextBox>
				<p>
					Welcome to our online resource. In the pages that follow, you will
					read through several “Chapters” which explain who we are, what we do,
					and what our research has found.
				</p>
			</TextBox>
			<TextBox>
				<p>Chapters overview:</p>
				<ul>
					<li>CHAPTER 1: Who are we?</li>
					<li>CHAPTER 2: Why are we doing this?</li>
					<li>CHAPTER 3: What do we know about gender bias?</li>
					<li>CHAPTER 4: What does it feel like to be a woman in STEM?</li>
					<li>CHAPTER 5: What are gender equality initiatives?</li>
					<li>CHAPTER 6: Questionnaire</li>
				</ul>
			</TextBox>
		</>
	);

	const technicalInfo = (
		<TextBox>
			<p>
				To work through the resource scroll down or use the scroll button on the
				side to move to the next page. Some pages contain interactive content
				such as a YouTube video or a questionnaire, be sure to interactive with
				them to get the most out of the resource.
			</p>
		</TextBox>
	);

	return (
		<>
			<DoubleColumn
				addRefsToParent={(refs) => addRefsToParent("intro", refs)}
				isMobile={isMobile}
				leftElement={overview}
				rightElement={technicalInfo}
			/>
		</>
	);
};

export default Intro;
