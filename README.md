# due-studios.github.io

Domura's public pages on GitHub Pages: https://due-studios.github.io

| Path | Use |
|---|---|
| `/` | Home page (App Store marketing URL, Google consent screen home page) |
| `/privacy/` | Privacy policy (App Store, Google Play, Google consent screen) |
| `/support/` | Contact and account deletion (App Store support URL, Google Play deletion URL: `/support/#delete-account`) |
| `/join/?code=XXXXXXXX` | Household invite link; opens the app when it is installed |
| `/.well-known/apple-app-site-association` | Universal links for `/join/*` |

Plain HTML, no build step. `.nojekyll` makes Pages serve `.well-known`. Each page carries both languages; `assets/site.js`
shows the visitor's (Indonesian for `id-*` browsers, English otherwise) and the pill switches it.

Style: Figma "DUE Studio - Sunrise", the same tokens as the iOS app (`Components/Colors.swift`, `Typography.swift`).
Font: Zalando Sans, OFL (`assets/ZalandoSans-OFL.txt`). Art exported from Figma: `hero.svg` (Onboarding First Launch),
`domu-peek.svg` and `icon-*.svg` (Onboarding 3/3), `wordmark.svg` and `icon-180.png` from the iOS asset catalog.

## Universal links

`apple-app-site-association` lists both builds: `5M87Z298PZ.com.duestudio.domura` (TestFlight, App Store) and
`36J8TBMX5T.com.bayukurnia.homecheck-ios` (Johar's phone builds). The app needs the entitlement
`applinks:due-studios.github.io`. Apple's CDN caches the file; check what it serves with
`curl https://app-site-association.cdn-apple.com/a/v1/due-studios.github.io`.

Android App Links (`/.well-known/assetlinks.json`) need the release signing key's SHA-256; not added yet.

## Local preview

`python3 -m http.server 8766`, then open http://127.0.0.1:8766 (paths are absolute, so open the folder root).
