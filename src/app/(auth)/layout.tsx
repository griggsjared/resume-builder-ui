export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>This is the auth pages</header>
      <main>{children}</main>
    </div>
  );
}
