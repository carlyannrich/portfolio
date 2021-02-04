import React from "react";
import Button from "../components/Button";
import "./home.css";

const label = ["Wow wow woW", "Boom", "Chow"];

export const Home = () => {
    return (
        <div className="Home">
            <section>
                <Button id="large-button" size="large" label={label[2]} />
                <h1> Hello! </h1>
                <Button id="small-button" size="small" label="lowlowlowlow" />
            </section>
        </div>
    );
};
