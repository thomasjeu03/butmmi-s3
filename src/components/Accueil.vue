<template>
  <div>
    <header>
      <h1>BUT MMI</h1>
      <p>Métiers du Multimédia & de l'Internet</p>
      <a href="#main">
        <img class="arrow" src="../assets/arrow.png" alt="Flèche">
      </a>
      <img src="../assets/accueil/image1.png" alt="Accueil BUT MMI Montbéliard" class="header_bg" alt="classe BUT MMI">
    </header>
    <div class="main" id="main">
      <section v-tilt="{speed: 2500, max:  10, transition: true}" class="section_accueil">
          <router-link class="router-link sa1" to="/butmmi">
            <div class="left_section">
              <h2>BUT MMI</h2>
              <p>Une formation de 3 ans sur les Métiers du Multimédia & de l'Internet.</p>
            </div>
            <img class="arrow" src="../assets/arrow.png" alt="Flèche">
            <h3 class="h3n1">01</h3>
            <img class="section_illu" src="../assets/accueil/section1.png" alt="illustration BUT MMI">
            <img class="section_stroke" src="../assets/accueil/stroke.svg" alt="stroke">
          </router-link>
      </section>
      <section v-tilt="{speed: 2500, max:  10, transition: true}" class="section_accueil">
        <router-link class="router-link sa2" to="/departement">
          <div class="left_section">
            <h2>Département</h2>
            <p>Forme des professionnels du web et du multimédia depuis vingt cinq ans.</p>
          </div>
          <img class="arrow" src="../assets/arrow.png" alt="Flèche">
          <h3 class="h3n2">02</h3>
          <img class="section_illu" src="../assets/accueil/section2.png" width="240" alt="illustration département">
          <img class="section_stroke" src="../assets/accueil/stroke.svg" alt="stroke">
        </router-link>
      </section>
      <section v-tilt="{speed: 2500, max:  10, transition: true}" class="section_accueil">
        <router-link class="router-link sa3" to="/projets">
          <div class="left_section">
            <h2>Projets Étudiants</h2>
            <p>Chaque semestre, les étudiants se mettent dans la peaux de professionnels par le biais de projets tutorées.</p>
          </div>
          <img class="arrow" src="../assets/arrow.png" alt="Flèche">
          <h3 class="h3n3">03</h3>
          <img class="section_illu" src="../assets/accueil/section3.png" width="220" alt="illustration projets étudiants">
          <img class="section_stroke" src="../assets/accueil/stroke2.svg" alt="stroke">
        </router-link>
      </section>
      <section v-tilt="{speed: 2500, max:  10, transition: true}" class="section_accueil">
        <router-link class="router-link sa4" to="/mobilite">
          <div class="left_section">
            <h2>Mobilité Internationale</h2>
            <p>Chaque année le département organise en partenariat avec 2 CEGEP au Canada un semestre d'étude.</p>
          </div>
          <img class="arrow" src="../assets/arrow.png" alt="Flèche">
          <h3 class="h3n4">04</h3>
          <img class="section_illu" src="../assets/accueil/section4.png" alt="illustration Mobilité">
          <img class="section_stroke" src="../assets/accueil/stroke2.svg" alt="stroke">
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  data () {
    return {
      msg: 'BUT MMI'
    }
  }
}

</script>

<style scoped>
.sa1{
  background-image: url("../assets/butmmi/image1.jpg");
  backdrop-filter: blur(10px);
}
.sa2{
  background-image: url("../assets/departement/image1.jpg");
}
.sa3{
  background-image: url("../assets/projets/image1.jpg");
}
.sa4{
  background-image: url("../assets/mobilite/image1.png");
}
.router-link h3{
  position: absolute;
  font-family: Cinzel, serif;
  font-size: 130px;
  color: #599C95;
  bottom: -80px;
  left: -40px;
  z-index: 90;
}
.h3n1:after{
  content: "01";
  position: absolute;
  font-family: Cinzel, serif;
  font-size: 130px;
  color: var(--color-white);
  bottom: -5px;
  left: 10px;
  z-index: 120;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px;
  -moz-background-clip: text;
  background-clip: text;
}
.h3n2:after{
  content: "02";
  position: absolute;
  font-family: Cinzel, serif;
  font-size: 130px;
  color: var(--color-white);
  bottom: -5px;
  left: 10px;
  z-index: 120;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px;
  -moz-background-clip: text;
  background-clip: text;
}
.h3n3:after{
  content: "03";
  position: absolute;
  font-family: Cinzel, serif;
  font-size: 130px;
  color: var(--color-white);
  bottom: -5px;
  left: 10px;
  z-index: 120;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px;
  -moz-background-clip: text;
  background-clip: text;
}
.h3n4:after{
  content: '04';
  position: absolute;
  font-family: Cinzel, serif;
  font-size: 130px;
  color: var(--color-white);
  bottom: -5px;
  left: 10px;
  z-index: 120;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px;
  -moz-background-clip: text;
  background-clip: text;
}
.section_illu{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 100px;
}
.section_stroke{
  position: absolute;
  top: 10px;
  right: 10px;
  width: 850px;
  height: 580px;
}
:target{
  scroll-margin-top: 0;
}
@media only screen and (max-width: 1080px){
  .section_stroke{
    display: none;
  }
  .section_illu{
    display: none;
  }
}
@media only screen and (max-width: 780px){
  .router-link h3{
    font-size: 80px;
    bottom: -45px;
    left: -20px;
  }
  .section_stroke{
    display: none;
  }
  .h3n1:after, .h3n2:after, .h3n3:after, .h3n4:after{
    font-size: 80px;
    bottom: -5px;
    left: 5px;
  }
  .section_illu{
    display: none;
  }
}
</style>
