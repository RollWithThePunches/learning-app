'use client';

import './form.scss';

import { FormEvent } from 'react';
import { Headline, Size } from '../headline/headline';
import { TextField } from '../textfield/textfield';
import { Button } from '../button/button';

interface FormProps {
    headline: string;
    bodyText?: string;
}

interface SelectOptions {
    name: string,
    value: string
}

export function ContactForm({headline}: FormProps) {

    // const register = (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
    //     event.preventDefault();
    //     const data = new FormData(event.target);
    //     const value = Object.fromEntries(data.entries());
    //     console.log(value);
    //  }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const response = await fetch('../../api/form/route', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('You are registered!');
        }
        if (!response.ok) {
            console.log('Try again');
        }

        const responseData = await response.json();
        console.log(responseData);

        // const formData = {
            // firstName: String(event.target['first name'].value),
            // lastName: String(event.target['last name'].value),
            // email: String(event.target.email.value),
            // phone: String(event.target.phone.value)
        // }

        // console.log(formData);

        // const response = await fetch('/api/registration', {
        //     method: 'POST',
        //     body: JSON.stringify(formData),
        // });

        // if (response.ok) {
        //     console.log('You are registered!');
        // }
        // if (!response.ok) {
        //     console.log('Try again');
        // }
        
    }

    return (
        <>
        <section>
            <Headline headline={headline} size={Size.LARGE} />
            <p className='f1 mb3'>* These are required</p>
            <form className='form contact-form grid g3' id='form' onSubmit={onSubmit}>
                <TextField label='First name' name='first name' type='text' required inputMode='text' arialabel='Enter first name' />
                <TextField label='Last name' name='last name' type='text' required inputMode='text' arialabel='Enter last name' />
                <div className='form-full'>
                    <TextField label='Email address' name='email' type='email' required inputMode='email' arialabel='Enter email address' />
                </div>
                <TextField label='Phone' name='phone' type='tel' inputMode='tel' arialabel='Enter phone number' />
                {/* <Select label='Occupation' name='occupation'>
                    <option value=''>Select</option>
                    {Object.values(jobtitle).map(job => {
                        return (
                            <option value={job.value}>{job.name}</option>
                        )
                    })}
                </Select> */}
                <div className='form-full'>
                    <Button text='Submit' type='submit' kind='primary' />
                </div>
            </form>
        </section>
        </>
    )
}