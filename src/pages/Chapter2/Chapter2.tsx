import { FC, RefObject } from "react";
import DoubleColumn from "../../core/DoubleColumn";
import SingleColumn from "../../core/SingleColumn";
import TextBox from "../../core/TextBox";
import Title from "../../core/Title";

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
			<TextBox
				text={
					"Gender Equality Initiatives (GEIs) have been widely adopted in STEM departments across UK academic institutions, however:"
				}
			/>
			<TextBox text={"Progress towards gender equality has remained slow"} />
			<TextBox
				text={
					"Many STEM fields still require additional intervention if they are to achieve gender equality this century"
				}
			/>
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
				<TextBox
					text={
						"This indicates that there are still significant biases & barriers which are limiting the effectiveness of GEIs in these areas, and which need to be addressed."
					}
				/>
				<TextBox
					text={
						"Therefore, the overall aim of our project was to gather empirical findings on these barriers, so that we could make recommendations on how best to improve attitudes towards GEIs amongst STEM academics."
					}
				/>
			</SingleColumn>
		</>
	);
};

export default Chapter2;
