import './list-item.scss';

import { Anchor } from '@/components/anchor/anchor';

interface ListItemProps {
    children: any;
}


export function ListItem({children}: ListItemProps) {
    return(
        <>
        <li className='list-item'>
            {children}
        </li>
        </>
    )
}