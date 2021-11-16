<template>
  <div>
    <header>
      <h1>Espace Pro</h1>
      <p>Vous cherchez un stagiaire ou avez un projet à réaliser </p>
      <a href="#main">
        <img class="arrow" src="../assets/arrow.png" alt="Flèche">
      </a>
      <img src="../assets/pro/image1.png" class="header_bg">
    </header>
    <div class="main" id="main">
      <section class="section_type">
        <div class="left_section">
          <h2>De multiples demandes</h2>
          <p>Les projets de nos étudiants ont attiré votre attention ? Ils doivent effectuer un stage de 10 semaines ou une alternance de … mois en entreprise afin de valider leur diplôme. Si votre entreprise recherche des stagiaires ou alternants, vous pouvez déposer une offre de stage ou d’alternance en cliquant sur le lien ci-dessous.
          </p>
          <br>
          <br>
          <br>
          <br>
          <router-link to="/contact" class="CTA">
            Déposer une offre
          </router-link>
        </div>
      </section>
      <section class="section_type">
        <div class="left_section">
          <h2>Un projet ?</h2>
          <p>Vous avez un projet dans le domaine du web ? Un site web ? Un évènement qui a besoin d’organisation ? Dans le cadre de leur projet collectif du troisième semestre, nos étudiants attendent de réaliser vos projets. Vous pouvez déposer ceux-ci en cliquant sur le lien ci-dessous.</p>
          <br>
          <br>
          <br>
          <br>
          <router-link to="/contact" class="CTA">
            Proposer un projet
          </router-link>
        </div>
      </section>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Pro',
  data () {
    return {
      msg: 'Espace Pro'
    }
  }
}
</script>

<style scoped>
.left_section{
  position: relative;
  width: 100%;
}
.CTA{
  position: absolute;
  left: 50%;
  width: 250px;
  text-align: center;
  bottom: 0;
  transform: translateX(-50%);
}
</style>
