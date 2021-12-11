<template>
  <div>
    <header>
      <h1>Mentions légales</h1>
      <p>En toute légalités</p>
      <a href="#main">
        <img class="arrow" src="../assets/arrow.png" alt="Flèche">
      </a>
      <img src="../assets/mentions/image1.png" class="header_bg">
    </header>
    <div class="main" id="main">
      <section class="section_team">
        <div class="left_section">
          <h2>Réalisation</h2>
        </div>
        <div class="carousel">
          <div class="liste_team">
            <div class="teammate">
              <img src="../assets/mentions/image2.png" alt="Thomas Lambolez" height="300">
              <div class="team_card">
                <p>Thomas Lambolez</p>
                <p class="role">Chargé de Design</p>
                <div class="links">
                  <a href="https://lambolezth.fr/" rel="noopener" target="_blank"><img src="../assets/link.svg" height="25" alt="Logo Facebook"></a>
                  <a href="https://www.linkedin.com/in/thomas-lambolez-3625a51a2/" rel="noopener" target="_blank"><img src="../assets/linkedin.svg" height="25" alt="Logo LinkedIn"></a>
                  <a href="https://www.instagram.com/lmblz/" rel="noopener" target="_blank"><img src="../assets/instagram.svg" height="25" alt="Logo Instagram"></a>
                </div>
              </div>
            </div>
            <div class="teammate">
              <img src="../assets/mentions/image3.png" alt="Téo Gheno" height="300">
              <div class="team_card">
                <p>Téo Gheno</p>
                <p class="role">Chargé de Communication</p>
                <div class="links">
                  <a href="https://teogheno.fr" rel="noopener" target="_blank"><img src="../assets/link.svg" height="25" alt="Logo Facebook"></a>
                  <a href="https://www.linkedin.com/in/t%C3%A9o-gheno-3631291bb/" rel="noopener" target="_blank"><img src="../assets/linkedin.svg" height="25" alt="Logo LinkedIn"></a>
                  <a href="https://www.instagram.com/wereephemeral/" rel="noopener" target="_blank"><img src="../assets/instagram.svg" height="25" alt="Logo Instagram"></a>
                </div>
              </div>
            </div>
            <div class="teammate">
              <img src="../assets/mentions/image4.png" alt="Thomas Jeu" height="300">
              <div class="team_card">
                <p>Thomas Jeu</p>
                <p class="role">Chargé de Développement</p>
                <div class="links">
                  <a href="https://thomasjeu.fr" rel="noopener" target="_blank"><img src="../assets/link.svg" height="25" alt="Logo Facebook"></a>
                  <a href="https://www.linkedin.com/in/thomasjeu/" rel="noopener" target="_blank"><img src="../assets/linkedin.svg" height="25" alt="Logo LinkedIn"></a>
                  <a href="https://www.instagram.com/thomas_jeu/?hl=en" rel="noopener" target="_blank"><img src="../assets/instagram.svg" height="25" alt="Logo Instagram"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section_type">
        <div class="left_section" style="width: 100%">
          <h2>Droits d'auteurs</h2>
          <div class="droitsdauteur">
              <div class="droit_parag">
                <h3>Droits d'auteurs et copyright</h3>
                <p>Droits d’auteurs et copyright <br>
                  L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle.
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou une partie de ce site sur un support électronique quel qu’il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
              </div>
              <div class="droit_parag">
                <h3>Loi n°78-17</h3>
                <p>Conformément à l’article 34 de la loi Informatique et Libertés du 6 janvier 1978, vous disposez d’un droit d’accès aux informations vous concernant. Vous pouvez également modifier ou supprimer ces informations. Il vous suffit de nous contacter à l’adresse suivante : mmi@univ-fcomte.fr
                  Les fichiers résultants ne sont jamais transmis à des tiers.
                  <br>
                  <br>
                  En particulier, nous ne commercialisons aucun fichier d’adresse ou d’emails.</p>
              </div>
              <div class="droit_parag">
                <h3>Crédits</h3>
                <p>Responsable : Alain LAMBOUX DURAND <br>
                  Directeur de publication : Xavier SENENTE <br>
                  Tuteur : Abdallah MAKHOUL<br>
                  Rédacteur : Thomas Lambolez<br>
                  Photographie : Téo GHENO et Thomas JEU</p>
              </div>
              <div class="droit_parag">
                <h3>Hébergement</h3>
                <p>Centre de Ressources Informatiques (CRI), Université de Franche-Comté.
                </p>
              </div>
              <div class="droit_parag">
                <p>L'équipe de développement n'est pas responsable du contenu publié et se dédouane de toute responsabilité en cas de quelconque problème.</p>
              </div>
              <div>
                <router-link to="/politiques"><u>Voir les politiques de confidentialité</u></router-link>
              </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MentionsLegales',
  data () {
    return {
      msg: 'Mentions légales'
    }
  }
}
</script>

<style scoped>
h3{
  margin-bottom: 20px;
}
.droitsdauteur{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.droit_parag {
  width: 40%;
  margin: 0 20px 100px 20px;
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
.carousel{
  width: 100%;
}
.liste_team{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.section_team img{
  width: 300px;
  height: 300px;
  padding: 0;
  position: relative;
  border-radius: 100%;
}
.teammate{
  position: relative;
  margin-bottom: 40px;
}
.team_card p::before{
  content: '';
}
.team_card p::after{
  content: '';
}
.team_card{
  height: 100px;
  padding: 15px 20px;
  background-color: rgba(54, 62, 65, 0.2);
  width: 250px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  backdrop-filter: blur(7px);
}
.role{
  font-size: 14px;
}
.team_card img{
  width: 25px;
  height: 25px;
  padding: 0;
  border-radius: 0;
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
  .section_type::after, .section_team::after{
    content: "<section/>";
    position: absolute;
    bottom: -50px;
    font-size: 16px;
  }
}
@media only screen and (max-width: 950px){
  .liste_team{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .teammate{
    margin: 0 15px 30px 15px;
  }
  .teammate>img{
    width: 280px;
    height: 280px;
    padding: 0;
    position: relative;
    border-radius: 100%;
  }
  .droitsdauteur{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
  .droit_parag {
    width: 100%;
    margin: 0 0 70px 0;
  }
}
</style>
