import React, { useState, useEffect } from 'react';
import UIKit from './UIKit';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  const [showUIKit, setShowUIKit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial state
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  if (showUIKit) {
    return (
      <>
        <button
          onClick={toggleDarkMode}
          aria-label="Tema değiştir"
          className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {isDarkMode ? '☀' : '☾'}
        </button>
        <UIKit onBack={() => setShowUIKit(false)} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white p-2 z-50 rounded">
        Ana içeriğe atla
      </a>

      <button
        onClick={toggleDarkMode}
        aria-label="Tema değiştir"
        className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
      >
        {isDarkMode ? '☀' : '☾'}
      </button>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold">
            <a href="#" className="focus:outline-none focus:ring-2 focus:ring-primary rounded">John Doe</a>
          </div>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <li>
                <a href="#hakkimda" className="px-3 py-2 rounded-md hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-2 rounded-md hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-2 rounded-md hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                  İletişim
                </a>
              </li>
              <li>
                <button
                  onClick={() => setShowUIKit(true)}
                  className="px-3 py-2 rounded-md text-primary font-medium hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  UI Kit
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hakkımda Bölümü */}
        <section id="hakkimda" className="py-20 px-4 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop"
              alt="Profil resmi"
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Merhaba, Ben John</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Deneyimli bir frontend geliştiriciyim. Modern web teknolojileriyle kullanıcı dostu, erişilebilir ve performanslı uygulamalar geliştiriyorum.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projeler Bölümü */}
        <section id="projeler" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Projelerim</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                title="E-Ticaret Platformu"
                variant="elevated"
                image="https://images.unsplash.com/photo-1557821552-17105153ce67?q=80&w=800&h=400&auto=format&fit=crop"
                imageAlt="E-Ticaret proje ekran görüntüsü"
              >
                <p>React ve Node.js kullanarak geliştirdiğim tam kapsamlı e-ticaret platformu.</p>
              </Card>
              <Card
                title="Görev Yöneticisi"
                variant="elevated"
                image="https://images.unsplash.com/photo-1507925922837-326f46a5c1f1?q=80&w=800&h=400&auto=format&fit=crop"
                imageAlt="Görev yöneticisi ekran görüntüsü"
              >
                <p>Sürükle bırak özellikli, gerçek zamanlı takım çalışma uygulaması.</p>
              </Card>
              <Card
                title="Portföy Sitesi"
                variant="elevated"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=400&auto=format&fit=crop"
                imageAlt="Portföy sitesi ekran görüntüsü"
              >
                <p>Karanlık mod ve erişilebilirlik odaklı kişisel web sitem.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* İletişim Formu */}
        <section id="iletisim" className="py-20 px-4 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">İletişime Geç</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <Input label="Ad Soyad" placeholder="Adınızı giriniz" required />
            <Input label="E-posta" type="email" placeholder="ornek@email.com" required />

            <div className="flex flex-col gap-1">
              <label htmlFor="mesaj" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Mesajınız
              </label>
              <textarea
                id="mesaj"
                rows="4"
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-3 py-2 bg-white dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-1 focus:border-primary focus:ring-primary transition-colors resize-y"
                placeholder="Mesajınızı buraya yazın..."
                required
              ></textarea>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Gönder
            </Button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 dark:text-gray-400 py-8 text-center border-t border-gray-200 dark:border-gray-800 transition-colors">
        <p>&copy; {new Date().getFullYear()} John Doe. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
