import { FC } from "react";
import SingleColumn from "../../core/components/SingleColumn";
import TextBox from "../../core/components/TextBox";
import { ChapterProps } from "../../core/types";

const Intro: FC<ChapterProps> = ({ addRefsToParent }) => {
	return (
		<>
			<SingleColumn addRefsToParent={(refs) => addRefsToParent("intro", refs)}>
				<TextBox>
					<p>
						Welcome to our online resource. In the pages that follow, you will
						read through several “Chapters” which explain who we are, what we
						do, and what our research has found.
					</p>

					<h4>CHAPTER 1: Who are we?</h4>
					<h4>CHAPTER 2: Why are we doing this?</h4>
					<h4>CHAPTER 3: What do we know about gender bias?</h4>
					<h4>CHAPTER 4: What does it feel like to be a woman in STEM?</h4>
					<h4>CHAPTER 5: What are gender equality initiatives?</h4>
					<h4>CHAPTER 6: Questionnaire</h4>
				</TextBox>
				<TextBox>
					<p>
						To work through the resource scroll down or use the scroll button on
						the side to move to the next page. Some pages contain interactive
						content such as a YouTube video or a questionnaire, be sure to
						interactive with them to get the most out of the resource.
					</p>
				</TextBox>
			</SingleColumn>
		</>
	);
};

export default Intro;
