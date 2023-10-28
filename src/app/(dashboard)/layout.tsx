import Link from "next/link";
import Logo from "@/app/_components/logo";
import { type Metadata } from "next";
import { UserNav } from "./_components/user-nav";
import { MainNav } from "./_components/main-nav";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is the dashboard page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Link href="/">
              <Logo />
            </Link>
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
      </div>
    </>
  );
}
