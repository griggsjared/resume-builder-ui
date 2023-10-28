import LoginForm from "./_components/login-form";
import Logo from "@/app/_components/logo";
import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="sm:w-[500px]">
        <CardContent>
          <CardHeader>
            <Logo />
          </CardHeader>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6">
            <LoginForm />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
