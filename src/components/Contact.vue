<template>
  <div>
    <header>
      <h1>Contactez nous</h1>
      <p>Venez nous découvrir</p>
      <a href="#main">
        <img class="arrow" src="../assets/arrow.png" alt="Flèche">
      </a>
      <img src="../assets/contact/image1.png" class="header_bg">
    </header>
    <div class="main" id="main">
      <section class="section_type">
        <div class="left_section">
          <h2>Nous rencontrer</h2>
          <p>Chaque année, le département <i>ouvre ses portes</i> au public afin de permettre de venir visiter les locaux, de discuter avec les étudiants et les enseignants. Cela permet donc a chacun de se faire <i>une idée claire</i> sur le BUT MMI.
            <br>
            <br>
            Les responsables du département sont évidemment disponibles pour vous renseigner et répondre à vos questions le reste de l’année.
          </p>
        </div>
        <img class="right_section" src="../assets/butmmi/image2.png" alt="vidéo présentation BUT MMI">
      </section>

      <section class="section_contact">
        <div class="left_section">
          <h2>Nous contacter</h2>
          <p>
            Vous souhaitez en savoir plus sur la formation ou simplement déposer une
            offre de projet ou/et stage.
            <br>
            <br>
            Ce <i>formulaire est là pour ca</i>.
          </p>
        </div>
        <form action=""></form>
      </section>

      <section class="section_type">
        <div class="left_section">
          <h2>Nous trouver</h2>
          <p></p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18662.28855977445!2d6.792027147370902!3d47.505679510590866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b3b0f76560084ad!2sD%C3%A9partement%20MMI!5e0!3m2!1sfr!2sfr!4v1637088277877!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Nous contacter'
    }
  }
}
</script>

<style scoped>
.main .section_contact{
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
.section_contact .left_section{
  width: 40%;
  height: auto;
}
.section_contact form{
  width: 60%;
  height: auto;
}
.section_contact::before{
  content: "<section>";
  position: absolute;
  top: -50px;
  font-size: 20px;
  color: var(--color-hover);
  -webkit-text-fill-color: #7A7068;
  font-family: "La Belle Aurore";
}
.section_contact::after{
  content: "<section/>";
  position: absolute;
  bottom: -50px;
  font-size: 20px;
  color: var(--color-hover);
  -webkit-text-fill-color: #7A7068;
  font-family: "La Belle Aurore";
}
</style>
