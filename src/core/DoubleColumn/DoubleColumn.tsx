import { FC, ReactElement, RefObject, useEffect, useRef } from "react";
import styles from "./DoubleColumn.module.css";

export type DoubleColumnProps = {
	addRefsToParent: (refs: Array<RefObject<HTMLBodyElement>>) => void;
	isMobile: boolean;
};

interface Props extends DoubleColumnProps {
	leftElement: ReactElement;
	rightElement: ReactElement;
}

export const DoubleColumn: FC<Props> = ({
	addRefsToParent,
	isMobile,
	leftElement,
	rightElement,
}) => {
	const mainColumnRef = useRef<HTMLBodyElement>(null);
	const secondaryColumnRef = useRef<HTMLBodyElement>(null);

	useEffect(() => {
		addRefsToParent([mainColumnRef, secondaryColumnRef]);
	}, [addRefsToParent, mainColumnRef, secondaryColumnRef, isMobile]);

	if (isMobile) {
		return (
			<div className={styles.singleColumn}>
				<section ref={mainColumnRef}>{leftElement}</section>
				<section ref={secondaryColumnRef}>{rightElement}</section>
			</div>
		);
	}

	return (
		<section ref={mainColumnRef} className={styles.doubleColumn}>
			{leftElement}
			{rightElement}
		</section>
	);
};
