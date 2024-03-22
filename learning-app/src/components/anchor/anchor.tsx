interface AnchorProps {
    cta?: string,
    icon?: string,
    url: string
}

export function Anchor({cta, icon, url}: AnchorProps) {
    return(
        <a href={url}>
            {cta}
            {icon ? <i className={`fa fa-${icon}`}></i> : null}    
        </a>
    )
}