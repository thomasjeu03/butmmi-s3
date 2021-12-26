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
          <h2>Défi 24h</h2>
          <p>Le principe de ce défi organisé par une équipe d’étudiant est de réaliser <i>une création multimédia</i> autour d’un sujet imposé dans une <i>durée de 24h</i>. Tout au long de ces vingt-quatre heures de défi inter-promo, des mini jeux viendront rendre les choses encore plus intéressantes. Le défi prend place dans les locaux du département, ce qui viendra garantir bonne humeur et barres de rire !</p>
        </div>
        <img class="right_section" src="../assets/butmmi/image2.png" alt="vidéo présentation BUT MMI">
      </section>
      <section class="section_type">
        <div class="left_section">
          <h2>Le Frigo</h2>
          <p>
            Le Frigo est le <i>magazine universitaire du campus de Montbéliard</i>. Il est réalisé dans nos locaux dans le cadre d’un module d’enseignement libre (MEL). Il est composé de trois pôles distincts : la rédaction, le maquettage et la vidéo.
            <br>
            <br>
            Vous y trouverez des articles sur la vie du campus, sur ce qu’il se passe dans Montbéliard et ses alentours ou encore quelques conseils d’étudiants. Depuis cette année, le frigo est également décliné sous la forme d'une chaîne Youtube : Frigo TV.
          </p>
          <br>
          <br>
          <br>
          <a href="src/assets/pdf/frigo.pdf" class="CTA" download>
            Télécharger la dernière édition
          </a>
          <br>
        </div>
        <br>
        <img class="right_section" src="../assets/extras/frigo.png" alt="frigo">
      </section>-->

      <section v-for="section in filterPageExtras" :key="section.id" class="section_type">
        <div class="left_section">
          <h2>{{section.acf.title}}</h2>
          <p style="margin-bottom: 30px">{{section.acf.paragraph}}</p>
          <a v-if="section.acf.fichier" style="margin-top: 80px; margin-bottom: 20px" :href="section.acf.fichier" class="CTA" download>
            Télécharger un document
          </a>
          <a v-if="section.acf.lien_externe" style="margin-bottom: 20px" :href="section.acf.lien_externe" class="CTA" target="_blank" rel="noopener">
            En savoir plus
          </a>
        </div>
        <img class="right_section" :src="section.acf.image.url" :alt="section.acf.image.title">
      </section>
    </div>
  </div>
</template>

<script>

import param from '@/param/param'

export default {
  name: 'Extra',
  data () {
    return {
      liste:[],
      typeSelected1: param.pageExtras,
      leHeader:[],
    }
  },

  computed:{
    filterPageExtras: function(){
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

}
</script>

<style scoped>
@media only screen and (max-width: 780px){
  .CTA{
    width: 100%;
  }
}
</style>
