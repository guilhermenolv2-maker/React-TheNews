import { Link } from "react-router-dom";

export default function Brand({ className = "" }) {
  return (
    <Link className={`brand ${className}`} to="/" aria-label="the news — início">
      <span className="brand-mark" aria-hidden="true" />
      <span>the news</span>
    </Link>
  );
}
