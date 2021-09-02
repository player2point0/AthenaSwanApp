import { FC } from "react";
import styles from "./PictureFrame.module.css";

type Props = {
	imgSrc: string;
	altText: string;
};

// TODO serve up a different sized image for mobile
// https://web.dev/uses-responsive-images/?utm_source=lighthouse&utm_medium=devtools
const PictureFrame: FC<Props> = ({ imgSrc, altText }) => {
	return <img className={styles.pictureFrame} src={imgSrc} alt={altText} />;
};

export default PictureFrame;
