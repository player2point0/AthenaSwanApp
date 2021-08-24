import { FC, RefObject, useEffect, useRef } from "react";
import styles from "./SingleColumn.module.css";

type Props = {
	addRefsToParent: (refs: Array<RefObject<HTMLBodyElement>>) => void;
};

const SingleColumn: FC<Props> = ({ addRefsToParent, children }) => {
	const mainColumnRef = useRef<HTMLBodyElement>(null);

	useEffect(() => {
		addRefsToParent([mainColumnRef]);
	}, [mainColumnRef]);

	return (
		<section className={styles.singleColumn} ref={mainColumnRef}>
			{children}
		</section>
	);
};

export default SingleColumn;
