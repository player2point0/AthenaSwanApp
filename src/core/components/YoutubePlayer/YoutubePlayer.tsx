import { FC } from "react";
import { useScreenWidth } from "../../hooks/Window";

type Props = {
	url: string;
};

const YoutubePlayer: FC<Props> = ({ url }) => {
	const screenWidth = useScreenWidth();

	// TODO probably need to take into account mobile
	const playerWidth = screenWidth * 0.9;
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
