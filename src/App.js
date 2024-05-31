import './App.css';
import './mediaqueries.css';
import './script.js';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ahmad Naufal's Profile Page</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="mediaqueries.css" />
      </head>
      <body>
        <nav id="desktop-nav">
          <div class="logo">Ahmad Naufal</div>
          <div>
            <ul class="nav-links">
              <li><a href="#about">Tentang</a></li>
              <li><a href="#experience">Pengalaman</a></li>
              <li><a href="#projects">Proyek</a></li>
              <li><a href="#contact">Kontak</a></li>
            </ul>
          </div>
        </nav>
        <nav id="hamburger-nav">
          <div class="logo">Ahmad Naufal</div>
          <div class="hamburger-menu">
            <div class="hamburger-icon" onclick="toggleMenu()">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="menu-links">
              <li><a href="#about" onclick="toggleMenu()">Tentang</a></li>
              <li><a href="#experience" onclick="toggleMenu()">Pengalaman</a></li>
              <li><a href="#projects" onclick="toggleMenu()">Proyek</a></li>
              <li><a href="#contact" onclick="toggleMenu()">Kontak</a></li>
            </div>
          </div>
        </nav>
        <section id="profile">
          <div class="section__pic-container">
            <img src="/assets/Mask group.png" alt="John Doe profile picture" />
          </div>
          <div class="section__text">
            <p class="section__text__p1">Hallo, perkenalkan saya</p>
            <h1 class="title">Ahmad Naufal Muzakki</h1>
            <p class="section__text__p2">Mobile App Developer</p>
            <div class="btn-container">
              <a href='/assets/Ahmad Naufal-resume (1).pdf'><button
                class="btn btn-color-2"
              >
                Unduh CV
              </button></a>
              <a href="#contact">
                <button class="btn btn-color-1" >
                  Info Kontak
                </button>
              </a>

            </div>
            <div id="socials-container">
              <a href='https://www.linkedin.com/in/naufalmzkki/'>
                <img
                  src="/assets/Vector1.png"
                  alt="My LinkedIn profile"
                  class="icon"
                />
              </a>
              <a href='https://github.com/hiiamanop'>
                <img
                  src="/assets/Vector.png"
                  alt="My Github profile"
                  class="icon"
                />
              </a>
            </div>
          </div>
        </section>
        <section id="about">
          <p class="section__text__p1">Mengenal Lebih Jauh</p>
          <h1 class="title">Tentang Saya</h1>
          <div class="section-container">
            <div class="section__pic-container">
              <img
                src="/assets/4 1.png"
                alt="Profile picture"
                class="about-pic"
              />
            </div>
            <div class="about-details-container">
              <div class="about-containers">
                <div class="details-container">
                  <img
                    src="/assets/experience.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <h3>Pengalaman</h3>
                  <p>1+ years <br />Mobile App Development</p>
                </div>
                <div class="details-container">
                  <img
                    src="/assets/education2.png"
                    alt="Education icon"
                    class="icon"
                  />
                  <h3>Pendidikan</h3>
                  <p>Strata 1 Teknik Infomatika</p>
                </div>
              </div>
              <div class="text-container">
                <p>Dengan hasrat menciptakan pengalaman pengguna luar biasa, saya menjelajahi dunia pengembangan aplikasi mobile menggunakan teknologi terkini. Sebagai seorang mobile app developer, saya membangun antarmuka responsif dan interaktif dengan penerjemahan desain menjadi kode efisien. Saya berhasil mengembangkan aplikasi seluler yang menggabungkan estetika dan fungsionalitas.
                </p>
              </div>
            </div>
          </div>
          <a href="#experience" >
            <img
              src="/assets/down.png"
              alt="down icon"
              class="icon down"
            />
          </a>

        </section>
        <section id="experience">
          <p class="section__text__p1">Jelajahi</p>
          <h1 class="title">Pengalaman Saya</h1>
          <div class="experience-details-container">
            <div class="about-containers">
              <div class="details-container">
                <h2 class="experience-sub-title">Mobile Development</h2>
                <div class="article-container">


                  <article>
                    <img
                      src="/assets/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>JavaScript</h3>
                      <p>Berpengalaman</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/assets/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>React</h3>
                      <p>Berpengalaman</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/assets/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Dart</h3>
                      <p>Berpengalaman</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/assets/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Flutter</h3>
                      <p>Berpengalaman</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/assets/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>MySQL</h3>
                      <p>Berpengalaman</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/assets/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Firebase</h3>
                      <p>Dasar</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/assets/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Laravel</h3>
                      <p>Dasar</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/assets/checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>PHP</h3>
                      <p>Dasar</p>
                    </div>
                  </article>
                </div>
              </div>

            </div>
          </div>
          <a href="#projects" >
            <img
              src="/assets/down.png"
              alt="down icon"
              class="icon down"
            />
          </a>
        </section>
        <section id="projects">
          <p class="section__text__p1">Jelajahi</p>
          <h1 class="title">Proyek Saya</h1>
          <div class="experience-details-container">
            <div class="about-containers">
              <div class="details-container color-container">
                <div class="article-container">
                  <img
                    src="/assets/1.png"
                    alt="Project 1"
                    class="project-img"
                  />
                </div>
                <h2 class="experience-sub-title project-title">Buburger <br></br> "Your Burger"</h2>
                <div class="btn-container">
                  <a href='https://github.com/hiiamanop/Buburger'>
                    <button
                      class="btn btn-color-2 project-btn"
                    >
                      Github
                    </button>
                  </a>
                </div>
              </div>
              <div class="details-container color-container">
                <div class="article-container">
                  <img
                    src="/assets/3.png"
                    alt="Project 2"
                    class="project-img"
                  />
                </div>
                <h2 class="experience-sub-title project-title">Deteksi Mangga Karbit</h2>
                <div class="btn-container">
                  <a href=''>
                    <button
                      class="btn btn-color-2 project-btn"
                    >
                      Github
                    </button>
                  </a>
                </div>
              </div>
              <div class="details-container color-container">
                <div class="article-container">
                  <img
                    src="/assets/2.png"
                    alt="Project 3"
                    class="project-img"
                  />
                </div>
                <h2 class="experience-sub-title project-title">Deteksi Bahasa Isyarat</h2>
                <div class="btn-container">
                  <a href='https://github.com/hiiamanop/Deteksi-Bahasa-Isyarat'>
                    <button
                      class="btn btn-color-2 project-btn"
                    >
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a href="#contact" >
            <img
              src="/assets/down.png"
              alt="down icon"
              class="icon down"
            />
          </a>
        </section>
        <section id="contact">
          <p class="section__text__p1">Silahkan Menghubungi Saya</p>
          <h1 class="title">Melalui</h1>
          <div class="contact-info-upper-container">
            <div class="contact-info-container">
              <img
                src="/assets/Vector2.png"
                alt="Email icon"
                class="icon contact-icon email-icon"
              />
              <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=naufalmuzakki895@gmail.com">naufalmuzakki895@gmail.com</a></p>
            </div>
            <div class="contact-info-container">
              <img
                src="/assets/Vector1.png"
                alt="LinkedIn icon"
                class="icon contact-icon"
              />
              <p><a href="https://www.linkedin.com/in/naufalmzkki/">naufalmzkki</a></p>
            </div>
          </div>
        </section>
        <footer>
          <nav>
            <div class="nav-links-container">
              <ul class="nav-links">
                <li><a href="#about">Tentang</a></li>
                <li><a href="#experience">Pengalaman</a></li>
                <li><a href="#projects">Proyek</a></li>
                <li><a href="#contact">Kontak</a></li>
              </ul>
            </div>
          </nav>
          <p>Copyright &#169; 2024 Ahmad Naufal. All Rights Reserved.</p>
        </footer>
        <script src="script.js"></script>
      </body>
    </html>

  );
}

export default App;
