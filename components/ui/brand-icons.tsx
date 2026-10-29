import React from "react";

/**
 * Exact sky-blue Paw Print logo mark from the reference comp (4 oval toes + heart-shaped pad)
 */
export function BrandPawIcon({ className = "size-7", color = "#2CB7FF" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
      {/* 4 Toes */}
      <ellipse cx="9.2" cy="14.5" rx="3.1" ry="4.3" transform="rotate(-18 9.2 14.5)" fill={color} />
      <ellipse cx="15.2" cy="10.2" rx="3.1" ry="4.5" transform="rotate(-6 15.2 10.2)" fill={color} />
      <ellipse cx="21.8" cy="10.2" rx="3.1" ry="4.5" transform="rotate(6 21.8 10.2)" fill={color} />
      <ellipse cx="27.5" cy="14.5" rx="3.1" ry="4.3" transform="rotate(18 27.5 14.5)" fill={color} />
      {/* Main Pad */}
      <path
        d="M18.4 16.2C14.6 16.2 11.2 19.3 10.2 22.8C9.4 25.6 11.1 28.2 14 28.2C15.6 28.2 16.9 27.5 18.4 27.5C19.9 27.5 21.2 28.2 22.8 28.2C25.7 28.2 27.4 25.6 26.6 22.8C25.6 19.3 22.2 16.2 18.4 16.2Z"
        fill={color}
      />
    </svg>
  );
}

/**
 * 3D Glossy Red Sphere with Tilted White Heart (Hero "FRIEND", ServiceBreakdown photo card, Marquee "LOVE")
 */
export function GlossyHeartBadge({ className = "size-11" }: { className?: string }) {
  return (
    <span
      className={`relative inline-grid place-items-center rounded-full select-none shrink-0 ${className}`}
      style={{
        background: "radial-gradient(circle at 32% 28%, #FF9AA6 0%, #FF425E 48%, #E11D3F 88%, #C01030 100%)",
        boxShadow: "0 8px 18px -3px rgba(235, 35, 70, 0.48), inset 0 2px 4px rgba(255, 255, 255, 0.45)",
      }}
      aria-hidden="true"
    >
      {/* Top-left specular highlight */}
      <span
        className="pointer-events-none absolute left-[18%] top-[14%] h-[22%] w-[34%] -rotate-[28deg] rounded-full opacity-55"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <svg
        viewBox="0 0 24 24"
        className="size-[54%] -rotate-[12deg] drop-shadow-[0_1px_2px_rgba(160,0,30,0.35)]"
        fill="white"
      >
        <path d="M12 20.6C11.6 20.6 11.2 20.4 10.9 20.2C6.4 16.2 3 13.1 3 8.9C3 5.9 5.3 3.6 8.2 3.6C9.9 3.6 11.4 4.4 12 5.6C12.6 4.4 14.1 3.6 15.8 3.6C18.7 3.6 21 5.9 21 8.9C21 13.1 17.6 16.2 13.1 20.2C12.8 20.4 12.4 20.6 12 20.6Z" />
      </svg>
    </span>
  );
}

/**
 * 3D Apple-style Cute Brown & White Puppy Face Emoji (used in "Book a Schedule | 🐶" and Marquee "SITTING")
 */
