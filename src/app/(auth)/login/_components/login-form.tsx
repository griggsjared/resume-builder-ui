"use client";

import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";

interface FormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Form({ className, ...props }: FormProps) {
  const [email, setEmail] = useState<string>("test@example.com");
  const [password, setPassword] = useState<string>("P@ssw0rd");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      const success = await result;

      console.log("result");
      console.log(success);
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form
        method="post"
        onSubmit={async (e) => {
          await handleSubmit(e);
        }}
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
