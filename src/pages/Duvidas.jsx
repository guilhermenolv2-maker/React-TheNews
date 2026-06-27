import { useMemo, useState } from "react";
import AppLayout from "../components/AppLayout";
import Brand from "../components/Brand";
import FAQItem from "../components/FAQItem";
import Icon from "../components/Icon";
import { faqData } from "../data/faqData";

const categories = ["todas", "assinatura", "conteúdo", "privacidade"];

export default function Duvidas() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);
  const [category, setCategory] = useState("todas");
  const [notice, setNotice] = useState("");

  function showUnavailable() {
    setNotice("O menu completo estará disponível em breve.");
    window.setTimeout(() => setNotice(""), 3200);
  }

  const filteredFaqs = useMemo(() => {
    const normalized = query.toLocaleLowerCase("pt-BR").trim();
    return faqData.filter((item) => {
      const matchesCategory = category === "todas" || item.category === category;
      const matchesQuery =
        !normalized ||
        `${item.question} ${item.answer}`.toLocaleLowerCase("pt-BR").includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <AppLayout className="faq-page">
      <main className="faq-wrap">
        <header className="faq-header">
          <Brand />
          <button aria-label="Abrir menu" onClick={showUnavailable}>
            <Icon name="menu" size={30} />
          </button>
        </header>

        <section className="faq-intro">
          <p className="eyebrow">Central de ajuda</p>
          <h1>dúvidas</h1>
          <p>Está com alguma dúvida?<br />Encontre respostas rápidas para aproveitar ainda mais o <strong>the news.</strong></p>
        </section>

        <label className="search-box">
          <Icon name="search" size={22} />
          <span className="sr-only">Buscar dúvida</span>
          <input
            type="search"
            placeholder="Buscar dúvida..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <div className="category-tabs" aria-label="Categorias">
          {categories.map((item) => (
            <button
              className={category === item ? "active" : ""}
              key={item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <section className="faq-list">
          <header>
            <h2>Perguntas frequentes</h2>
            <span>
              {filteredFaqs.length} {filteredFaqs.length === 1 ? "resposta" : "respostas"}
            </span>
          </header>
          {filteredFaqs.length ? (
            filteredFaqs.map((item) => (
              <FAQItem
                {...item}
                isOpen={openId === item.id}
                key={item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))
          ) : (
            <div className="empty-state">
              <span>☀️</span>
              <strong>Nenhuma dúvida encontrada</strong>
              <p>Tente buscar por outro termo ou categoria.</p>
            </div>
          )}
        </section>
      </main>
      <div className={`availability-toast ${notice ? "visible" : ""}`} role="status">
        <span>☀️</span>
        {notice}
      </div>
    </AppLayout>
  );
}
