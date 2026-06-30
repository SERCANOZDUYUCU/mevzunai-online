# Static MVP Validation v1

Tarih: 2026-06-29

Bu dosya `mevzunai.online` statik MVP iskeleti için validasyon notlarını içerir.

## Beklenen Kontroller

- Tüm HTML sayfaları mevcut.
- Araç sayfalarında SEO title ve meta description var.
- Ortak CSS ve JS dosyaları mevcut.
- `localStorage` ve `sessionStorage` kullanılmıyor.
- `fetch` veya ağ isteği kullanılmıyor.
- Canlı form submit yok.
- GA4, AdSense veya reklam scripti yok.
- Ödeme, login, database, backend veya dosya yükleme yok.
- Hesaplamalar tarayıcıda çalışıyor.
- Responsive tasarım temel olarak kontrol edilecek.

## Komut Kontrolleri

2026-06-29 tarihinde PowerShell ile doğrulandı:

- Beklenen 10 HTML sayfası mevcut.
- Tüm HTML sayfalarında `<title>` mevcut.
- Tüm HTML sayfalarında meta description mevcut.
- `assets/app.js` içinde `localStorage`, `sessionStorage`, `fetch`, `XMLHttpRequest`, `sendBeacon`, `history.pushState`, `history.replaceState`, `window.location` veya `document.cookie` kullanımı bulunmadı.
- HTML dosyalarında `googletagmanager`, `google-analytics`, `adsbygoogle`, `doubleclick`, `supabase`, `stripe`, `iyzico`, `shopier`, `formspree`, `tally.so`, `<form` veya `type="file"` kullanımı bulunmadı.

## Tarayıcı Kontrolleri

Geçici localhost server ile doğrulandı, test sonrası server kapatıldı:

- Ana sayfa açıldı, H1 doğru göründü ve 3 araç kartı bulundu.
- Ana sayfada dış script bulunmadı.
- Masaüstü görünümde yatay taşma bulunmadı.
- Kargo desi hesaplayıcı: 40 x 30 x 20 cm ve 5 kg girdisi için sonuç `8,00 desi`, karşılaştırma değeri `8,00 kg/desi`.
- Brüt kâr hesaplayıcı: 1000 TL satış, 600 TL ürün maliyeti, 70 TL kargo, %10 komisyon, 20 TL paketleme için sonuç `₺210,00` ve `%21,00`.
- İhracat evrak listesi: 4 işaretli başlık için `4 / 9 başlık`, `%44` ve progress genişliği yaklaşık `%44,44`.
- 375px mobil viewport kontrolünde ana sayfa ve brüt kâr aracı yatay taşma üretmedi.

## Sonuç

Statik MVP iskeleti düşük risk sınırlarına uygun şekilde oluşturuldu. Canlı entegrasyon, veri kaydı, backend, database, login, ödeme, canlı form, GA4 veya AdSense bulunmadı.

## Pre-Deploy QA v1

Tarih: 2026-06-29

Canlı yayın öncesi son QA kapsamında tekrar doğrulandı:

