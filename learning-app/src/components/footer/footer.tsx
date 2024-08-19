import './footer.scss';
import { Columns, Number } from '../columns/columns';
import { Anchor } from '@/components/anchor/anchor';
import { List, ListStyle, ListType, Size } from '@/components/list/list';
import { ListItem } from '@/components/list/list-item/list-item';
import JSONData from '../../data/footer-items.json';

export function Footer() {
    const items = JSONData;
    return (
        <footer className='footer'>
            <Columns number={Number.THREE}>
            <List
                    type={ListType.UNORDERED}
                    size={Size.MEDIUM}
                    style={ListStyle.NONE}
                > 
                    {Object.values(items).map(item => {
                        return (
                            <>
                            <ListItem>
                                <Anchor url={item['url']} cta={item['text']} color={'lt'} />
                            </ListItem>
                            </>
                        )
                    })}
                </List>
            </Columns>
        </footer>
    )
}