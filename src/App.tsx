import IframeResizer from "iframe-resizer-react";
import { useLayoutEffect, useState, useRef } from "react";
import ScrollButton from "./ScrollButton";
import Section from "./Section";
import SurveySection from "./SurveySection";

// scroll options
// 1. store a ref to the next section and a button that will scroll to the next in each section
// 2. keep trap of the scroll position and have a single button that will scroll to what it thinks is the next

const App = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const landingSectionRef = useRef<HTMLBodyElement>(null);
	const introSectionRef = useRef<HTMLBodyElement>(null);
	const reportSectionRef = useRef<HTMLBodyElement>(null);
	const surveySectionRef = useRef<HTMLBodyElement>(null);
	const sectionRefs = [
		landingSectionRef,
		introSectionRef,
		reportSectionRef,
		surveySectionRef,
	];

	useLayoutEffect(() => {
		function updatePosition() {
			setScrollPosition(Math.round(window.pageYOffset));
		}
		window.addEventListener("scroll", updatePosition);
		updatePosition();
		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	const scrollToNextSection = () => {
		const sortedSections = sectionRefs.sort((a, b) => {
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

	return (
		<div>
			<ScrollButton onClick={scrollToNextSection} />
			<Section ref={landingSectionRef} />
			<Section red ref={introSectionRef} />
			<Section ref={reportSectionRef} />
			<Section red ref={surveySectionRef}>
				<IframeResizer
					log
					src="https://docs.google.com/forms/d/e/1FAIpQLSfJlujD-0r89wk0rGvxlsifMcHCuV77n-0wNkGzGXwqi2y_5g/viewform?embedded=true"
					style={{ height: "100vh", width: "50%" }}
				/>
			</Section>
		</div>
	);
};

export default App;
