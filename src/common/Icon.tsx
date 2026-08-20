interface IconProps {
  className?: string
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 24" fill="currentColor" className={className}>
      <path d="M0 24V15.6C0 10.8 1.2 6.9 3.6 3.9C6 0.9 9.1 -0.3 12.9 0.3L13.5 4.5C11.1 4.9 9.3 5.9 8.1 7.5C6.9 9 6.3 10.9 6.3 13.2H12.6V24H0ZM18.9 24V15.6C18.9 10.8 20.1 6.9 22.5 3.9C24.9 0.9 28 -0.3 31.8 0.3L32.4 4.5C30 4.9 28.2 5.9 27 7.5C25.8 9 25.2 10.9 25.2 13.2H31.5V24H18.9Z" />
    </svg>
  )
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6.6 10.8C7.9 13.4 10 15.5 12.6 16.8L14.7 14.7C15 14.4 15.4 14.3 15.8 14.5C17 14.9 18.3 15.1 19.6 15.1C20.2 15.1 20.7 15.6 20.7 16.2V19.6C20.7 20.2 20.2 20.7 19.6 20.7C10.5 20.7 3.1 13.3 3.1 4.2C3.1 3.6 3.6 3.1 4.2 3.1H7.6C8.2 3.1 8.7 3.6 8.7 4.2C8.7 5.5 8.9 6.8 9.3 8C9.4 8.4 9.3 8.8 9.1 9.1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BarChartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 19V11M12 19V5M19 19V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function TrendUpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 16L9.5 10.5L13.5 14.5L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8H20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 21C12 21 19 14.8 19 10C19 6.1 15.9 3 12 3C8.1 3 5 6.1 5 10C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.5 7L12 12.5L19.5 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function GridIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="6" cy="6" r="1.6" />
      <circle cx="12" cy="6" r="1.6" />
      <circle cx="18" cy="6" r="1.6" />
      <circle cx="6" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="18" cy="12" r="1.6" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="12" cy="18" r="1.6" />
      <circle cx="18" cy="18" r="1.6" />
    </svg>
  )
}

export function AsteriskIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 4V20M5.5 7L18.5 17M18.5 7L5.5 17"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function GoogleGIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-3.1-.4-4.6H24v9h11.8c-.5 2.8-2.1 5.1-4.4 6.7v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.6z"
      />
      <path
        fill="#34A853"
        d="M24 46c6 0 11-2 14.6-5.4l-7.1-5.5c-2 1.3-4.6 2.1-7.5 2.1-5.8 0-10.6-3.9-12.4-9.1H4.3v5.7C7.9 41.1 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.6 28.1c-.5-1.3-.7-2.7-.7-4.1s.3-2.8.7-4.1v-5.7H4.3C2.8 17.1 2 20.4 2 24s.8 6.9 2.3 9.8l7.3-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.8c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.2 29.9 2 24 2 15.4 2 7.9 6.9 4.3 14.2l7.3 5.7c1.8-5.2 6.6-9.1 12.4-9.1z"
      />
    </svg>
  )
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 19C3.5 15.7 6 13 9 13C12 13 14.5 15.7 14.5 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15 13.3C17.3 13.7 19 15.9 19 18.6M14 8.3C15.4 7.9 16.4 6.6 16.4 5.1C16.4 3.6 15.4 2.4 14 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

const SERVICE_ICON_PATHS: Record<string, React.ReactNode> = {
  message: (
    <path
      d="M21 12C21 16.4 16.9 20 12 20C10.6 20 9.3 19.7 8.1 19.2L3 20L4.4 15.7C3.5 14.6 3 13.3 3 12C3 7.6 7.1 4 12 4C16.9 4 21 7.6 21 12Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  ),
  chart: (
    <path
      d="M12 4V12H20C20 16.4 16.4 20 12 20C7.6 20 4 16.4 4 12C4 7.9 7.1 4.4 11 4V4H12Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  ),
  bank: (
    <path
      d="M4 10L12 4L20 10M5 10V19M19 10V19M9 10V19M15 10V19M3 20H21"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  ai: (
    <path
      d="M12 3V6M12 18V21M3 12H6M18 12H21M6 6L8 8M16 16L18 18M18 6L16 8M8 16L6 18M12 9A3 3 0 1 0 12 15A3 3 0 1 0 12 9Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  ),
  coins: (
    <path
      d="M9 11A5 5 0 1 0 9 1A5 5 0 1 0 9 11ZM6 15A5 5 0 1 0 6 5"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  ),
  layers: (
    <path
      d="M12 3L21 8L12 13L3 8L12 3ZM3 12L12 17L21 12M3 16L12 21L21 16"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  ),
  asterisk: (
    <path
      d="M12 4V20M5.5 7L18.5 17M18.5 7L5.5 17"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  ),
  bubbles: (
    <path
      d="M8 11A4 4 0 1 0 8 3A4 4 0 1 0 8 11ZM16.5 18A2.5 2.5 0 1 0 16.5 13A2.5 2.5 0 1 0 16.5 18Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  ),
  shield: (
    <path
      d="M12 3L19 6V11C19 15.4 16 19.2 12 21C8 19.2 5 15.4 5 11V6L12 3ZM9.5 12L11 13.5L14.5 10"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  link: (
    <path
      d="M9 15L15 9M8 12L6 14C4.9 15.1 4.9 16.9 6 18C7.1 19.1 8.9 19.1 10 18L12.5 15.5M16 12L18 10C19.1 8.9 19.1 7.1 18 6C16.9 4.9 15.1 4.9 14 6L11.5 8.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  code: (
    <path
      d="M9 8L4 12L9 16M15 8L20 12L15 16"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  pie: (
    <path
      d="M12 3V12L18.5 8.3C17.2 5.2 14.9 3.3 12 3ZM12 12L6.5 16.5C8.2 18.7 10.9 20 13.9 19.7C17.5 19.4 20.3 16.5 20.6 12.9C20.7 11.2 20.3 9.6 19.5 8.3L12 12Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  ),
  star: (
    <path
      d="M12 3L14.6 9L21 9.6L16.2 13.8L17.6 20.1L12 16.8L6.4 20.1L7.8 13.8L3 9.6L9.4 9L12 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
}

export function ServiceIcon({ name, className }: IconProps & { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      {SERVICE_ICON_PATHS[name] ?? SERVICE_ICON_PATHS.asterisk}
    </svg>
  )
}
