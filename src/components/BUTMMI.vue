<template>
  <div>
    <header>
      <h1>BUT MMI</h1>
      <p>Métiers du Multimédia & de l'Internet</p>
      <a href="#main">
        <img class="arrow" src="../assets/arrow.png" alt="Flèche">
      </a>
      <img src="../assets/butmmi/image1.jpg" class="header_bg">
    </header>
    <div class="main" id="main">
      <section class="section_type">
            <div class="left_section">
<!--              aa-->
                <h2>Qu'est-ce que le BUT ?</h2>
              <p>Le <i>Bachelor Universitaire Technologique</i> (BUT) remplace le Diplôme Universitaire Technologique (DUT).
                <br>
                <br>
                C’est une formation qui se déroule en <i>3 ans</i> (au lieu de 2 pour le DUT) qui permet donc d’obtenir le grade licence ainsi qu’une meilleure reconnaissance.
                <br>
                <br>
                Le BUT va proposer jusqu’à 10 semaines de stage en deuxième année et <i>16 semaines de stages</i> en troisième année. Il sera également possible d'effectuer ces deux années en alternance. La charge de travail sera mieux répartie qu’en DUT. Enfin, le BUT promet <i>une meilleure insertion professionnelle</i>.
              </p>
            </div>
        <img class="right_section" src="../assets/butmmi/image2.png" alt="vidéo présentation BUT MMI">
      </section>
      <section class="section_type">
        <div class="left_section">
          <h2>Pourquoi choisir le BUT MMI ?</h2>
          <p>Les <i>Métiers du Multimédia et de l’Internet</i> sont omniprésents : de la conception et la réalisation de sites web, à la gestion de la communauté, en passant par la production de contenu. La formation MMI est dans l’aire du temps et forme ses étudiants a des métiers d’aujourd’hui.
            <br>
            <br>
            Le BUT se voit également accueillir les SAÉ. <i>Les Situations d'Apprentissage et d'Évaluation</i> sont des journées durant lesquelles les étudiants doivent réaliser un projet complet sur une période de quelques jours.
            <br>
            <br>
            Ce nouveau module permet de plonger les étudiants en situation concrète avec l'aide des enseignants pour les aiguiller tout au long de ces SAÉ.
          </p>
        </div>
        <img class="right_section" src="../assets/butmmi/image2.png" alt="vidéo présentation BUT MMI">
      </section>
      <section class="section_type">
        <div class="left_section">
          <h2>Que faire après le BUT MMI ?</h2>
          <p>La formation pluridisciplinaire que propose le BUT MMI permet d’accéder à de <i>nombreux domaines dans le milieu du web</i> en commençant par la gestion de projet jusqu’au community management en passant par le développement front-end.
            <br>
            <br>
            Du fait qu’elle soit <i>dans l’air du temps</i>, le BUT MMI garanti à tous les bacheliers qu’ils sont garantis de trouver <i>des métiers qui leur plaisent</i>, dans un domaine plus que présent dans la société actuelle.
            <br>
            <br>
            Voici une liste non exhaustive <i>des métiers envisageables après le DUT MMI</i> (de niveau bac +3, bac +4, bac +5) :
            <br>
            <br>
            -	Administrateur réseaux<br>
            -	Chargé de communication<br>
            -	Chargé de référencement<br>
            -	Chef de projet<br>
            -	Community manager<br>
            -	Infographiste<br>
            -	Intégrateur, développeur web<br>
            -	Monteur vidéo<br>
            -	Motion designer<br>
            -	UX / UI designer<br>
            -	Rédacteur web<br>
            -	Webmarketer<br>
            …
          </p>
        </div>
        <img class="right_section" src="../assets/butmmi/image2.png" alt="vidéo présentation BUT MMI">
      </section>
      <section class="section_type liste_matière">
        <div class="all_section">
          <h2>Que comporte le programme ?</h2>
            <div>
              <p>° Comprendre les écosystèmes, les besoins des utilisateurs et les dispositifs de communication numérique<br>
                <br>
                ° Concevoir une réponse stratégique à une problématique complexe<br>
                <br>
                ° Exprimer un message avec les médias numériques pour informer et communiquer<br>
                <br>
                ° Développer pour le web et les médias numériques<br>
                <br>
                ° Entreprendre dans le secteur du numérique
              </p>
              <img class="right_section" src="../assets/butmmi/image2.png" alt="vidéo présentation BUT MMI">
            </div><div class="carousel">
          <div class="liste_mat">
            <div v-tilt="{speed: 2500, max:  10, transition: true}" v-for="matiere in listeOrderByName" :key="matiere.id" class="matiere">
              <p style="font-weight: 500; font-size: 18px; color: #08EFD7; line-height: 20px; margin-bottom: 10px">{{matiere.acf.nom}}</p>
              <p style="font-size: 14px; line-height: 20px;">{{matiere.acf.description}}</p>
              <div class="mat_card">
                <p class="competence">{{matiere.acf.competence}}</p>
              </div>
            </div>
          </div>
        </div>
          </div>
      </section>
    </div>
  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'BUTMMI',
  data () {
    return {
      liste:[]
    }
  },

  computed:{
    listeOrderByName: function(){
      function compare(a, b) {
        if (a.acf.nom < b.acf.nom) return -1;
        if (a.acf.nom > b.acf.nom) return 1;
        return 0;
      }
      return this.liste.sort(compare);
    }
  },

  created(){
    axios.get(param.host+"matiere?per_page=25")
      .then(response=>{
        this.liste = response.data;
      })
      .catch(error => console.log(error))
  }
};
</script>

<style scoped>
.liste_mat p:before, .liste_mat p:after{
  content: '';
}
.carousel{
  width: 100%;
}
.liste_mat::-webkit-scrollbar{
  height: 8px;
}
.liste_mat{
  width: 100%;
  border-radius: 18px ;
  margin-top: 40px;
  padding: 0 50px;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
.matiere{
  width: 300px !important;
  height: auto;
  position: relative;
  margin: 20px 120px 40px 0;
  padding: 20px 20px 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 18px 0 10px 10px;
  background: linear-gradient( -45deg, rgba(89, 156, 149, 0.2), rgba(122, 112, 104, 0.2));
  z-index: 100;
  backdrop-filter: blur(2px);
  box-shadow: 3px 3px 34px rgba(18, 20, 20, 0.2);
  text-align: center;
}
.matiere p{
  width: 300px;
  padding: 0 20px;
}
.mat_card p::before{
  content: '';
}
.mat_card p::after{
  content: '';
}
.mat_card{
  height: auto;
  padding: 12px 20px;
  background-color: rgba(11, 12, 13, 0.25);
  border-radius: 0 10px 10px 10px;
  width: 100%;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  backdrop-filter: blur(10px);
  display: flex;
  z-index: 120;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.competence{
  font-size: 14px;
  font-style: italic;
}
@media only screen and (max-width: 1080px) {
  .main {
    align-items: center;
    padding: 0;
  }
}
@media only screen and (max-width: 780px){
  .section_type::after{
    content: "<section/>";
    position: absolute;
    bottom: -50px;
    font-size: 16px;
  }
  .liste_mat{
    padding: 0 50px;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .matiere{
    width: 300px;
    height: auto;
    position: relative;
    margin: 20px 30px 40px 0;
  }
}
</style>
