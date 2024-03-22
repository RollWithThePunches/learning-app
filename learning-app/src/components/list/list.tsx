import './list.scss';

interface ListProps {
    children: any;
    style: ListStyle;
    type: ListType;
}

export enum ListType {
    ORDERED = 'ol',
    UNORDERED = 'ul'
}

export enum ListStyle {
    CIRCLE = 'circle',
    APLHA = 'lower-alpha',
    NONE = 'none',
    ROMAN = 'lower-roman',
    SQUARE = 'square'
}

export function List({children, style, type}: ListProps) {
    return (
        <>
        {type === 'ol' ? <ol className={`list grid g3 ${style}`}>{children}</ol> : null}
        {type === 'ul' ? <ul className={`list grid g3 ${style}`}>{children}</ul> : null}
        </>
    )
}