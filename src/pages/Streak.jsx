import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Brand from "../components/Brand";
import Card from "../components/Card";
import Icon from "../components/Icon";

const sidebarItems = [
  ["home", "home", "/"],
  ["target", "missões"],
  ["trophy", "conquistas"],
  ["ticket", "cupons"],
  ["settings", "ajustes"],
  ["help", "suporte", "/duvidas"],
  ["logout", "sair"],
];

const dayNames = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

function dateKey(date) {
  return date.toISOString().slice(0, 10);
}

function getWeek() {
  const today = new Date();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay());
  return dayNames.map((name, index) => {
    const date = new Date(sunday);
    date.setDate(sunday.getDate() + index);
    return { name, number: date.getDate(), key: dateKey(date), isToday: index === today.getDay() };
  });
}

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem("thenews:streak")) || { completed: [], count: 12 };
  } catch {
    return { completed: [], count: 12 };
  }
}

export default function Streak() {
  const [progress, setProgress] = useState(readProgress);
  const [feedback, setFeedback] = useState("");
  const [period, setPeriod] = useState("semanal");
  const week = useMemo(getWeek, []);
  const today = week.find((day) => day.isToday);
  const isDone = progress.completed.includes(today.key);
  const displayDate = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());

  function completeToday() {
    if (isDone) {
      setFeedback("O dia de hoje já está garantido. Volte amanhã! ✨");
      return;
    }
    const next = {
      completed: [...progress.completed, today.key],
      count: progress.count + 1,
    };
    setProgress(next);
    localStorage.setItem("thenews:streak", JSON.stringify(next));
    setFeedback("Dia concluído — sua sequência cresceu! 🔥");
  }

  return (
    <AppLayout className="streak-page">
      <div className="streak-layout">
        <aside className="streak-sidebar">
          <Brand />
          <nav aria-label="Menu da jornada">
            {sidebarItems.map(([icon, label, path]) =>
              path ? (
                <Link className={label === "home" ? "active" : ""} to={path} key={label}>
                  <Icon name={icon} size={24} />{label}
                </Link>
              ) : (
                <button key={label} onClick={() => setFeedback(`${label} estará disponível em breve.`)}>
                  <Icon name={icon} size={24} />{label}
                </button>
              ),
            )}
          </nav>
        </aside>

        <main className="streak-content">
          <header className="streak-heading">
            <div>
              <p className="mobile-brand"><Brand /></p>
              <h1>comece sua jornada hoje! <span>☀️</span></h1>
              <p>Leia, aprenda e cresça todos os dias.</p>
            </div>
            <Card className="stats-card">
              <div><span>🔥</span><strong>{progress.count}</strong><small>dias<br />sequência atual</small></div>
              <div><span>🏆</span><strong>{Math.max(28, progress.count)}</strong><small>dias<br />melhor sequência</small></div>
            </Card>
          </header>

          <section className="streak-dashboard">
            <div className="edition-visual">
              <div className="edition-sun" />
              <div className="newsletter-card">
                <div className="newsletter-brand">the news</div>
                <h2>o que é seu, te encontra</h2>
                <p>bom dia. nem sempre as coisas acontecem no nosso tempo, mas elas acontecem quando precisam.</p>
                <div className="fake-lines" />
              </div>
            </div>

            <div className="achievement-column">
              <Card className="next-achievement">
                <p>próxima conquista <span>›</span></p>
                <div><b>☕</b><span><strong>bem-vindo</strong><small>leia 1 edição seguida</small></span></div>
              </Card>
              <Card className="badges-card">
                <header>
                  <strong>conquistas</strong>
                  <button onClick={() => setFeedback("Todas as conquistas estarão disponíveis em breve.")}>
                    ver todas
                  </button>
                </header>
                <div className="badges">
                  <span><b>⭐</b><small>primeiros<br />7 dias</small></span>
                  <span><b>🔥</b><small>foco<br />10 dias</small></span>
                  <span><b>🔖</b><small>dedicação<br />14 dias</small></span>
                  <span className="locked"><b>🔒</b><small>30 dias</small></span>
                </div>
              </Card>
            </div>
          </section>

          <Card className="calendar-card">
            <div className="calendar-top">
              <p>{displayDate}</p>
              <div className="period-toggle">
                {["semanal", "mensal"].map((item) => (
                  <button
                    className={period === item ? "active" : ""}
                    key={item}
                    onClick={() => setPeriod(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="week-grid">
              {week.map((day) => (
                <button
                  className={`${day.isToday ? "today" : ""} ${progress.completed.includes(day.key) ? "done" : ""}`}
                  key={day.key}
                  onClick={day.isToday ? completeToday : undefined}
                  aria-label={`${day.name}, dia ${day.number}${day.isToday ? ", hoje" : ""}`}
                >
                  <span>{day.name}</span>
                  <b>{progress.completed.includes(day.key) ? "✓" : day.number}</b>
                </button>
              ))}
            </div>
            <button className={`complete-day ${isDone ? "completed" : ""}`} onClick={completeToday}>
              {isDone ? "Dia concluído ✓" : "Marcar hoje como concluído"}
            </button>
            <p className="streak-feedback" role="status">{feedback}</p>
          </Card>
        </main>
      </div>
    </AppLayout>
  );
}
