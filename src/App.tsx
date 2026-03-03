import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="logo">Portföyüm</div>
        <nav>
          <ul role="list">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h1>Web Tasarimi ve Programlama</h1>
          <h2>LAB-1 ve LAB-3 Entegrasyonu</h2>
          <p>Ad Soyad: [Doğukan Kalkan]</p>
          <p>Öğrenci No: [235542019]</p>
          <p>Bölüm: [Yazılım Mühendisliği]</p>
          <p>Rol: Feature Backend Developer</p>

          <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Git</li>
            <li>C#</li>
            <li>.NET</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="/vite.svg" alt="E-Ticaret sitesi anasayfa ekran goruntusu" />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve Node.js ile gelistirilmis tam kapsamli bir e-ticaret uygulamasi.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="/vite.svg" alt="Blog uygulamasi yazi listesi gorunumu" />
              <h3>Blog Uygulamasi</h3>
              <p>Kisisel blog platformu. Markdown destekli yazi editoru.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="/vite.svg" alt="Hava durumu uygulamasi arayuzu" />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlik hava durumu bilgisi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
