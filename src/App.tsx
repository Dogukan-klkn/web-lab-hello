import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header className="site-header">
        <div className="container header-container">
          {/* DÜZELTME 1: Sayfanın ana başlığı (H1) eklendi */}
          <h1 className="logo">DK<span>.</span></h1>
          <nav aria-label="Ana Menü">
            <ul className="nav-links">
              <li><a href="#hakkimda">Hakkımda</a></li>
              <li><a href="#projeler">Projeler</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        
        {/* HAKKIMDA BÖLÜMÜ */}
        <section id="hakkimda">
          <div className="container hero-container">
            <div className="hero-text">
              <span className="badge">Yazılım Mühendisi Adayı</span>
              <h2>Hakkımda</h2>
              <p>
                Dijital dünyada iz bırakan projeler geliştirmeyi hedefleyen bir 3. sınıf öğrencisiyim. 
                Modern teknolojilerle performanslı ve erişilebilir web deneyimleri inşa ediyorum.
              </p>
              
              <div className="tech-stack">
                <h3>Kullandığım Teknolojiler:</h3>
                <ul>
                  <li>React 18 & TypeScript</li>
                  <li>Vite & Modern CSS</li>
                  <li>SQL & .NET Core</li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
            </div>

            <figure className="hero-image-wrapper">
              <img 
                src="images/profile.jpg" 
                alt="Doğukan Kalkan profil fotoğrafı" 
                className="profile-img"
              />
              <figcaption>Doğukan Kalkan</figcaption>
            </figure>
          </div>
        </section>

        {/* PROJELER BÖLÜMÜ */}
        <section id="projeler" className="bg-alt">
          <div className="container">
            <header className="section-header">
              <h2>Öne Çıkan Projeler</h2>
              <p>Laboratuvar çalışmaları ve kişisel geliştirmelerim.</p>
            </header>
            
            <div className="projects-grid">
              <article className="project-card">
                <figure className="project-figure">
                  <img 
                    src="images/screenshot.png" 
                    alt="Web Lab Hello uygulaması ekran görüntüsü" 
                  />
                  <figcaption>Web Lab Hello - Semantik Web</figcaption>
                </figure>
                <div className="project-content">
                  <span className="tech-tag">React + TypeScript</span>
                  <h3>Web Lab Hello</h3>
                  <p>Modern araçlarla kurgulanmış, yüksek erişilebilirlik puanına sahip laboratuvar projesi.</p>
                  <a href="#" className="project-link">Detayları İncele →</a>
                </div>
              </article>

              <article className="project-card">
                <figure className="project-figure placeholder-figure">
                  <div className="placeholder-img">UML Design</div>
                  <figcaption>Sistem Mimarisi Diyagramları</figcaption>
                </figure>
                <div className="project-content">
                  <span className="tech-tag">Enterprise Architect</span>
                  <h3>Gym & Otomasyon Sistemi</h3>
                  <p>Spor salonu, yemekhane ve alışveriş süreçlerini entegre eden kapsamlı bir otomasyon tasarımı.</p>
                  <a href="https://github.com/Dogukan-klkn/Gym-Management-System" target="_blank" rel="noopener noreferrer" className="project-link">GitHub Linkine Git</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* İLETİŞİM BÖLÜMÜ */}
        <section id="iletisim">
          <div className="container contact-container">
            <div className="contact-card">
              <header className="section-header">
                <h2>İletişim Formu</h2>
                <p>Yeni bir proje fikriniz mi var veya sadece merhaba mı demek istiyorsunuz?</p>
              </header>

              <form className="modern-form">
                <div className="form-group">
                  <label htmlFor="ad-soyad">Ad Soyad:</label>
                  <input type="text" id="ad-soyad" name="ad-soyad" placeholder="Adınızı giriniz..." required minLength={3} />
                  {/* DÜZELTME 2: role="alert" eklendi */}
                  <span className="error-message" aria-live="polite" role="alert">En az 3 karakter girmelisiniz.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-posta:</label>
                  <input type="email" id="email" name="email" placeholder="eposta@adresiniz.com" required />
                  <span className="error-message" aria-live="polite" role="alert">Geçerli bir e-posta adresi giriniz.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="konu">Konu:</label>
                  <select id="konu" name="konu" required>
                    <option value="">-- Seçiniz --</option>
                    <option value="is-teklifi">İş Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Öneri</option>
                  </select>
                  <span className="error-message" aria-live="polite" role="alert">Lütfen bir konu seçiniz.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="mesaj">Mesajınız:</label>
                  <textarea id="mesaj" name="mesaj" rows={5} placeholder="Mesajınızı buraya yazabilirsiniz..." required minLength={10}></textarea>
                  <span className="error-message" aria-live="polite" role="alert">Lütfen en az 10 karakterlik bir mesaj yazınız.</span>
                </div>

                <button type="submit" className="btn-submit">Gönder</button>
              </form>
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container footer-container">
          <p>&copy; 2026 Doğukan Kalkan. Tüm hakları saklıdır.</p>
          <div className="social-links">
            <a href="https://github.com/Dogukan-klkn" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/dogukankalkan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App