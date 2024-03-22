import './textfield.scss';

interface TextFieldProps {
    arialabel?: string;
    inputMode: 'text' | 'email' | 'tel' | 'search' | 'none' | 'url' | 'numeric' | undefined;
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    type: 'text' | 'email' | 'tel' | 'search' | 'none' | 'url' | 'numeric' | undefined;
}

export function TextField({
        arialabel, 
        inputMode, 
        label, 
        name, 
        placeholder, 
        required, 
        type
    }: TextFieldProps) {

    return (
        <>
        <div className='textfield-wrap grid g1'>
            {required === true ? <label htmlFor={name}>{`${label}*`}</label> : <label htmlFor={name}>{label}</label> }
            <input 
                className='textfield p2'
                type={type} 
                inputMode={inputMode} 
                name={name} 
                placeholder={placeholder} 
                required={required} 
                aria-label={arialabel}>
            </input>
        </div>
        </>
    )
}