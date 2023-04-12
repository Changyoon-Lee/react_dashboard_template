import Header from "./Header";
import Nav from "../components/Nav";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <div className="relative dark:bg-[--color-dark-800] h-screen">
      <Header />
      <div className="pt-16 bottom-0 h-full flex items-center p-2 space-x-1">
        <Nav />
        <main className="dark:bg-[--color-dark-900] p-5 h-full w-full text-lg dark:text-[--text-dark-100] font-medium rounded-e-2xl">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
