import { FC } from "react";
import styles from "./TextBox.module.css";

type Props = {
	text: String;
};

// TODO could be fancy and make this work with a TextBoxLine component:
{
	/* <TextBox>
	<TextBoxLine>line 1 text</TextBoxLine>
	<TextBoxLine>line 2 text</TextBoxLine>
</TextBox> */
}

const TextBox: FC<Props> = ({ text }) => {
	return <p className={styles.TextBoxText}>{text}</p>;
};

export default TextBox;
