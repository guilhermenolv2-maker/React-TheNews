import { NavLink } from "react-router-dom";
import Brand from "./Brand";
import Icon from "./Icon";

const links = [
  { label: "app", to: "/" },
  { label: "streak", to: "/streak" },
  { label: "podcast" },
  { label: "marcas" },
  { label: "dúvidas", to: "/duvidas" },
];

export default function Header({ onSubscribe, onUnavailable }) {
  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.map((link) =>
          link.to ? (
            <NavLink key={link.label} to={link.to}>
              {link.label}
              {(link.label === "app" || link.label === "streak") && (
                <Icon name="arrowUpRight" size={18} />
              )}
            </NavLink>
          ) : (
            <button key={link.label} onClick={() => onUnavailable?.(link.label)}>
              {link.label}
              {link.label === "podcast" && <Icon name="arrowUpRight" size={18} />}
            </button>
          ),
        )}
      </nav>
      <button className="button button-gradient header-cta" onClick={onSubscribe}>
        Cadastre-se
      </button>
    </header>
  );
}
