export function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 208 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="0"
          y1="0"
          x2="208"
          y2="208"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="hsl(var(--primary))" />
          <stop offset="1" stopColor="hsl(var(--primary) / 0.5)" />
        </linearGradient>
      </defs>
      <path
        d="M64 48V160H96V104C96 86.3269 110.327 72 128 72H136"
        stroke="url(#logo-gradient)"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M104 104L160 48M104 104L160 160"
        stroke="url(#logo-gradient)"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
