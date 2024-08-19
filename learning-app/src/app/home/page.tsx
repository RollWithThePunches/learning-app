'use client';

import { Card, Type } from '@/components/card/card';
// import GridItem from '@/components/grid-item';
import { Kind, Hero } from '@/components/hero/hero';
import { Anchor } from '@/components/anchor/anchor';
import { Columns, Number } from '@/components/columns/columns';
import { Button, Order } from '@/components/button/button';
import { ContactForm } from '@/components/form/form';
import JSONData from '../../data/data.json';
import GridItem from '@/components/grid-item/grid-item';
import { List, ListStyle, ListType, Size } from '@/components/list/list';
import { ListItem } from '@/components/list/list-item/list-item';
import { Expand } from '@/components/expand/expand';

export default function Page() {
    const data = JSONData;
    const cards = data.dashboard.cards;
    const gridItems = data.dashboard['grid-items'];
    const list = data.dashboard.list;
    const faq = data.dashboard.faq;
    let start = 0;
    start++;

    const myfunc = () => {
        // const main = document.querySelector('main');
        // const p = document.createElement('p');
        // main.appendChild(p);
        // p.innerHTML = 'Created';
    }

    return (
        <>
        <main>
            <Hero kind={Kind.HALF}>
                <div className='h-left'>
                    <h1 className='hero-headline'>Home page</h1>
                    <p className='hero-intro mb1'>Lorem ipsum</p>
                    <Anchor url='https://developer.mozilla.org/en-US/' cta='Visit MDN' />
                </div>
                <div className='h-center v-center'>
                    <Button text='Submit' type='submit' kind='primary' click={myfunc} />
                </div>
            </Hero>
            <Columns number={Number.TWO}>
                {Object.values(cards).map(card => {
                    return (
                        <>
                        <Card 
                            key={start} 
                            type={Type.VERTICAL}
                            src={card.src} 
                            alt={card.alt} 
                            headline={card.headline} 
                            body={card.paragraph} 
                            cta={card.cta} 
                            url={card.url} 
                        /> 
                        </>
                    )
                })}
            </Columns>
            <Columns number={Number.THREE}>
                {Object.values(gridItems).map(item => {
                    return (
                        <>
                        <GridItem
                            key={start} 
                            headline={item.headline} 
                            bodyText={item.paragraph} 
                        /> 
                        </>
                    )
                })}
            </Columns>
            <Columns number={Number.ONE}>
                <List
                    type={ListType.UNORDERED}
                    size={Size.MEDIUM}
                > 
                    {Object.values(list).map(item => {
                        return (
                            <>
                            <ListItem>{item['list-item']}</ListItem>
                            </>
                        )
                    })}
                </List>
            </Columns>
            <div>
                <List 
                    style={ListStyle.NONE}
                    type={ListType.UNORDERED}
                    size={Size.MEDIUM}
                >
                    {Object.values(faq).map(item => {
                        return (
                            <>
                            <ListItem>
                                <Expand headline={item.question}>
                                    {item.answer}
                                </Expand>
                            </ListItem>
                            </>
                        )
                    })}
                </List>    
            </div>
            <ContactForm headline='Contact us' />
        </main>
        </>
    );
}