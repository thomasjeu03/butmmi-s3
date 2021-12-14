<template>
  <div>
    <header>
      <h1>Extras</h1>
      <p>Toujours plus</p>
      <a href="#main">
        <img class="arrow" src="../assets/arrow.png" alt="Flèche">
      </a>
      <img src="../assets/extras/image1.png" class="header_bg">
    </header>
    <div class="main" id="main">
      <section class="section_type">
        <div class="left_section">
          <h2>Défi 24h</h2>
          <p>Le principe de ce défi organisé par une équipe d’étudiant est de réaliser <i>une création multimédia</i> autour d’un sujet imposé dans une <i>durée de 24h</i>. Tout au long de ces vingt-quatre heures de défi inter-promo, des mini jeux viendront rendre les choses encore plus intéressantes. Le défi prend place dans les locaux du département, ce qui viendra garantir bonne humeur et barres de rire !</p>
        </div>
        <img class="right_section" src="../assets/butmmi/image2.png" alt="vidéo présentation BUT MMI">
      </section>
      <section class="section_type">
        <div class="left_section">
          <h2>Le Frigo</h2>
          <p>
            Le Frigo est le <i>magazine universitaire du campus de Montbéliard</i>. Il est réalisé dans nos locaux dans le cadre d’un module d’enseignement libre (MEL). Il est composé de trois pôles distincts : la rédaction, le maquettage et la vidéo.
            <br>
            <br>
            Vous y trouverez des articles sur la vie du campus, sur ce qu’il se passe dans Montbéliard et ses alentours ou encore quelques conseils d’étudiants. Depuis cette année, le frigo est également décliné sous la forme d'une chaîne Youtube : Frigo TV.
          </p>
          <br>
          <br>
          <br>
          <a href="src/assets/pdf/frigo.pdf" class="CTA" download>
            Télécharger la dernière édition
          </a>
          <br>
        </div>
        <br>
        <img class="right_section" src="../assets/butmmi/image2.png" alt="vidéo présentation BUT MMI">
      </section>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Extra',
  data () {
    return {
      msg: 'Extra, toujours plus'
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 780px){
  .CTA{
    width: 100%;
  }
}
</style>
