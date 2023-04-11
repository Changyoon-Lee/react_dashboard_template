import Header from "./Header";
import Nav from "../components/Nav";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <div className="relative bg-zinc-700 h-screen">
      <Header />
      <div className="pt-16 bottom-0 h-full flex items-center p-2 space-x-1">
        <Nav />
        <main className="dark:bg-zinc-800 p-5 h-full w-full text-lg dark:text-zinc-500 font-medium rounded-e-2xl">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
