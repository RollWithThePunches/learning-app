import './columns.scss'

interface ColumnProps {
    children: any,
    number: Number
}

export enum Number {
    ONE = "1",
    TWO = "2",
    THREE = "3"
}

export function Columns({ children, number}: ColumnProps) {
    return (
        <section className={`columns grid g5 col-${number}`}>
            {children}
        </section>
    );
} 