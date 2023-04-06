import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  );
}

export default Layout;
