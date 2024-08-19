import './anchor.scss';

interface AnchorProps {
    cta?: string,
    color?: string
    icon?: string,
    url: string,
}

export function Anchor({cta, color, icon, url}: AnchorProps) {
    return(
        <a href={url} className={color}>
            {cta}
            {icon ? <i className={`fa fa-${icon}`}></i> : null}    
        </a>
    )
}