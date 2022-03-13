import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  Name: string
  Email: string
  Message: string
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <>
      <div className=" bg-galaxy-1 py-10 px-2 sm:px-20 lg:px-48">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-5 rounded-xl border-4 border-black bg-white bg-opacity-70 p-4 py-9 "
        >
          <div className="flex  flex-col">
            <label htmlFor="name" className="text-center font-display">
              Full Name
            </label>
            <input
              type="text"
              className=" border-0 border-b-2  border-black bg-transparent font-display focus:outline-none focus:ring-0"
              {...register('Name', { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-center font-display">
              Email
            </label>
            <input
              {...register('Email', { required: true })}
              type="email"
              className="border-0 border-b-2 border-black bg-transparent font-display focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-center font-display">
              Message
            </label>
            <textarea
              {...register('Message', { required: true })}
              className="border-0 border-b-2 border-black bg-transparent font-display focus:outline-none focus:ring-0"
            />
          </div>
          <button
            type="submit"
            className="h-10 rounded-lg bg-black font-display text-white"
          >
            Submit
          </button>
          {errors.Name && errors.Email && errors.Message && (
            <span className="w-full rounded-lg border-2 border-red-500 bg-red-500 bg-opacity-30 text-center font-display shadow-sm shadow-red-500">
              Please fill-out all fields
            </span>
          )}
        </form>
      </div>
    </>
  )
}

export default Contact
