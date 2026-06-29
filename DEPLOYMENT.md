# Deployment Guide

Tarih: 2026-06-29

Kapsam: `mevzunai.online` statik MVP sitesini GitHub ve Vercel deploy için hazırlama notları. Bu doküman yalnızca deploy hazırlığıdır; GA4, AdSense, form, ödeme, backend, database, Supabase veya kullanıcı verisi toplayan entegrasyon eklemez.

## Deploy Öncesi Sınırlar

Deploy öncesi korunacak sınırlar:

- Backend yok.
- Database yok.
- Login yok.
- Ödeme yok.
- Dosya yükleme yok.
- GA4 yok.
- AdSense yok.
- Canlı form yok.
- Supabase yok.
- Kullanıcı girdileri URL'ye yazılmaz.
- `localStorage` ve `sessionStorage` kullanılmaz.

## GitHub Repo Hazırlığı

Önerilen repo adı:

```text
mevzunai-online-static-mvp
```

Hazırlık:

1. GitHub'da yeni ve boş repository oluştur.
2. Repo açıklaması: `Static, no-backend MVP for mevzunai.online tools.`
3. Repository kökü olarak bu klasörü kullan: `mevzunai_online_static_mvp`.
4. Public repo yapılacaksa legal sayfaların taslak olduğunu ve profesyonel inceleme gerektiğini bil.
5. `.env`, API key, ödeme bilgisi, analytics id veya reklam kodu ekleme.

Örnek komutlar:

```bash
cd mevzunai_online_static_mvp
git init
git add .
git commit -m "Initial static MVP"
git branch -M main
git remote add origin https://github.com/USER_OR_ORG/mevzunai-online-static-mvp.git
git push -u origin main
```

Repo daha önce oluşturulduysa:

```bash
cd mevzunai_online_static_mvp
git status
git add .
git commit -m "Prepare static MVP for deploy"
git push
```

## Vercel Deploy Adımları

1. Vercel hesabına giriş yap.
2. `Add New...` > `Project` seç.
3. GitHub repository olarak `mevzunai-online-static-mvp` reposunu seç.
4. Root directory:

```text
.
```

Eğer bu klasör daha büyük bir repo içinde duruyorsa root directory:

```text
mevzunai_online_static_mvp
```

5. Framework preset: `Other`.
6. Build command: boş bırakılabilir.
7. Output directory: boş veya `.`.
8. Environment variables: boş bırak.
9. Deploy et.

## Domain Bağlama Notları

Vercel projesinde Domains bölümünden şu alan adları eklenmeli:

```text
mevzunai.online
www.mevzunai.online
```

Genel akış:

1. Vercel projesinde `Settings` > `Domains` ekranını aç.
2. `mevzunai.online` domainini ekle.
3. `www.mevzunai.online` domainini ekle.
4. Vercel'in gösterdiği DNS kayıtlarını domain sağlayıcısında tanımla.
5. Apex domain ve `www` yönlendirmesinin doğru çalıştığını kontrol et.
6. HTTPS sertifikasının otomatik aktif olmasını bekle.

Not: DNS kayıt türleri domain sağlayıcısına ve Vercel'in o an verdiği yönergeye göre değişebilir. Vercel ekranındaki güncel kayıtlar esas alınmalıdır.

## Search Console Doğrulama Notları

Yayın sonrası:

1. Google Search Console'a gir.
2. Yeni property ekle.
3. Property tipi olarak `Domain` seç.
4. Domain:

```text
mevzunai.online
```

5. Google'ın verdiği DNS TXT kaydını domain sağlayıcısına ekle.
6. DNS yayılımı tamamlanınca doğrulama yap.
7. Doğrulama sonrası önemli URL'leri URL Inspection ile kontrol et:

```text
https://mevzunai.online/
https://mevzunai.online/tools/kargo-desi.html
https://mevzunai.online/tools/brut-kar.html
https://mevzunai.online/tools/ihracat-evrak.html
https://mevzunai.online/tools/apartman-aidat.html
https://mevzunai.online/excel-sablonlari.html
```

## Deploy Sonrası Hızlı Smoke Test

- Ana sayfa açılıyor mu?
- `www` ve apex domain aynı siteye gidiyor mu?
- HTTPS aktif mi?
- Header linkleri çalışıyor mu?
- Footer legal linkleri çalışıyor mu?
- Kargo desi hesaplıyor mu?
- Brüt kâr hesaplıyor mu?
- İhracat checklist oranı çalışıyor mu?
- Apartman aidat hesaplıyor mu?
- Mobilde yatay taşma yok mu?
- Sayfa kaynaklarında GA4, AdSense, form, ödeme veya Supabase izi yok mu?

## Resmi Doküman Referansları

- Vercel Git deployment: https://vercel.com/docs/deployments/git
- Vercel project settings / root directory: https://vercel.com/docs/projects/project-configuration
- Vercel domains: https://vercel.com/docs/domains
- Google Search Console domain property: https://support.google.com/webmasters/answer/34592
- GitHub new repository: https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories

PASS / DEPLOY_PREP_READY / NO_PROTECTED_SYSTEM_CHANGE
