
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="app">
      {/* ШАПКА */}
      <header
        style={{
          background: "rgba(255,255,255,0.85)",
          padding: "30px 20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderBottom: "2px solid rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            flex: "1 1 100%",
            margin: "0 0 10px 0",
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            lineHeight: 1.2,
            wordBreak: "break-word",
          }}
        >
          Бухарский областной центр фтизиатрии и пульмонологии
        </h1>
        <p
          style={{
            flex: "1 1 100%",
            margin: 0,
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            opacity: 0.9,
            wordBreak: "break-word",
          }}
        >
          Современные методы диагностики, лечения и профилактики заболеваний лёгких
        </p>
      </header>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        <section>
          <h2>О Центре</h2>
          <p>
            Наш центр является ведущим медицинским учреждением региона в области
            фтизиатрии и пульмонологии. Мы предоставляем полный спектр услуг по
            диагностике, лечению и профилактике заболеваний лёгких, включая
            туберкулёз, хронические обструктивные заболевания лёгких и другие
            патологии дыхательной системы.
          </p>
          <p>
            В нашей команде работают высококвалифицированные специалисты с многолетним
            опытом, а современное оборудование позволяет проводить обследования и
            лечение на самом высоком уровне.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
