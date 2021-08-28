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

export const useScreenHeight = () => {
	const [height, setHeight] = useState<number>(window.innerHeight);

	function handleWindowSizeChange() {
		setHeight(window.innerHeight);
	}

	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	return height;
};

export const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(
		Math.round(window.pageYOffset)
	);

	function updatePosition() {
		setScrollPosition(Math.round(window.pageYOffset));
	}

	useEffect(() => {
		window.addEventListener("scroll", updatePosition);
		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	return scrollPosition;
};