- 10 HTML sayfası bulundu.
- Tüm iç link hedefleri mevcut; kırık link veya 404 adayı bulunmadı.
- Header ve footer navigasyon linkleri beklenen sayfalara gidiyor.
- Tüm sayfalarda SEO title ve meta description mevcut.
- Tüm sayfalarda yatay taşma kontrolü masaüstünde temiz.
- 375px mobil viewport kontrolünde ana sayfa, kargo desi, brüt kâr ve ihracat evrak sayfalarında yatay taşma yok.
- Kargo desi hesabı: 40 x 30 x 20 cm ve 5 kg için `8,00 desi`, karşılaştırma değeri `8,00 kg/desi`.
- Brüt kâr hesabı: 1000 TL satış, 600 TL ürün maliyeti, 70 TL kargo, %10 komisyon ve 20 TL paketleme için `₺210,00`, `%21,00`.
- İhracat checklist: 4 / 9 işaretli başlık için `%44` ve progress genişliği yaklaşık `%44,44`.
- Hesaplama ve checklist etkileşimlerinden sonra URL değişmedi; kullanıcı girdileri URL'ye yazılmıyor.
- HTML sayfalarında `<form>` ve `type="file"` bulunmadı.
- `assets/app.js` içinde `localStorage`, `sessionStorage`, `fetch`, `XMLHttpRequest`, `sendBeacon`, `history.pushState`, `history.replaceState`, `window.location` veya `document.cookie` kullanımı bulunmadı.
- GA4, AdSense, form sağlayıcıları, ödeme sağlayıcıları ve Supabase izi bulunmadı.
- README içindeki Vercel deploy notu yeterli bulundu: root directory, build command ve output directory notları mevcut.

## Apartman Management Module QA v1

Tarih: 2026-06-29

Apartman Yönetimi modülü eklendikten sonra doğrulandı:

- 13 HTML sayfası bulundu.
- Tüm HTML sayfalarında SEO title ve meta description mevcut.
- Tüm iç link hedefleri mevcut; kırık link bulunmadı.
- `tools/apartman-aidat.html`, `products/apartman-gelir-gider-excel.html` ve `excel-sablonlari.html` sayfalarında `<form>` ve `type="file"` bulunmadı.
- Aidat hesaplayıcı: 20.000 TL toplam gider, 10 daire ve 8.000 TL ödenen tutar için daire başı `₺2.000,00`, kalan tahmini tutar `₺12.000,00`.
- Aidat hesaplama etkileşiminden sonra URL değişmedi; kullanıcı girdileri URL'ye yazılmıyor.
- 375px mobil viewport kontrolünde ana sayfa, apartman aidat hesaplayıcı, apartman Excel ürün tanıtımı ve Excel şablonları kategori sayfasında yatay taşma yok.
- `assets/app.js` içinde `localStorage`, `sessionStorage`, `fetch`, ağ isteği, cookie yazımı veya URL state yazımı bulunmadı.
- GA4, AdSense, canlı form, ödeme sağlayıcıları ve Supabase izi bulunmadı.
- Mevcut Excel dosyalarına dokunulmadı; kullanıcıya Excel yükletme veya indirme akışı eklenmedi.

## GitHub Vercel Deploy Prep v1

Tarih: 2026-06-29

Deploy hazırlığı kapsamında doğrulandı:

- `README.md` GitHub repo hazırlığı, Vercel deploy özeti, domain bağlama notları ve Search Console doğrulama notlarıyla güncellendi.
- `DEPLOYMENT.md` oluşturuldu.
- `POST_LAUNCH_CHECKLIST.md` oluşturuldu.
- Domain notları `mevzunai.online` ve `www.mevzunai.online` için eklendi.
- Search Console domain property ve DNS TXT doğrulama notları eklendi.
- Yayın sonrası araç, mobil, SEO, legal ve güvenlik kontrol listesi eklendi.
- Deploy hazırlığı yalnızca dokümantasyon seviyesinde yapıldı.
- GA4, AdSense, form, ödeme, backend, database, Supabase veya kullanıcı verisi toplayacak entegrasyon eklenmedi.

## Final Pre-Deploy QA v2

Tarih: 2026-06-29

Apartman Yönetimi modülü ve deploy hazırlığı sonrasında tüm site tekrar kontrol edildi:

