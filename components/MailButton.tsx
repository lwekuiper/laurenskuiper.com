export function MailButton({ className }: { className?: string }) {
  return (
    <a
      href="mailto:laurens@laurenskuiper.com"
      className={`inline-flex bg-theme-accent-fill px-5 py-3 font-mono text-base font-medium text-theme-text transition-colors hover:bg-theme-accent-fill-hover ${className ?? ''}`}
    >
      laurens@laurenskuiper.com
    </a>
  )
}
