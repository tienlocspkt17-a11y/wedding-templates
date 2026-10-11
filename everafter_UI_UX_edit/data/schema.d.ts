// Shape of data/wedding.json. Use this when connecting the site to the app later.

export type WeddingWebsiteConfig = {
  /** A style id from core/styles.js: editorial | lacquer | polaroid | postal | indochine | botanical | starry | dongho | cinema | bottle */
  templateId: string

  siteSettings: {
    language: 'vi' | 'en'
    title: string
    slug: string
    publishState: 'draft' | 'published'
  }

  intro: {
    enabled: boolean
    /** "template" = the style's own opening animation */
    style: string
    title: string
    /** {guestName} is replaced with the guest from the link (?to=…) */
    subtitle: string
    /** Overrides the open button's label; empty keeps the style's wording */
    buttonLabel: string
  }

  music: {
    enabled: boolean
    /** URL or path, e.g. assets/music/our-song.mp3 */
    source: string
    /** 0–1 */
    volume: number
    /** Starts only after the guest taps the open button; never on page load */
    autoplayAfterOpen: boolean
  }

  couple: {
    brideName: string
    groomName: string
    brideShortName: string
    groomShortName: string
    monogram: string
    /** YYYY-MM-DD, Vietnam time */
    weddingDate: string
    lunarDate?: string
    city: string
    headline: string
    heroImage: string
  }

  themeOverrides: {
    /** CSS variable name without "--" → value, e.g. { "accent": "#8e1b1b", "bg": "#fff" } */
    colors?: Record<string, string>
    /** { display?: "'Font', serif", body?: "'Font', sans-serif" } */
    fonts?: Record<string, string>
    /** "" | "compact" | "airy" */
    spacing?: string
  }

  modules: WeddingModule[]
}

export type ModuleId =
  | 'hero' | 'invitation' | 'families' | 'story' | 'events' | 'schedule' | 'saveDate'
  | 'party' | 'video' | 'gallery' | 'dressCode' | 'faq' | 'quote' | 'rsvp'
  | 'gift' | 'registry' | 'guestbook' | 'contact' | 'thanks'

export type WeddingModule = {
  id: ModuleId
  enabled: boolean
  /** Ascending; the site renders enabled modules in this order */
  order: number
  /** "auto" = the template's own layout (falls back to classic), "classic" = shared layout, or a named template variant */
  variant: string
  /** Module-specific content; every module also accepts eyebrow / title / sub to override its heading */
  content: Record<string, unknown>
  assets?: Record<string, unknown>
  display?: Record<string, unknown>
}

/** What RSVP / guestbook / registry submissions look like (EA.store in core/core.js). */
export type RsvpEntry = { name: string; attending: boolean; plus: number; events: number[]; note: string; at: string }
export type GuestbookEntry = { name: string; message: string; at: string }
export type RegistryPick = { item: string; guest: string; at: string }
