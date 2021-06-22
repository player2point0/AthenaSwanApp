import { FC, forwardRef, Ref } from "react";
import styles from "./Section.module.css";

type Props = {
	red?: boolean;
	ref: Ref<HTMLBodyElement>;
};

const Section: FC<Props> = forwardRef((props, ref) => {
	const { red, children } = props;
	const backgroundColor = red ? "red" : "white";

	return (
		<section
			ref={ref}
			className={styles.sectionBody}
			style={{ backgroundColor: backgroundColor }}
		>
			{children}
		</section>
	);
});

export default Section;
