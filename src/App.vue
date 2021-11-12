<template>
  <div id="app">
      <div class="nav">
        <div class="hamburger nav-toggle" onclick="document.documentElement.classList.add('menu-open')">
          <svg xmlns="http://www.w3.org/2000/svg" width="30.683" height="27.225" viewBox="0 0 30.683 27.225">
            <g id="hamburger" transform="matrix(0.966, -0.259, 0.259, 0.966, -55.838, -27.676)">
              <path id="hamb_bottom" d="M29.315,38.349H57.863" transform="translate(12.547 28.438)" fill="none" stroke="#fefefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              <path id="hamb_mid" d="M29.315,38.349H57.863" transform="translate(14.479 19.955)" fill="none" stroke="#fefefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              <path id="hamb_top" d="M29.315,38.349H57.863" transform="translate(16.411 11.473)" fill="none" stroke="#fefefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </g>
          </svg>
        </div>
        <div class="close_cross nav-toggle" onclick="document.documentElement.classList.remove('menu-open')">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <g id="close_cross" transform="translate(-945.341 -864.341)">
              <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(945.341 864.341)" fill="none" stroke="#599c95" stroke-width="3">
                <circle cx="24" cy="24" r="24" stroke="none"/>
                <circle cx="24" cy="24" r="22.5" fill="none"/>
              </g>
              <g id="Groupe_3" data-name="Groupe 3" transform="translate(959.435 878.068)">
                <path id="Tracé_6" data-name="Tracé 6" d="M0,28.016V0" transform="translate(0 0) rotate(-45)" fill="none" stroke="#fefefe" stroke-width="2"/>
                <path id="Tracé_7" data-name="Tracé 7" d="M0,28.016V0" transform="translate(19.81 0) rotate(45)" fill="none" stroke="#fefefe" stroke-width="2"/>
              </g>
            </g>
          </svg>
        </div>


        <router-link to="/" class="nav_title">MMI Montbéliard</router-link>
        <a href="" class="nav_since">since 1996</a>
      </div>
      <nav class="menu">
        <div class="left_menu">
            <ul>
              <li>
                <router-link to="/butmmi" class="nav-link" onclick="document.documentElement.classList.remove('menu-open')">BUT MMI</router-link><span>01</span>
              </li>
              <li>
                <router-link to="/departement" class="nav-link" onclick="document.documentElement.classList.remove('menu-open')">Département</router-link><span>02</span>
              </li>
              <li>
                <router-link to="/projets" class="nav-link" onclick="document.documentElement.classList.remove('menu-open')">Projets Étudiants</router-link><span>03</span>
              </li>
              <li>
                <router-link to="/mobilite" class="nav-link"onclick="document.documentElement.classList.remove('menu-open')">Mobilité Internationale</router-link><span>04</span>
              </li>
            </ul>
          </div>
        <div class="right_menu">
            <ul>
              <li>
                <router-link to="/contact" class="nav-link" onclick="document.documentElement.classList.remove('menu-open')">Contact</router-link>
              </li>
              <li>
                <router-link to="/extras" class="nav-link" onclick="document.documentElement.classList.remove('menu-open')">Extras</router-link>
              </li>
              <li>
                <router-link to="/actualites" class="nav-link" onclick="document.documentElement.classList.remove('menu-open')">Actualités</router-link>
              </li>
              <li>
                <router-link to="/pro" class="nav-link" onclick="document.documentElement.classList.remove('menu-open')">Espace Pro</router-link>
              </li>
            </ul>
          <ul class="icone">
            <li><a href="https://www.facebook.com/mmimontbeliard" rel="noopener" target="_blank" onclick="document.documentElement.classList.remove('menu-open')"><img src="./assets/facebook.svg" height="27" alt="Logo Facebook"></a></li>
            <li><a href="https://www.instagram.com/mmi_montbeliard/?hl=en" rel="noopener" target="_blank" onclick="document.documentElement.classList.remove('menu-open')"><img src="./assets/instagram.svg" alt="Logo Instagram"></a></li>
            <li><a href="https://www.youtube.com/channel/UCgW7jR8McJwjxPh0fDQaXGg/videos" rel="noopener" target="_blank" onclick="document.documentElement.classList.remove('menu-open')"><img src="./assets/youtube.svg" alt="Logo YouTube"></a></li>
            <li><a href="https://www.linkedin.com/school/mmimontbeliard/" rel="noopener" target="_blank" onclick="document.documentElement.classList.remove('menu-open')"><img src="./assets/linkedin.svg" alt="Logo LinkedIn"></a></li>
          </ul>
          </div>
        <div class="absolute_menu">
          <ul>
            <li>
              <router-link to="/mentionslegales" class="nav-link" onclick="document.documentElement.classList.remove('menu-open')">Mentions légales</router-link>
            </li>
            <li>
              <a href="http://www.iut-bm.univ-fcomte.fr/" target="_blank" rel="noopener" class="nav-link" onclick="document.documentElement.classList.remove('menu-open')">IUT-Belfort_Montbéliard</a>
            </li>
          </ul>
        </div>
      </nav>

      <router-view/>

      <footer>
        <div class="footer_top">
            <router-link to="/" class="footer_top_left">MMI Montbéliard</router-link>
            <ul>
              <li>
                <router-link to="/contact" class="footer-link"><spn>Contact</spn></router-link>
              </li>
              <li>
                <router-link to="/extras" class="footer-link"><spn>Extras</spn></router-link>
              </li>
              <li>
                <router-link to="/actualites" class="footer-link"><spn>Actualités</spn></router-link>
              </li>
              <li>
                <router-link to="/pro" class="footer-link"><spn>Espace Pro</spn></router-link>
              </li>
              <div class="cursor"></div>
            </ul>
        </div>
        <div class="footer_dottom">
          <ul>
            <li><a href="https://www.facebook.com/mmimontbeliard" rel="noopener" target="_blank"><img src="./assets/facebook.svg" height="27" alt="Logo Facebook"></a></li>
            <li><a href="https://www.instagram.com/mmi_montbeliard/?hl=en" rel="noopener" target="_blank"><img src="./assets/instagram.svg" alt="Logo Instagram"></a></li>
            <li><a href="https://www.youtube.com/channel/UCgW7jR8McJwjxPh0fDQaXGg/videos" rel="noopener" target="_blank"><img src="./assets/youtube.svg" alt="Logo YouTube"></a></li>
            <li><a href="https://www.linkedin.com/school/mmimontbeliard/" rel="noopener" target="_blank"><img src="./assets/linkedin.svg" alt="Logo LinkedIn"></a></li>
          </ul>
        </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<script>
