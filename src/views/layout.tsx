import React, { type ReactNode } from 'react';

interface AppProps {
  content: ReactNode;
}

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">
            <a
              href="/"
              className="text-gray-600 hover:text-gray-800"
              hx-target="#page-content"
              hx-swap="innerHTML scroll:top transition:true"
              hx-indicator="#loader"
            >
              My website
            </a>
          </div>
          <div className="space-x-4">
            <a
              href="/page1"
              className="text-gray-600 hover:text-gray-800"
              hx-target="#page-content"
              hx-swap="innerHTML scroll:top transition:true"
              hx-indicator="#loader"
            >
              Page 1
            </a>
            <a
              href="/page2"
              className="text-gray-600 hover:text-gray-800"
              hx-target="#page-content"
              hx-swap="innerHTML scroll:top transition:true"
              hx-indicator="#loader"
            >
              Page 2
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export const Layout: React.FC<AppProps> = (props: AppProps) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Basic Layout</title>
        <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
        <script src="https://unpkg.com/htmx.org@2.0.4"></script>
      </head>
      <body className="bg-gray-100 min-h-screen" hx-boost="true">
        <Header />

        <main id="page-content" className="container mx-auto px-6 py-8">
          {props.content}
        </main>
      </body>
    </html>
  );
};
