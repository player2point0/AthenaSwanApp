import { RefObject } from "react";
import { UseFormRegister } from "react-hook-form";

export type ChapterProps = {
	addRefsToParent: (
		name: string,
		refs: Array<RefObject<HTMLBodyElement>>
	) => void;
	isMobile: boolean;
	scrollToNextSection?: () => void;
};

export interface ChapterWithFormProps extends ChapterProps {
	registerField: UseFormRegister<UserResponseFormFields>;
	submitForm?: any;
}

export type UserResponseFormFields = {
	chpt4_freeText: string;
	chpt6_1: string;
	chpt6_2: string;
	chpt6_3: string;
	chpt6_4: string;
	chpt6_5: string;
	chpt6_6: string;
	chpt6_7: string;
	chpt6_8: string;
	chpt6_9: string;
	chpt6_10: string;
};
