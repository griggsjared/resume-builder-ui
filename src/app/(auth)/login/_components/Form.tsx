"use client";

import { signIn } from "next-auth/react"
import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState<string>('test@example.com')
  const [password, setPassword] = useState<string>('P@ssw0rd')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const result = signIn("credentials", {
        redirect: false,
        email,
        password,
      })

      console.log(result)

    } catch (error) {
      console.log("error");
      console.log(error)
    }
  }

  return (
    <form method="post" onSubmit={(e) => {
      handleSubmit(e)
    }}>
      <label>
        Email
        <input name="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>
      <label>
        Password
        <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>
      <button type="submit">Sign in</button>
    </form>
  )
}
