const paths = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  arrowUpRight: <path d="M8 16 16 8m-7 0h7v7" />,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m7 10 5 5 5-5" />,
  flame: <path d="M12 22c4 0 7-2.8 7-7.2 0-2.8-1.5-5.4-4.5-7.8.1 2-1 3.4-2.1 4.1.2-3.5-1.6-6.4-4.4-8.1.1 3.5-3 5.8-3 10.8C5 18.7 8.1 22 12 22Z" />,
  home: <path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></>,
  trophy: <><path d="M8 4h8v4c0 4-1.8 6-4 6s-4-2-4-6Z" /><path d="M8 6H4v2c0 2 1.3 3 4 3m8-5h4v2c0 2-1.3 3-4 3M12 14v4m-4 2h8" /></>,
  ticket: <path d="M4 5h16v4a3 3 0 0 0 0 6v4H4v-4a3 3 0 0 0 0-6Z" />,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 15 6l-.3-2.5h-4L10.4 6A8 8 0 0 0 9 7.1l-2.4-1-2 3.4 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.4-1a8 8 0 0 0 1.5.9l.3 2.7h4l.3-2.7a8 8 0 0 0 1.5-.9l2.4 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.7 9a2.5 2.5 0 1 1 3.6 2.3c-.8.4-1.3 1-1.3 1.7m0 4h.01" /></>,
  logout: <><path d="M10 5H5v14h5m4-3 4-4-4-4m4 4H9" /></>,
};

export default function Icon({ name, size = 20, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}
