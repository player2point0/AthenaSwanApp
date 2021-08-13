import { RefObject, useState } from "react";
import ScrollButton from "./core/components/ScrollButton";
import { useScreenWidth, useScrollPosition } from "./core/hooks";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Chapter3 from "./pages/Chapter3";
import Chapter4 from "./pages/Chapter4";
import Chapter5 from "./pages/Chapter5";
import Chapter6 from "./pages/Chapter6";
import Intro from "./pages/Intro";

const App = () => {
	const screenWidth = useScreenWidth();
	const scrollPosition = useScrollPosition();
	const isMobile = screenWidth <= 768;

	const [sectionRefs, setSectionRefs] = useState(
		new Map<string, RefObject<HTMLBodyElement>>()
	);

	const scrollToNextSection = () => {
		const refs = Array.from(sectionRefs.values());
		const sortedSections = refs.sort((a, b) => {
			if (!a.current || !b.current) {
				return 0;
			}
			return a.current?.offsetTop - b.current?.offsetTop;
		});
		const nextSections = sortedSections.filter((section) => {
			if (!section.current) {
				return false;
			}
			return section.current?.offsetTop > scrollPosition;
		});
		if (nextSections.length >= 1) {
			nextSections[0].current?.scrollIntoView({ behavior: "smooth" });
		} else {
			// last section
			const lastIndex = sortedSections.length - 1;
			sortedSections[lastIndex].current?.scrollIntoView({
				behavior: "smooth",
				block: "end",
			});
		}
	};

	const addRefsToParent = (
		name: string,
		refs: Array<RefObject<HTMLBodyElement>>
	) => {
		setSectionRefs((currentRefs) => {
			const nonNullRefs = refs.filter(
				(ref) => ref !== null && ref.current !== null
			);
			for (let i = 0; i < nonNullRefs.length; i++) {
				currentRefs.set(`${name}-${i}`, nonNullRefs[i]);
			}

			return currentRefs;
		});
	};

	// TODO possibly using the refs maybe programmatically set the background color
	// maybe wrap all components in some kind of dynamic style applier

	return (
		<>
			<ScrollButton onClick={scrollToNextSection} />
			<Intro isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter1 isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter2 isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter3 isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter4 isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter5 isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter6 isMobile={isMobile} addRefsToParent={addRefsToParent} />
		</>
	);
};

export default App;
