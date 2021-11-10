<template>
  <div id="app">
    <div class="container">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
          <li>
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
          <li>
            <router-link to="/butmmi" class="nav-link">BUT MMI</router-link>
          </li>
          <li>
            <router-link to="/departement" class="nav-link">Département</router-link>
          </li>
          <li>
            <router-link to="/projets" class="nav-link">Projets Étudiants</router-link>
          </li>
          <li>
            <router-link to="/mobilite" class="nav-link">Mobilité Internationale</router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <li>
            <router-link to="/extras" class="nav-link">Extras</router-link>
          </li>
          <li>
            <router-link to="/actualites" class="nav-link">Actualités</router-link>
          </li>
          <li>
            <router-link to="/pro" class="nav-link">Espace Pro</router-link>
          </li>
          <li>
            <router-link to="/mentionslegales" class="nav-link">Mentions légales</router-link>
          </li>
          <li>
            <router-link to="/politiques" class="nav-link">Politiques de confidentialités</router-link>
          </li>
        </ul>
      </nav>

    <router-view/>

      <footer>
        <ul>
          <li>
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <li>
            <router-link to="/extras" class="nav-link">Extras</router-link>
          </li>
          <li>
            <router-link to="/actualites" class="nav-link">Actualités</router-link>
          </li>
          <li>
            <router-link to="/pro" class="nav-link">Espace Pro</router-link>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
