import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b shadow-sm">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">Buxoro viloyat ftiziatriya va pulmonologiya markazi</div>
          <ul className="flex space-x-4 text-lg font-medium">
            <li><a href="#about">Markaz haqida</a></li>
            <li><a href="#services">Xizmatlar</a></li>
            <li><a href="#diagnostics">Diagnostika</a></li>
            <li><a href="#departments">Bo'limlar</a></li>
            <li><a href="#news">Yangiliklar</a></li>
            <li><a href="#contact">Aloqa</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="container mx-auto py-16 px-6 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold mb-6">Sog'lig'ingiz — bizning ustuvor vazifamiz</h1>
          <p className="text-lg leading-relaxed mb-6">
            Buxoro viloyati ftiziatriya va pulmonologiya markazi — nafas tizimi kasalliklarini oldini olish, erta aniqlash va davolash bo'yicha ixtisoslashgan zamonaviy muassasa. Tajribali shifokorlar jamoasi, raqamli rentgen, PZR/GenXpert, spirometriya va keng laboratoriya imkoniyatlari aniqlik va samarali davolanishni ta'minlaydi.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition">DMED ilovasi orqali yozilish</a>
            <a href="#" className="bg-gray-200 px-6 py-3 rounded-full hover:bg-gray-300 transition">Marshrutni qurish</a>
          </div>
        </div>
        <div className="flex-1">
          <img src="/center.jpg" alt="Markaz" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-8">Xizmatlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card-elev p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Ftiziatr qabulida maslahat</h3>
            <p>Birlamchi ko‘rik, xavf omillarini baholash, individual reja va yo‘llanmalar.</p>
          </div>
          <div className="card-elev p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Pulmonologik maslahat</h3>
            <p>Bronxial astma, O‘VOKB, pnevmoniya va boshqa kasalliklar bo‘yicha ko‘mak.</p>
          </div>
          <div className="card-elev p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Laboratoriya tahlillari</h3>
            <p>Mokrotda BK aniqlash, PZR, umumiy klinik va biokimyoviy tahlillar.</p>
          </div>
        </div>
      </section>

      {/* Diagnostics */}
      <section id="diagnostics" className="scroll-mt-20 py-12 sm:py-16 reveal">
        <div className="container mx-auto px-6">
          <div className="card-elev p-6">
            <h2 className="text-3xl font-bold mb-4">Diagnostika</h2>
            <p>Raqamli rentgen, KT, spirometriya, pulsoksimetriya va boshqa zamonaviy uskunalar orqali aniqlik.</p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-8">Bo‘limlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card-elev px-4 py-3 text-sm">Statsionar bo‘lim</div>
          <div className="card-elev px-4 py-3 text-sm">Ambulator bo‘lim</div>
          <div className="card-elev px-4 py-3 text-sm">Laboratoriya bo‘limi</div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-8">Yangiliklar</h2>
        <div className="card-elev p-6">
          <p>Markazdagi so‘nggi yangiliklar va e’lonlar...</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-12 sm:py-16 border-t reveal">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-elev p-6">
            <h2 className="text-3xl font-bold mb-4">Aloqa</h2>
            <p>Manzil: Buxoro shahri, Namozgoh ko‘chasi, 240-uy</p>
            <p>Telefon: +998 65 226 40 80</p>
          </div>
          <div className="card-elev aspect-video w-full overflow-hidden p-0">
            <iframe
              src="https://www.google.com/maps/embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
