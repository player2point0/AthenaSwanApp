import { FC, useState } from "react";
import DoubleColumn from "../../core/components/DoubleColumn";
import SingleColumn from "../../core/components/SingleColumn";
import TextBox from "../../core/components/TextBox";
import Title from "../../core/components/Title";
import YoutubePlayer from "../../core/components/YoutubePlayer";
import { ChapterWithFormProps } from "../../core/types";
import styles from "./Chapter4.module.css";

const Chapter4: FC<ChapterWithFormProps> = ({
	addRefsToParent,
	isMobile,
	registerField,
}) => {
	const [isMale, setIsMale] = useState(true);

	const title = (
		<Title text={"CHAPTER 4:  What does it feel like to be a woman in STEM?"} />
	);

	// TODO should probably scroll depending to next section
	const buttons = (
		<TextBox>
			<p>I am a...</p>
			<button className={styles.sexButton} onClick={() => setIsMale(true)}>
				Male
			</button>
			<button className={styles.sexButton}>Female</button>
		</TextBox>
	);

	// todo scroll onn save

	const isMaleSections = (
		<>
			<SingleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter4-about", refs)}
			>
				<TextBox>
					<p>
						We would now like you to watch the following short video which aims
						to display what it is like to be a woman in STEM.
					</p>
				</TextBox>
				<TextBox>
					<p>
						After watching the video you will be asked to briefly reflect on the
						experience.
					</p>
				</TextBox>
			</SingleColumn>
			<SingleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter4-video", refs)}
			>
				<YoutubePlayer url="https://www.youtube.com/embed/vYsXu3ZrYnw" />
			</SingleColumn>
			<SingleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter4-input-text", refs)}
			>
				<TextBox>
					<p>
						Using the information from the gender bias presentation and
						reflecting on the video you just watched, imagine that day in the
						life of the woman attending a research conference in your academic
						field, looking at the world through her eyes and walking through the
						world in her shoes.
					</p>
				</TextBox>
				<TextBox>
					<p>
						In the text box below, please write for the next 5 minutes about how
						you would imagine this research conference experience and how it
						would make you feel as that woman. As a reminder, your responses are
						anonymous.
					</p>
				</TextBox>
				<TextBox>
					<p>
						<b>
							As you write, remember that her perspective is your perspective.
							You are her.
						</b>
					</p>
				</TextBox>
			</SingleColumn>
			<SingleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter4-input", refs)}
			>
				<label className={styles.freeTextInputLabel} htmlFor="chpt4_freeText">
					Your perspective
				</label>
				<textarea
					id="chpt4_freeText"
					className={styles.freeTextInput}
					{...registerField("chpt4_freeText")}
				/>
				<button className={styles.saveButton}>Save</button>
			</SingleColumn>
		</>
	);

	return (
		<>
			<DoubleColumn
				addRefsToParent={(refs) => addRefsToParent("chapter4-title", refs)}
				isMobile={isMobile}
				leftElement={title}
				rightElement={buttons}
			/>
			{isMale && isMaleSections}
		</>
	);
};

export default Chapter4;
