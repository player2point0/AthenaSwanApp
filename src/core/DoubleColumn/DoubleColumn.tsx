import { FC, ReactElement, RefObject, useEffect, useRef } from "react";
import styles from "./DoubleColumn.module.css";

type Props = {
	addRefsToParent: (refs: Array<RefObject<HTMLBodyElement>>) => void;
	isMobile: boolean;
	leftElement: ReactElement;
	rightElement: ReactElement;
};

const DoubleColumn: FC<Props> = ({
	addRefsToParent,
	isMobile,
	leftElement,
	rightElement,
}) => {
	const mainColumnRef = useRef<HTMLBodyElement>(null);
	const secondaryColumnRef = useRef<HTMLBodyElement>(null);
	const wrappedLeftElement = (
		<div className={styles.leftElement}>{leftElement}</div>
	);
	const wrappedRightElement = (
		<div className={styles.leftElement}>{rightElement}</div>
	);

	useEffect(() => {
		addRefsToParent([mainColumnRef, secondaryColumnRef]);
	}, [addRefsToParent, mainColumnRef, secondaryColumnRef, isMobile]);

	if (isMobile) {
		return (
			<div className={styles.singleColumn}>
				<section ref={mainColumnRef}>{wrappedLeftElement}</section>
				<section ref={secondaryColumnRef}>{wrappedRightElement}</section>
			</div>
		);
	}

	return (
		<section ref={mainColumnRef} className={styles.doubleColumn}>
			{wrappedLeftElement}
			{wrappedRightElement}
		</section>
	);
};

export default DoubleColumn;