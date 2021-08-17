import { RefObject, useState } from "react";
import ScrollButton from "./core/components/ScrollButton";
import { useScreenWidth } from "./core/hooks/Window";
import { useForm } from "react-hook-form";
import Intro from "./pages/Intro";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Chapter3 from "./pages/Chapter3";
import Chapter4 from "./pages/Chapter4";
import Chapter5 from "./pages/Chapter5";
import Chapter6 from "./pages/Chapter6";
import { UserResponseFormFields } from "./core/types";

const App = () => {
	const screenWidth = useScreenWidth();
	const isMobile = screenWidth <= 768;

	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm<UserResponseFormFields>();
	const submit = handleSubmit((data) => console.log(data));

	const [sectionRefs, setSectionRefs] = useState(
		new Map<string, RefObject<HTMLBodyElement>>()
	);

	const scrollToNextSection = () => {
		//getBoundingClientRect is relative to viewport
		const refs = Array.from(sectionRefs.values());

		const sectionsAfterCurrent = refs.filter((section) => {
			if (!section.current) {
				return false;
			}

			return Math.round(section.current?.getBoundingClientRect().y) > 0;
		});
		const sortedSectionsAfterCurrent = sectionsAfterCurrent.sort((a, b) => {
			if (!a.current || !b.current) {
				return 0;
			}
			return (
				a.current?.getBoundingClientRect().y -
				b.current?.getBoundingClientRect().y
			);
		});

		if (sortedSectionsAfterCurrent.length >= 1) {
			sortedSectionsAfterCurrent[0].current?.scrollIntoView({
				behavior: "smooth",
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
			<Chapter4
				isMobile={isMobile}
				addRefsToParent={addRefsToParent}
				registerField={register}
			/>
			<Chapter5 isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter6
				isMobile={isMobile}
				addRefsToParent={addRefsToParent}
				registerField={register}
				submitForm={submit}
			/>
		</>
	);
};

export default App;
