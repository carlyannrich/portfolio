import React from "react";
import PropTypes from "prop-types";

import { Header } from "./Header/index";
import { Section } from "./Section/index";
import "./page.css";

const Page = ({ content, label }) => (
    <article>
        <Header />

        <Section content={content} label={label} />
    </article>
);

Page.propTypes = {
    content: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Page;
