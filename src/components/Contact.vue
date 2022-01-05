<template>
  <div>
    <header v-for="header in listeHeader" :key="header.id" >
      <h1>{{ header.acf.title }}</h1>
      <p>{{ header.acf.tagline }}</p>
      <a href="#main">
        <img class="arrow" src="../assets/arrow.png" alt="Flèche">
      </a>
      <div :style='{ backgroundImage: `url(${header.acf.image.url})`}' class="header_bg"></div>
    </header>
    <div class="main" id="main">
      <section v-for="section in filterPageContact" :key="section.id" class="section_type">
        <div class="left_section">
          <h2>{{section.acf.title}}</h2>
          <p v-html="section.acf.paragraph" style="margin-bottom: 30px">{{section.acf.paragraph}}</p>
          <a v-if="section.acf.fichier" style="margin-top: 80px; margin-bottom: 20px" :href="section.acf.fichier" class="CTA" download>
            Télécharger un document
          </a>
          <a v-if="section.acf.lien_externe" style="margin-bottom: 20px" :href="section.acf.lien_externe" class="CTA" target="_blank" rel="noopener">
            En savoir plus
          </a>
        </div>
        <img class="right_section" :src="section.acf.image.url" :alt="section.acf.image.title">
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
        <form class="contact-form" @submit="checkForm">
          <div class="small_input">
            <label for="surname">Prénom</label>
            <input v-model="form.first_name" type="text" id="surname" name="surname" placeholder="Étienne">
          </div>
          <div class="small_input">
            <label for="name">Nom</label>
            <input v-model="form.name" type="text" id="name" name="name" placeholder="Petit">
          </div>
          <div class="small_input">
            <label for="society">Nom d'entreprise</label>
            <input v-model="form.society" type="text" id="society" name="society" placeholder="Corp.">
          </div>
          <div class="small_input mail">
            <label for="mail">E-mail</label>
            <input
              v-model="form.email"
              type="email"
              id="mail"
              name="mail"
              placeholder="b@man.fr">
          </div>
          <div class="small_input">
            <label for="tel">Numéro de téléphone</label>
            <input v-model="form.tel" type="tel" id="tel" name="tel" placeholder="06 12 34 56 78">
          </div>
          <div class="small_input">
            <label for="file">Envoyer un fichier</label>
            <input type="file" @change="uploadFile" id="file" name="file">
          </div>
          <div class="large_input">
            <label for="msg">Votre message</label>
            <textarea
              v-model="form.message"
              name="message"
              id="msg"
              placeholder="Pourquoi nous contacter ?">
            </textarea>
          </div>
          <div style="content: '*'; font-size: 12px; color: var(--color-tonic); margin-right: 5px; margin-bottom: 20px"><span style="font-size: 20px; ">*</span> Champs obligatoires</div>
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;" v-if="errors.length" >
              <p v-for="(error, index) in errors" :key="index" class="error">{{ error }}</p>
            </div>
            <p id="sent" class="error invisible" style="color: white;">Votre message à bien été envoyé</p>
          </div>
          <button class="button linkList" type="submit" name="submit" value="Submit"><span>Envoyer</span></button>
        </form>
      </section>
      <section class="section_type section_carte">
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
              Mail BUT MMI : but-mmi-montbeliard@univ-fcomte.fr
            </p>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18662.28855977445!2d6.792027147370902!3d47.505679510590866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b3b0f76560084ad!2sD%C3%A9partement%20MMI!5e0!3m2!1sfr!2sfr!4v1637088277877!5m2!1sfr!2sfr"
               style="border-radius: 5px; border: 0; box-shadow: 3px 3px 34px rgba(18, 20, 20, 0.2);" allowfullscreen="" loading="lazy"></iframe>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import param from '@/param/param'

