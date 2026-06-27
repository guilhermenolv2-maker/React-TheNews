import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const items = [
  { label: "início", path: "/", icon: "home" },
  { label: "streak", path: "/streak", icon: "flame" },
  { label: "dúvidas", path: "/duvidas", icon: "help" },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegação mobile">
      {items.map((item) => (
        <NavLink key={item.path} to={item.path}>
          <Icon name={item.icon} size={21} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