(function () {

  const link = document.querySelectorAll('.footer-link');
  const cursor = document.querySelector('.cursor');

  const animateit = function (e) {
    const span = this.querySelector('spn');
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,

      move = 10,
      xMove = x / width * (move * 2) - move,
      yMove = y / height * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
  };

  const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  };

  link.forEach(b => b.addEventListener('mousemove', animateit));
  link.forEach(b => b.addEventListener('mouseleave', animateit));
  window.addEventListener('mousemove', editCursor);

})();
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --color-tonic: #08EFD7;
  --color-white: #fefefe;
  --color-bg: #363E41;
  --color-hover: #7A7068;
  --font-p: 'Gotham', sans-serif;
  --font-title: 'Crimson Pro', serif;
  --font-number: 'Cinzel', serif;
  --font-balise: 'La Belle Aurore', cursive;
}

@font-face {
  font-family: 'Gotham';
  src: url('assets/fonts/Gothambook.ttf');
  src: url('assets/fonts/Gothambook.ttf') format('truetype');
}
@font-face {
  font-family: 'GothamBold';
  src: url('assets/fonts/GothamBold.ttf');
  src: url('assets/fonts/GothamBold.ttf') format('truetype');
}
::-webkit-scrollbar{
  width: 5px;
  height: 0;
}
::-webkit-scrollbar-thumb{
  background: var(--color-tonic);
  border-radius: 10px;
}