export function PuppyFaceEmoji({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`inline-block shrink-0 select-none ${className}`} aria-hidden="true">
      <defs>
        <radialGradient id="pup-head" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#FFFDF9" />
          <stop offset="75%" stopColor="#F4E8D8" />
          <stop offset="100%" stopColor="#E2CEB5" />
        </radialGradient>
        <linearGradient id="pup-ear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A86532" />
          <stop offset="60%" stopColor="#7C441B" />
          <stop offset="100%" stopColor="#582E0F" />
        </linearGradient>
        <radialGradient id="pup-patch" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B6733E" />
          <stop offset="100%" stopColor="#8A4F22" />
        </radialGradient>
      </defs>
      {/* Left & Right Floppy Ears */}
      <path
        d="M11 10C6.5 10 3.5 15 4 22.5C4.4 28 7 31 9.8 30C12 29.2 13.5 24 14 17.5C14.2 13 13 10 11 10Z"
        fill="url(#pup-ear)"
      />
      <path
        d="M37 10C41.5 10 44.5 15 44 22.5C43.6 28 41 31 38.2 30C36 29.2 34.5 24 34 17.5C33.8 13 35 10 37 10Z"
        fill="url(#pup-ear)"
      />
      {/* Main Head */}
      <rect x="9" y="9" width="30" height="29" rx="14.5" fill="url(#pup-head)" />
      {/* Brown Patch over Right Eye */}
      <ellipse cx="30" cy="21.5" rx="6.5" ry="6" transform="rotate(10 30 21.5)" fill="url(#pup-patch)" />
      {/* Pink Tongue sticking out bottom */}
      <path
        d="M21 35.5C21 39.2 22.3 41.5 24 41.5C25.7 41.5 27 39.2 27 35.5H21Z"
        fill="#FF6B8B"
      />
      <line x1="24" y1="36" x2="24" y2="40" stroke="#E04868" strokeWidth="1" strokeLinecap="round" />
      {/* Muzzle / Snout */}
      <ellipse cx="24" cy="30" rx="8.5" ry="6.2" fill="#FFFDFB" />
      {/* Left Eye */}
      <circle cx="18" cy="21.5" r="2.7" fill="#1F1610" />
      <circle cx="17.2" cy="20.6" r="0.9" fill="white" />
      {/* Right Eye */}
      <circle cx="30" cy="21.5" r="2.7" fill="#1F1610" />
      <circle cx="29.2" cy="20.6" r="0.9" fill="white" />
      {/* Nose */}
      <ellipse cx="24" cy="27.2" rx="3.6" ry="2.5" fill="#1F1610" />
      <ellipse cx="23.2" cy="26.4" rx="1.2" ry="0.6" fill="white" opacity="0.65" />
      {/* Smile Mouth */}
      <path
        d="M24 29.7V32.2M24 32.2C22 33.8 19.5 33.2 18.5 31.8M24 32.2C26 33.8 28.5 33.2 29.5 31.8"
        stroke="#3A2618"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Black Fishbone Skeleton Icon (used in Hero "FISH CUTLET" stamp and Marquee "FEEDING")
 */
export function FishboneSvg({ className = "w-14 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 48" fill="none" className={className} aria-hidden="true">
      {/* Fish Head (Right side, facing right/up-right like reference) */}
      <path
        d="M54 14C63 14 70 19 72 24C70 29 63 34 54 34C52 28 52 20 54 14Z"
        fill="#141414"
      />
      {/* Eye hole in head */}
      <circle cx="64" cy="22" r="2.2" fill="#FF7733" className="fill-current text-transparent" />
      <circle cx="64" cy="22" r="2" fill="white" fillOpacity="0.85" />
      {/* Spine */}
      <path
        d="M15 27C28 26 42 25 56 24"
        stroke="#141414"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* 4 Curved Ribs */}
      <path d="M47 15C45 21 45 27 47 33" stroke="#141414" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M39 16.5C37.2 21.5 37.2 26.5 39 31.5" stroke="#141414" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M31 18C29.5 22 29.5 26 31 30" stroke="#141414" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M23.5 19.5C22.5 22.5 22.5 25.5 23.5 28.5" stroke="#141414" strokeWidth="2.4" strokeLinecap="round" />
      {/* Tail Fin (Left side) */}
      <path
        d="M16 27L6 19L9 27L6 35L16 27Z"
        fill="#141414"
        stroke="#141414"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 3D Pink Bow inside White Circle Badge (used in Marquee "GROOMING")
 */
export function BowCircleBadge({ className = "size-10" }: { className?: string }) {
  return (
    <span
      className={`inline-grid place-items-center rounded-full bg-white shadow-[0_3px_10px_rgba(0,0,0,0.12)] shrink-0 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 36 36" fill="none" className="size-[76%]">
        <defs>
          <linearGradient id="bow-pink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF94B8" />
            <stop offset="55%" stopColor="#FF5286" />
            <stop offset="100%" stopColor="#D82B62" />
          </linearGradient>
        </defs>
        {/* Left & Right Ribbons hanging down */}
        <path d="M16 19L11 29L15 27.5L17.5 30L18 20" fill="#E0356B" />
        <path d="M20 19L25 29L21 27.5L18.5 30L18 20" fill="#E0356B" />
        {/* Left Loop */}
        <path
          d="M18 17C14 11 6 10 5.5 15.5C5 21 13 22 18 17Z"
          fill="url(#bow-pink)"
        />
        {/* Right Loop */}
        <path
          d="M18 17C22 11 30 10 30.5 15.5C31 21 23 22 18 17Z"
          fill="url(#bow-pink)"
        />
        {/* Center Knot */}
        <ellipse cx="18" cy="17" rx="3" ry="3.4" fill="#FF739E" />
      </svg>
    </span>
  );
}

/**
 * 3D Glossy Orange & White Capsule Pill (used in Marquee "HEALTH")
 */
export function CapsulePillEmoji({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={`inline-block shrink-0 ${className}`} aria-hidden="true">
      <g transform="rotate(35 20 20)">
        {/* Drop shadow */}
        <rect x="13" y="5" width="16" height="32" rx="8" fill="rgba(0,0,0,0.14)" />
        {/* Top Half: Glossy Orange */}
        <path
          d="M12 12C12 7.58172 15.5817 4 20 4C24.4183 4 28 7.58172 28 12V20H12V12Z"
          fill="#FF6B2B"
        />
        {/* Bottom Half: Glossy White/Silver */}
        <path
          d="M12 20H28V28C28 32.4183 24.4183 36 20 36C15.5817 36 12 32.4183 12 28V20Z"
          fill="#F5F7FA"
        />
        {/* Left Specular Highlight */}
        <rect x="14.5" y="7" width="3" height="24" rx="1.5" fill="white" fillOpacity="0.55" />
      </g>
    </svg>
  );
}

/**
 * Dog Collar Line-Art Icon (used in "WELL GROOMED PET COLLECTION" header)
 */
export function CollarLineIcon({ className = "w-14 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" fill="none" className={className} aria-hidden="true">
      <g transform="rotate(-14 32 20)" stroke="#57534E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer collar band */}
        <ellipse cx="32" cy="20" rx="22" ry="9" />
        {/* Inner collar band */}
        <path d="M12 18C17 22 47 22 52 18" />
        <path d="M10.5 22C15 28 49 28 53.5 22" />
        {/* Buckle & holes */}
        <rect x="26" y="24.5" width="7" height="5.5" rx="1" fill="#FAFAF9" />
        <line x1="29.5" y1="24.5" x2="29.5" y2="30" />
        <circle cx="19" cy="24.5" r="1" fill="#57534E" />
        <circle cx="40" cy="25.5" r="1" fill="#57534E" />
        <circle cx="45" cy="24" r="1" fill="#57534E" />
      </g>
    </svg>
  );
}

/**
 * Hand-drawn Bone Doodle with Shine Lines (above yellow banner in FeatureNutrition)
 */
export function BoneDoodleSvg({ className = "w-16 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 52" fill="none" className={className} aria-hidden="true">
      <g stroke="#57534E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 16C14.5 13 10 14.5 9.5 18.5C9 21.5 11.5 23.5 13.5 24C11 25.5 10.5 29 13 31.5C15.5 34 19.5 32.5 21 29.5L46 35.5C46.5 39 50 41.5 53.5 39.5C56.5 38 56.5 34.5 54.5 32.5C57.5 31.5 59 28 57 25C55 22 50.5 23 48.5 26L18 16Z" />
        {/* Little motion/shine dashes underneath */}
        <line x1="22" y1="36" x2="20" y2="41" />
        <line x1="27" y1="38" x2="26.5" y2="43.5" />
        <line x1="33" y1="39" x2="34" y2="44" />
      </g>
    </svg>
  );
}

/**
 * Cute Dog Face Outline Icon with Soft Green Circle Accent (Testimonials "WHAT WE CARE THE MOST?")
 */
export function CareDogLineIcon({ className = "size-12" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} aria-hidden="true">
      {/* Soft green circle offset in center-top */}
      <span className="absolute size-8 rounded-full bg-[#A7F3D0]" />
      <svg viewBox="0 0 48 48" fill="none" className="relative z-10 size-11" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Floppy Ears */}
        <path d="M14 16C9 16 6 21 7 27C7.8 31 11 32 13 29" />
        <path d="M34 16C39 16 42 21 41 27C40.2 31 37 32 35 29" />
        {/* Head Contour */}
        <path d="M13 18C13 12.5 17.5 10 24 10C30.5 10 35 12.5 35 18V27C35 33 30.5 37 24 37C17.5 37 13 33 13 27V18Z" />
        {/* Eyes */}
        <circle cx="19.5" cy="22" r="1.5" fill="#141414" />
        <circle cx="28.5" cy="22" r="1.5" fill="#141414" />
        {/* Nose & Smile */}
        <ellipse cx="24" cy="26.5" rx="2.2" ry="1.5" fill="#141414" />
        <path d="M24 28V30.5M21 30C22 31.5 26 31.5 27 30" />
      </svg>
    </div>
  );
}
