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
        <form class="contact-form" action="" method="POST">
          <div class="small_input">
            <label for="name">Nom</label>
            <input type="text" id="name" name="name" placeholder="Petit">
          </div>
          <div class="small_input">
            <label for="surname">Prénom</label>
            <input type="text" id="surname" name="surname" placeholder="Étienne">
          </div>
          <div class="small_input">
            <label for="society">Nom d'entreprise</label>
            <input type="text" id="society" name="society" placeholder="Weeby">
          </div>
          <div class="small_input mail">
            <label for="mail">E-mail</label>
            <input type="email" id="mail" name="mail" placeholder="b@man.fr" required>
          </div>
          <div class="small_input">
            <label for="tel">Numéro de téléphone</label>
            <input type="tel" id="tel" name="tel" placeholder="06 78 91 02 34">
          </div>
          <div class="small_input">
            <label class="linkList" id="label_file" for="file"><span>Choisir un fichier</span></label>
            <input type="file" id="file" name="file">
          </div>
          <div class="large_input">
            <label for="msg">Votre message</label>
            <textarea name="message" id="msg" placeholder="Pourquoi nous contacter ?" required></textarea>
          </div>
          <div style="content: '*'; font-size: 12px; color: var(--color-tonic); margin-right: 5px;"><span style="font-size: 20px">*</span> Champs obligatoires</div>
          <button class="button linkList" type="submit" name="submit"><span>Envoyer</span></button>
        </form>
      </section>

      <section class="section_type">
        <div class="left_section">
          <h2>Nous trouver</h2>
          <div class="card_contact">
            <p style="font-size: 18px; line-height: 30px; font-weight: bold">DÉPARTEMENT MÉTIERS DU MULTIMÉDIA
              & DE L'INTERNET DE MONTBÉLIARD </p>
              <br>
              <br>
            <p>
              4, place Tharradin<br>
              25 200 Montbéliard<br>
              Tél. <i>+33 (0)3 81 99 47 34</i><br>
              Mail DUT MMI : dut-mmi-montbeliard@univ-fcomte.fr
            </p>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18662.28855977445!2d6.792027147370902!3d47.505679510590866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b3b0f76560084ad!2sD%C3%A9partement%20MMI!5e0!3m2!1sfr!2sfr!4v1637088277877!5m2!1sfr!2sfr"
                width="50%" height="400" style="border-radius: 5px; border: 0; box-shadow: 3px 3px 34px rgba(18, 20, 20, 0.2);" allowfullscreen="" loading="lazy"></iframe>
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
.section_contact form {
  width: 60%;
  height: auto;
  margin-left: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
label{
  font-size: 15px;
  font-family: Gotham;
  width: auto;
  margin-bottom: 10px;
}
.small_input{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 30%;
  min-width: 200px;
  height: 70px;
  margin-bottom: 40px;
}
.large_input{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin-bottom: 35px;
}
.large_input textarea{
  height: 100px;
}
input, textarea{
  background-color: rgba(0,0,0,0);
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid var(--color-tonic);
  outline: none;
  color: var(--color-white);
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-family: Gotham;
  transition: 0.4s ease-in-out;
}
input[type="file"]{
  display: none;
}
#label_file{
  background-color: rgba(0,0,0,0);
  border: 1px solid var(--color-tonic);
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 0;
  transform: translateY(15px);
  cursor: pointer;
  transition: 0.4s ease-in-out;
}
#label_file:hover{
  border: 1px solid var(--color-white);
  color: var(--color-tonic);
  box-shadow: 1px 1px 5px var(--color-shadow);
  letter-spacing: 2px;
  text-shadow: 0 0 3px var(--color-tonic);
}

input:hover, textarea:hover{
  border-bottom: 1px solid var(--color-hover);
}
input:focus, textarea:focus{
  border-bottom: 1px solid var(--color-white);
}
.mail , .large_input{
  position: relative;
}
.mail label:before , .large_input label:before{
  content: "*";
  font-size: 20px;
  position: absolute;
  color: var(--color-tonic);
  top: 2px;
  left: -15px;
  margin-right: 5px;
}
button{
  background-color: rgba(0,0,0,0);
  border: 1px solid var(--color-tonic);
  color: var(--color-white);
  padding: 7px 45px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  text-shadow: 0 0 2px rgba(0,0,0,0);
}
button:hover{
  border: 1px solid var(--color-white);
  color: var(--color-tonic);
  box-shadow: 1px 1px 5px var(--color-shadow);
  letter-spacing: 2px;
  text-shadow: 0 0 3px var(--color-tonic);
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
.card_contact{
  width: 90%;
  height: auto;
  position: relative;
  padding: 25px 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: linear-gradient( -45deg, rgba(89, 156, 149, 0.2), rgba(122, 112, 104, 0.2));
  z-index: 100;
  backdrop-filter: blur(2px);
  box-shadow: 3px 3px 34px rgba(18, 20, 20, 0.2);
}
.card_contact i{
  font-style: normal;
}
.card_contact p:before, .card_contact p:after{
  content: '';
}
</style>
