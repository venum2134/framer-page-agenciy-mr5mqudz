// Rend un composant Framer avec la variante du breakpoint actif (comme sur le site publié).
import * as React from "react"

type Entry = { query: string; variant: string }

export default function ResponsiveVariant({ Component, entries, fallback, ...rest }: {
  Component: React.ComponentType<Record<string, unknown>>
  entries: Entry[]
  fallback?: string
} & Record<string, unknown>) {
  const getVariant = React.useCallback(() => {
    if (typeof window === "undefined") return fallback
    for (const e of entries) if (window.matchMedia(e.query).matches) return e.variant
    return fallback
  }, [entries, fallback])
  const subscribe = React.useCallback((cb: () => void) => {
    if (typeof window === "undefined") return () => {}
    const mqls = entries.map((e) => window.matchMedia(e.query))
    for (const m of mqls) m.addEventListener("change", cb)
    return () => { for (const m of mqls) m.removeEventListener("change", cb) }
  }, [entries])
  const variant = React.useSyncExternalStore(subscribe, getVariant, () => fallback)
  return <Component {...rest} {...(variant ? { variant } : {})} />
}
