import React from "react";

import { Header } from "./Header/index";
import "./page.css";

const Page = () => (
    <article>
        <Header />

        <section>
            <h2>Pages in Storybook</h2>
            <p>
                Get a guided tutorial on component-driven development at{" "}
                <a
                    href="https://www.learnstorybook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Storybook
                </a>
                . Read more in the{" "}
                <a
                    href="https://storybook.js.org/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    docs
                </a>
                .
            </p>
        </section>
    </article>
);

export default Page;
