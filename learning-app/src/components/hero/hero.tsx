import './hero.scss'

interface HeroProps {
    children: any,
    kind: Kind
}

export enum Kind {
    FULL = 'full',
    HALF = 'half'
}

export function Hero({children, kind}: HeroProps) {
    return (
        <>
        <section className={`hero-section ${kind}`}>
            {children}
        </section>   
        </>
    )
}