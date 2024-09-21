import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vulnerability Checking Website</title>
        <meta name="description" content="A comprehensive vulnerability checking and management tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-100 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Component {...pageProps} />
            </div>
          </main>
        </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/dashboard" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Dashboard
                  </Link>
                  <Link href="/products" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Products
                  </Link>
                  <Link href="/vulnerabilities" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Vulnerabilities
                  </Link>
                  <Link href="/settings" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Settings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;