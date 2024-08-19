'use client';

import { Hero, Kind } from "@/components/hero/hero";
import { ContactForm } from "@/components/form/form";

export default function Register() {

    return (
        <>
        <main>
            <Hero kind={Kind.HALF}>
                <div className='h-left'>
                    <h1 className='hero-headline'>Registration page</h1>
                    <p className='hero-intro mb1'>Fill out form to register.</p>
                </div>
            </Hero>
            <ContactForm headline='Register'/>
        </main>
        </>
    );
}