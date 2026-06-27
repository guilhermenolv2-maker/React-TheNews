import { useRef, useState } from "react";
import AppLayout from "../components/AppLayout";
import Header from "../components/Header";
import Icon from "../components/Icon";
import PhonePreview from "../components/PhonePreview";

const benefits = [
  "Resumos em 5 minutos",
  "Sem spam",
  "100% gratuito",
  "Conteúdo verificado",
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");
  const inputRef = useRef(null);

  function showUnavailable(feature = "Este conteúdo") {
    setNotice(`${feature} estará disponível em breve.`);
    window.setTimeout(() => setNotice(""), 3200);
  }

  function focusSubscription() {
    inputRef.current?.focus();
    inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setMessage("Digite um e-mail válido para continuar.");
      inputRef.current?.focus();
      return;
    }
    localStorage.setItem("thenews:email", email.trim());
    setMessage("Cadastro feito! Sua primeira edição já está a caminho. ☀️");
    setEmail("");
  }

  return (
    <AppLayout className="home-page">
      <div className="home-wrap">
        <Header onSubscribe={focusSubscription} onUnavailable={showUnavailable} />
        <main className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Sua dose diária de clareza</p>
            <h1>
              o <span>maior</span>
              <br />
              jornal digital
              <br />
              do país
            </h1>
            <p className="hero-description">
              As notícias que realmente importam, resumidas em apenas{" "}
              <strong>5 minutos</strong> e entregues gratuitamente no seu
              e-mail, todos os dias.
            </p>

            <ul className="benefits">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <span><Icon name="check" size={13} /></span>
                  {benefit}
                </li>
              ))}
            </ul>

            <form className="subscribe-form" onSubmit={handleSubmit} noValidate>
              <Icon name="mail" size={21} />
              <label className="sr-only" htmlFor="email">Seu e-mail</label>
              <input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                ref={inputRef}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
              />
              <button className="button button-gradient" type="submit">Cadastre-se</button>
            </form>
            <div className={`form-message ${message ? "visible" : ""}`} role="status">
              {message}
            </div>
            <button className="edition-link" onClick={() => showUnavailable("A leitura de edições")}>
              ou leia nossas edições primeiro <Icon name="arrow" size={16} />
            </button>
            <button className="button news-button" onClick={() => showUnavailable("A área de notícias")}>
              Ver principais notícias <Icon name="arrow" size={20} />
            </button>
          </div>
          <PhonePreview />
        </main>
      </div>
      <div className={`availability-toast ${notice ? "visible" : ""}`} role="status">
        <span>☀️</span>
        {notice}
      </div>
    </AppLayout>
  );
}
