import { FC } from "react";
import { useScreenWidth } from "../../hooks/Window";
import styles from "./YoutubePlayer.module.css";

type Props = {
	url: string;
};

const YoutubePlayer: FC<Props> = ({ url }) => {
	const screenWidth = useScreenWidth();

	// TODO probably need to take into account mobile
	const playerWidth = Math.floor(screenWidth * 0.95);
	const playerHeight = Math.floor(playerWidth * (9 / 16));

	return (
		<div className={styles.playerContainer}>
			<iframe
				width={playerWidth}
				height={playerHeight}
				src={url}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default YoutubePlayer;
