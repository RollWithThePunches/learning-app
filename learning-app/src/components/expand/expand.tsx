
import './expand.scss';

interface ExpandProps {
    headline: string;
    children: any;
}

export function Expand({headline, children}: ExpandProps) {
    return (
        <details>
            <summary>{headline}</summary>
            <p>{children}</p>
        </details>
    );
}