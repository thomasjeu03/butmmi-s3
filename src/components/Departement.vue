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
<!--      <section class="section_type">
        <div class="left_section">
          <h2>Présentation du département</h2>
          <p>Le département MMI fête cette année ses <i>vingt-cinq ans</i>. A l’origine appelé SRC-Média,
            il forme chaque année près de <i>quatre-vingt étudiants</i> aux métiers du web à travers une formation <i>complète et polyvalente</i> de trois ans.
            <br>
            <br>
            A l’occasion des vingt-cinq ans, le DUT MMI devient un BUT afin de proposer une formation encore <i>plus professionnalisante</i>.
          </p>
        </div>
        <video controls preload="auto" class="right_section" src="../assets/departement/video.webm" alt="vidéo présentation BUT MMI"></video>
      </section>-->

      <section v-for="section in filterPageDep" :key="section.id" class="section_type">
        <div class="left_section">
          <h2>{{section.acf.title}}</h2>
          <p style="margin-bottom: 30px">{{section.acf.paragraph}}</p>
          <a v-if="section.acf.lien_externe" style="margin-bottom: 20px" :href="section.acf.lien_externe" class="CTA" target="_blank" rel="noopener">
            En découvrir plus
          </a>
        </div>
        <img class="right_section" :src="section.acf.image.url" :alt="section.acf.image.title">
        <video controls preload="auto" class="right_section" :src="section.acf.fichier" :alt="section.acf.fichier.title"></video>
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
            <div v-tilt="{speed: 2500, max:  10, transition: true}" v-for="prof in listeProf" :key="prof.id" class="teammate">
              <img :src="prof.acf.photo.url" :alt="prof.acf.nom">
              <div class="team_card">
                <p>{{prof.acf.prenom}} {{prof.acf.nom}}</p>
                <p class="role">{{prof.acf.role}}</p>
                <p class="role" style="line-height: 14px; margin-bottom: 8px">{{prof.acf.role_secondaire}}</p>
                <div class="links">
                  <a :href="prof.acf.lien1" rel="noopener" target="_blank"><img src="../assets/linkedin.svg" height="25" alt="Logo LinkedIn"></a>
                  <a :href="prof.acf.lien2" rel="noopener" target="_blank"><img src="../assets/instagram.svg" height="25" alt="Logo Instagram"></a>
                  <a :href="prof.acf.lien3" target="_blank"><img src="../assets/facebook.svg" height="25" alt="Logo Facebook"></a>
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
      liste:[],
      listeProf :[],
      typeSelected1: param.pageDep,
      leHeader:[],
      typeSelected: param.pageDep,
    }
  },

  computed:{
    filterPageDep: function(){
      return this.liste.filter(function(section){
        let typeSection = section.acf.page.map(function (page){return page.ID});
        return (typeSection.indexOf(this.typeSelected1) >= 0 ? this.typeSelected1 : '');
      }.bind(this))
    },
    listeHeader: function(){
      return this.leHeader.filter(function(header){
        let typeHeader = header.acf.page.map(function (page){return page.ID});
        return (typeHeader.indexOf(this.typeSelected) >= 0 ? this.typeSelected : '');
      }.bind(this))
    }
  },

  created(){
    axios.get(param.host+"header?per_page=50")
      .then(response=>{
        this.leHeader = response.data;
      })
      .catch(error => console.log(error))

    axios.get(param.host+"prof?per_page=50")
      .then(response=>{
        this.listeProf = response.data;
        function compare(a, b) {
          if (a.acf.id < b.acf.id) return -1;
          if (a.acf.id > b.acf.id) return 1;
          return 0;
        }
        return this.listeProf.sort(compare);
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
.carousel{
  width: 100%;
}
.liste_team::-webkit-scrollbar{
  height: 8px;
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
  width: 300px !important;
  height: 420px;
  position: relative;
  margin: 20px 120px 40px 0;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 18px 0 10px 10px;
  background: linear-gradient( -45deg, rgba(89, 156, 149, 0.2), rgba(122, 112, 104, 0.2));
  z-index: 100;
  backdrop-filter: blur(2px);
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
  height: 160px;
  padding: 15px 20px;
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
/*.team_card:hover{
  cursor: grab;
}
.team_card:active{
  cursor: grabbing;
}*/

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
@media only screen and (max-width: 1080px){
  .section_team{
    padding: 0 30px;
  }
}
@media only screen and (max-width: 780px){
  .section_type::after, .section_team::after{
    content: "<section/>";
    position: absolute;
    bottom: -50px;
    font-size: 16px;
  }
  .liste_team{
    padding: 0;
  }
  .teammate{
    width: 240px !important;
    height: 370px;
    position: relative;
    margin: 20px 30px 40px 0;
    padding: 20px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 18px 0 10px 10px;
    background: linear-gradient( -45deg, rgba(89, 156, 149, 0.2), rgba(122, 112, 104, 0.2));
    z-index: 100;
    backdrop-filter: blur(2px);
    box-shadow: 3px 3px 34px rgba(18, 20, 20, 0.2);
  }
  .section_team img{
    width: 90px;
    height: auto;
    padding: 0;
    position: relative;
  }
  .team_card img{
    width: 25px;
    height: 25px;
    padding: 0;
    border-radius: 0%;
    box-shadow: none;
  }
}
</style>
