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
          <h2>Le départ en stage</h2>
          <p>Le BUT propose aux étudiants d’effectuer un stage de <i>dix semaines minimum</i> en deuxième année et ... semaines en troisième année. Il est également possible de faire sa … année en <i>alternance en entreprise</i>.
            <br>
            <br>
            Il est dorénavant possible de faire son stage et son alternance <i>à l’étranger</i> afin de permettre une meilleure ouverture vers le monde.
          </p>
        </div>
        <img class="right_section" src="../assets/butmmi/image2.png" alt="vidéo présentation BUT MMI">
      </section>

      <section class="section_type">
        <div class="left_section">
          <h2>L'échange au Canada</h2>
          <p>Chaque année, une dizaine d’étudiants se verront proposés d’effectuer un ou deux semestre d'étude au Canada. Le département a un partenariat avec deux CEGEP (type d’établissement universitaire au Canada) afin de proposer un échange de 6 à 12 mois à <i>Montréal</i> et <i>Matane</i>.
            <br>
            <br>
            Le <i>CEGEP de Montréal</i> accueille les étudiants pour une formation orientée sur le <i>print</i>. <br>
            <br>
            Tandis que le <i>CEGEP de Matane</i> propose une formation plus orientée sur l’<i>intégration multimédia</i>.
          </p>
        </div>
        <img class="right_section" src="../assets/butmmi/image2.png" alt="vidéo présentation BUT MMI">
      </section>

      <section class="section_type">
        <div class="left_section">
          <h2>Le séjour à Barcelone</h2>
          <p>Le département propose chaque année à ses étudiants de partir à <i>Barcelone</i> à l'occasion du <i>festival culturel OFFF</i>, le festival international d'art digital.
            <br>
            <br>
            Ce séjour permet à nos étudiant d'élargir leur <i>culture artistique</i> en découvrant la richesse culturelle offerte par cette ville ainsi que ce festival.
          </p>
        </div>
        <img style="transform: scale(0.5)" class="right_section" src="../assets/mobilite/festival_off.png" alt="vidéo présentation BUT MMI">
      </section>
      -->


      <section v-for="section in filterPageMobilite" :key="section.id" class="section_type">
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
  name: 'Mobilite',
  data () {
    return {
      liste:[],
      typeSelected1: param.pageMobilite,
      leHeader:[],
      typeSelected: param.pageMobilite,
    }
  },

  computed:{
    filterPageMobilite: function(){
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

</style>

