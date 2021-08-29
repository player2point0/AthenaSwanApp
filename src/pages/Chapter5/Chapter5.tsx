import { FC } from "react";
import DoubleColumn from "../../core/components/DoubleColumn";
import SingleColumn from "../../core/components/SingleColumn";
import TextBox from "../../core/components/TextBox";
import Title from "../../core/components/Title";
import { ChapterProps } from "../../core/types";

// TODO split into double
const Chapter5: FC<ChapterProps> = ({ addRefsToParent, isMobile }) => {
	const title = (
		<Title text={"CHAPTER 5: What are gender equality initiatives?"} />
	);
	const titleText = (
		<TextBox>
			<p>
				UK academic institutions have allocated large amounts of resources in
				order to advance women’s careers within their STEM departments,
				highlighting that gender equality initiatives and action plans are
				highly valued at the most senior levels of management within these
				institutions.
			</p>
		</TextBox>
	);

	const mainInfo = (
		<>
			<TextBox>
				<p>
					Although some aspects of institutional GEIs may be compulsory, the
					majority of initiatives & action plans are voluntary, and
					participation is freely chosen by staff.
				</p>
			</TextBox>
			<TextBox>
				<p>
					Achieving gender parity in fields such as STEM is important, as it can
					bring about benefits for all individuals in these fields, no matter
					their gender. For example, successful GEIs have been found to result
					in:
				</p>
				<ul>
					<li>a wider talent pool with different perspectives & experiences</li>
					<li>enhanced collaboration & productivity</li>
					<li>improved staff satisfaction & retention</li>
					<li>greater profitability</li>
				</ul>
			</TextBox>
		</>
	);
	const summary = (
		<TextBox>
			<p>
				Despite the focus of these interventions for women, evidence suggests
				that GEIs have no impact on male’s chances of career success, meaning
				they can provide all staff, regardless of their gender, with
				opportunities to advance in their career.
			</p>
		</TextBox>
	);

	return (
		<>
			<DoubleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter5-title", refs)}
				isMobile={isMobile}
				leftElement={title}
				rightElement={titleText}
			/>
			<DoubleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter5-about", refs)}
				isMobile={isMobile}
				leftElement={mainInfo}
				rightElement={summary}
			/>
		</>
	);
};

export default Chapter5;
