# Web Tasarımı Lab 4 - Tailwind CSS Portföy & UI Kit

Bu proje, bir web tasarımı laboratuvar ödevi kapsamında geliştirilmiştir. Projenin amacı, **React**, **Vite** ve **Tailwind CSS v4** kullanarak baştan sona responsive, erişilebilir ve karanlık mod destekli bir kişisel portföy ve UI (Kullanıcı Arayüzü) kütüphanesi oluşturmaktır.

## 🚀 Özellikler

- **Modern ve Hızlı Kurulum:** Vite ve React şablonu kullanılarak oluşturulmuştur.
- **Tailwind CSS v4 Entegrasyonu:** Özel renk paletleri ve modern Tailwind özellikleri (`@theme` yapılandırması) kullanılmıştır.
- **Özel UI Bileşenleri:**
  - `Button`: Farklı varyantlar (primary, secondary, danger, ghost) ve boyutlar (sm, md, lg).
  - `Input`: Normal, hata (error), yardım metni (help text) ve devre dışı (disabled) durumları destekler.
  - `Card`: Elevated (gölgeli), outlined (çerçeveli) ve filled (dolgulu) varyantları mevcuttur.
  - `Alert`: Info, success, warning ve error varyantları, ayrıca kapatılabilir (dismissible) özellik eklentisi.
- **Karanlık Mod (Dark Mode):** Tüm sistem karanlık mod uyumludur. Sağ üstteki buton ile tema değiştirilebilir.
- **Tam Duyarlılık (Responsive):** Mobil, tablet ve masaüstü cihazlar için CSS Grid ve Flexbox kullanılarak optimize edilmiştir.
- **Erişilebilirlik (A11y):** Klavyeyle gezinme için `focus:ring` stilleri, ekran okuyucular için `aria-label` / `role="alert"` etiketleri ve ana içeriğe atla (skip link) butonu eklenmiştir.
- **UI Kit Sayfası:** Geliştirilen tüm bileşen varyantlarının test edilmesi ve sergilenmesi amacıyla ayrı bir sayfa oluşturulmuştur.

## 🛠️ Kullanılan Teknolojiler

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## 📦 Kurulum ve Çalıştırma

Projeyi bilgisayarınızda yerel olarak çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

3. Üretime (Production) hazır hale getirmek için:
   ```bash
   npm run build
   ```

## 📝 Ödev Gereksinimleri Karşılama Durumu (Rubrik)

Bu ödevde istenen 10 maddelik değerlendirme kriterlerinin tamamı başarıyla uygulanmıştır:
1. Tailwind CSS v4 kurulumu yapıldı.
2. Özel renk temaları `--color-primary` vb. CSS değişkenleriyle tanımlandı.
3. Responsive (sm, md, lg) tasarım uygulandı.
4. Karanlık mod class'ları ve geçiş butonu eklendi.
5. Dört farklı renk ve üç farklı boyutta UI Button bileşeni kodlandı.
6. Dört farklı duruma ve erişilebilirliğe sahip UI Input bileşeni kodlandı.
7. İki farklı tasarıma (elevated, outlined, filled) sahip UI Card bileşeni eklendi.
8. Dört farklı türe sahip UI Alert bileşeni oluşturuldu.
9. Tüm bileşenlerin sergilendiği UIKit.jsx sayfası eklendi (En az 8 varyant ile).
10. Ana sayfa (Portföy) Tailwind kalıpları ile tam teşekküllü olarak tasarlandı.

---
*Bu proje eğitim amaçlıdır.*
