import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="min-h-screen text-red-400">
        {children}
      </main>
      <Footer />

    </div>
  );
}
