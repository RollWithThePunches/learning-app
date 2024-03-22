import './card.scss';

import { Anchor } from '@/components/anchor/anchor';
import { Headline, Size } from '@/components/headline/headline';

interface CardProps {
    alt?: string,
    body: string,
    cta?: string,
    eyebrow?: string,
    headline: string,
    src?: string,
    type?: Type,
    url?: string,
}

export enum Type {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}

export function Card({body, alt, cta, eyebrow, headline, src, type, url}: CardProps) {

    return (
        <>
            <div className={`card ${type}`}>
                {src ? <div className="card-img" role="img" title={alt} style={{backgroundImage: `url(${src})`}}></div> : null}
                <div className="card-content p6">
                    {eyebrow ? <p className="card-eyebrow">{eyebrow}</p> : null}
                    <Headline headline={headline} bodyText={body} size={Size.MEDIUM} />
                    {url ? <Anchor url={url} cta={cta} /> : null}
                </div>
            </div>
        </>
    );

}