import { RefObject, useEffect, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const axios = require("axios");

const App = () => {
	const screenWidth = useScreenWidth();
	const isMobile = screenWidth <= 768;

	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm<UserResponseFormFields>({ mode: "onChange" });
	const submit = handleSubmit(
		(data) => {
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

			axios({
				method: "post",
				url: paramUrl,
			}).finally((res: any) => {
				toast("Successfully submitted response.", { type: "success" });
			});
		},
		(errors) => {
			console.log("form errors");
		}
	);

	const [sectionRefs, setSectionRefs] = useState(
		new Map<string, RefObject<HTMLBodyElement>>()
	);

	const scrollToNextSection = () => {
		//getBoundingClientRect is relative to viewport
		const refs = Array.from(sectionRefs.values());

		const sortedSections = refs.sort((a, b) => {
			if (!a.current || !b.current) {
				return 0;
			}
			return (
				a.current?.getBoundingClientRect().y -
				b.current?.getBoundingClientRect().y
			);
		});

		const sortedSectionsAfterCurrent = sortedSections.filter((section) => {
			if (!section.current) {
				return false;
			}

			return Math.round(section.current?.getBoundingClientRect().y) > 0;
		});

		if (sortedSectionsAfterCurrent.length >= 1) {
			sortedSectionsAfterCurrent[0].current?.scrollIntoView({
				behavior: "smooth",
			});
		} else {
			// last sections so scroll to end
			const lastIndex = sortedSections.length - 1;

			sortedSections[lastIndex].current?.scrollIntoView({
				block: "end",
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

			const newRefs = new Map(currentRefs);

			for (let i = 0; i < nonNullRefs.length; i++) {
				newRefs.set(`${name}-${i}`, nonNullRefs[i]);
			}

			return newRefs;
		});
	};

	// TODO fix mobile support
	useEffect(() => {
		const refs = Array.from(sectionRefs.values());

		const sortedSections = refs.sort((a, b) => {
			if (!a.current || !b.current) {
				return 0;
			}
			return (
				a.current?.getBoundingClientRect().y -
				b.current?.getBoundingClientRect().y
			);
		});

		for (let i = 0; i < refs.length; i += 2) {
			sortedSections[i].current?.setAttribute(
				"style",
				"background-color:#D6000D"
			);
		}
	}, [sectionRefs.size, isMobile]);

	return (
		<>
			<ToastContainer />
			<ScrollButton onClick={scrollToNextSection} />
			<Intro isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter1 isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter2 isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter3 isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter4
				isMobile={isMobile}
				addRefsToParent={addRefsToParent}
				registerField={register}
				scrollToNextSection={scrollToNextSection}
			/>
			<Chapter5 isMobile={isMobile} addRefsToParent={addRefsToParent} />
			<Chapter6
				isMobile={isMobile}
				addRefsToParent={addRefsToParent}
				registerField={register}
				submitForm={submit}
				formHasErrors={!isValid}
			/>
		</>
	);
};

export default App;
