import './list.scss';

interface ListProps {
    children: any;
    size: Size;
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

export enum Size {
    SMALL = 'sm',
    MEDIUM = 'md',
    LARGE = 'lg'
}

export function List({children, size, style, type}: ListProps) {
    return (
        <>
        {type === 'ol' ? <ol className={`list grid g3 ${style} ${size}`}>{children}</ol> : null}
        {type === 'ul' ? <ul className={`list grid g3 ${style} ${size}`}>{children}</ul> : null}
        </>
    )
}