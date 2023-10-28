import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/users"
        className="hover:text-primary text-sm font-medium transition-colors"
      >
        Users
      </Link>
      <Link
        href="/subjects"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Subjects
      </Link>
    </nav>
  );
}
