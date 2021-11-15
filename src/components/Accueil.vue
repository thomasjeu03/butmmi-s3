<template>
  <div>
    <header>
      <h1>BUT MMI</h1>
      <p>Métiers du Multimédia & de l'Internet</p>
      <a href="#main">
        <img class="arrow" src="../assets/arrow.png" alt="Flèche">
      </a>
      <img src="../assets/accueil/image1.png" class="header_bg" alt="coucou">
    </header>
    <div class="main" id="main">
      <section class="section_accueil">
        <Tilt transition="true" max="10" speed="2500">
          <router-link class="router-link" to="/butmmi">
            <div class="left_section">
              <h2>BUT MMI</h2>
              <p>Une formation de 3 ans sur les Métiers du Multimédia & de l'Internet.</p>
            </div>
            <img class="arrow" src="../assets/arrow.png" alt="Flèche">
          </router-link>
        </Tilt>
      </section>
      <section class="section_accueil">
        <router-link class="router-link" to="/departement">
          <div class="left_section">
            <h2>Département</h2>
            <p>Forme des professionnels du web et du multimédia depuis vingt cinq ans.</p>
          </div>
          <img class="arrow" src="../assets/arrow.png" alt="Flèche">
        </router-link>
      </section>
      <section class="section_accueil">
        <router-link class="router-link" to="/projets">
          <div class="left_section">
            <h2>Projets Étudiants</h2>
            <p>Chaque semestre, les étudiants se mettent dans la peaux de professionnels par le biais de projets tutorées.</p>
          </div>
          <img class="arrow" src="../assets/arrow.png" alt="Flèche">
        </router-link>
      </section>
      <section class="section_accueil">
        <router-link class="router-link" to="/mobilite">
          <div class="left_section">
            <h2>Mobilité Internationale</h2>
            <p>Chaque année le département organise en partenariat avec 2 CEGEP au Canada un semestre d'étude.</p>
          </div>
          <img class="arrow" src="../assets/arrow.png" alt="Flèche">
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


</style>
