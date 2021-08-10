import { FC } from "react";
import styles from "./PictureFrame.module.css";

type Props = {
	imgSrc: string;
	altText: string;
};

const PictureFrame: FC<Props> = ({ imgSrc, altText }) => {
	return <img className={styles.pictureFrame} src={imgSrc} alt={altText} />;
};

export default PictureFrame;
