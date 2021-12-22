<template>
  <div>
    <header>
      <h1>Projets Étudiant</h1>
      <p>Un pas vers le monde professionnel</p>
      <a href="#main">
        <img class="arrow" src="../assets/arrow.png" alt="Flèche">
      </a>
      <img src="../assets/projets/image1.jpg" class="header_bg">
    </header>
    <div class="main" id="main">
      <section class="section_type">
        <div class="left_section">
          <h2>Projets Web</h2>
        </div>
        <div class="liste_projets">
          <div v-for="projet in listeWeb" :key="projet.id"  class="projet_type">
            <div :style='{ backgroundImage: `url(${projet.acf.miniature_projet.url})`}' class="img"></div>
            <h3>{{ projet.acf.nom_projet }}</h3>
            <br>
            <i>{{ projet.acf.date_projet }}</i>
            <br>
            <p>{{ projet.acf.description_projet }}</p>
            <br>
            <p>{{ projet.acf.createur_projet }}</p>
            <br>
            <a :href="projet.acf.lien_projet" target="_blank" rel="noopener" class="discover_project">Découvrir le projet</a>
          </div>
        </div>
      </section>

      <section class="section_type">
        <div class="left_section">
          <h2>Réalisations Audiovisuelles</h2>
        </div>
        <h4>Projets pédagogiques</h4>
        <div class="liste_projets">
          <div v-for="projet in listeAVPeda" :key="projet.id"  class="projet_type">
            <div :style='{ backgroundImage: `url(${projet.acf.miniature_projet.url})`}' class="img"></div>
            <h3>{{ projet.acf.nom_projet }}</h3>
            <br>
            <i>{{ projet.acf.date_projet }}</i>
            <br>
            <p>{{ projet.acf.description_projet }}</p>
            <br>
            <p>{{ projet.acf.createur_projet }}</p>
            <br>
            <a :href="projet.acf.lien_projet" target="_blank" rel="noopener" class="discover_project">Découvrir le projet</a>
          </div>
        </div>
        <h4>Projets d'étudiants</h4>
        <div class="liste_projets">
          <div v-for="projet in listeAVEtudiant" :key="projet.id"  class="projet_type">
            <div :style='{ backgroundImage: `url(${projet.acf.miniature_projet.url})`}' class="img"></div>
            <h3>{{ projet.acf.nom_projet }}</h3>
            <br>
            <i>{{ projet.acf.date_projet }}</i>
            <br>
            <p>{{ projet.acf.description_projet }}</p>
            <br>
            <p>{{ projet.acf.createur_projet }}</p>
            <br>
            <a :href="projet.acf.lien_projet" target="_blank" rel="noopener" class="discover_project">Découvrir le projet</a>
          </div>
        </div>
      </section>

      <section class="section_type">
        <div class="left_section">
          <h2>Créations graphique</h2>
        </div>
        <div class="liste_projets">
          <div v-for="projet in listeGraphique" :key="projet.id"  class="projet_type">
            <div :style='{ backgroundImage: `url(${projet.acf.miniature_projet.url})`}' class="img"></div>
            <h3>{{ projet.acf.nom_projet }}</h3>
            <br>
<!--            <i v-for="type_projet in projet.acf.type_projet" :key="type_projet.id">
              {{ type_projet.post_name }}
            </i>
            <br>-->
            <i>{{ projet.acf.date_projet }}</i>
            <br>
            <p>{{ projet.acf.description_projet }}</p>
            <br>
            <p>{{ projet.acf.createur_projet }}</p>
            <br>
            <a :href="projet.acf.lien_projet" target="_blank" rel="noopener" class="discover_project">Découvrir le projet</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import param from '@/param/param'

export default {
  name: 'Projets',
  data () {
    return {
      liste:[],
      typeSelected1: param.typeWeb,
      typeSelected2: param.typeAVPeda,
      typeSelected3: param.typeAVEtudiants,
      typeSelected4: param.typeGraphique
    }
  },

  computed:{
    listeWeb: function(){
      return this.liste.filter(function(projet){
        let typeProjet = projet.acf.type_projet.map(function (type){return type.ID});
        return (typeProjet.indexOf(this.typeSelected1) >= 0 ? this.typeSelected1 : '');
      }.bind(this))
    },
    listeAVPeda: function(){
      return this.liste.filter(function(projet){
        let typeProjet = projet.acf.type_projet.map(function (type){return type.ID});
        return (typeProjet.indexOf(this.typeSelected2) >= 0 ? this.typeSelected2 : '');
      }.bind(this))
    },
    listeAVEtudiant: function(){
      return this.liste.filter(function(projet){
        let typeProjet = projet.acf.type_projet.map(function (type){return type.ID});
        return (typeProjet.indexOf(this.typeSelected3) >= 0 ? this.typeSelected3 : '');
      }.bind(this))
    },
    listeGraphique: function(){
      return this.liste.filter(function(projet){
        let typeProjet = projet.acf.type_projet.map(function (type){return type.ID});
        return (typeProjet.indexOf(this.typeSelected4) >= 0 ? this.typeSelected4 : '');
      }.bind(this))
    }
  },

  created(){
    // Liste des participants
    axios.get(param.host+"projet")
      .then(response=>{
        this.liste = response.data;
      })
      .catch(error => console.log(error))
  }
};
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
  justify-content: space-between;
}
.projet_type{
  height: auto;
  width: 30%;
  max-width: 100%;
  min-width: 300px;
  display: flex;
  margin: 20px 20px 40px 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: 0.4s ease-in-out;
}
.projet_type:hover{
  backdrop-filter: blur(2px);
  border-radius: 10px;
}
.projet_type a{
  border: 1px solid var(--color-tonic);
  padding: 10px 24px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin-top: 10px;
  color: var(--color-white);
  background-color: rgba(0,0,0,0);
  cursor: none;
  transition: 0.4s ease-in-out;
  text-shadow: 0 0 3px rgba(0,0,0,0);
}
.projet_type a:hover{
  border: 1px solid var(--color-white);
  color: var(--color-tonic);
  box-shadow: 1px 1px 5px var(--color-shadow);
  text-shadow: 0 0 3px var(--color-tonic);
}
.img{
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 15px;
  transition: 0.4s ease-in-out;
  background-position: center;
  box-shadow: 3px 3px 34px var(--color-shadow);
}
@media only screen and (max-width: 1599px){
  .projet_type{
    width: 45%;
    margin: 20px 20px 40px 20px;
  }
}
@media only screen and (max-width: 1199px){
  .projet_type{
    width: 100%;
    margin: 20px 0 40px 0;
  }
}
</style>

