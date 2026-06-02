export default function Spinner({ className = '' }) {
  return (
    <div
      className={`inline-block h-10 w-10 animate-spin rounded-full border-[3px] border-leaf-200 border-t-leaf-600 ${className}`}
      role="status"
      aria-label="Loading"
    />
  )
}