- 13 HTML sayfasının tamamı bulundu.
- Tüm iç link hedefleri mevcut; kırık link bulunmadı.
- Header/footer navigasyon hedefleri dosya yapısıyla uyumlu.
- Tüm HTML sayfalarında SEO title ve meta description mevcut.
- Runtime kontrolde 13 sayfanın tamamında form ve file input sayısı `0`.
- Masaüstü runtime kontrolde 13 sayfanın tamamında yatay taşma yok.
- 375px mobil viewport kontrolde ana sayfa, dört araç sayfası, Excel şablonları, apartman Excel tanıtımı ve gizlilik sayfasında yatay taşma yok.
- Kargo desi hesabı: 40 x 30 x 20 cm ve 5 kg için `8,00 desi`, `8,00 kg/desi`.
- Brüt kâr hesabı: 1000 TL satış, 600 TL ürün maliyeti, 70 TL kargo, %10 komisyon ve 20 TL paketleme için `₺210,00`, `%21,00`.
- İhracat checklist: 4 / 9 işaretli başlık için `%44`, progress genişliği yaklaşık `%44,44`.
- Apartman aidat hesabı: 20.000 TL toplam gider, 10 daire ve 8.000 TL ödenen tutar için daire başı `₺2.000,00`, kalan tahmini tutar `₺12.000,00`.
- Hesaplama/checklist etkileşimlerinden sonra URL değişmedi; kullanıcı girdileri URL'ye yazılmıyor.
- `assets/app.js` içinde `localStorage`, `sessionStorage`, `fetch`, `XMLHttpRequest`, `sendBeacon`, history state yazımı, cookie yazımı veya URL query kullanımı bulunmadı.
- GA4, AdSense, canlı form, ödeme sağlayıcıları, Supabase ve dosya yükleme izi bulunmadı.
- README, DEPLOYMENT, POST_LAUNCH_CHECKLIST ve VALIDATION dosyaları deploy öncesi kullanım için yeterli bulundu.
- Mevzun ana sistemine dokunulmadı.

PASS / STATIC_MVP_SCAFFOLD_CREATED / NO_PROTECTED_SYSTEM_CHANGE

## Free Apartment Excel Download v1

Tarih: 2026-06-29

Apartman gelir-gider Excel şablonu ücretsiz statik indirme ürünü olarak eklendi:

- İndirilecek dosya: `downloads/apartman-gelir-gider-takip-sablonu.xlsx`
- Kaynak Excel dosyasında eski kişi adı, tedarikçi adı, dekont numarası, IBAN/TCKN izi ve özel veri taraması yapıldı; eşleşme bulunmadı.
- Ürün sayfasına, Excel şablonları kategori sayfasına ve ana sayfaya ücretsiz indirme bağlantısı eklendi.
- İndirme için e-posta, form, ödeme, kullanıcı hesabı, backend, database, GA4, AdSense veya Supabase eklenmedi.
- Sayfalara şu uyarı eklendi: “Bu şablon genel kullanım amaçlıdır; resmi muhasebe, hukuki danışmanlık veya profesyonel apartman yönetim hizmeti yerine geçmez.”
- 13 HTML sayfası içinde kırık iç link bulunmadı.
- Yerel HTTP testinde `/downloads/apartman-gelir-gider-takip-sablonu.xlsx` indirildi; dosya boyutu kaynak statik dosyayla eşleşti.
- 375px mobil viewport kontrolünde ana sayfa, Excel şablonları sayfası ve apartman Excel ürün sayfasında yatay taşma bulunmadı.
- Kritik sayfalarda form ve dosya yükleme input sayısı `0`.
- Aktif HTML/JS taramasında GA4, AdSense, ödeme sağlayıcıları, Supabase, canlı form, `fetch`, `localStorage` veya `sessionStorage` kullanımı bulunmadı. Çerez politikası içinde `localStorage/sessionStorage` yalnızca açıklama metni olarak geçmektedir.

PASS / FREE_EXCEL_DOWNLOAD_ADDED / NO_PROTECTED_SYSTEM_CHANGE

## SEO Article Apartment Excel v1

Tarih: 2026-06-30

Apartman aidat takip Excel kullanım rehberi statik SEO sayfası olarak eklendi:

- Yeni sayfa: `rehberler/apartman-aidat-takip-excel-nasil-kullanilir.html`
- Ana sayfaya ve Excel şablonları sayfasına rehber linki eklendi.
- Rehber CTA bağlantısı `products/apartman-gelir-gider-excel.html` ürün sayfasına yönlendiriyor.
- Sitemap 14 URL olacak şekilde güncellendi.
- `robots.txt` değiştirilmedi.
- 14 HTML sayfası içinde kırık iç link bulunmadı.
- Sitemap XML parse kontrolü geçti; sadece `urlset`, `url`, `loc` tagleri var.
- 375px mobil viewport kontrolünde ana sayfa, Excel şablonları sayfası, yeni rehber ve ürün sayfasında yatay taşma bulunmadı.
- Kritik sayfalarda form ve dosya yükleme input sayısı `0`.
- Aktif HTML/JS taramasında GA4, AdSense, ödeme sağlayıcıları, Supabase, canlı form, `fetch`, `localStorage` veya `sessionStorage` kullanımı bulunmadı.

PASS / SEO_ARTICLE_APARTMENT_EXCEL_ADDED / NO_PROTECTED_SYSTEM_CHANGE

## SEO Article Apartment Income Expense v1

Tarih: 2026-06-30

Apartman gelir-gider tablosu rehberi statik SEO sayfası olarak eklendi:

- Yeni sayfa: `rehberler/apartman-gelir-gider-tablosu-nasil-tutulur.html`
- Ana sayfaya ve Excel şablonları sayfasına yeni rehber linki eklendi.
- İlk rehberden yeni gelir-gider rehberine iç link eklendi.
- Yeni rehberden ilk rehbere, apartman aidat hesaplayıcıya ve Excel şablonları sayfasına iç link verildi.
- Rehber CTA bağlantısı `products/apartman-gelir-gider-excel.html` ürün sayfasına yönlendiriyor.
- Sitemap 15 URL olacak şekilde güncellendi.
- `robots.txt` değiştirilmedi.
- 15 HTML sayfası içinde kırık iç link bulunmadı.
- Sitemap XML parse kontrolü geçti; sadece `urlset`, `url`, `loc` tagleri var.
- 375px mobil viewport kontrolünde ana sayfa, Excel şablonları sayfası, iki rehber ve ürün sayfasında yatay taşma bulunmadı.
- Kritik sayfalarda form ve dosya yükleme input sayısı `0`.
- Aktif HTML/JS taramasında GA4, AdSense, ödeme sağlayıcıları, Supabase, canlı form, `fetch`, `localStorage` veya `sessionStorage` kullanımı bulunmadı.

PASS / SEO_ARTICLE_APARTMENT_INCOME_EXPENSE_ADDED / NO_PROTECTED_SYSTEM_CHANGE

## SEO Article Apartment Debt Tracking v1

Tarih: 2026-06-30

Apartman aidat borç takibi rehberi statik SEO sayfası olarak eklendi:

- Yeni sayfa: `rehberler/apartman-aidat-borc-takibi-nasil-yapilir.html`
- Ana sayfaya ve Excel şablonları sayfasına yeni rehber linki eklendi.
- Önceki iki rehberden yeni borç takibi rehberine iç link eklendi.
- Yeni rehberden aidat takip rehberine, gelir-gider rehberine, apartman aidat hesaplayıcıya ve Excel şablonları sayfasına iç link verildi.
- Rehber CTA bağlantısı `products/apartman-gelir-gider-excel.html` ürün sayfasına yönlendiriyor.
- Sitemap 16 URL olacak şekilde güncellendi.
- `robots.txt` değiştirilmedi.
- 16 HTML sayfası içinde kırık iç link bulunmadı.
- Sitemap XML kontrolü geçti; sadece `urlset`, `url`, `loc` tagleri var.
- 360px mobil viewport kontrolünde ana sayfa, Excel şablonları sayfası, üç rehber ve ürün sayfasında yatay taşma bulunmadı.
- Kritik sayfalarda form ve dosya yükleme input sayısı `0`.
- Aktif HTML/JS taramasında GA4, AdSense, ödeme sağlayıcıları, Supabase, canlı form, `fetch`, `localStorage` veya `sessionStorage` kullanımı bulunmadı.

