'use client';

import './form.scss';

import { Headline, Size } from '../headline/headline';
import { TextField } from '../textfield/textfield';
import { Button } from '../button/button';
import { FormEvent } from 'react';
import type { NextApiRequest, NextApiResponse } from 'next'
 
async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body
  const id = await createItem(data)
  res.status(200).json({ id })
}

function createItem(data: any) {
    throw new Error('Function not implemented.')
}


interface FormProps {
    headline: string;
    bodyText?: string;
}

interface SelectOptions {
    name: string,
    value: string
}

// export async function FormSubmit (prevState: any, formData: any) {
    
//     const response = await fetch('http://localhost:3000/post-form-data', {
//         method: 'POST',
//         body: formData
//     });

//     const responseData = await response.json();
//     return responseData;
// }

async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 

    try {
        const formData = new FormData(event.currentTarget)
        const response = await fetch(handler, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(formData),
          })

        const data = await response.json();
        return data.submit;
    } catch (error) {
        console.error(error);
    }
    
  }

export function ContactForm({headline}: FormProps) {
    // const [state, onSubmit] = useFormState(FormSubmit, '');
    // const { pending } = useFormStatus;

    

    return (
        <>
        <section>
            <Headline headline={headline} size={Size.LARGE} />
            <p className='f1 mb3'>* These are required</p>
            <form className='form contact-form grid g3' id='form' onSubmit={onSubmit}>
                <TextField label='First name' name='first' type='text' required inputMode='text' arialabel='Enter first name' />
                <TextField label='Last name' name='last' type='text' required inputMode='text' arialabel='Enter last name' />
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