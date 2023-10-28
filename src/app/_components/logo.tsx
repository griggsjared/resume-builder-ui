import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center text-4xl", className)}>
      <div className="font-extrabold uppercase tracking-wide">Resume</div>
      <div className="font-light uppercase tracking-tighter">Builder</div>
    </div>
  );
}
