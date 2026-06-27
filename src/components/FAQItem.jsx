import Icon from "./Icon";

export default function FAQItem({ answer, isOpen, onToggle, question }) {
  return (
    <article className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button aria-expanded={isOpen} onClick={onToggle}>
        <span>{question}</span>
        <Icon name="chevron" size={17} />
      </button>
      <div className="faq-answer" aria-hidden={!isOpen}>
        <p>{answer}</p>
      </div>
    </article>
  );
}
