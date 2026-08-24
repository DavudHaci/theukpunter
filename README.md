# The UK Punter (theukpunter.com)

UK bazarı üçün SEO-yönümlü iGaming affiliate saytı. Astro ilə qurulub — tam statik, sürətli, texniki SEO hazır vəziyyətdə.

## İşə salma

Node.js 22+ tələb olunur (layihə daxilində `.tools/` qovluğunda hazır kopyası var):

```bash
export PATH="$PWD/.tools/node-v22.18.0-darwin-arm64/bin:$PATH"
npm install
npm run dev      # http://localhost:4321
npm run build    # statik build -> dist/
npm run preview  # build-i lokal önizlə
```

## Struktur

```
src/
  content/
    compare/   # Pul səhifələri (müqayisələr) — commercial intent
    guides/    # İnformasiya məqalələri — topical authority
  layouts/     # BaseLayout: bütün SEO head (meta, OG, canonical, JSON-LD)
  components/  # Header, Footer, FaqBlock
  pages/       # Route-lar: index, [slug], guides/, responsible-gambling, about
public/        # robots.txt, favicon
KEYWORDS.md    # Keyword strategiyası, title/description cədvəlləri, genişlənmə planı
```

## Yeni məqalə əlavə etmək

`src/content/guides/` (və ya `compare/`) qovluğuna `.md` fayl əlavə et — frontmatter-də `title`, `description` (maks 165 simvol), `h1`, `targetKeyword`, `pubDate` və istəyə görə `faq` (avtomatik FAQPage schema yaradır). Səhifə, sitemap və ana səhifə kartı avtomatik yaranır.

## Buraxılışdan əvvəl mütləq

1. Müqayisə cədvəllərindəki `<!-- AFFILIATE -->` placeholder-ləri real partnyor operatorlar və tracked linklərlə doldur
2. Google Search Console-a sitemap təqdim et: `https://www.theukpunter.com/sitemap-index.xml`

Tam SEO yol xəritəsi üçün `KEYWORDS.md`-yə bax.

## Compliance

Sayt yalnız UKGC-lisenziyalı operatorları nəzərdə tutur. Hər səhifədə 18+, BeGambleAware/GamStop keçidləri və affiliate disclosure var. Bunlar həm hüquqi tələb, həm də Google E-E-A-T siqnalıdır — silmə.
