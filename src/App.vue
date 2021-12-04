<template>
  <div id="app">
      <div class="nav">
        <div class="hamburger nav-toggle linkList" onclick="document.documentElement.classList.add('menu-open')">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30.683" height="27.225" viewBox="0 0 30.683 27.225">
            <g id="hamburger" transform="matrix(0.966, -0.259, 0.259, 0.966, -55.838, -27.676)">
              <path id="hamb_bottom" d="M29.315,38.349H57.863" transform="translate(12.547 28.438)" fill="none" stroke="#fefefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              <path id="hamb_mid" d="M29.315,38.349H57.863" transform="translate(14.479 19.955)" fill="none" stroke="#fefefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              <path id="hamb_top" d="M29.315,38.349H57.863" transform="translate(16.411 11.473)" fill="none" stroke="#fefefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </g>
          </svg>
          </span>

        </div>
        <div class="close_cross nav-toggle linkList" onclick="document.documentElement.classList.remove('menu-open')">
          <span>
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
          </span>
        </div>


        <router-link to="/" class="nav_title" onclick="document.documentElement.classList.remove('menu-open')">MMI Montbéliard</router-link>
        <a href="" class="nav_since" onclick="document.documentElement.classList.remove('menu-open')">since 1996</a>
      </div>
      <nav class="menu">
        <div class="left_menu">
            <ul>
              <li>
                <router-link to="/butmmi" class="nav-link linkList" onclick="document.documentElement.classList.remove('menu-open')" ><span>BUT MMI</span></router-link><div class="number">01</div>
              </li>
              <li>
                <router-link to="/departement" class="nav-link linkList" onclick="document.documentElement.classList.remove('menu-open')"><span>Département</span></router-link><div class="number">02</div>
              </li>
              <li>
                <router-link to="/projets" class="nav-link linkList" onclick="document.documentElement.classList.remove('menu-open')"><span>Projets Étudiants</span></router-link><div class="number">03</div>
              </li>
              <li>
                <router-link to="/mobilite" class="nav-link linkList"onclick="document.documentElement.classList.remove('menu-open')"><span>Mobilité Internationale</span></router-link><div class="number">04</div>
              </li>
            </ul>
          </div>
        <div class="right_menu">
            <ul>
              <li>
                <router-link to="/contact" class="nav-link linkList" onclick="document.documentElement.classList.remove('menu-open')"><span>Contact</span></router-link>
              </li>
              <li>
                <router-link to="/extras" class="nav-link linkList" onclick="document.documentElement.classList.remove('menu-open')"><span>Extras</span></router-link>
              </li>
              <li>
                <router-link to="/actualites" class="nav-link  linkList" onclick="document.documentElement.classList.remove('menu-open')"><span>Actualités</span></router-link>
              </li>
              <li>
                <router-link to="/pro" class="nav-link  linkList" onclick="document.documentElement.classList.remove('menu-open')"><span>Espace Pro</span></router-link>
              </li>
            </ul>
          <ul class="icone">
            <li class="linkList"><span><a href="https://www.facebook.com/mmimontbeliard" rel="noopener" target="_blank"><img src="./assets/facebook.svg" height="27" alt="Logo Facebook"></a></span></li>
            <li class="linkList"><span><a href="https://www.instagram.com/mmi_montbeliard/?hl=en" rel="noopener" target="_blank"><img src="./assets/instagram.svg" alt="Logo Instagram"></a></span></li>
            <li class="linkList"><span><a href="https://www.youtube.com/channel/UCgW7jR8McJwjxPh0fDQaXGg/videos" rel="noopener" target="_blank"><img src="./assets/youtube.svg" alt="Logo YouTube"></a></span></li>
            <li class="linkList"><span><a href="https://www.linkedin.com/school/mmimontbeliard/" rel="noopener" target="_blank"><img src="./assets/linkedin.svg" alt="Logo LinkedIn"></a></span></li>
          </ul>
          </div>
        <div class="absolute_menu">
          <ul>
            <li>
              <router-link to="/mentionslegales" class="nav-link  linkList" onclick="document.documentElement.classList.remove('menu-open')"><span>Mentions légales</span></router-link>
            </li>
            <li>
              <a href="http://www.iut-bm.univ-fcomte.fr/" target="_blank" rel="noopener" class="nav-link  linkList" onclick="document.documentElement.classList.remove('menu-open')"><span>IUT-Belfort_Montbéliard</span></a>
            </li>
          </ul>
        </div>
      </nav>
      <a href="https://dossier.parcoursup.fr/Candidat/carte" class="inscription" target="_blank" rel="noopener">
        <img src="./assets/logo_mmi_svg.svg" alt="logoMMI" class="logoMMI">
        <div class="linkList">
          <span>
            s'inscrire
          </span>
        </div>
      </a>
      <router-view/>

      <footer id="footer">
        <div class="footer_top">
            <router-link to="/" class="footer_top_left linkList"><span>MMI Montbéliard</span></router-link>
            <ul>
              <li>
                <router-link to="/contact" class="footer-link linkList"><span>Contact</span></router-link>
              </li>
              <li>
                <router-link to="/extras" class="footer-link linkList"><span>Extras</span></router-link>
              </li>
              <li>
                <router-link to="/actualites" class="footer-link linkList"><span>Actualités</span></router-link>
              </li>
              <li>
                <router-link to="/pro" class="footer-link linkList"><span>Espace Pro</span></router-link>
              </li>
              <div class="cursor"></div>
            </ul>
        </div>
        <div class="footer_bottom">
          <ul>
            <li class="linkList"><span><a href="https://www.facebook.com/mmimontbeliard" rel="noopener" target="_blank"><img src="./assets/facebook.svg" height="27" alt="Logo Facebook"></a></span></li>
            <li class="linkList"><span><a href="https://www.instagram.com/mmi_montbeliard/?hl=en" rel="noopener" target="_blank"><img src="./assets/instagram.svg" alt="Logo Instagram"></a></span></li>
            <li class="linkList"><span><a href="https://www.youtube.com/channel/UCgW7jR8McJwjxPh0fDQaXGg/videos" rel="noopener" target="_blank"><img src="./assets/youtube.svg" alt="Logo YouTube"></a></span></li>
            <li class="linkList"><span><a href="https://www.linkedin.com/school/mmimontbeliard/" rel="noopener" target="_blank"><img src="./assets/linkedin.svg" alt="Logo LinkedIn"></a></span></li>
          </ul>
        </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    hoverEffects()
  }
}

