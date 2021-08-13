import { useEffect, useState } from "react";

export const useScreenWidth = () => {
	const [width, setWidth] = useState<number>(window.innerWidth);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	return width;
};
