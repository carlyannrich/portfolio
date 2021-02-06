import React from "react";
import PropTypes from "prop-types";

import image from "../assets/carly.PNG";
import ProfileImage from "../ProfileImage/index";
import "./header.css";

export const Header = () => (
    <header>
        <div className="wrapper">
            <div>
                <ProfileImage src={image} />
                <h1>Carly Richardson</h1>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]),
};