function hoverEffects() {
  const linkList = document.querySelectorAll('.linkList');
  const cursor = document.querySelector('.cursor');
  const animateMenuSection = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,

      move = 20,
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

  linkList.forEach(b => b.addEventListener('mousemove', animateMenuSection));
  linkList.forEach(b => b.addEventListener('mouseleave', animateMenuSection));
  window.addEventListener('mousemove', editCursor);

}

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e)=>{
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --color-tonic: #08EFD7;
  --color-white: #fefefe;
  --color-shadow: rgba(18, 20, 20, 0.29);
  --color-bg: #363E41;
  --color-hover: rgba(122, 112, 104, 0.68);
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
::-webkit-resizer{
  background-color: rgba(0,0,0,0);
}
::-webkit-scrollbar-track{
  background-color: rgba(0,0,0,0);
}
html{
  font-family: var(--font-p);
  color: var(--color-tonic);
  z-index: 100;
  background-color: var(--color-bg);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow-x: hidden;
  height: auto;
  scroll-behavior: smooth;
  cursor: none;
}
html::before{
  content: "<html>";
  position: absolute;
  top: 30px;
  left: 130px;
  z-index: 110;
  font-size: 20px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
html::after{
  content: "<html/>";
  position: absolute;
  bottom: 20px;
  left: 130px;
  z-index: 110;
  font-size: 20px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
body::before{
  content: "<body>";
  position: absolute;
  top: 60px;
  left: 160px;
  z-index: 110;
  font-size: 20px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
header::before{
  content: "<header>";
  position: absolute;
  top: 90px;
  left: 100px;
  z-index: 110;
  font-size: 20px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
header::after{
  content: "<header/>";
  position: absolute;
  bottom: 30px;
  left: 100px;
  z-index: 110;
  font-size: 20px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
body{
  width: 100%;
  height: auto;
  position: relative;
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
.logoMMI{
  position: fixed;
  transform: scale(0.5);
  z-index: 110;
  top: -65px;
  right: 0;
  transition: 0.4s ease-in-out;
}
.logoMMI:hover{
  transform: rotateY(-180deg) scale(0.5);
}
.inscription{
  position: fixed;
  z-index: 110;
  top: 85px;
  right: -12px;
  transform: translateX(-50%);
  transition: 0.4s ease-in-out;
}
.inscription:hover{
  color: var(--color-tonic);
}
.nav{
  position: fixed;
  top: 0;
  left: 0;
  cursor: none;
  width: 100px;
  z-index: 500;
  height: 100vh;
  border-right: 1px solid var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 0.4s ease-in-out;
}

.nav_title{
  font-family: var(--font-title);
  font-size: 35px;
  transform: rotate(90deg);
  text-align: center;
  width: 300px;
  transition: 0.4s ease-in-out;
}
.nav_title:hover{
  color: var(--color-tonic);
}
.nav_since{
  font-family: var(--font-title);
  font-size: 16px;
  width: 50%;
  text-align: center;
  margin-bottom: 40px;
}
h1{
  font-size: 70px;
  text-align: center;
  font-family: var(--font-title);
}
h1::before{
  content: "<h1>";
  font-size: 20px;
  margin-right: 5px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
h1::after{
  content: "<h1/>";
  font-size: 20px;
  margin-left: 5px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
header p{
  font-family: var(--font-p);
  font-size: 28px;
  text-align: center;
}
header p::before{
  content: "<p>";
  font-size: 20px;
  margin-right: 5px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
header p::after{
  content: "<p/>";
  font-size: 20px;
  margin-left: 5px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
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
}
.close_cross{
  display: none;
}
.hamburger{
  transform: rotate(360deg);
}
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
  z-index: 200;
  bottom: 0;
  padding-left: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: 0.4s ease-in-out;
  opacity: 0;
  list-style-type: none;
  /**/
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
  display: flex;
  flex-direction: row;align-items: flex-end;
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
  -moz-background-clip: text;
  background-clip: text;
}
.left_menu .number{
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
  color: var(--color-white);
  position: relative;
}
header .arrow{
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scale(0.5);
  bottom: 35px;
}
.header_bg{
  opacity: 0.6;
  z-index: -10;
  height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0;
  left: calc(50% - 50px);
  transform: translateX(-50%);
}

.main{
  width: calc(100vw - 100px);
  height: auto;
  position: relative;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main::before{
  margin-bottom: 80px;
  content: "<main>";
  position: absolute;
  top: -170px;
  left: 100px;
  z-index: 110;
  font-size: 20px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
.main::after{
  margin-bottom: 80px;
  content: "<main/>";
  position: absolute;
  bottom: 0px;
  left: 100px;
  z-index: 110;
  font-size: 20px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
.main .section_accueil .router-link{
  position: relative;
  width: 840px;
  height: 575px;
  padding: 80px 100px;
  display: flex;
  margin-bottom: 200px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 3px 3px 34px var(--color-shadow);
}
.main .section_type{
  position: relative;
  padding: 0 150px;
  width: 100%;
  color: var(--color-white);
  height: auto;
  display: flex;
  margin-bottom: 200px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}
.main .section_team{
  position: relative;
  padding: 0 150px;
  width: 100%;
  color: var(--color-white);
  height: auto;
  display: flex;
  margin-bottom: 200px;
  flex-direction: column;
  align-items: flex-start;
}
.main section .router-link .arrow{
  transform: rotate(-90deg) scale(0.5);
  margin-left: 40px;
}
.main section .router-link p{
  font-size: 18px;
  line-height: 25px;
}
.main .section_accueil h2{
  width: auto;
  font-size: 40px;
  font-family: GothamBold;
  background-size: cover;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px;
  -moz-background-clip: text;
  background-clip: text;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid #685C56;
}
.all_section{
  width: 100%;
}
.all_section div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.section_type .left_section, .section_team .left_section{
  width: 60%;
  height: auto;
}
.section_type .right_section, .section_team .right_section{
  width: 40%;
  height: auto;
}
.main .section_type h2, .main .section_team h2, .main .section_contact h2{
  width: auto;
  font-size: 40px;
  color: var(--color-white);
  font-family: GothamBold;
  background-size: cover;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px;
  -moz-background-clip: text;
  background-clip: text;
  padding-bottom: 10px;
  margin-bottom: 40px;
}
h2::before{
  content: "<h2>";
  font-size: 20px;
  color: var(--color-hover);
  -webkit-text-fill-color: #7A7068;
  -webkit-text-stroke: 0;
  font-family: "La Belle Aurore";
  margin-right: 5px;
  background-clip: text;
}
h2::after{
  content: "<h2/>";
  font-size: 20px;
  color: var(--color-hover);
  -webkit-text-fill-color: #7A7068;
  -webkit-background-clip: text;
  -webkit-text-stroke: 0;
  font-family: "La Belle Aurore";
  margin-left: 5px;
  background-clip: text;
}
.CTA{
  height: 40px;
  width: 350px;
  border: 1px solid var(--color-tonic);
  padding: 10px 35px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  margin-top: 40px;
  color: var(--color-white);
  background-color: rgba(0,0,0,0);
  cursor: none;
  transition: 0.4s ease-in-out;
  text-shadow: 0 0 3px rgba(0,0,0,0);
}
.CTA:hover{
  border: 1px solid var(--color-white);
  color: var(--color-tonic);
  box-shadow: 1px 1px 5px var(--color-shadow);
  text-shadow: 0 0 3px var(--color-tonic);
}
i{
  color: var(--color-tonic);
}
section p{
  line-height: 25px;
}
section p::before{
  content: "<p>";
  bottom: 0;
  transform: translateX(-100px);
  font-size: 15px;
  margin-right: 5px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
section p::after{
  content: "<p/>";
  bottom: 0;
  transform: translateX(-100px);
  font-size: 15px;
  margin-left: 5px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
section .router-link::before{
  content: "<section>";
  position: absolute;
  top: -50px;
  left: -100px;
  font-size: 20px;
  color: var(--color-hover);
  -webkit-text-fill-color: #7A7068;
  font-family: "La Belle Aurore";
}
section .router-link::after{
  content: "<section/>";
  position: absolute;
  bottom: -50px;
  left: -100px;
  font-size: 20px;
  color: var(--color-hover);
  -webkit-text-fill-color: #7A7068;
  font-family: "La Belle Aurore";
}
.section_type::before, .section_team::before{
  content: "<section>";
  position: absolute;
  top: -50px;
  font-size: 20px;
  color: var(--color-hover);
  -webkit-text-fill-color: #7A7068;
  font-family: "La Belle Aurore";
}
.section_type::after, .section_team::after{
  content: "<section/>";
  position: absolute;
  bottom: -50px;
  font-size: 20px;
  color: var(--color-hover);
  -webkit-text-fill-color: #7A7068;
  font-family: "La Belle Aurore";
}

footer{
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--color-white);
}
footer::before{
  margin-bottom: 80px;
  content: "<footer>";
  position: absolute;
  top: -40px;
  left: 100px;
  z-index: 110;
  font-size: 20px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
footer::after{
  margin-bottom: 80px;
  content: "<footer/>";
  position: absolute;
  bottom: 0px;
  left: 100px;
  z-index: 110;
  font-size: 20px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
}
body::after{
  margin-bottom: 80px;
  content: "<body/>";
  position: absolute;
  bottom: -30px;
  left: 160px;
  z-index: 110;
  font-size: 20px;
  color: var(--color-hover);
  font-family: "La Belle Aurore";
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
.footer_top_left:hover{
  color: var(--color-tonic);
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
.footer_bottom ul{
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
span{
  display: inline-block;
  pointer-events: none;
  transition: transform 0.4s linear;
}
.cursor{
  display: none;
  z-index: 2000;
  pointer-events: none;
  position: fixed;
  padding: 0.3rem;
  background-color: #fff;
  transform: rotateZ(45deg) scale(1.5) translate(-12px , 5px);
  mix-blend-mode: difference;
  transition: transform 0.4s ease-in-out;
  top: 150%;
  left: 150%;
  width: 20px;
  border: 1px solid var(--color-hover);
  height: 20px;
  border-radius: 50%;
}
a:hover, .linkList:hover{
  cursor: none;
}
.cursor ~ .linkList:hover {
  transform: scale(3) rotateZ(45deg);
  border-radius: 0%;
  pointer-events: none;
  background-color: orange;
}
@media only screen and (max-width: 1600px){
  .left_menu .nav-link{
    font-size: 70px;
  }
}
@media only screen and (max-width: 1361px){
  .left_menu .nav-link{
    font-size: 60px;
  }
}
@media only screen and (max-width: 1080px){
  .menu{
    width: 100vw;
    height: 100vh;
    padding: 30px 30px 30px 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: 0.4s ease-in-out;
    opacity: 0;
    list-style-type: none;
    /**/
  }
  .left_menu{
    margin-bottom: 40px;
  }
  .left_menu li{
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
  }
  .left_menu .nav-link{
    font-size: 40px;
  }
  .left_menu .number{
    font-size: 20px;
    font-weight: bolder;
    margin-left: 20px;
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
  .right_menu .icone li:last-of-type {
    margin-right: 0px;
  }
  .right_menu li{
    margin-bottom: 20px;
  }

  .right_menu ul:first-of-type li:last-of-type{
    margin-bottom: 60px;
  }
  .right_menu .nav-link{
    font-size: 25px;
  }
  .absolute_menu{
    position: absolute;
    left: 50%;
    bottom: 30px;
    width: 100%;
    height: auto;
    transform: translate(-50%);
  }
  .absolute_menu ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .absolute_menu li{
    margin-top: 20px;
    padding-left: 100px;
  }
  .absolute_menu .nav-link{
    margin-right: 0px;
    transition: 0.4s ease-in-out;
  }
}

@media only screen and (max-width: 780px){
  html::before{
    content: "<html>";
    position: absolute;
    top: 100px;
    left: 30px;
    font-size: 16px;
  }
  html::after{
    content: "<html/>";
    position: absolute;
    bottom: 20px;
    left: 30px;
    font-size: 16px;
  }
  body::before{
    content: "<body>";
    position: absolute;
    top: 130px;
    left: 40px;
    font-size: 16px
  }
  header::before{
    content: "<header>";
    position: absolute;
    top: 160px;
    left: 50px;
    font-size: 16px;
  }
  header::after{
    content: "<header/>";
    position: absolute;
    bottom: 30px;
    left: 50px;
    font-size: 16px;
  }
  #app{
    width: 100vw;
  }
  body{
    width: 100vw;
  }
  .nav{
    width: 100vw;
    position: fixed;
    top: 0;
    height: 75px;
    border-right: 0px solid var(--color-white);
    border-bottom: 1px solid var(--color-white);
    display: flex;
    backdrop-filter: blur(6px);
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .hamburger, .close_cross{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75px;
    width: 75px;
    border-bottom: 0px solid var(--color-white);
    transition: all .4s ease-in-out;
  }
  .close_cross{
    display: none;
  }
  .nav_title{
    font-size: 25px;
    transform: rotate(0deg);
    width: auto;
  }
  .nav_since{
    width: auto;
    margin-bottom: 0;
    margin-right: 30px;
  }
  .inscription{
    top: calc(100vh - 45px);
  }
  header, .main{
    width: 100vw;
    padding: 0 35px;
  }
  .main::before{
    content: "<main>";
    position: absolute;
    top: -170px;
    left: 30px;
    font-size: 16px;
  }
  .main::after{
    content: "<main/>";
    position: absolute;
    bottom: -10px;
    left: 30px;
    font-size: 16px;
  }
  .main .section_accueil .router-link{
    width: 100%;
    height: 400px;
    padding: 0px 20px;
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  section .router-link::before{
    position: absolute;
    top: -30px;
    left: 0px;
    font-size: 16px;
  }
  section .router-link::after{
    position: absolute;
    bottom: -55px;
    left: 0px;
    font-size: 16px;
  }
  .main section .router-link .arrow{
    margin-left: 0px;
  }
  h2{
    font-size: 30px;
  }
  h2::before{
    content: "<h2>";
    font-size: 16px;
  }
  h2::after{
    content: "<h2/>";
    font-size: 16px;
  }

  .menu{
    width: 100vw;
    height: 100vh;
    padding: 95px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: 0.4s ease-in-out;
    opacity: 0;
    list-style-type: none;
    /**/
  }
  .left_menu{
    margin-bottom: 40px;
  }
  .left_menu li{
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
  }
  .left_menu .nav-link{
    font-size: 30px;
  }
  .left_menu .number{
    font-size: 15px;
    font-weight: bolder;
    margin-left: 10px;
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
  .right_menu .icone li:last-of-type {
    margin-right: 0px;
  }
  .right_menu li{
    margin-bottom: 20px;
  }
  .right_menu ul:first-of-type li:last-of-type{
    margin-bottom: 60px;
  }
  .right_menu .nav-link{
    font-size: 25px;
  }
  .absolute_menu{
    position: absolute;
    left: 50%;
    bottom: 30px;
    width: 100%;
    height: auto;
    transform: translate(-50%);
  }
  .absolute_menu ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .absolute_menu li{
    margin-top: 20px;
    padding-left: 0px;
  }
  .absolute_menu .nav-link{
    margin-right: 0px;
    transition: 0.4s ease-in-out;
  }
  h1{
    font-size: 40px;
    text-align: center;
    font-family: var(--font-title);
  }
  h1::before{
    content: "<h1>";
    font-size: 16px;
  }
  h1::after{
    content: "<h1/>";
    font-size: 16px;
  }
  header p{
    font-size: 20px;
    text-align: center;
  }
  header p::before{
    content: "<p>";
    font-size: 16px;
  }
  header p::after{
    content: "<p/>";
    font-size: 16px;
  }
}


.bg_shadow{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -100;
  background-image: url("assets/shadow.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
