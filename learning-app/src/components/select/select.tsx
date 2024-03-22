import './select.scss';

interface SelectProps {
    arialabel?: string;
    children: any;
    label: string;
    name: string;
    required?: boolean
}

export function Select({arialabel, children, label, name, required}: SelectProps) {
    return (
        <>
        <div className='select-wrap grid g1'>
            <label htmlFor={name}>{label}</label>
            <select className='select p2' name={name}>
                {children}
            </select>
        </div>
        </>
    )
}