html{
  font-family: var(--font-p);
  color: var(--color-tonic);
  z-index: 100;
  background-color: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  scroll-behavior: smooth;
  cursor: url("./assets/logoMMI.svg") 35 35, auto;
}
body{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
#app{
  width:  calc(100vw - 100px);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  z-index: 500;
  height: 100vh;
  border-right: 1px solid var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.nav_title{
  font-family: var(--font-title);
  font-size: 35px;
  transform: rotate(90deg);
  text-align: center;
  width: 300px;
}
.nav_since{
  font-family: var(--font-title);
  font-size: 16px;
  width: 50%;
  text-align: center;
  margin-bottom: 40px;
}
a{
  text-decoration: none;
  color: var(--color-white);
}
li{
  list-style-type: none;
}

.hamburger, .close_cross{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  border-bottom: 1px solid var(--color-white);
  transition: all .4s ease-in-out;
  cursor: pointer;
}
.close_cross{
  display: none;
}
.hamburger{
  transform: rotate(360deg);
}

/*menu*/
.menu{
  visibility:hidden;
  background-image: url("assets/menu_bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-left: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: 0.4s ease-in-out;
  opacity: 0;
  list-style-type: none;
}
.menu-open .menu{
  visibility: visible;
  opacity: 1;
}
.menu-open, .menu-open body{
  overflow: hidden;
}
.menu-open, .menu-open .hamburger{
  display: none;
}
.menu-open, .menu-open .close_cross{
  display: flex;
}
.left_menu li{
  margin-bottom: 80px;
}
.left_menu li:last-of-type{
  margin-bottom: 0;
}
.left_menu .nav-link{
  font-size: 90px;
  font-family: "GothamBold";
  font-weight: 900;
  transition: 0.4s ease-in-out;
}
.left_menu .nav-link:hover{
  background-size: cover;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px;
  -moz-background-clip:text;
  background-clip:text;
}
.left_menu span{
  color: var(--color-tonic);
  font-family: var(--font-number);
  font-size: 30px;
  font-weight: bolder;
  margin-left: 40px;
}

.right_menu .icone{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.right_menu .icone li {
  margin-right: 40px;
}
.right_menu li{
  margin-bottom: 30px;
}
.right_menu ul:first-of-type li:last-of-type{
  margin-bottom: 60px;
}
.right_menu .nav-link{
  font-size: 45px;
  font-family: "Gotham";
  font-weight: 900;
  transition: 0.4s ease-in-out;
}
.right_menu .nav-link:hover{
  color: var(--color-tonic);
}

.absolute_menu{
  position: absolute;
  left: 200px;
  bottom: 60px;
}
.absolute_menu ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.absolute_menu .nav-link{
  margin-right: 50px;
  transition: 0.4s ease-in-out;
}
.absolute_menu .nav-link:hover{
  color: var(--color-tonic);
}

header{
  width: calc(100vw - 100px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


footer{
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--color-white);
}
.footer_top{
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
}
.footer_top_left{
  font-family: var(--font-title);
  font-size: 20px;
  height: auto;
  padding-bottom: 40px;
  margin-left: 40px;
  border-bottom: 1px solid var(--color-white);
}
footer ul{
  font-family: var(--font-p);
  font-weight: 550;
  font-size: 18px;
  list-style-type: none;
  height: auto;
  padding-bottom: 40px;
  margin-right: 40px;
  border-bottom: 1px solid var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.footer_dottom ul{
  border-bottom: none;
}
footer ul li{
  padding-left: 40px;
  animation: .4s ease-in-out;
}
.footer-link:hover{
  color: var(--color-tonic);
}
footer ul li:first-of-type{
  padding-left: 0;
}
.footer-link{
  transition: 0.4s ease-in-out;
}
spn{
  display: inline-block;
  pointer-events: none;
  transition: transform 0.1s linear;
}
.cursor{
  z-index: 2000;
  pointer-events: none;
  position: fixed;
  padding: 0.3rem;
  background-color: #fff;
  transform: rotateZ(45deg) scale(0.1);
  mix-blend-mode: difference;
  transition: transform 0.3s ease;
}
.footer-link:hover ~ .cursor {
  transform: translate(-50%, -50%) scale(7) rotateZ(135deg);
  border-radius: 50%;
  background-color: #Ffffff;
  pointer-events: none;
}


.bg_shadow{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url("assets/shadow.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
