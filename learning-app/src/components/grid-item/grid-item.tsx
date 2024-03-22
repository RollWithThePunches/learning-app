import './grid-item.scss';

import { Anchor } from '@/components/anchor/anchor';

interface GridItemProps {
    cta?: string,
    headline: string,
    bodyText: string,
    url?: string
}

export default function GridItem({cta, headline, bodyText, url}: GridItemProps) {
    return (
        <>
        <div className='grid-item'>
            <h3>{headline}</h3>
            <p>{bodyText}</p>
            {url ? <Anchor url={url} cta={cta} /> : null}
        </div>
        </>
    );
}