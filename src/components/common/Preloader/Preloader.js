import React from 'react';

import preloader from "../../../assets/preloader.svg";

const Preloader = () =>
	<img src={preloader}
		 alt={"Preloader"}
		 style={{position: "absolute", top: 400, left: 800}}/>

export default Preloader;