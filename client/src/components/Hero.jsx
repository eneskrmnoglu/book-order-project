import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="mt-2 container mx-auto">
        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Kitaba ulaşmanın</span>
                <span className="block text-indigo-600 xl:inline">
                  {" "}
                  en kolay yolu.
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Çok Satan, Yeni Çıkan, En Çok Okunan Kitaplarda Sürpriz
                İndirimler seni bekliyor. Aradığın kitaplar Kidega'da! Tüm
                kitaplarda kaçırılmayacak fırsatlar. Okumayı Seven Herkes için.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/bookslist"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    {" "}
                    Alışverişe Başla{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://a-static.besthdwallpaper.com/unfinished-book-wallpaper-1920x1080-79755_48.jpg"
              alt=""
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Hero;
