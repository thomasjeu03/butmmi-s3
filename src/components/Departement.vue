<template>
  <div>
    <header>
      <h1>Le Département</h1>
      <p>Un espace rempli de créativité</p>
      <a href="#main">
        <img class="arrow" src="../assets/arrow.png" alt="Flèche">
      </a>
      <img src="../assets/departement/image1.png" class="header_bg">
    </header>
    <div class="main" id="main">
      <section class="section_type">
        <div class="left_section">
          <h2>Présentation du département</h2>
          <p>Le département MMI fête cette année ses <i>vingt-cinq ans</i>. A l’origine appelé SRC-Média,
            il forme chaque année près de <i>quatre-vingt étudiants</i> aux métiers du web à travers une formation <i>complète et polyvalente</i> de trois ans.
            <br>
            <br>
            A l’occasion des vingt-cinq ans, le DUT MMI devient un BUT afin de proposer une formation encore <i>plus professionnalisante</i>.
          </p>
        </div>
        <img class="right_section" src="../assets/butmmi/image2.png" alt="vidéo présentation BUT MMI">
      </section>
      <section class="section_team">
        <div class="left_section">
          <h2>L'équipe pédagogique</h2>
          <p>La <i>diversité</i> et la <i>complémentarité</i> de l’équipe enseignante va permettre aux étudiants de recevoir un enseignement de qualité.
            <br>
            <br>
            En plus des enseignants permanents l’équipe se voit accueillir des intervenants professionnels, des enseignants chercheurs et des jeunes chercheurs de <i>l’université de Franche Comté</i>.
          </p>
        </div>
        <div class="carousel">
          <div class="liste_team">
            <div v-for="participant in listeOrderByName" :key="participant.id" class="teammate">
              <img src="../assets/departement/team/image1.png" alt="portrait" width="115">
              <div class="team_card">
                <p>{{participant.acf.prenom}} {{participant.acf.nom}}</p>
                <p class="role">{{participant.acf.nationalite[0].post_title}}</p>
                <div class="links">
                  <a href="https://www.linkedin.com/in/alain-lamboux-durand-719b0b181/" rel="noopener" target="_blank"><img src="../assets/linkedin.svg" height="25" alt="Logo LinkedIn"></a>
                  <a href="https://www.instagram.com/mmi_montbeliard/?hl=en" rel="noopener" target="_blank"><img src="../assets/instagram.svg" height="25" alt="Logo Instagram"></a>
                  <a href="https://www.facebook.com/mmimontbeliard" rel="noopener" target="_blank"><img src="../assets/facebook.svg" height="25" alt="Logo Facebook"></a>
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
  name: 'Departement',
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
    // Liste des participants
    axios.get(param.host+"participant?per_page=7")
      .then(response=>{
        console.log("Reponse", response);
        // Récupération de la liste des participants
        this.liste = response.data;
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>
.liste_team::-webkit-scrollbar{
  height: 8px;
}
.carousel{
  width: 100%;
}
.section_type::after, .section_team::after{
  content: "<section/>";
  position: absolute;
  bottom: -50px;
  font-size: 20px;
  color: var(--color-hover);
  -webkit-text-fill-color: #7A7068;
  font-family: "La Belle Aurore";
}
.liste_team{
  width: 100%;
  border-radius: 18px ;
  margin-top: 40px;
  padding: 0 50px;
  height: auto;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.teammate{
  width: 250px !important;
  height: 380px;
  position: relative;
  margin: 20px 120px 40px 0;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 18px 0 10px 10px;
  background: linear-gradient( -45deg, rgba(89, 156, 149, 0.5), rgba(122, 112, 104, 0.5));
  z-index: 100;
  backdrop-filter: blur(5px);
  box-shadow: 3px 3px 34px rgba(18, 20, 20, 0.2);
}
.section_team img{
   width: 115px;
   height: auto;
   padding: 0;
   position: relative;
}
.team_card p::before{
  content: '';
}
.team_card p::after{
  content: '';
}
.team_card{
  height: 128px;
  padding: 15px 20px;
  background-color: rgba(11, 12, 13, 0.25);
  border-radius: 0 10px 10px 10px;
  width: 235px;
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
.role{
  font-size: 14px;
}
.team_card img{
  width: 25px;
  height: 25px;
  padding: 0;
  border-radius: 0%;
  box-shadow: none;
}
.links{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

</style>
