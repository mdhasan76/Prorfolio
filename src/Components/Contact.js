import { useForm } from '@formspree/react';
import toast from 'react-hot-toast'
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Contact = () => {
    const [state, handleSubmit] = useForm("mlevqzgg");
    if (state.succeeded) {
        toast.success("Message send sucessful")
    }
    return (
        <div className='my-3' id='contact'>
            <h2 className='text-center text-3xl font-medium mb-4'>Contact Me</h2>
            <div className='max-w-xl mx-auto bg-gradient-to-bl to-[#e2e8ec] from-[#ffffff] shadow-3xl p-8'>
                <div>
                    <form onSubmit={handleSubmit} action="" className='py-5'>
                        <div className='mb-2'>
                            <input type="text" className='w-full mb-2 border-2 p-4 focus:outline-[#ff014f]' placeholder='Your Name'
                                id="name"
                                name="name" required />
                        </div>
                        <div className='mb-2'>
                            <input type="email" className='w-full mb-2 border-2 p-4 focus:outline-[#ff014f]' placeholder='Your Email'
                                id="email"
                                name="email" required />
                        </div>
                        <textarea className='w-full border-2 mb-2 p-2 focus:outline-[#ff014f]' rows={'10'} placeholder="write somthing"
                            id="message"
                            name="message" required>
                        </textarea>
                        <button type="submit" className='btn btn-primary w-full bg-white text-[#ff014f] border-none duration-300 hover:-translate-y-1 hover:bg-[#ff014f] hover:text-white' disabled={state.submitting}>
                            Send Message <AiOutlineArrowRight />
                        </button>
                    </form>
                </div>

                <Toaster />
            </div>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    className='w-full mb-2 border-2 p-4 focus:outline-[#ff014f]'
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    className='w-full mb-2 border-2 p-4 focus:outline-[#ff014f]'
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" className='btn btn-primary' disabled={state.submitting}>
                    Submit
                </button>
            </form> */}
        </div >
    );
};

export default Contact;