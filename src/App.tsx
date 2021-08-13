// import IframeResizer from "iframe-resizer-react";
import { RefObject, useEffect, useState } from "react";
import ScrollButton from "./core/components/ScrollButton";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Chapter3 from "./pages/Chapter3";

const App = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [width, setWidth] = useState<number>(window.innerWidth);
	const isMobile = width <= 768;

	const [sectionRefs, setSectionRefs] = useState(
		new Map<string, RefObject<HTMLBodyElement>>()
	);

	function updatePosition() {
		setScrollPosition(Math.round(window.pageYOffset));
	}

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener("scroll", updatePosition);
		return () => window.removeEventListener("scroll", updatePosition);
	}, []);
	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

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
		<div>
			<ScrollButton onClick={scrollToNextSection} />
			<Chapter1 isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter2 isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter3 isMobile={isMobile} addRefsToParent={addRefsToParent} />

			{/* <Section red ref={surveySectionRef}>
				<IframeResizer
					log
					src="https://docs.google.com/forms/d/e/1FAIpQLSfJlujD-0r89wk0rGvxlsifMcHCuV77n-0wNkGzGXwqi2y_5g/viewform?embedded=true"
					style={{ height: "100vh", width: "50%" }}
				/>
			</Section> */}
		</div>
	);
};

export default App;
