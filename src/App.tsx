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
const axios = require("axios");

const App = () => {
	const screenWidth = useScreenWidth();
	const isMobile = screenWidth <= 768;

	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm<UserResponseFormFields>();
	const submit = handleSubmit((data) => {
		const params = [];
		if (data.chpt4_freeText) {
			params.push(`entry.992439576=${data.chpt4_freeText}`);
		}
		params.push(`entry.88102718=${data.chpt6_1}`);

		params.push(`entry.292649352=${data.chpt6_2}`);
		params.push(`entry.107131143=${data.chpt6_3}`);
		params.push(`entry.822750405=${data.chpt6_4}`);
		params.push(`entry.1515113063=${data.chpt6_5}`);
		params.push(`entry.1055747965=${data.chpt6_6}`);
		params.push(`entry.562075540=${data.chpt6_7}`);
		params.push(`entry.462816747=${data.chpt6_8}`);
		params.push(`entry.925772841=${data.chpt6_9}`);
		params.push(`entry.1321632915=${data.chpt6_10}`);

		const url =
			"https://docs.google.com/forms/u/0/d/e/1FAIpQLSfJlujD-0r89wk0rGvxlsifMcHCuV77n-0wNkGzGXwqi2y_5g/formResponse";

		const paramUrl = url + "?" + params.join("&") + "&submit=Submit";

		// todo add UI feedback
		axios({
			method: "post",
			url: paramUrl,
		})
			.then((res: any) => {
				console.log(res);
			})
			.catch((res: any) => {
				console.log(res);
			});
	});

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
