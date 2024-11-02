import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const toggleOpen = document.getElementById('toggleOpen');
    const toggleClose = document.getElementById('toggleClose');
    const collapseMenu = document.getElementById('collapseMenu');

    function handleClick() {
      if (collapseMenu.style.display === 'block') {
        collapseMenu.style.display = 'none';
      } else {
        collapseMenu.style.display = 'block';
      }
    }

    if (toggleOpen) {
      toggleOpen.addEventListener('click', handleClick);
    }
    if (toggleClose) {
      toggleClose.addEventListener('click', handleClick);
    }

    return () => {
      if (toggleOpen) {
        toggleOpen.removeEventListener('click', handleClick);
      }
      if (toggleClose) {
        toggleClose.removeEventListener('click', handleClick);
      }
    };
  }, []);



  return (
    <>
      <Head>
        <title>Duresa Eshetu | Portfolio</title>
        <meta name="description" content="My portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/MyLogo.jpg" />
      </Head>
      <main>
        <header className="font-sans tracking-wide relative z-50 m-3" id="Header">
          <section className="py-2 bg-[#508dcf] text-white text-right px-10">
            <p className="text-sm">
              <strong className="mx-3">Address:</strong>
              AA, Ethiopia
              <strong className="mx-3">Contact No:</strong>
              +251-99-301-8443
            </p>
          </section>
          <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 min-h-[70px] m-3 bg-slate-400 rounded-lg shadow-md">
            <a href="./" className="flex gap-10">
              <Image src='/MyLogo.jpg' width={300} height={400} alt="My Logo" className="w-10 rounded-lg" />
              <h1>Duresa Eshetu</h1>
            </a>

            <div id="collapseMenu" 
              className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
              <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                  <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                  <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                </svg>
              </button>
              <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li className="mb-6 hidden max-lg:block ">
                  <a href="./" className="flex gap-10">
                    <Image src='/MyLogo.jpg' width={300} height={400} alt="My Logo" className="w-10 rounded-lg" />
                    <h1>Duresa Eshetu</h1>
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <a href="./" className="hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]">
                    Home
                  </a>
                </li>
                <li className='max-lg:border-b max-lg:py-3 px-3'>
                  <a href='javascript:void(0)'
                    className='hover:text-[#007bff] text-[#333] block font-bold text-[15px]'>
                    Projects
                  </a>
                </li>
                <li className='max-lg:border-b max-lg:py-3 px-3'>
                  <a href='javascript:void(0)'
                    className='hover:text-[#007bff] text-[#333] block font-bold text-[15px]'>Feature</a>
                </li>
                <li className='max-lg:border-b max-lg:py-3 px-3'>
                  <a href='javascript:void(0)'
                    className='hover:text-[#007bff] text-[#333] block font-bold text-[15px]'>About</a>
                </li>
                <li className='max-lg:border-b max-lg:py-3 px-3'>
                  <a href='javascript:void(0)'
                    className='hover:text-[#007bff] text-[#333] block font-bold text-[15px]'>Contact</a>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center space-x-6">
              <button className="font-semibold text-[15px] border-none outline-none">
                Contact info
              </button>
              <button id="toggleOpen" className="lg:hidden">
                <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </header>
          
        <section className="flex  h-auto ">
          <div className="">

            
          </div>
          <div className="container">
              <div data-text="Github" style={{ '--r': '-15' }} className="glass">
                  <svg viewBox="0 0 496 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                  </svg>
              </div>
              <div data-text="Code" style={{ '--r': '5' }} className="glass">
                  <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                      ></path>
                  </svg>
              </div>
              <div data-text="Earn" style={{ '--r': '25' }} className="glass">
                  <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      ></path>
                  </svg>
              </div>
          </div>
        </section>

        




      </main>
    </>
  );
}
