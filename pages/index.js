import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Duresa Eshetu | Portifolio</title>
        <meta name="description" content="My portifolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/MyLogo.jpg" />
      </Head>
      <main>
        <section className="header">
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Image src='/MyLogo.jpg' alt="logo"
            width={300}
            height={500}
            className="rounded-l-xl"
            />
          </div>
        </section>
      </main>
    </>
  );
}
