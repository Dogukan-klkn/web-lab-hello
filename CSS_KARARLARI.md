# CSS Kararları (LAB-3)

## 1. Design Tokens ve Kapsülleri
- Tüm renk skalası, boşluk ölçüleri, border-radius değerleri, font boyutları ve gölge ayarları `src/styles/tokens.css` dosyasında, `:root` altında CSS değişkenleri olarak tanımlanmıştır. 
- Bu sayede projenin genel teması (renk paletleri, font boyutları vs) tek bir noktadan rahatlıkla yönetilebilir hâle gelmiştir. İlerde gelecek bir dark mode ya da özel tema özelliği için zemin hazırlanmıştır.

## 2. Fluid Typography ile Duyarlı Yazı Tipi Boyutlandırması
- Tarayıcı penceresinin genişliğine duyarlı (responsive) yazı boyutu elde etmek adına CSS değişkenlerinde `clamp()` fonksiyonu kullanılmıştır (ör: `--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);`).
- Media query kullanmadan metin boyutu ekrana göre büyütülmüş ve küçültülmüştür.

## 3. Mobile-First (Önce Mobil) Yaklaşımı Kullanılarak Layout Yönetimi
- Tüm CSS şemasında önce mobil ekranların (< 640px) tarz ve boyutları yazılmış; `max-width` yerine `min-width` kullanılarak ekran büyüdükçe tasarımların değişmesi hedeflenmiştir. 
- Header ve Navigasyon, mobilde `flex-direction: column;` ile dikey yığılım gösterirken; `640px` ve üzerinde `flex-direction: row;` değeriyle yatay bir toolbar yapısına bürünmektedir.

## 4. Grid Mimarisi ile Proje Kartları İskeleti
- `Projelerim` bölümünde, mobil cihazlar düşünülerek `grid-template-columns: 1fr` ataması yapılmış, böylece her proje kartının ayrı bir satırda tam genişlikte yer alması sağlanmıştır.
- `640px` üzerinde (Tablet) `2 kolon`, `1024px` üzerinde (Masaüstü) ise `3 kolon` olacak şekilde (ör. `grid-template-columns: repeat(3, 1fr)`) layout değişimi sağlanmıştır. 

## 5. Erişilebilirlik (A11y)
- `LAB-2` kazanımı olan `Tab ile gezinme` yeteneği bozulmasın diye odaklama kuralları (`:focus-visible`) kalıcı hale getirilmiştir. 
- Görsellerin taşmaması ve tüm cihazlara (telefon/tablet vs) sorunsuz entegre edilmesi için global kural olan `max-width: 100%;` uygulanmıştır.
