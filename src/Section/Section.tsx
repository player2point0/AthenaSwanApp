import { FC, forwardRef, Ref } from "react";
import styles from "./Section.module.css";

type Props = {
	red?: boolean;
	ref: Ref<HTMLBodyElement>;
};

const Section: FC<Props> = forwardRef((props, ref) => {
	const { red } = props;
	const backgroundColor = red ? "red" : "white";

	return (
		<section
			ref={ref}
			className={styles.sectionBody}
			style={{ backgroundColor: backgroundColor }}
		></section>
	);
});

// const Section: FC<Props> = (props) => {
// 	const { red } = props;
// 	const backgroundColor = red ? "red" : "white";

// 	return forwardRef((_props, ref) => (
// 		<section
// 			ref={ref}
// 			className={styles.sectionBody}
// 			style={{ backgroundColor: backgroundColor }}
// 		></section>
// 	));
// };

export default Section;