export default {
  name: 'Contact',
  data() {
    return {
      sent: false,
      form :{
        first_name: null,
        name: null,
        society: null,
        email: null,
        tel: null,
        message: null
      },
      errors: [],
      liste:[],
      image: '',
      typeSelected1: param.pageContact,
      leHeader:[],
    };
  },

  methods: {
    uploadFile(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkForm: function (e) {
      e.preventDefault();
      this.errors = [];
      if (!this.form.email) {
        this.errors.push("Entrez une adresse email");
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push("Entrez une adresse email valide");
      }
      if (!this.form.message) {
        this.errors.push("Entrez un message");
      }

      if (!this.errors.length) {
        var bodyFormData = new FormData();
        bodyFormData.set("your-surname", this.form.first_name);
        bodyFormData.set("your-name", this.form.name);
        bodyFormData.set("your-society", this.form.society);
        bodyFormData.set("your-mail", this.form.email);
        bodyFormData.set("your-tel", this.form.tel);
        bodyFormData.set("your-file", this.image);
        bodyFormData.set("your-msg", this.form.message);

        axios({
          method: "post",
          url:
            "https://butmmi.thomasjeu.fr/wp-json/contact-form-7/v1/contact-forms/28922/feedback",
          data: bodyFormData,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(function (response) {
            console.log(response);
            /*alert('Votre message à bien été envoyé');*/
            window.location.href = "https://butmmi.thomasjeu.fr";
          })
          .catch(function (response) {
            console.log(response);
          });
      }
    },
  },

  computed:{
    filterPageContact: function(){
      return this.liste.filter(function(section){
        let typeSection = section.acf.page.map(function (page){return page.ID});
        return (typeSection.indexOf(this.typeSelected1) >= 0 ? this.typeSelected1 : '');
      }.bind(this))
    },
    listeHeader: function(){
      return this.leHeader.filter(function(header){
        let typeHeader = header.acf.page.map(function (page){return page.ID});
        return (typeHeader.indexOf(this.typeSelected1) >= 0 ? this.typeSelected1 : '');
      }.bind(this))
    }
  },

  created(){
    axios.get(param.host+"header?per_page=50")
      .then(response=>{
        this.leHeader = response.data;
      })
      .catch(error => console.log(error))

    axios.get(param.host+"section?per_page=50")
      .then(response=>{
        this.liste = response.data;
        function compare(a, b) {
          if (a.acf.id < b.acf.id) return -1;
          if (a.acf.id > b.acf.id) return 1;
          return 0;
        }
        return this.liste.sort(compare);
      })
      .catch(error => console.log(error))
  }
};
</script>

<style scoped>
.invisible{
  display: none;
}
.error{
  color: #ff4d4d;
  font-style: italic;
  font-size: 14px;
}
.error:before, .error:after{
  content: '';
}
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
  width: 28%;
  min-width: 200px;
  height: 70px;
  margin: 0 0 40px 0;
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
  height: 70px;
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
  margin-top: 0;
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
.section_carte{
  align-items: flex-end;
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
iframe{
  width: 50%;
  height: 350px;
}
@media only screen and (max-width: 1439px){
  .main .section_contact{
    width: 100%;
    position: relative;
    padding: 0 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .section_contact .left_section{
    width: 100%;
    height: auto;
    margin-bottom: 40px;
  }
  .section_contact form {
    width: 100%;
    margin-left: 0;
  }
}
@media only screen and (max-width: 1080px){
  .section_carte{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card_contact{
    width: 350px;
    min-width: 100%;
    height: auto;
    margin-bottom: 30px;
    align-items: flex-start;
  }iframe{
     width: 100%;
     height: 350px;
  margin-bottom: 15px;
   }
  .section_contact::before{
    content: "<section>";
    position: absolute;
    top: -50px;
    font-size: 16px;
  }
  .section_contact::after{
    content: "<section/>";
    position: absolute;
    bottom: -80px;
    font-size: 16px;
  }
}
@media only screen and (max-width: 1080px){
  .main .section_contact{
    width: 100%;
    position: relative;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .section_contact::before{
    content: "<section>";
    position: absolute;
    left: 100px;
    top: -50px;
    font-size: 16px;
  }
  .section_contact::after{
    content: "<section/>";
    position: absolute;
    bottom: -50px;
    left: 100px;
    font-size: 16px;
  }
}
@media only screen and (max-width: 780px){
  .section_contact::before{
    content: "<section>";
    position: absolute;
    left: 50px;
    top: -50px;
    font-size: 16px;
  }
  .section_contact::after{
    content: "<section/>";
    position: absolute;
    bottom: -50px;
    left: 50px;
    font-size: 16px;
  }
  .section_contact form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }
  .small_input{
    width: 100%;
    min-width: 200px;
    height: 70px;
    margin: 0 0 40px 0;
  }
  button{
    margin-top: 20px;
    padding: 7px 45px;
    width: 100%;
  }
}
</style>
