
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function App() {
  const [lang, setLang] = useState("uz");
  const t = useMemo(() => translations[lang], [lang]);

  const menu = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "diagnostics", label: t.nav.diagnostics },
    { id: "departments", label: t.nav.departments },
    { id: "news", label: t.nav.news },
    { id: "contact", label: t.nav.contact },
  ];

  // Simple intersection observer to animate sections
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("show");
      });
    }, { threshold: 0.12 });
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="Logo"
                className="h-10 w-10 rounded-xl object-contain ring-1 ring-gray-200 bg-white"
                onError={(e) => ((e.currentTarget.src = fallbackLogo))}
              />
              <div className="leading-tight">
                <div className="font-bold text-sm sm:text-base">{t.header.title}</div>
                <div className="text-xs text-gray-600">{t.header.subtitle}</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {menu.map((m) => (
                <a key={m.id} href={`#${m.id}`} className="text-sm hover:text-teal-600">
                  {m.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <LangSwitcher lang={lang} onChange={setLang} />
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl bg-teal-600 text-white px-3 py-2 text-sm hover:bg-teal-700"
              >
                Telegram
              </a>
              <a
                href={complaintsBotLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl bg-red-600 text-white px-3 py-2 text-sm hover:bg-red-700"
              >
                {t.header.complaints}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="about" className="relative overflow-hidden reveal">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 via-white to-cyan-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">{t.hero.title}</h1>
              <p className="mt-4 text-gray-700 text-base sm:text-lg">{t.hero.desc}</p>
              {t.hero.extra && <p className="mt-4 text-gray-700 text-sm sm:text-base">{t.hero.extra}</p>}

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={dmedLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-2xl bg-teal-600 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700"
                >
                  {t.hero.ctaDmed}
                </a>
                <a
                  href={mapExternal}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-teal-50"
                >
                  {t.hero.ctaRoute}
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Clinic"
                className="w-full h-[320px] sm:h-[420px] object-cover rounded-3xl shadow-lg ring-1 ring-gray-200"
                onError={(e) => ((e.currentTarget.src = fallbackHero))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 py-12 sm:py-16 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">{t.services.title}</h2>
            <p className="text-gray-600 mt-2">{t.services.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.cards.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostics */}
      <section id="diagnostics" className="scroll-mt-20 py-12 sm:py-16 bg-white/60 border-y reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">{t.diagnostics.title}</h2>
            <p className="text-gray-600 mt-2">{t.diagnostics.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-700">
              {t.diagnostics.list.map((x, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="h-5 w-5 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white rounded-2xl p-6 ring-1 ring-gray-200 shadow-sm">
              <h4 className="font-semibold mb-2">{t.diagnostics.prep}</h4>
              <p className="text-sm text-gray-700">{t.diagnostics.prepText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="scroll-mt-20 py-12 sm:py-16 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">{t.departments.title}</h2>
            {t.departments.subtitle && <p className="text-gray-600 mt-2">{t.departments.subtitle}</p>}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.departments.items.map((x, i) => (
              <div key={i} className="rounded-2xl border px-4 py-3 bg-white text-sm ring-1 ring-gray-200 shadow-sm">
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News (Telegram) */}
      <section id="news" className="scroll-mt-20 py-12 sm:py-16 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">{t.news.title}</h2>
            <p className="text-gray-600 mt-2">{t.news.subtitle}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 ring-1 ring-gray-200 shadow-sm">
            <p className="text-sm text-gray-700 mb-3">{t.news.note}</p>
            <a href={telegramLink} target="_blank" rel="noreferrer"
               className="inline-flex items-center rounded-2xl bg-teal-600 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700">
              {t.news.openChannel}
            </a>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contact" className="scroll-mt-20 py-12 sm:py-16 border-t bg-white/60 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">{t.contact.title}</h2>
          <p className="text-gray-600 mt-2">{t.contact.subtitle}</p>
          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 ring-1 ring-gray-200 shadow-sm">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">{t.contact.address}</dt>
                  <dd className="font-medium">{contacts.address}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">{t.contact.phone}</dt>
                  <dd className="font-medium"><a href={`tel:${contacts.mainPhoneRaw}`} className="hover:underline">{contacts.mainPhone}</a></dd>
                </div>
                <div>
                  <dt className="text-gray-500">Email</dt>
                  <dd className="font-medium"><a href={`mailto:${contacts.email}`} className="hover:underline">{contacts.email}</a></dd>
                </div>
                <div>
                  <dt className="text-gray-500">Telegram</dt>
                  <dd className="font-medium"><a href={telegramLink} target="_blank" rel="noreferrer" className="hover:underline">{t.contact.telegram}</a></dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={dmedLink} target="_blank" rel="noreferrer"
                   className="inline-flex items-center rounded-2xl bg-teal-600 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700">
                  {t.hero.ctaDmed}
                </a>
                <a href={mapExternal} target="_blank" rel="noreferrer"
                   className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-teal-50">
                  {t.hero.ctaRoute}
                </a>
                <a href={telegramLink} target="_blank" rel="noreferrer"
                   className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-teal-50">
                  {t.buttons.writeTelegram}
                </a>
                <a href={complaintsBotLink} target="_blank" rel="noreferrer"
                   className="inline-flex items-center rounded-2xl bg-red-600 text-white px-4 py-2 text-sm font-medium hover:bg-red-700">
                  {t.header.complaints}
                </a>
              </div>
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
              <iframe title="Map" src={mapSrc} className="w-full h-full border-0" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} {t.footer.rights}</footer>
    </div>
  );
}

function LangSwitcher({ lang, onChange }) {
  const opts = [
    { code: "uz", label: "UZ" },
    { code: "ru", label: "RU" },
  ];
  return (
    <div className="flex items-center gap-1 rounded-xl border px-1 py-1">
      {opts.map((o) => (
        <button
          key={o.code}
          onClick={() => onChange(o.code)}
          className={
            "px-2 py-1 rounded-lg text-xs font-medium " +
            (lang === o.code ? "bg-teal-600 text-white" : "hover:bg-gray-100")
          }
          aria-pressed={lang === o.code}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

// ---- Static content & translations ----
const logoSrc = "/logo.png";
const fallbackLogo = "/logo.png";
const heroImage = "/hero.jpg";
const fallbackHero = "/hero.jpg";
const telegramLink = "https://t.me/buxoro_ftiz_kanal";
const complaintsBotLink = "https://t.me/buxoro_ftizmurojaat_bot";
const dmedLink = "https://play.google.com/store/apps/details?id=uz.uzinfocom.dmed&hl=ru&pli=1";
const mapExternal = "https://maps.app.goo.gl/yus8PspVqkPTN8No7";
const mapSrc = `https://www.google.com/maps?output=embed&q=${encodeURIComponent(mapExternal)}`;

const contacts = {
  address: "Buxoro shahri, Namozgoh ko'chasi, 240-uy. ZARMED klinikasi ro'parasida",
  mainPhone: "+998 (65) 226-40-80",
  mainPhoneRaw: "+998652264080",
  email: "info@buxoro-ftiz.uz",
};

const translations = {
  uz: {
    header: {
      title: "Buxoro viloyati ftiziatriya va pulmonologiya markazi",
      subtitle: "Sil va nafas yo'llari kasalliklari bo'yicha yuqori malakali yordam",
      complaints: "Shikoyat/Taklif bot",
    },
    nav: {
      about: "Markaz haqida",
      services: "Xizmatlar",
      diagnostics: "Diagnostika",
      departments: "Bo'limlar",
      news: "Yangiliklar",
      contact: "Aloqa",
    },
    hero: {
      title: "Sog'lig'ingiz — bizning ustuvor vazifamiz",
      desc: "Buxoro viloyati ftiziatriya va pulmonologiya markazi — nafas tizimi kasalliklarini oldini olish, erta aniqlash va davolash bo‘yicha ixtisoslashgan zamonaviy muassasa. Tajribali shifokorlar jamoasi, raqamli rentgen, PZR/GenXpert, spirometriya va keng laboratoriya imkoniyatlari aniq tashxis va samarali davolanishni ta’minlaydi. Biz bemorga qulay, xavfsiz va e’tiborli xizmat ko‘rsatishni ustuvor deb bilamiz.",
      extra: "Qabulga yozilish faqat DMED ilovasi orqali amalga oshiriladi. Markaz hududida Buxoro davlat tibbiyot instituti ftiziatriya va pulmonologiya kafedrasi faoliyat yuritadi, bu esa amaliyot va ilm-fan uyg‘unligini ta’minlaydi.",
      ctaDmed: "DMED ilovasi orqali yozilish",
      ctaRoute: "Marshrutni qurish",
    },
    services: {
      title: "Xizmatlar",
      subtitle: "Fuqarolar uchun qulay va sifatli tibbiy xizmatlar",
      cards: [
        { title: "Ftiziatr qabulida maslahat", desc: "Birlamchi ko'rik, xavf omillarini baholash, individual reja va yo'llanmalar." },
        { title: "Pulmonologik maslahat", desc: "Bronxial astma, O'OKB, pnevmoniya va boshqa kasalliklar bo'yicha ko'mak." },
        { title: "Laboratoriya tahlillari", desc: "Mokrotda BK aniqlash, PZR, umumiy klinik va biokimyoviy tahlillar." },
        { title: "Instrumental diagnostika", desc: "Raqamli rentgen, KTga yo'llanma, spirometriya, pulsoksimetriya." },
        { title: "Dispansеr kuzatuvi", desc: "Davolanish samaradorligini monitoring, dorilarni qabulni nazorat qilish (DOT)." },
        { title: "Profilaktik tadbirlar", desc: "Aholiga ma'rifat, skrininglar, korxonalarda tushuntirish ishlari." },
      ],
    },
    diagnostics: {
      title: "Diagnostika",
      subtitle: "Zamonaviy usullar asosida aniq tashxis",
      list: [
        "Mokrotda BK mikroskopiyasi",
        "PZR/GenXpert orqali MTB DNKsi",
        "Raqamli rentgen (shu jumladan mobil)",
        "Spirometriya, pulsoksimetriya",
        "Qon tahlillari va biokimyo",
      ],
      prep: "Tahlilga tayyorgarlik",
      prepText: "Mokrotda tahlil uchun ertalabki, chuqur yo'tal bilan olingan namuna talab qilinadi. Rentgen oldidan metalli buyumlarni yeching. Spirometriya oldidan chekish tavsiya etilmaydi.",
    },
    departments: {
      title: "Bo'limlar",
      subtitle: "Markazning asosiy tarkibiy bo'limlari",
      items: [
        "1-ftizioterapevtik bo'lim",
        "2-ftizioterapevtik bo'lim",
        "Diagnostika bo'limi",
        "Pulmonologiya bo'limi",
        "Suyak-bo'g'im jarrohligi bo'limi",
        "Torakal jarrohlik bo'limi",
        "Reanimatsiya bo'limi",
        "Klinik va bakteriologik laboratoriya",
        "Poliklinika bo'limi",
      ],
    },
    news: {
      title: "Yangiliklar",
      subtitle: "Telegram kanalimizdan so'nggi xabarlar",
      note: "E'lon va yangiliklar rasmiy Telegram kanalimizda joylanadi.",
      openChannel: "Kanalni ochish (Telegram)",
    },
    contact: {
      title: "Aloqa",
      subtitle: "Manzil va bog'lanish uchun ma'lumotlar",
      address: "Manzil",
      phone: "Telefon",
      telegram: "Telegram kanali",
    },
    buttons: {
      writeTelegram: "Telegramda yozish",
    },
    footer: {
      rights: "Buxoro viloyati ftiziatriya va pulmonologiya markazi",
    },
  },
  ru: {
    header: {
      title: "Бухарский областной центр фтизиатрии и пульмонологии",
      subtitle: "Высококвалифицированная помощь по туберкулёзу и болезням дыхания",
      complaints: "Бот для жалоб/предложений",
    },
    nav: {
      about: "О центре",
      services: "Услуги",
      diagnostics: "Диагностика",
      departments: "Отделения",
      news: "Новости",
      contact: "Контакты",
    },
    hero: {
      title: "Ваше здоровье — наш приоритет",
      desc: "Бухарский областной центр фтизиатрии и пульмонологии — современное учреждение, специализирующееся на профилактике, ранней диагностике и лечении заболеваний дыхательной системы. Команда опытных врачей, цифровая рентгенография, ПЦР/GenXpert, спирометрия и расширенная лаборатория позволяют ставить точный диагноз и подбирать эффективную терапию. Мы ставим во главу угла безопасность, комфорт и внимательное отношение к каждому пациенту.",
      extra: "Запись на приём ведётся только через приложение DMED. На территории центра работает кафедра фтизиатрии и пульмонологии БухГМИ, что объединяет практику, науку и обучение молодых специалистов.",
      ctaDmed: "Записаться через приложение DMED",
      ctaRoute: "Построить маршрут",
    },
    services: {
      title: "Услуги",
      subtitle: "Доступная и качественная медпомощь",
      cards: [
        { title: "Консультация фтизиатра", desc: "Первичный осмотр, оценка факторов риска, индивидуальный план и направления." },
        { title: "Консультация пульмонолога", desc: "Поддержка при астме, ХОБЛ, пневмонии и др." },
        { title: "Лабораторные анализы", desc: "БК в мокроте, ПЦР, общеклинические и биохимические исследования." },
        { title: "Инструментальная диагностика", desc: "Цифровой рентген, направление на КТ, спирометрия, пульсоксиметрия." },
        { title: "Диспансерное наблюдение", desc: "Мониторинг эффективности лечения, контроль приёма препаратов (DOT)." },
        { title: "Профилактические мероприятия", desc: "Просвещение населения, скрининги, разъяснительная работа на предприятиях." },
      ],
    },
    diagnostics: {
      title: "Диагностика",
      subtitle: "Точный диагноз на основе современных методов",
      list: [
        "Микроскопия БК в мокроте",
        "ПЦР/GenXpert на ДНК MTB",
        "Цифровая рентгенография (включая мобильную)",
        "Спирометрия, пульсоксиметрия",
        "Анализы крови и биохимия",
      ],
      prep: "Подготовка к анализам",
      prepText: "Для анализа мокроты требуется утренняя глубокая проба. Перед рентгеном снимите металлические предметы. Перед спирометрией не рекомендуется курить.",
    },
    departments: {
      title: "Отделения",
      subtitle: "Основные структурные подразделения центра",
      items: [
        "1 фтизиотерапевтическое отделение",
        "2 фтизиотерапевтическое отделение",
        "Отделение диагностики",
        "Пульмонологическое отделение",
        "Отделение костно-суставной хирургии",
        "Отделение торакальной хирургии",
        "Отделение реанимации",
        "Лаборатория клиническая и бактериологическая",
        "Отделение поликлиники",
      ],
    },
    news: {
      title: "Новости",
      subtitle: "Последние сообщения из нашего Telegram-канала",
      note: "Лента открывается в приложении/веб‑версии Telegram.",
      openChannel: "Открыть канал (Telegram)",
    },
    contact: {
      title: "Контакты",
      subtitle: "Адрес и способы связи",
      address: "Адрес",
      phone: "Телефон",
      telegram: "Телеграм-канал",
    },
    buttons: {
      writeTelegram: "Написать в Telegram",
    },
    footer: {
      rights: "Бухарский областной центр фтизиатрии и пульмонологии",
    },
  },
};
