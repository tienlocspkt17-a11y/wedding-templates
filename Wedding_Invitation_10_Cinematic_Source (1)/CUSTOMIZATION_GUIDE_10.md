# Customize one invitation

Each HTML contains a JSON object in:

```html
<script type="application/json" id="wedding-config">…</script>
```

Edit that object without changing the layout code.

## Content

`content` contains the couple names, display `date`, machine-readable `dateISO` (`YYYY-MM-DD`), invitation copy, family names, story chapters, event cards, FAQ, dress code, gifts, bank text, seed wishes, and intro labels (`introKicker`, `introAction`, `introPrompt`, `introReveal`). The intro action is used both for the visible control and its accessible label. `dateISO` drives the countdown, calendar heart marker, calendar caption, and generated `.ics` download.

Seed the Guestbook carousel with an array such as:

```json
"wishes": [
  {"name": "Mai & An", "copy": "Chúc hai bạn luôn dịu dàng với nhau."},
  {"name": "Gia đình Minh", "copy": "Hạnh phúc nhé, Linh và Nam!"}
]
```

The carousel automatically advances, supports previous/next and pause controls, and adds a submitted wish as a new slide. Copy is inserted with `textContent`, so guest input cannot become markup.

## Modules

`modules` has one boolean per module: `intro`, `couple`, `families`, `invitation`, `story`, `events`, `calendar`, `party`, `video`, `gallery`, `dress`, `faq`, `rsvp`, `gifts`, `registry`, `guestbook`, and `thanks`.

Set a value to `false` to hide a module. `order` controls the body order and must keep `intro` first. The validator expects all 17 keys, but the booleans may be changed freely.

## Photos, video, maps, music

```json
"assets": {
  "hero": "https://…/hero.jpg",
  "gallery": ["https://…/01.jpg", "https://…/02.jpg"],
  "video": "https://…/film.mp4"
},
"music": { "enabled": true, "url": "https://…/song.mp3", "volume": 0.35 },
"links": { "event0": "https://maps…", "event1": "https://maps…", "registry": "https://…" }
```

Browsers require a user gesture before audio playback; the first tap on the opening control is used for that handoff. Keep the opening asset optional: if `assets.hero` is `null`, the built-in art placeholder remains visible.

## Local preview

Open any HTML directly, or serve the folder with a static server if your browser blocks remote media from `file://`. No framework, bundler, or UI library is needed.
