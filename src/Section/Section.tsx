import { FC } from "react";
import styles from "./Section.module.css";

type Props = {
	red?: boolean;
};

const Section: FC<Props> = ({ red }) => {
	const backgroundColor = red ? "red" : "white";

	return (
		<section
			className={styles.sectionBody}
			style={{ backgroundColor: backgroundColor }}
		></section>
	);
};

export default Section;
