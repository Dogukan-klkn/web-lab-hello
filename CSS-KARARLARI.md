# CSS Kararları

## 1. Breakpoint Secimi
- Neden 640px ve 1024px sectim?
  640px, mobil cihazlardan tablet veya küçük boyutlu dizüstü ekranlarına geçişi temsil etmek için genellikle endüstri standardı olarak yaygındır. Mobil görünüm 640px'e kadar sorunsuz çalışır; daha geniş formda dikey tasarım bozulmaya başlayacağı için bu noktada düzen yataya çekilir. 1024px ise geleneksel masaüstü dizüstü çözünürlükleri için makul bir başlangıç noktasıdır.
- Icerigim bu noktalarda nasil degisiyor?
  0-639px arasında tek sütunlu ve dikey bir düzen hakim iken, 640px üzerinde içerikler yatayda genişler (örneğin header ile hakkımda kısmındaki flex elemanları). 1024px üzerinde ise içerik maksimum 1200px genişliğiyle sayfada ortalanır ve proje kartlarının bulunduğu ızgara düzeni (grid) 3 sütuna çıkar.

## 2. Layout Tercihleri
- Header icin neden Flexbox sectim?
  Header bileşenlerinde logonun ve menülerin aynı satır veya dikey düzlemde birbiri ile ortalanması (align-items: center), ayrıca yönlerinin ekran boyutuna göre değiştirilebilmesi (flex-direction: column veya row) Flexbox yapısıyla oldukça kolay ve performanslıdır.
- Proje kartlari icin neden Grid sectim?
  Proje listesinde yer alan elementler iki boyutludur ve bir pano görünümü amaçlanmaktadır. Elemanların kolonlarının ekran sınırlarında eşit sıralanabilmesi ve hem yatay hem dikey aralıkların net belirtilebilmesi (gap) Flexbox'a kıyasla CSS Grid kullanılarak çok daha stabil ayarlanabilmektedir.
- auto-fit mi auto-fill mi kullandim, neden?
  Bu projede responsive yapıyı doğrudan media query'ler ve `repeat(3, 1fr)` vb. kurallar ile açık (explicit) bir grid yapısı olarak tanımladım; çünkü kolon sayılarında kesin kontrolü elde tutmak istedim. Tasarım şablonuna göre ekran sığdığı durumlarda ekstra kolon büyütülmesi yerine mevcut sütun genişliğinde doldurulmasını isteseydim, `auto-fit` kullanımı tercih edebilirdim.

## 3. Design Tokens
- Hangi renk paletini sectim ve neden?
  Kullanıcı dostu, profesyonel ama aynı zamanda canlı bir tasarıma olanak tanıması açısından mavi (`#1E3A8A`, `#2563EB`) ve mor türevi vurgu (`accent`) renklerinden oluşan bir tema seçtim. Yüzeydeki beyaz ve açık griler ile tipografideki koyu gri yapısı metin okunabilirliğini yüksek tutmaktadır.
- Spacing skalasini nasil belirledim?
  Boşluk ayarlarını `0.25rem`'den (4px) başlayıp katlanarak artan (4, 8, 16, 24 vb.) standart bir hiyerarşide kurdum. `rem` bazlı kullanım, tarayıcının font ayarlarında bile aralıkların eşit ölçüde büyümesini sağlamakta ayrıca UI elemanları arasındaki dengeyi artırmaktadır.
- Fluid typography icin clamp degerlerini nasil ayarladim?
  `clamp()` fonksiyonu içine minimum limit, viewport (`vw`) tabanlı hesaplama ve maksimum limit gibi üçlü mantıkla değerler atadım. Örneğin; `clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` sabiti sayesinde font boyutu gereksiz ne büyük ne de küçük kalarak ekranın genişliğine göre doğal olarak şişer ve daralır.

## 4. Responsive Stratejiler
- Mobile-first yaklasimini nasil uyguladim?
  Varsayılan tüm CSS kurallarını (medya sorgusu koymaksızın) 0px'den başlayacak küçük ekranlı bir tasınabilir cihaza göre kaleme aldım (`max-width: 639px` kullanmadım). Ardından ekran büyüdüğünde oluşacak durumları sadece eklemeler yaparak `@media (min-width: 640px)` ve `@media (min-width: 1024px)` ile sağladım. 
- Hangi elemanlar breakpoint'lerde degisiyor?
  Mobil durumda alt alta olan Header 640px'den sonra yatay tek satıra geçiş yapar. "Hakkımda" kısmındaki resim portre ile metin alanı birbirinden kırılarak kendi bölgelerine dağılır. İletişim formundaki "Gönder" butonu ise tam genişlikli halinden çıkıp kendi metin genişliğine göre hizalanır ve proje gridleri kolonlarında artış sağlanır.
- Gorsel boyutlari nasil yonettim?
  Global CSS kuralına göre img seçicisine `max-width: 100%` ve `height: auto` eklenerek hiçbir resmin kapsayıcı div'inden taşmaması güvence altına alınmıştır. Proje kartlarındaki özel görsellerin eş hizalı ve muntazam görünmesi için de `aspect-ratio: 16 / 9` ve `object-fit: cover` yapısı devreye sokulmuştur.
