import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <main className="min-h-screen min-w-screen flex flex-col px-16">
      <Header />
      {children}
      <Footer />
    </main>

  );
}
