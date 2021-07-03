import { FC, RefObject, useEffect, useRef } from "react";
import styles from "./Chapter1.module.css";

type Props = {
	addRefsToParent: (refs: Array<RefObject<HTMLBodyElement>>) => void;
	isMobile: boolean;
};

const Chapter1: FC<Props> = ({ addRefsToParent, isMobile }) => {
	const mainColumnRef = useRef<HTMLBodyElement>(null);
	const secondaryColumnRef = useRef<HTMLBodyElement>(null);

	useEffect(() => {
		addRefsToParent([mainColumnRef, secondaryColumnRef]);
	}, [addRefsToParent, mainColumnRef, secondaryColumnRef, isMobile]);

	const title = <div className={styles.title}>CHAPTER 1: Who are we?</div>;
	const teamImage = (
		<div className={styles.teamImage}>
			<img
				src={`${process.env.PUBLIC_URL}/assets/images/team.jpg`}
				alt="QUB team"
			/>
		</div>
	);

	if (isMobile) {
		return (
			<div className={styles.singleColumn}>
				<section ref={mainColumnRef}>{title}</section>
				<section ref={secondaryColumnRef}>{teamImage}</section>
			</div>
		);
	}

	return (
		<section ref={mainColumnRef} className={styles.doubleColumn}>
			{title}
			{teamImage}
		</section>
	);
};

export default Chapter1;
