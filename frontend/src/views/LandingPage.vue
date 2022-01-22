<template>
    <div>
      <!-- Navbar component -->
      <navbar></navbar>
      <!-- Image -->
      <img src="@/assets/landingNavbar.jpg" style="z-index:0;width: 100%;" alt="">
      <!-- Divider -->
      <divider title="How does it work?"></divider>
      <!-- Parallax -->
      <div class="parallax_1">
          <div class="parallax_inner_borders">
            <div class="parallax_inner_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed asperiores placeat soluta magni necessitatibus nesciunt obcaecati, porro non. Error culpa tenetur mollitia tempore corporis recusandae blanditiis repudiandae laboriosam molestias aspernatur.</div>
          </div>
      </div>
      <!-- Divider -->
      <divider title="Define who you are"></divider>
      <!-- Globie -->
      <cardLeft
        id="globie" 
        title="Globie" 
        text="Un GlobePacker es uno de los dos roles que pueden tomar las personas en nuestra pagina web, este representa a las personas con ganas de trabajar en el exterior. Al crear una cuenta recibiras un correo electronico confirmando que la cuenta ya fue creada, luego podras acceder a tu cuenta y comenzar a explorar las oportunidades que apareceran en tu Feed. Cuando te encuentres con alguna publicacion de tu interes simplemente aplica a esta y espera la respuesta del Host. Recomendacion al llenar el campo 'Sobre mi' intenta hablar sobre tus habilidades y metas, ya que esto sera lo primero que despierte el interes de los Hosts."
        img="default.jpeg"></cardLeft>
      <!-- Parallax -->
      <div class="parallax_2"></div>
      <!-- Host -->
      <cardRight
        id="host"
        title="Host"
        text="Un Anfitrión sera la persona que hara que se cumpla el objetivo principal de nuestra pagina, sin este rol nada de lo que nos proponemos es posible. Tu seras el encargado de crear las publicaciones que veran los GlobePackers, podras administrarlas y editarlas una vez hayas registrado una cuenta. Los GlobePackers aplicaran a la propuesta que hayas publicado y tu podras seleccionar al GlobePacker que mas se adapte a lo que estabas buscando.Recomendacion a la hora de crear una publicacion intenta ser lo mas especifico posible y intenta añadir la mayor cantidad de informacion posible."
        img="default.jpeg"></cardRight>
      <!-- Parallax -->
      <div class="parallax_3"></div>
      <!-- Footer -->
      <footer class="custom_footer">
          <div class="inner_footer">
              <div class="footer_col">
                    <div class="footer_title"> Made by </div> 
                    <div class="footer_text">
                        <div class="footer_text_style">Joquin Garcia del Rio</div>
                        <div class="footer_text_style">German Ariel Martinez</div>
                        <div class="footer_text_style">Franco Navarro</div>
                    </div>
              </div>
              <div class="footer_col">
                    <div class="footer_title"> Contact information </div> 
                    <div class="footer_text">
                        <div class="footer_text_style"><b-icon icon="telephone" style="color: white;margin-right:5px;"></b-icon>15-5555-555</div>
                        <div class="footer_text_style"><b-icon icon="envelope" style="color: white;margin-right:5px;"></b-icon>contact@globepacker.com</div>
                        <div class="footer_text_style"><b-icon icon="map" style="color: white;margin-right:5px;"></b-icon>40 W 37th St, New York, NY 10018, United States</div>
                    </div>
              </div>
          </div>
      </footer>       
    </div>
</template>

<script>
import navbar from '@/components/landingNavbar.vue'
import divider from '@/components/landingDivider.vue'
import cardLeft from '@/components/cardLeft.vue'
import cardRight from '@/components/cardRight.vue'
export default {
    components: {
        navbar,
        divider,
        cardLeft,
        cardRight
    }
}
</script>

<style scoped>
.custom_footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #c62034;
    height: 30vh;
}
.inner_footer {
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-width: 3px;
    border-bottom-width: 3px;
    border-top-color: white;
    border-bottom-color: white;
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.footer_col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer_title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: white;
    border-radius: 10px;
    margin: 5px;
    padding: 5px 10px;
}
.footer_text {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 10px;
}
.footer_text_style {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px;
}
.landing-footer {
  background-color: #202844;
}
.gp-host-cards {
    margin: 30px;
}
.parallax_1 {
  /* The image used */
  background-image: url("../assets/adventure2.jpeg");

  /* Set a specific height */
  min-height: 400px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center;
}
.parallax_2 {
  /* The image used */
  background-image: url("../assets/adventure.jpg");

  /* Set a specific height */
  min-height: 400px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center;
}
.parallax_3 {
  /* The image used */
  background-image: url("../assets/house.jpeg");

  /* Set a specific height */
  min-height: 400px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center;
}
.parallax_inner_borders {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: 90%;
   height: 200px;
   background-color:rgba(0, 0, 0, 0.3);
   color:white; 
}
.parallax_inner_text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 90%;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.5);
    margin: 0 10px;
    padding: 0;
}
</style>