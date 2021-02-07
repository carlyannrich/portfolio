import React from "react";
import PropTypes from "prop-types";

import { Header } from "./Header/index";
import { Section } from "./Section/index";
import { Footer } from "./Footer/index";
import MenuIcon from "./MenuIcon/index";
import "./page.css";

const Page = ({ content, content2, content3, label, ...props }) => {
  return (
    <page>
      <MenuIcon />
      <header>
        <Header />
      </header>

      <div>
        <Section content={content} label={label} />
        <Section content={content2} label={label} />
        <Section content={content3} label={label} />
      </div>

      <footer>
        <Footer primary="true" />
      </footer>
    </page>
  );
};

Page.propTypes = {
  content: PropTypes.string.isRequired,
  content2: PropTypes.string.isRequired,
  content3: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Page;
