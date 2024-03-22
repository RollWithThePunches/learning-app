import './headline.scss';

interface HeadlineProps {
    headline: string;
    bodyText?: string;
    size: Size;
}

export enum Size {
    LARGE = 'lg',
    MEDIUM = 'md',
    SMALL = 'sm',
    XSMALL = 'xsm'
}

export function Headline({headline, bodyText, size}: HeadlineProps) {

    const sizeConfig = {
        'lg': <h2 className='xxl'>{headline}</h2>,
        'md': <h3 className='xl'>{headline}</h3>,
        'sm': <h4 className='md'>{headline}</h4>,
        'xsm': <h5 className='sm'>{headline}</h5>
    }  

    return (
        <div className={`headline-wrap mb3 ${size}`}>
            {sizeConfig[size]}
            {bodyText ? <p className='md'>{bodyText}</p> : null}
        </div>
    )
}