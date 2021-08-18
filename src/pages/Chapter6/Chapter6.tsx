import { FC } from "react";
import DoubleColumn from "../../core/components/DoubleColumn";
import LikertScaleInput from "../../core/components/LikertScaleInput";
import SingleColumn from "../../core/components/SingleColumn";
import TextBox from "../../core/components/TextBox";
import Title from "../../core/components/Title";
import { ChapterWithFormProps } from "../../core/types";

const Chapter6: FC<ChapterWithFormProps> = ({
	addRefsToParent,
	isMobile,
	registerField,
	submitForm,
}) => {
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
				<LikertScaleInput
					registerField={registerField("chpt6_1", { required: true })}
					questionText="I would like to work for a university with this type of Gender Equality Initiative."
				/>
				<LikertScaleInput
					registerField={registerField("chpt6_2", { required: true })}
					questionText="As part of my administrative roles, I would choose to get involved in this type of Gender Equality Initiative."
				/>
				<LikertScaleInput
					registerField={registerField("chpt6_3", { required: true })}
					questionText="A University with this type of Gender Equality Initiative seems like a fair place to work."
				/>
				<LikertScaleInput
					registerField={registerField("chpt6_4", { required: true })}
					questionText="A University with this type of Gender Equality Initiative would be a good place for someone like me to work."
				/>
				<LikertScaleInput
					registerField={registerField("chpt6_5", { required: true })}
					questionText="I would participate in initiatives like this Gender Equality Initiative because I would want to."
				/>
				<LikertScaleInput
					registerField={registerField("chpt6_6", { required: true })}
					questionText="I would participate in initiatives like this Gender Equality Initiative because they are personally important to me."
				/>
				<LikertScaleInput
					registerField={registerField("chpt6_7", { required: true })}
					questionText="I feel confident in my ability to address instances of gender bias in my professional field."
				/>
				<LikertScaleInput
					registerField={registerField("chpt6_8", { required: true })}
					questionText="The information presented in this online resource has provided opportunities for me to strengthen my ability to address gender bias in my professional field."
				/>
				<LikertScaleInput
					registerField={registerField("chpt6_9", { required: true })}
					questionText="I feel hopeful about using the information provided in the online resource to address examples of gender bias in my professional field."
				/>
				<LikertScaleInput
					registerField={registerField("chpt6_10", { required: true })}
					questionText="I have a strong belief that I can help tackle gender bias in my professional field."
				/>

				<button onClick={submitForm}>Submit</button>
				{/* <iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSfJlujD-0r89wk0rGvxlsifMcHCuV77n-0wNkGzGXwqi2y_5g/viewform?embedded=true"
					width="100%"
					height="3000px"
					title="inclusion matters"
				>
					Loading…
				</iframe> */}
			</SingleColumn>
		</>
	);
};

export default Chapter6;
