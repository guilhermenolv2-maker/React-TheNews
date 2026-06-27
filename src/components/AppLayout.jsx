import BottomNav from "./BottomNav";

export default function AppLayout({ children, className = "", bottomNav = true }) {
  return (
    <div className={`app-shell ${className}`}>
      {children}
      {bottomNav && <BottomNav />}
    </div>
  );
}
