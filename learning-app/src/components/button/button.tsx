import './button.scss';

interface ButtonProps{
    type: 'submit' | 'reset' | 'button' | undefined,
    icon?: string,
    kind?: 'primary' | 'secondary' | 'tertiary',
    order?: Order, 
    text?: string,
    click?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export enum Order {
    START = 'start',
    END = 'end'
}

export function Button( {type, icon, kind, order, text, click}: ButtonProps) { 
    // const [color, changeColor] = useState("gray");
    const textCondition = text ? text : null;
    const iconCondition = icon ? <i className={`fa fa-${icon}`}></i> : null;

    const myfunc = () => {
        alert(text);
    }

    return (
        
        <button className={`app-bttn ${kind}`} type={`${type ? type : "submit"}`} onClick={click}>
            {order === Order.START && (
                <>
                    {iconCondition}
                    {textCondition}
                </>
            )}
            {order === Order.END && (
                <>
                    {textCondition}
                    {iconCondition}
                </>
            )}
            {!order && (
                <>
                    {textCondition}
                    {iconCondition}
                </>
            )}
        </button>
    )
}