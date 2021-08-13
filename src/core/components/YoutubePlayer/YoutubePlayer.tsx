import { FC, useEffect, useState } from "react";

type Props = {
	url: string;
};

const YoutubePlayer: FC<Props> = ({ url }) => {
	// TODO make this a custom hook
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

	// TODO probably need to take into account mobile
	const playerWidth = width * 0.9;
	const playerHeight = playerWidth * (9 / 16);

	return (
		<iframe
			width={playerWidth}
			height={playerHeight}
			src={url}
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe>
	);
};

export default YoutubePlayer;
