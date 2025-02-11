import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
          name:data.name,
          email:data.email,
          message:data.message
        }
        try {
            await axios.post('https://getform.io/f/bejjwwya',userInfo)
            toast.success('your message has been sent')
            reset()
        } catch (error) {
            //console.log(error)
            toast.error('something went wrong')
        }
    }
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl'>Contact Me</h1>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        // action="https://getform.io/f/bejjwwya" 
                        // method="POST"
                        className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                        <h1 className='font-samibold md-4 text-black'>Contact Form</h1>
                        <div className='flex flex-col md-4'>
                            <label className="block text-gray-700 ">FullName</label>
                            <input
                                {...register("name", { required: true })}
                                className='shadow rounded-lg  appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="name" type="text" placeholder='Name'
                                name='name'
                            />
                            {errors.name && <span className='text-black'>This field is required</span>}
                        </div>

                        <div className='flex flex-col md-4'>
                            <label className="block text-gray-700 ">Email</label>
                            <input
                                {...register("email", { required: true })}
                                className='shadow rounded-lg  appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="email" type="text" name='email'

                                placeholder='Email' />
                            {errors.email && <span className='text-black'>This field is required</span>}
                        </div>

                        <div className="flex flex-col md-4">
                            <label className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea
                                {...register("message", { required: true })}
                                className="shadow rounded-lg appearance-none border py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none h-40"
                                id="message"
                                name='message'
                                placeholder="Type your message here..."
                            ></textarea>
                            {errors.message && <span className='text-black'>This field is required</span>}
                        </div>
                        <button type='submit' className="bg-[#0e4ae3] hover:bg-blue-700 text-white font-bold rounded-2xl px-6 py-3 w-full mt-4 shadow-lg transition duration-300 ease-in-out">
                            Send
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
