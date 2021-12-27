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
<!--      <section v-tilt="{speed: 2500, max:  10, transition: true}" class="section_accueil">
          <router-link class="router-link sa1" to="/butmmi">
            <div class="left_section">
              <h2>BUT MMI</h2>
              <p>Une formation de 3 ans sur les Métiers du Multimédia & de l'Internet.</p>
            </div>
            <img class="arrow" src="../assets/arrow.png" alt="Flèche">
            <h3 class="h3n1">01</h3>
            <img class="section_illu" src="../assets/accueil/section1.png" alt="illustration BUT MMI">
            <img class="section_stroke" src="../assets/accueil/stroke.svg" alt="stroke">
          </router-link>
      </section>
      <section v-tilt="{speed: 2500, max:  10, transition: true}" class="section_accueil">
        <router-link class="router-link sa2" to="/departement">
          <div class="left_section">
            <h2>Département</h2>
            <p>Forme des professionnels du web et du multimédia depuis vingt cinq ans.</p>
          </div>
          <img class="arrow" src="../assets/arrow.png" alt="Flèche">
          <h3 class="h3n2">02</h3>
          <img class="section_illu" src="../assets/accueil/section2.png" width="240" alt="illustration département">
          <img class="section_stroke" src="../assets/accueil/stroke.svg" alt="stroke">
        </router-link>
      </section>
      <section v-tilt="{speed: 2500, max:  10, transition: true}" class="section_accueil">
        <router-link class="router-link sa3" to="/projets">
          <div class="left_section">
            <h2>Projets Étudiants</h2>
            <p>Chaque semestre, les étudiants se mettent dans la peaux de professionnels par le biais de projets tutorées.</p>
          </div>
          <img class="arrow" src="../assets/arrow.png" alt="Flèche">
          <h3 class="h3n3">03</h3>
          <img class="section_illu" src="../assets/accueil/section3.png" width="220" alt="illustration projets étudiants">
          <img class="section_stroke" src="../assets/accueil/stroke2.svg" alt="stroke">
        </router-link>
      </section>
      <section v-tilt="{speed: 2500, max:  10, transition: true}" class="section_accueil">
        <router-link class="router-link sa4" to="/mobilite">
          <div class="left_section">
            <h2>Mobilité Internationale</h2>
            <p>Chaque année le département organise en partenariat avec 2 CEGEP au Canada un semestre d'étude.</p>
          </div>
          <img class="arrow" src="../assets/arrow.png" alt="Flèche">
          <h3 class="h3n4">04</h3>
          <img class="section_illu" src="../assets/accueil/section4.png" alt="illustration Mobilité">
          <img class="section_stroke" src="../assets/accueil/stroke2.svg" alt="stroke">
        </router-link>
      </section>-->

      <section v-for="carte in liste" :key="carte.id" v-tilt="{speed: 2500, max:  10, transition: true}" class="section_accueil">
        <router-link :style='{ backgroundImage: `url(${carte.acf.image.url})`}' class="router-link" v-bind:to="carte.acf.router">
          <div class="left_section">
            <h2>{{carte.acf.title}}</h2>
            <p v-html="carte.acf.paragraphe">{{carte.acf.paragraphe}}</p>
          </div>
          <img class="arrow" src="../assets/arrow.png" alt="Flèche">
          <h3>{{ carte.acf.number }}</h3>
          <div class="stroke_number">{{ carte.acf.number }}</div>
          <img class="section_illu" :src="carte.acf.illustration.url" :alt="carte.acf.illustration.title">
          <img class="section_stroke" src="../assets/accueil/stroke2.svg" alt="stroke">
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>

import param from '@/param/param'

export default {
  name: 'Accueil',
  data () {
    return {
      liste:[],
      leHeader:[],
      typeSelected: param.pageAccueil,
    }
  },

  computed:{
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

    axios.get(param.host+"carte?per_page=50")
      .then(response=>{
        this.liste = response.data;
        function compare(a, b) {
          if (a.acf.number < b.acf.number) return -1;
          if (a.acf.number > b.acf.number) return 1;
          return 0;
        }
        return this.liste.sort(compare);
      })
      .catch(error => console.log(error))
  }
};
</script>

<style scoped>
.router-link{
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.65);
}
.router-link h3{
  position: absolute;
  font-family: Cinzel, serif;
  font-size: 130px;
  color: #599C95;
  bottom: -80px;
  left: -40px;
  z-index: 90;
}
.stroke_number{
  position: absolute;
  font-family: Cinzel, serif;
  font-size: 130px;
  font-weight: 700;
  color: var(--color-white);
  bottom: -90px;
  left: -30px;
  z-index: 120;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px;
  -moz-background-clip: text;
  background-clip: text;
}
.section_illu{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 100px;
}
.section_stroke{
  position: absolute;
  top: 10px;
  right: 10px;
  width: 850px;
  height: 580px;
}
:target{
  scroll-margin-top: 0;
}
@media only screen and (max-width: 1080px){
  .section_stroke{
    display: none;
  }
  .section_illu{
    display: none;
  }
}
@media only screen and (max-width: 780px){
  .router-link h3{
    font-size: 80px;
    bottom: -45px;
    left: -20px;
  }
  .section_stroke{
    display: none;
  }
  .stroke_number{
    font-size: 80px;
    bottom: -50px;
    left: -15px;
  }
  .section_illu{
    display: none;
  }
}
</style>
