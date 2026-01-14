import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="p-6 flex justify-between max-w-5xl mx-auto">
          <span className="font-semibold">SB</span>
          <div className="space-x-6 text-sm">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}