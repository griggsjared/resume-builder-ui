import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative">
        <div>{children}</div>
      </div>
    </>
  );
}
