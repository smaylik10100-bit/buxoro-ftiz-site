
import React, { useMemo, useState, useEffect } from "react";
import "./index.css";

export default function BukharaTBClinicSite() {
  const [lang, setLang] = useState("uz");
  const t = useMemo(() => translations[lang], [lang]);

  const menu = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "departments", label: t.nav.departments },
    { id: "diagnostics", label: t.nav.diagnostics },
    { id: "news", label: t.nav.news },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("show"));
    }, { threshold: 0.12 });
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={logoSrc}
                alt="Logo"
                className="h-10 w-10 rounded-xl object-contain ring-1 ring-gray-200 bg-white"
                onError={(e) => ((e.currentTarget.src = fallbackLogo))}
              />
              <div className="leading-tight min-w-0">
                <div className="font-bold text-sm sm:text-base truncate">{t.header.title}</div>
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
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="about" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                {t.hero.title}
              </h1>
              <p className="mt-4 text-gray-700 text-base sm:text-lg">{t.hero.desc}</p>
              {t.hero.extra && <p className="mt-4 text-gray-700 text-sm sm:text-base">{t.hero.extra}</p>}

              {/* Buttons row (DMED + Call + Telegram + Route) */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={dmedLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 text-white px-4 py-2.5 text-sm sm:text-base font-medium hover:bg-teal-700"
                >
                  <IconApp className="h-5 w-5" />
                  {t.hero.ctaDmed}
                </a>

                <a
                  href={`tel:${contacts.mainPhoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm sm:text-base font-medium hover:bg-teal-50"
                >
                  <IconPhone className="h-5 w-5" />
                  {t.buttons.call}
                </a>

                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm sm:text-base font-medium hover:bg-teal-50"
                >
                  <IconTelegram className="h-5 w-5" />
                  {t.buttons.writeTelegram}
                </a>

                <a
                  href={mapExternal}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm sm:text-base font-medium hover:bg-teal-50"
                >
                  <IconMap className="h-5 w-5" />
                  {t.hero.ctaRoute}
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Clinic Building"
                className="w-full h-[320px] sm:h-[420px] object-cover rounded-3xl shadow-lg ring-1 ring-gray-200"
                onError={(e) => ((e.currentTarget.src = fallbackHero))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Departments (как было) */}
      <section id="departments" className="scroll-mt-20 py-12 sm:py-16">
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
    </div>
  );
}

/* ---- Icons ---- */
function IconPhone({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.37 1.77.72 2.58a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.5-1.24a2 2 0 0 1 2.11-.45c.81.35 1.68.6 2.58.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconTelegram({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 3 2.6 10.1c-.9.3-.9 1.1-.2 1.4l5 1.6 1.9 5.9c.2.5.8.6 1.2.2l2.8-2.3 4.7 3.5c.5.3 1.1.1 1.2-.5L23 3.8c.2-.8-.4-1.2-1-.8zM8 13l10-6-7.4 8.1-.3 3-2.3-5.1z" />
    </svg>
  );
}
function IconApp({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9 8h6M8 12h8M9 16h6" />
    </svg>
  );
}
function IconMap({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
      <path d="M9 3v15M15 6v15" />
    </svg>
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
          className={"px-2 py-1 rounded-lg text-xs font-medium " + (lang === o.code ? "bg-teal-600 text-white" : "hover:bg-gray-100")}
          aria-pressed={lang === o.code}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/* ---- Static content ---- */
const logoSrc = "/mnt/data/IMG_20240514_092538_920.png";
const fallbackLogo = "/mnt/data/IMG_20240514_092538_920.png";
const heroImage = "/mnt/data/photo_2025-08-14_23-13-31.jpg";
const fallbackHero = "/mnt/data/photo_2025-08-14_23-13-31.jpg";
const telegramLink = "https://t.me/buxoro_ftiz_kanal";
const dmedLink = "https://play.google.com/store/apps/details?id=uz.uzinfocom.dmed&hl=ru&pli=1";
const mapExternal = "https://maps.google.com/?q=39.74376333796581,64.40053440224702";

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
      desc: "Markazimiz nafas tizimi kasalliklarini erta aniqlash, profilaktika va davolash bo‘yicha ixtisoslashgan. Tajribali shifokorlar jamoasi va zamonaviy diagnostika aniq tashxis va samarali davolanishni ta’minlaydi.",
      extra: "Qabulga yozilish DMED ilovasi orqali. Markaz hududida Buxoro davlat tibbiyot instituti ftiziatriya va pulmonologiya kafedrasi joylashgan.",
      ctaDmed: "DMED orqali yozilish",
      ctaRoute: "Marshrutni qurish",
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
    buttons: {
      call: "Qo‘ng‘iroq qilish",
      writeTelegram: "Telegramda yozish",
    },
  },
  ru: {
    header: {
      title: "Бухарский областной центр фтизиатрии и пульмонологии",
      subtitle: "Высококвалифицированная помощь по туберкулёзу и болезням дыхания",
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
      desc: "Современное учреждение по профилактике, ранней диагностике и лечению заболеваний дыхательной системы. Опытные врачи, цифровая рентгенография, ПЦР/GenXpert, спирометрия и расширенная лаборатория.",
      extra: "Запись на приём через приложение DMED. На территории центра — кафедра фтизиатрии и пульмонологии БухГМИ.",
      ctaDmed: "Записаться в DMED",
      ctaRoute: "Построить маршрут",
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
    buttons: {
      call: "Позвонить",
      writeTelegram: "Написать в Telegram",
    },
  },
};
