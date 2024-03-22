
import './form.scss';

import { TextField } from '../textfield/textfield';
import { Button } from '../button/button';
import { Select } from '../select/select';
import { Headline, Size } from '../headline/headline';
import jobtitle from '../../api/jobtitle';

interface FormProps {
    headline: string,
    bodyText?: string
}

interface SelectOptions {
    name: string,
    value: string
}

const submitFunc = () => {
    // TODO
}

export function ContactForm({headline}: FormProps) {
    return (
        <>
        <section>
            <Headline headline={headline} size={Size.LARGE} />
            <form className='form contact-form grid g3'>
                <TextField label='First name' name='first name' type='text' required inputMode='text' arialabel='Enter first name' />
                <TextField label='Last name' name='Last name' type='text' required inputMode='text' arialabel='Enter last name' />
                <div className='form-full'>
                    <TextField label='Email address' name='email address' type='email' required inputMode='email' arialabel='Enter email address' />
                </div>
                <TextField label='Phone' name='phone' type='tel' inputMode='tel' arialabel='Enter phone number' />
                <Select label='Occupation' name='occupation'>
                    <option value=''>Select</option>
                    {Object.values(jobtitle).map(job => {
                        return (
                            <option value={job.value}>{job.name}</option>
                        )
                    })}
                </Select>
                <div className='form-full'>
                    <Button text='Submit' type='submit' kind='primary' click={submitFunc} />
                </div>
            </form>
        </section>
        </>
    )
}