import { useState } from "react";
import Accordion from "./Accordion";

type DataProps = {
    title: string;
    description: string;
};

const data: DataProps[] = [
    {
        title: "React",
        description:
            "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
    },
    {
        title: "Angular",
        description:
            "Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google",
    },
    {
        title: "NextJS",
        description:
            "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering",
    },
];

function App() {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const handleAccordionClick = (index: number): void => {
        setSelectedItem(index);
    };

    return (
        <div className="app">
            {data.map((item, index) => (
                <Accordion
                    key={index}
                    item={item}
                    index={index}
                    selectedItem={selectedItem}
                    onAccordionClick={() => handleAccordionClick(index)}
                />
            ))}
        </div>
    );
}

export default App;
