import { FC, RefObject } from "react";
import DoubleColumn from "../../core/components/DoubleColumn";
import SingleColumn from "../../core/components/SingleColumn";
import TextBox from "../../core/components/TextBox";
import Title from "../../core/components/Title";

type Props = {
	addRefsToParent: (
		name: string,
		refs: Array<RefObject<HTMLBodyElement>>
	) => void;
	isMobile: boolean;
};

const Chapter2: FC<Props> = ({ addRefsToParent, isMobile }) => {
	const title = <Title text={"CHAPTER 2: Why are we doing this?"} />;
	const titleText = (
		<>
			<TextBox>
				<p>
					Gender Equality Initiatives (GEIs) have been widely adopted in STEM
					departments across UK academic institutions, however:
				</p>
				<ul>
					<li>Progress towards gender equality has remained slow</li>
					<li>
						Many STEM fields still require additional intervention if they are
						to achieve gender equality this century
					</li>
				</ul>
			</TextBox>
		</>
	);

	return (
		<>
			<DoubleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter2-title", refs)}
				isMobile={isMobile}
				leftElement={title}
				rightElement={titleText}
			/>
			<SingleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter2-background", refs)}
			>
				<TextBox>
					<p>
						This indicates that there are still significant biases & barriers
						which are limiting the effectiveness of GEIs in these areas, and
						which need to be addressed.
					</p>
					<p>
						Therefore, the overall aim of our project was to gather empirical
						findings on these barriers, so that we could make recommendations on
						how best to improve attitudes towards GEIs amongst STEM academics.
					</p>
				</TextBox>
			</SingleColumn>
		</>
	);
};

export default Chapter2;
