import React, { useState } from 'react'

function Login() {

  const [form, setForm] = useState({
    userName: "",
    password: ""
  })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("form submit");

  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex items-center justify-center">
        <form className="bg-sky-500/30 p-8 rounded-lg text-white shadow-md w-60 sm:w-80 flex flex-col space-y-4" onSubmit={onSubmit}>
          <h2 className="text-2xl font-semibold text-center mb-2">Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={form.userName}
            className="p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-sky-300"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-sky-300"
          />

          <button
            type="submit"
            className="bg-white text-sky-600 font-semibold py-2 rounded hover:bg-sky-100 cursor-pointer transition"
          >
            Submit
          </button>
        </form>
      </div>

      <div>
        <img
          src="/AuthBg.jpg"
          alt="Auth background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Login
