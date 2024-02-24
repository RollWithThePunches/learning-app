import React from "react";

interface CardProps {
    kind: string;
    data: any;
}

export default function Card({kind, data}: CardProps) {
    return (
        <>
        {data.map(d => {
            return (
            <>
            <div className="card" card-type={kind}>
                {d.src ? <img src={d.src} alt={d.alt} /> : null}
                <div className="card-content">
                    <h3 className="card-headline">This is a headline</h3>
                    <p className="card-text">This is the text inside the card.</p>
                    {d.link ? <a href={d.link}>This is a card link</a> : null}
                </div>
            </div>
            </>
            )
            })}
            </>
    );

}