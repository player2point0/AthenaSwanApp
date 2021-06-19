import React from "react";
import ScrollButton from "./ScrollButton";
import Section from "./Section";

const App = () => {
	return (
		<div>
			<ScrollButton />
			<Section />
			<Section red />
			<Section />
			<Section red />
		</div>
	);
};

export default App;
