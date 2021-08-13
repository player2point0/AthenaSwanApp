import { FC } from "react";
import DoubleColumn from "../../core/components/DoubleColumn";
import SingleColumn from "../../core/components/SingleColumn";
import TextBox from "../../core/components/TextBox";
import Title from "../../core/components/Title";
import { ChapterProps } from "../../core/types";
import IframeResizer from "iframe-resizer-react";

const Chapter6: FC<ChapterProps> = ({ addRefsToParent, isMobile }) => {
	const title = <Title text={"CHAPTER 6:  Questionnaire "} />;
	const titleText = (
		<>
			<TextBox>
				<p>
					Finally, we’d like to gather some of your opinions on the type of GEI
					described in the chapter above, as well as the information/videos
					presented across the previous chapters.
				</p>
			</TextBox>
			<TextBox>
				<p>
					Please rate how much you agree or disagree with the following
					statements:
				</p>
			</TextBox>
		</>
	);

	return (
		<>
			<DoubleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter6-title", refs)}
				isMobile={isMobile}
				leftElement={title}
				rightElement={titleText}
			/>
			<SingleColumn
				addRefsToParent={(refs) =>
					addRefsToParent("chapter6-questionnaire", refs)
				}
			>
				<IframeResizer
					log
					src="https://docs.google.com/forms/d/e/1FAIpQLSfJlujD-0r89wk0rGvxlsifMcHCuV77n-0wNkGzGXwqi2y_5g/viewform?embedded=true"
					style={{ height: "100vh", width: "50%" }}
				/>
			</SingleColumn>
		</>
	);
};

export default Chapter6;