PASS / SEO_ARTICLE_APARTMENT_DEBT_TRACKING_ADDED / NO_PROTECTED_SYSTEM_CHANGE

## SEO Article Cargo Desi v1

Tarih: 2026-06-30

Kargo desi hesaplama rehberi statik SEO sayfası olarak eklendi:

- Yeni sayfa: `rehberler/kargo-desi-nasil-hesaplanir.html`
- Ana sayfaya yeni kargo desi rehber linki eklendi.
- Kargo desi hesaplayıcı sayfasından yeni rehbere iç link eklendi.
- Yeni rehberden kargo desi hesaplayıcıya, brüt kâr hesaplayıcıya, Excel şablonları sayfasına ve apartman aidat takip Excel rehberine iç link verildi.
- Rehber CTA bağlantısı `tools/kargo-desi.html` araç sayfasına yönlendiriyor.
- Sitemap 17 URL olacak şekilde güncellendi.
- `robots.txt` değiştirilmedi.
- 17 HTML sayfası içinde kırık iç link bulunmadı.
- Sitemap XML kontrolü geçti; sadece `urlset`, `url`, `loc` tagleri var.
- 360px mobil viewport kontrolünde ana sayfa, kargo desi hesaplayıcı ve yeni kargo desi rehberinde yatay taşma bulunmadı.
- Kritik sayfalarda form ve dosya yükleme input sayısı `0`.
- Aktif HTML/JS taramasında GA4, AdSense, ödeme sağlayıcıları, Supabase, canlı form, `fetch`, `localStorage` veya `sessionStorage` kullanımı bulunmadı.

PASS / SEO_ARTICLE_CARGO_DESI_ADDED / NO_PROTECTED_SYSTEM_CHANGE

## SEO Article Gross Profit v1

Tarih: 2026-06-30

Brüt kâr hesaplama rehberi statik SEO sayfası olarak eklendi:

- Yeni sayfa: `rehberler/brut-kar-nasil-hesaplanir.html`
- Ana sayfaya yeni brüt kâr rehber linki eklendi.
- Brüt kâr hesaplayıcı sayfasından yeni rehbere iç link eklendi.
- Yeni rehberden brüt kâr hesaplayıcıya, kargo desi hesaplayıcıya, kargo desi rehberine ve Excel şablonları sayfasına iç link verildi.
- Rehber CTA bağlantısı `tools/brut-kar.html` araç sayfasına yönlendiriyor.
- Sitemap 18 URL olacak şekilde güncellendi.
- `robots.txt` değiştirilmedi.
- 18 HTML sayfası içinde kırık iç link bulunmadı.
- Sitemap XML kontrolü geçti; sadece `urlset`, `url`, `loc` tagleri var.
- 360px mobil viewport kontrolünde ana sayfa, brüt kâr hesaplayıcı ve yeni brüt kâr rehberinde yatay taşma bulunmadı.
- Kritik sayfalarda form ve dosya yükleme input sayısı `0`.
- Aktif HTML/JS taramasında GA4, AdSense, ödeme sağlayıcıları, Supabase, canlı form, `fetch`, `localStorage` veya `sessionStorage` kullanımı bulunmadı.
- Yeni rehberde sonuçlar genel bilgilendirme ve ön hesaplama olarak anlatıldı; finansal, muhasebesel, vergisel, yatırım veya fiyatlandırma tavsiyesi dili kullanılmadı.

PASS / SEO_ARTICLE_GROSS_PROFIT_ADDED / NO_PROTECTED_SYSTEM_CHANGE
