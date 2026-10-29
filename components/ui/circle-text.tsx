import { useId, type ReactNode } from "react";

/* Circular rotating text seal with arbitrary centre content */
export function CircleText({
  text,
  children,
  className = "",
}: {
  text: string;
  children: ReactNode;
  className?: string;
}) {
  const id = useId();
  return (
    <div className={`relative grid place-items-center rounded-full ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow" aria-hidden>
        <defs>
          <path id={id} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-ink text-[9px] font-bold uppercase tracking-[0.2em]">
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      {children}
    </div>
  );
}
