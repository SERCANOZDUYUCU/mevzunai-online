# MevzunAI Online Static MVP

Bu klasör `mevzunai.online` için düşük riskli, statik, kullanıcı verisi tutmayan ilk MVP iskeletidir.

## Kapsam

- Ana sayfa
- Kargo desi hesaplayıcı
- Brüt kâr hesaplayıcı
- İhracat evrak kontrol listesi
- Apartman aidat hesaplayıcı
- Excel şablonları kategori sayfası
- Apartman gelir-gider Excel şablonu ücretsiz indirme sayfası
- Hakkında
- İletişim
- Gizlilik politikası taslağı
- Çerez politikası taslağı
- Kullanım şartları taslağı
- Sorumluluk reddi taslağı

## Teknik Sınırlar

Bu MVP'de şu özellikler yoktur:

- Backend
- Database
- Login
- Ödeme
- Dosya yükleme
- Ücretli satış veya e-posta şartlı indirme
- GA4
- AdSense
- Canlı form
- localStorage/sessionStorage
- Kullanıcı girdilerini URL'ye yazma
- Kullanıcı girdilerini sunucuya gönderme

Araç hesaplamaları yalnızca tarayıcıda çalışan `assets/app.js` dosyasıyla yapılır.

## Dosya Yapısı

```text
mevzunai_online_static_mvp/
  index.html
  README.md
  VALIDATION.md
  assets/
    app.js
    mark.svg
    styles.css
  legal/
    cerez.html
    gizlilik.html
    kullanim-sartlari.html
    sorumluluk-reddi.html
  pages/
    hakkinda.html
    iletisim.html
  products/
    apartman-gelir-gider-excel.html
  downloads/
    apartman-gelir-gider-takip-sablonu.xlsx
  tools/
    apartman-aidat.html
    brut-kar.html
    ihracat-evrak.html
    kargo-desi.html
  excel-sablonlari.html
```

## Yerelde Açma

`index.html` dosyası doğrudan tarayıcıda açılabilir. Dev server gerekmez.

## GitHub Repo Hazırlığı

Önerilen repo adı: `mevzunai-online-static-mvp`

Hazırlık adımları:

1. GitHub'da boş bir repository oluştur.
2. Bu klasörü repo kökü olarak kullan veya mevcut workspace içinden sadece `mevzunai_online_static_mvp` klasörünü yeni repoya taşı.
3. Canlı servis anahtarı, `.env`, ödeme, analytics, reklam veya form entegrasyonu ekleme.
4. İlk commit öncesi `VALIDATION.md` içindeki güvenlik kontrollerini tekrar oku.
5. Repo public olacaksa hukuki taslak metinlerin profesyonel inceleme gerektirdiğini unutma.

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

## Vercel Deploy Notu

Bu klasör statik site olarak Vercel'e yüklenebilir:

1. Vercel'de yeni proje oluştur.
2. Root directory olarak `mevzunai_online_static_mvp` seç.
3. Framework preset olarak `Other` veya statik preset seç.
4. Build command boş bırakılabilir.
5. Output directory boş veya `.` olarak bırakılabilir.

Domain notu:

- Primary domain adayı: `mevzunai.online`
- `www.mevzunai.online` alanı aynı Vercel projesine eklenmeli.
- Vercel'in verdiği DNS kayıtları domain sağlayıcısında tanımlanmalı.
- Apex ve `www` yönlendirme davranışı Vercel Domains ekranında kontrol edilmeli.

Search Console notu:

- Yayın sonrası Google Search Console'da domain property oluştur.
- `mevzunai.online` için DNS TXT doğrulaması kullan.
- Doğrulama tamamlandıktan sonra ana sayfa ve önemli araç sayfaları URL Inspection ile kontrol edilebilir.

Canlı deploy öncesinde hukuki metinler profesyonel incelemeden geçirilmeli; GA4, AdSense, form, ödeme veya e-posta şartlı indirme eklenirse gizlilik ve çerez metinleri yeniden güncellenmelidir.

Ayrıntılı adımlar için `DEPLOYMENT.md`, yayın sonrası kontrol için `POST_LAUNCH_CHECKLIST.md` dosyasını kullan.

## Güvenlik Notu

Bu MVP, pasif gelir araştırmasındaki düşük risk sınırlarına göre tasarlanmıştır. Mevzun ana sistemine teknik bağlantı, Supabase, canlı reklam, canlı analytics, ödeme veya canlı form entegrasyonu içermez.

PASS / STATIC_MVP_SCAFFOLD_CREATED / NO_PROTECTED_SYSTEM_CHANGE
