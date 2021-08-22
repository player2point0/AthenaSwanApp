import { FC } from "react";
import styles from "./LikertScaleInput.module.css";

type Props = {
	questionText: string;
	registerField: Object;
};

type optionProps = {
	labelText: string;
	registerField: Object;
	questionText: string;
};

const Option: FC<optionProps> = ({
	labelText,
	registerField,
	questionText,
}) => {
	return (
		<div className={styles.option}>
			<label htmlFor={labelText + questionText}>{labelText}</label>
			<input
				type="radio"
				name="likert"
				value={labelText}
				id={labelText + questionText}
				{...registerField}
			/>
		</div>
	);
};

const LikertScaleInput: FC<Props> = ({ questionText, registerField }) => {
	return (
		<div className={styles.likertContainer}>
			<label className={styles.questionText}>{questionText}</label>
			<div className={styles.optionsContainer}>
				<Option
					registerField={registerField}
					labelText="Strongly disagree"
					questionText={questionText}
				/>
				<Option
					registerField={registerField}
					labelText="Disagree"
					questionText={questionText}
				/>
				<Option
					registerField={registerField}
					labelText="Neither agree nor disagree"
					questionText={questionText}
				/>
				<Option
					registerField={registerField}
					labelText="Agree"
					questionText={questionText}
				/>
				<Option
					registerField={registerField}
					labelText="Strongly agree"
					questionText={questionText}
				/>
			</div>
		</div>
	);
};

export default LikertScaleInput;
