import React from "react";
import { AboutData } from "../../data/aboutData";

function Home() {
    const {
        intro,
        main,
    } = AboutData;
    return (
        <div className="home-content">
            <h1 className="title">{intro}</h1>
            <h2 className="sub-title">{main}</h2>
        </div>
    );
}
export default Home;
