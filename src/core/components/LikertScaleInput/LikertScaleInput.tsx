import { FC } from "react";
import styles from "./LikertScaleInput.module.css";

type Props = {
	questionText: String;
	registerField: Object;
};

const LikertScaleInput: FC<Props> = ({ questionText, registerField }) => {
	// TODO does name need to be the question name / input name??
	return (
		<div>
			<label>{questionText}</label>
			<div className={styles.optionsContainer}>
				<div className={styles.option}>
					<input
						type="radio"
						name="likert"
						value="strong_agree"
						{...registerField}
					/>
					<label>Strongly agree</label>
				</div>
				<div className={styles.option}>
					<input type="radio" name="likert" value="agree" {...registerField} />
					<label>Agree</label>
				</div>
				<div className={styles.option}>
					<input
						type="radio"
						name="likert"
						value="neutral"
						{...registerField}
					/>
					<label>Neutral</label>
				</div>
				<div className={styles.option}>
					<input
						type="radio"
						name="likert"
						value="disagree"
						{...registerField}
					/>
					<label>Disagree</label>
				</div>
				<div className={styles.option}>
					<input
						type="radio"
						name="likert"
						value="strong_disagree"
						{...registerField}
					/>
					<label>Strongly disagree</label>
				</div>
			</div>
		</div>
	);
};

export default LikertScaleInput;
