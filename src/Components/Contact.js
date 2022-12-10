import React from 'react';

const Contact = () => {
    return (
        <div className='my-3' id='contact'>
            <div className='max-w-md mx-auto'>
                <h2 className='text-center text-3xl font-medium mb-4'>Contact With Me</h2>
                <div>
                    <form action="" className='py-5'>
                        <div className='mb-2'>
                            <input type="text" className='w-full border p-2' placeholder='Your Name' required />
                        </div>
                        <div className='mb-2'>
                            <input type="email" className='w-full border p-2' placeholder='Your Email' required />
                        </div>
                        <textarea className='w-full border-1 p-2 border-2' name="" id="" placeholder="write somthing" required>
                        </textarea>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Contact;