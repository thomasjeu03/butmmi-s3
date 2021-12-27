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
      <section v-for="section in filterPagePro" :key="section.id" class="section_type">
        <div class="left_section">
          <h2>{{section.acf.title}}</h2>
          <p v-html="section.acf.paragraph" style="margin-bottom: 100px">{{section.acf.paragraph}}</p>
          <a v-if="section.acf.fichier" style="margin-top: 80px; margin-bottom: 20px" :href="section.acf.fichier" class="CTA" download>
            Télécharger un document
          </a>
          <a v-if="section.acf.lien_externe" style="margin-bottom: 20px" :href="section.acf.lien_externe" class="CTA" rel="noopener">
            Déposer une offre
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
  name: 'Pro',
  data () {
    return {
      liste:[],
      typeSelected1: param.pagePro,
      leHeader:[],
    }
  },

  computed:{
    filterPagePro: function(){
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
.left_section{
  position: relative;
  width: 100%;
}
.CTA{
  position: absolute;
  left: 50%;
  width: 250px;
  text-align: center;
  bottom: 0;
  transform: translateX(-50%);
}
</style>
