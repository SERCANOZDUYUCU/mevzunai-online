# Post Launch Checklist

Tarih: 2026-06-29

Kapsam: `mevzunai.online` statik MVP canlıya çıktıktan sonra yapılacak düşük riskli kontrol listesi.

## İlk 15 Dakika

- `https://mevzunai.online/` açılıyor.
- `https://www.mevzunai.online/` açılıyor.
- HTTPS aktif.
- Apex ve `www` beklenen şekilde aynı siteye yönleniyor veya aynı içeriği gösteriyor.
- Ana sayfa H1 görünür.
- Header linkleri çalışır.
- Footer legal linkleri çalışır.
- 404 veya kırık link görünmez.

## Araç Kontrolleri

Kargo desi:

- URL: `/tools/kargo-desi.html`
- Test: 40 x 30 x 20 cm, 5 kg.
- Beklenen: `8,00 desi`, `8,00 kg/desi`.

Brüt kâr:

- URL: `/tools/brut-kar.html`
- Test: 1000 TL satış, 600 TL ürün maliyeti, 70 TL kargo, %10 komisyon, 20 TL paketleme.
- Beklenen: `₺210,00`, `%21,00`.

İhracat evrak:

- URL: `/tools/ihracat-evrak.html`
- Test: 4 başlık işaretle.
- Beklenen: `4 / 9 başlık`, `%44`.

Apartman aidat:

- URL: `/tools/apartman-aidat.html`
- Test: 20.000 TL toplam gider, 10 daire, 8.000 TL ödenen tutar.
- Beklenen: `₺2.000,00`, `₺12.000,00`.

## Mobil Kontrol

- Ana sayfa mobilde yatay taşma yapmıyor.
- Araç sayfalarında input alanları ekrana sığıyor.
- Sonuç kutuları mobilde okunaklı.
- Header linkleri taşsa bile sayfa genişliğini bozmuyor.
- CTA buton metinleri kutudan taşmıyor.

## SEO ve Index Kontrolü

- Her sayfada title var.
- Her sayfada meta description var.
- H1 her sayfada tek ve anlamlı.
- Legal sayfalar erişilebilir.
- Search Console domain property doğrulandı.
- Ana sayfa URL Inspection ile kontrol edildi.
- İlk araç sayfaları URL Inspection ile kontrol edildi.

## Güvenlik ve Entegrasyon Kontrolü

Canlı sitede şu izler olmamalı:

- GA4 / Google Tag Manager
- AdSense
- Canlı form
- Ödeme sağlayıcıları
- Supabase
- Backend endpoint çağrısı
- Dosya yükleme inputu
- `localStorage` veya `sessionStorage` ile kullanıcı girdisi saklama
- Kullanıcı girdisini URL'ye yazma

## Legal Kontrol

- Gizlilik politikası taslak olduğu açıkça görünüyor.
- Çerez politikası taslak olduğu açıkça görünüyor.
- Kullanım şartları taslak olduğu açıkça görünüyor.
- Sorumluluk reddi taslak olduğu açıkça görünüyor.
- Hukuki metinler profesyonel inceleme gerektirir notu korunuyor.

## Yayın Sonrası Değişiklik Sınırı

İlk yayın sonrası hemen eklenmemesi gerekenler:

- GA4
- AdSense
- Form
- Ödeme
- Dosya indirme
- Excel yükleme
- Üyelik
- Database
- Supabase

Bu özelliklerden biri istenirse önce ayrı risk, KVKK, vergi/fatura ve güvenlik değerlendirmesi yapılmalıdır.

PASS / DEPLOY_PREP_READY / NO_PROTECTED_SYSTEM_CHANGE
