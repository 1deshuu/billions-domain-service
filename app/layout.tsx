import "../styles/globals.css";

export const metadata = {
  title: 'Billions Domain Service',
  description: 'Fan-made billions domain generator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[url('/background.png')] bg-cover bg-center text-white font-sans overflow-hidden">
        <header className="grid grid-cols-3 items-center p-4 bg-white bg-opacity-90 backdrop-blur-sm border-b">
          {/* Sol: Logo */}
          <div className="justify-self-start">
            <img src="/billions-logo.png" alt="Billions Logo" className="h-8" />
          </div>

          {/* Orta: Başlık */}
          <h1 className="justify-self-center text-3xl font-extrabold text-blue-600">
            Billions Domain Service
          </h1>

          {/* Sağ: Boşluk ya da ikon */}
          <div className="justify-self-end w-20" />
        </header>

        {children}

        <footer className="fixed bottom-5 left-0 w-full text-center text-sm font-bold text-black p-2">
          This is an unofficial site created by @deshuu_ for Billions Domain Service.
        </footer>
      </body>
    </html>
  );
}
