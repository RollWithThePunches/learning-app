
'use client';

import './expand.scss';

interface ExpandProps {
    headline: string;
    children: any;
}

export function Expand({headline, children}: ExpandProps) {
    return (
        <details className='details'>
            <summary className='details-sum'>{headline}</summary>
            <p>{children}</p>
        </details>
    );
}