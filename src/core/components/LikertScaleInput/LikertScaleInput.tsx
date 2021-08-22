import { FC } from "react";
import styles from "./LikertScaleInput.module.css";

type Props = {
	questionText: String;
	registerField: Object;
};

type optionProps = {
	labelText: string;
	registerField: Object;
};

const Option: FC<optionProps> = ({ labelText, registerField }) => {
	return (
		<div className={styles.option}>
			<label>{labelText}</label>
			<input type="radio" name="likert" value={labelText} {...registerField} />
		</div>
	);
};

// TODO does name need to be the question name / input name??
const LikertScaleInput: FC<Props> = ({ questionText, registerField }) => {
	return (
		<div className={styles.likertContainer}>
			<label className={styles.questionText}>{questionText}</label>
			<div className={styles.optionsContainer}>
				<Option registerField={registerField} labelText="Strongly disagree" />
				<Option registerField={registerField} labelText="Disagree" />
				<Option
					registerField={registerField}
					labelText="Neither agree nor disagree"
				/>
				<Option registerField={registerField} labelText="Agree" />
				<Option registerField={registerField} labelText="Strongly agree" />
			</div>
		</div>
	);
};

export default LikertScaleInput;
