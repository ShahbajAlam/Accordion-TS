import { useState } from "react";

import collapse from "../public/up-arrow.png";
import expand from "../public/down-arrow.png";

type AccordionProps = {
    index: number;
    item: {
        title: string;
        description: string;
    };
    selectedItem: number | null;
    onAccordionClick: () => void;
};

function Accordion(props: AccordionProps) {
    const [toggleButton, setToggleButton] = useState(false);
    const [classname, setClassname] = useState("hidden");

    const handleClick = () => {
        props.onAccordionClick();
        setToggleButton((prev) => !prev);
        setClassname((prev) => (prev === "hidden" ? "show" : "hidden"));
    };

    return (
        <div className="container">
            <div className="header">
                <h4>{props.item.title}</h4>
                <img
                    role="button"
                    alt="toggle button"
                    src={toggleButton ? collapse : expand}
                    onClick={handleClick}
                />
            </div>
            <div className={`body ${classname}`}>
                <p>{props.item.description}</p>
            </div>
        </div>
    );
}

export default Accordion;
