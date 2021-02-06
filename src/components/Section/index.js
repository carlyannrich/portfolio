import React from "react";
import PropTypes from "prop-types";

import Button from "./../Button/index";
import { Content } from "./../Content/index";
import "./section.css";

export const Section = ({ content = "test content", label, ...props }) => (
    <section>
        <div className="content">
            <h2>
                <Content content={content} />
            </h2>
        </div>
        <div className="button">
            <Button label={label} />
        </div>
    </section>
);

Section.propTypes = {
    content: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
