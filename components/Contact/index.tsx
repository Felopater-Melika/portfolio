import React from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import { useForm } from 'react-hook-form'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Element } from 'react-scroll'

type Inputs = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  async function onSubmit(data: any) {
    let config: AxiosRequestConfig = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }

    try {
      const response = await axios(config)
      console.log(response, data)
      if (response.status == 200) {
        alert('Message sent successfully')
        reset()
      }
    } catch (err) {
      alert(err)
    }
  }

  return (
    <>
      <Element
        name="contact"
        className="flex h-screen items-center justify-center px-2 sm:px-20 lg:px-48"
      >
        <section id="contact">
          <div className="space-y-1">
            <h1 className="text-center  font-display text-white sm:text-2xl ">
              You can contact me using the form below
            </h1>
            <h3 className="text-center font-display text-white sm:text-xl">
              or you can Email me at{' '}
              <a className="underline" href="mailto:felopatermelika@gmail.com">
                felopatermelika@gmail.com
              </a>
              .
            </h3>
            <h4 className="text-center font-display text-xl text-white">
              You can also find me on{' '}
              <a
                href="https://github.com/Felopater-Melika"
                className="text-center font-display text-xl text-white"
              >
                <FaGithub color="white" className="inline" />
              </a>
              ,{' '}
              <a
                href="https://twitter.com/FelopaterMelika"
                className="text-center font-display text-xl text-white"
              >
                <FaTwitter color="white" className="inline" />
              </a>
              ,{' '}
              <a
                href="https://www.linkedin.com/in/felopater-melika"
                className="text-center font-display text-xl text-white"
              >
                <FaLinkedinIn color="white" className="inline" />
              </a>
              .
            </h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-3 rounded-xl border-4 border-black bg-white bg-opacity-70 p-4 py-9 lg:max-w-screen-sm "
            >
              <div className="flex  flex-col">
                <label htmlFor="name" className="text-center font-display">
                  Full Name
                </label>
                <input
                  type="text"
                  className=" border-0 border-b-2  border-black bg-transparent font-display focus:outline-none focus:ring-0"
                  {...register('name', { required: true })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-center font-display">
                  Email
                </label>
                <input
                  {...register('email', { required: true })}
                  type="email"
                  className="border-0 border-b-2 border-black bg-transparent font-display focus:outline-none focus:ring-0"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-center font-display">
                  Message
                </label>
                <textarea
                  {...register('message', { required: true })}
                  className="border-0 border-b-2 border-black bg-transparent font-display focus:outline-none focus:ring-0"
                />
              </div>
              <button
                type="submit"
                className="h-10 rounded-lg bg-black font-display text-white"
              >
                Submit
              </button>
              {errors.name && errors.email && errors.message && (
                <span className="w-full rounded-lg border-2 border-red-500 bg-red-500 bg-opacity-30 text-center font-display shadow-sm shadow-red-500">
                  Please fill-out all fields
                </span>
              )}
            </form>
          </div>
        </section>
      </Element>
    </>
  )
}

export default Contact
