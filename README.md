# secure-website

A **secure static website** built for a Cryptography & Web Security class project, deployable to [Netlify](https://www.netlify.com) with a single click.

## What's included

| File | Purpose |
|------|---------|
| `index.html` | Main page – security features overview |
| `css/style.css` | Styles (no inline CSS) |
| `js/main.js` | Behaviour (no inline scripts) |
| `netlify.toml` | Netlify config: HTTPS redirect + security headers |

## Security hardening

- **HTTPS enforced** – every HTTP request is 301-redirected to HTTPS via `netlify.toml`
- **Content Security Policy** – blocks XSS and data-injection; only same-origin resources allowed
- **HSTS** – `Strict-Transport-Security` with 1-year max-age, `includeSubDomains`, and `preload`
- **Clickjacking protection** – `X-Frame-Options: DENY` + `frame-ancestors 'none'` in CSP
- **MIME sniffing prevention** – `X-Content-Type-Options: nosniff`
- **Referrer leakage reduction** – `Referrer-Policy: strict-origin-when-cross-origin`
- **Permissions Policy** – camera, microphone, geolocation and payment APIs disabled
- **No inline scripts or styles** – complies with strict CSP

## Deploy to Netlify

1. Fork / clone this repo
2. Log in to [Netlify](https://app.netlify.com)
3. Click **Add new site → Import an existing project**
4. Select this repository – Netlify will detect `netlify.toml` automatically
5. Click **Deploy site**

That's it – Netlify provisions a TLS certificate via Let's Encrypt and applies all security headers defined in `netlify.toml`.
