<template>
    <div class="custom_navbar_background">
        <div class="custom_navbar">
            <div class="brand">
                <b class="title"> Globepackers <b-icon icon="compass" style="color: white;margin-left: 10px"></b-icon></b>
            </div>
            <div class="links">
                <ul class="navbar_links">
                    <li @click="scrollTo('globie')"><a class="link">What's a Globie</a></li>
                    <li @click="scrollTo('host')"><a class="link">What's a Host</a></li>
                    <li><a class="link">About us</a></li>
                    <li><router-link class="link" to="/signup">Sign up</router-link></li>
                    <li><router-link class="link" to="/login">Log in</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// Viajar es una sensacion inolvidable y si ademas podemos ayudar a otros realizando algo que nos encanta, es mejor. Nuestro objetivo es conectar personas alrededordor del mundo que entre ambas se complementen. Sabemos que hoy en dia el sueño de muchas personas es cambiar los aires que lo rodean pero la realidad es que esto no siempre es sencillo, lo que nostros buscamos es facilitar este proceso.
// No es necesario que cumplas ciertos requisitos para crear una cuenta. En nuestro sitio web hay cientos de anfitriones alrededordor del mundo que estan necesitando de tu ayuda, asi que siempre encontraras alguno que ofrezca un trabajo que se adapte a tus capacidades. Ademas, trabajando para un Anfitrión generaras conocimientos invaluables que te serviran para tu futuro.
export default {
    data () {
        return {
            scrollPosition: null
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        scrollTo(id) {  
            document.getElementById(id).scrollIntoView({behavior: "smooth"});
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }
}
</script>

<style>
.custom_navbar_background {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    z-index: 100;
    top: 0;
    position: absolute;
}
.custom_navbar {
    height: 80%;
    width: 97%;
    background-color: #c62034;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.brand {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 20%;
    height: 80%;
    border-style: solid;
    border-width: 3px;
    border-color: white;
    border-radius: 20px;
    margin-left: 10px;
    color: white;
}
.title {
    cursor: pointer;
    font-size: 2em;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
    height: 80%;
    margin-right: 10px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
.links:hover {
    color: white;
}
.navbar_links {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    margin: 0;
}
.navbar_links li {
    display: inline-block;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    border-style: solid;
    border-left-style: none;
    border-width: 2px;
    transition: all 1s ease;
    height: 6vh;
    width: 10vw;
    transition: all 1s ease;
}
.navbar_links li:hover {
    background-color: white;
    transition: all 1s ease;
    color: white;
}
.navbar_links li a:hover {
    transition: all 1s ease;
    color: #c62034;
}
.link {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    cursor: pointer;
}
.link a:hover {
    color: #c62034;
}
.navbar_links li:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
.navbar_links li:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-left-style: solid;
}
</style>
