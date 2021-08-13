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
						do, and what our research has found. To work through the resource
					</p>
				</TextBox>
				<TextBox>
					<p>Technical description</p>
				</TextBox>
			</SingleColumn>
		</>
	);
};

export default Intro;
