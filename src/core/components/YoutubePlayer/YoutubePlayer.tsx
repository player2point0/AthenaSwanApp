import { FC } from "react";
import { useScreenHeight, useScreenWidth } from "../../hooks/Window";
import styles from "./YoutubePlayer.module.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type Props = {
	videoId: string;
};

const YoutubePlayer: FC<Props> = ({ videoId }) => {
	const screenWidth = useScreenWidth();
	const screenHeight = useScreenHeight();

	let playerWidth = Math.floor(screenWidth * 0.95);
	let playerHeight = Math.floor(playerWidth * (9 / 16));

	if (playerHeight > screenHeight) {
		playerHeight = Math.floor(screenHeight * 0.95);
		playerWidth = Math.floor(playerHeight * (16 / 9));
	}

	return (
		<div
			className={styles.playerContainer}
			style={{ width: playerWidth, height: playerHeight }}
		>
			<LiteYouTubeEmbed
				id={videoId}
				title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
				announce={""}
			/>

			{/* <iframe
				width={playerWidth}
				height={playerHeight}
				src={url}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe> */}
		</div>
	);
};

export default YoutubePlayer;
