import { RefObject } from "react";

export type ChapterProps = {
	addRefsToParent: (
		name: string,
		refs: Array<RefObject<HTMLBodyElement>>
	) => void;
	isMobile: boolean;
};
