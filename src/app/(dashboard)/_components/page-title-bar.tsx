import { cn } from "@/lib/utils";

export type PageTitleBarProps = {
  title: string;
} & React.HTMLAttributes<HTMLElement>;

export function PageTitleBar({
  className,
  title,
  ...props
}: PageTitleBarProps) {
  return (
    <>
      <div
        className={cn("flex items-center justify-between space-y-2", className)}
        {...props}
      >
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      </div>
    </>
  );
}
