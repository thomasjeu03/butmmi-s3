<template>
  <div>
    <header>
      <h1>Actualités</h1>
      <p>Il se passe plein de chose ici</p>
      <a href="#main">
        <img class="arrow" src="../assets/arrow.png" alt="Flèche">
      </a>
      <img src="../assets/actualite/image1.png" class="header_bg">
    </header>

    <div class="main" id="main">
      <section class="section_type">
        <div class="left_section">
          <h2>Ces dernières semaines</h2>
        </div>
        <div class="liste_projets">
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/actualite/aftermovie.jpg" alt="" >
            <br>
            <h3>La journée d'intégration</h3>
            <br>
            <p>Revivez la journée d'intégration de nos MMI en visionnant l'after movie.</p>
            <br>
            <i>30 septembre 2021</i>
          </a>
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/actualite/aftermovie.jpg" alt="" >
            <br>
            <h3>La journée d'intégration</h3>
            <br>
            <p>Revivez la journée d'intégration de nos MMI en visionnant l'after movie.</p>
            <br>
            <i>30 septembre 2021</i>
          </a>
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/actualite/aftermovie.jpg" alt="" >
            <br>
            <h3>La journée d'intégration</h3>
            <br>
            <p>Revivez la journée d'intégration de nos MMI en visionnant l'after movie.</p>
            <br>
            <i>30 septembre 2021</i>
          </a>
        </div>
      </section>
      <section class="section_type">
        <div class="left_section">
          <h2>Ces derniers mois</h2>
        </div>
        <div class="liste_projets">
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/actualite/aftermovie.jpg" alt="" >
            <br>
            <h3>La journée d'intégration</h3>
            <br>
            <p>Revivez la journée d'intégration de nos MMI en visionnant l'after movie.</p>
            <br>
            <i>30 septembre 2021</i>
          </a>
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/actualite/aftermovie.jpg" alt="" >
            <br>
            <h3>La journée d'intégration</h3>
            <br>
            <p>Revivez la journée d'intégration de nos MMI en visionnant l'after movie.</p>
            <br>
            <i>30 septembre 2021</i>
          </a>
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/actualite/aftermovie.jpg" alt="" >
            <br>
            <h3>La journée d'intégration</h3>
            <br>
            <p>Revivez la journée d'intégration de nos MMI en visionnant l'after movie.</p>
            <br>
            <i>30 septembre 2021</i>
          </a>
        </div>
      </section>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Actualites',
  data () {
    return {
      msg: 'Actualités'
    }
  }
}
</script>

<style scoped>
.section_type::after{
  content: "<section/>";
  position: absolute;
  bottom: -50px;
  font-size: 20px;
  color: var(--color-hover);
  -webkit-text-fill-color: #7A7068;
  font-family: "La Belle Aurore";
}
h2{
  margin-bottom: 0px;
}
h4{
  margin-top: 40px;
  font-size: 25px;
}
.projet_type p::before{
  content: '';
}
.projet_type p::after{
  content: '';
}
.section_type{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.section_type .left_section{
  width: 100%;
}
.liste_projets{
  width: 100%;
  margin-top: 0;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.projet_type{
  height: auto;
  width: 450px;
  display: flex;
  margin: 20px 20px;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
.projet_type img{width: 100%}
</style>
