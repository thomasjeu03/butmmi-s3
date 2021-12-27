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
      <section v-for="section in filterPageBut" :key="section.id" class="section_type">
        <div class="left_section">
          <h2>{{section.acf.title}}</h2>
          <div>
            <p v-html="section.acf.paragraph" style="margin-bottom: 30px">{{section.acf.paragraph}}</p>
          </div>
          <a v-if="section.acf.fichier" style="margin-top: 80px; margin-bottom: 20px" :href="section.acf.fichier" class="CTA" download>
            Télécharger un document
          </a>
          <a v-if="section.acf.lien_externe" style="margin-bottom: 20px" :href="section.acf.lien_externe" class="CTA" target="_blank" rel="noopener">
            En savoir plus
          </a>
        </div>
        <img class="right_section" :src="section.acf.image.url" :alt="section.acf.image.title">
      </section>

      <section class="section_type liste_matière">
        <div class="all_section">
          <h2>Liste des matières</h2>
          <div class="carousel">
            <div class="liste_mat">
              <div v-tilt="{speed: 2500, max:  10, transition: true}" v-for="matiere in listeOrderByName" :key="matiere.id" class="matiere">
                <p style="font-weight: 500; font-size: 18px; color: #08EFD7; line-height: 20px; margin-bottom: 10px">{{matiere.acf.nom}}</p>
                <p style="font-size: 14px; line-height: 20px;">{{matiere.acf.description}}</p>
                <div class="mat_card">
                  <div class="competence">
                    <p v-for="competence in matiere.acf.competence">{{competence}}</p>
                  </div>
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
      liste:[],
      listeMat:[],
      typeSelected1: param.pageBut,
      leHeader:[],
      typeSelected: param.pageBut,
    }
  },

  computed:{
    filterPageBut: function(){
      return this.liste.filter(function(section){
        let typeSection = section.acf.page.map(function (page){return page.ID});
        return (typeSection.indexOf(this.typeSelected1) >= 0 ? this.typeSelected1 : '');
      }.bind(this))
    },
    listeOrderByName: function(){
      function compare(a, b) {
        if (a.acf.nom < b.acf.nom) return -1;
        if (a.acf.nom > b.acf.nom) return 1;
        return 0;
      }
      return this.listeMat.sort(compare);
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

    axios.get(param.host+"matiere?per_page=50")
      .then(response=>{
        this.listeMat = response.data;
      })
      .catch(error => console.log(error))

    axios.get(param.host+"section")
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
  },
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
  margin-top: 0;
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
}
.competence p{
  width: auto;
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
