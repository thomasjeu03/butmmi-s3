<template>
  <div>
    <header>
      <h1>Projets Étudiant</h1>
      <p>Un pas vers le monde professionnel</p>
      <a href="#main">
        <img class="arrow" src="../assets/arrow.png" alt="Flèche">
      </a>
      <img src="../assets/projets/image1.png" class="header_bg">
    </header>
    <div class="main" id="main">
      <section class="section_type">
        <div class="left_section">
          <h2>Projets Web</h2>
        </div>
        <div class="liste_projets">
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/projets/image2.png" alt="" >
            <h3>CollabyU</h3>
            <br>
            <i>Juin 2021</i>
            <br>
            <p>L'inpecteur Tamtam cherche désespérément à résoudre l'énigme de la Post it War.</p>
            <br>
            <p>Téo GHENO - Thomas JEU - Thomas LAMBOLEZ</p>
          </a>
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/projets/image2.png" alt="" >
            <h3>CollabyU</h3>
            <br>
            <i>Juin 2021</i>
            <br>
            <p>L'inpecteur Tamtam cherche désespérément à résoudre l'énigme de la Post it War.</p>
            <br>
            <p>Téo GHENO - Thomas JEU - Thomas LAMBOLEZ</p>
          </a>
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/projets/image2.png" alt="" >
            <h3>CollabyU</h3>
            <br>
            <i>Juin 2021</i>
            <br>
            <p>L'inpecteur Tamtam cherche désespérément à résoudre l'énigme de la Post it War.</p>
            <br>
            <p>Téo GHENO - Thomas JEU - Thomas LAMBOLEZ</p>
          </a>
        </div>
      </section>

      <section class="section_type">
        <div class="left_section">
          <h2>Réalisations Audiovisuelles</h2>
        </div>
        <h4>Projets pédagogiques</h4>
        <div class="liste_projets">
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/projets/image2.png" alt="" >
            <h3>CollabyU</h3>
            <br>
            <i>Juin 2021</i>
            <br>
            <p>L'inpecteur Tamtam cherche désespérément à résoudre l'énigme de la Post it War.</p>
            <br>
            <p>Téo GHENO - Thomas JEU - Thomas LAMBOLEZ</p>
          </a>
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/projets/image2.png" alt="" >
            <h3>CollabyU</h3>
            <br>
            <i>Juin 2021</i>
            <br>
            <p>L'inpecteur Tamtam cherche désespérément à résoudre l'énigme de la Post it War.</p>
            <br>
            <p>Téo GHENO - Thomas JEU - Thomas LAMBOLEZ</p>
          </a>
        </div>
        <h4>Projets d'étudiants</h4>
        <div class="liste_projets">
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/projets/image2.png" alt="" >
            <h3>CollabyU</h3>
            <br>
            <i>Juin 2021</i>
            <br>
            <p>L'inpecteur Tamtam cherche désespérément à résoudre l'énigme de la Post it War.</p>
            <br>
            <p>Téo GHENO - Thomas JEU - Thomas LAMBOLEZ</p>
          </a>
        </div>
      </section>

      <section class="section_type">
        <div class="left_section">
          <h2>Créations graphique</h2>
        </div>
        <div class="liste_projets">
          <a href="https://collabyu.thomasjeu.fr/" target="_blank" rel="noopener"  class="projet_type">
            <img src="../assets/projets/image2.png" alt="" >
            <h3>seul</h3>
            <br>
            <i>octobre 2021</i>
            <br>
            <p>Une oeuvre qui parle</p>
            <br>
            <p>Etienne Spiel</p>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projets',
  data () {
    return {
      msg: 'Projets Étudiants'
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
  align-items: center;
  text-align: center;
}
.projet_type img{width: 100%}
</style>

