import FoodGenerator from "@/components/food-generator"
import BackgroundImage from "@/components/background-image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      <main className="flex-1 flex flex-col items-center justify-start sm:pt-12 pt-20 relative">
        <div className="w-full max-w-md mx-auto relative z-10 mt-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-0.5 text-pink-500">Ne Yesem?</h1>
          <p className="text-center mb-2 text-gray-600">Bir yemek önerisi için butona basın</p>
          <FoodGenerator />
        </div>
        <BackgroundImage />
      </main>
      <footer className="w-full py-4 bg-[#FFEDF1] text-sm text-pink-600 flex items-center justify-between gap-4 flex-wrap px-4">
        <div className="text-xs text-pink-500">
          Öneriler bilgilendirme amaçlıdır. İçerik ve diyet kısıtlamalarıyla ilgili nihai kontrol kullanıcıya aittir.
        </div>
        <div className="text-xs">
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/ezgiozkut/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pink-700"
          >
            Ezgi Ozkut
          </a>
        </div>
      </footer>
    </div>
  )
}

