<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue'

var showImage = ref(false)
var currentImage = ref("/img/action53r/1.jpg")

const showBig = (newImage) => {
    currentImage.value = newImage
    showImage.value = true
}

</script>

<template>
    <div v-if="showImage" id="underImage" class="z-20 fixed flex justify-around">
        <div class="z-20 fixed flex justify-around ">
            <img class="h-8/12 w-8/12 py-28 rounded-md" @click="showImage = false" :src="currentImage" alt="game logo">
        </div>
    </div>

    <div id="main">
        <div class="font-['Lato'] text-4xl underline underline-offset-[15px] decoration-1 py-8"> Sites Web </div>
    
        <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/DDK-_Yn9BU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div class="text-xl py-5">

            <div class=" py-3">⚪ Kuisto était un site web sur lequel des utilisateurs pouvaient consulter, créer et commenter des recettes de cuisines en ligne.</div>

            <div class=" py-3">Le site a été crée en PHP et la base de données était maintenu sur PHPMyAdmin. Ce site était un projet étudiant de fin de S3 en DUT Informatique. Nous étions 2 lors de la création du site. </div>

            <div class=" py-3">Le site n'existe plus aujourd'hui mais j'avais enregistré une vidéo à l'époque visible ci-dessus. </div>

            <div class=" py-7"> ⚪ J'ai également crée ce portefolio grâce à Vue3, Tailwind et DaisyUI. </div>
            
            <div class=" py-7"> ⚪ Voici quelques images d'un autre site crée pour un projet étudiant en DUT Informatique : </div>
            
            <div class="flex flex-wrap justify-around">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/sites/4.png')" src="/img/sites/4.png" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/sites/2.png')" src="/img/sites/2.png" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/sites/3.png')" src="/img/sites/3.png" alt="game logo">   
            </div>

        </div>
    </div>

</template>

<style>
	#main {
        color: white;
		background-color: rgba(27, 29, 32, 0.6);
        font-family: Lato;
        z-index: 10;
	}

    #underImage {
        background-color: rgba(27, 29, 32, 0.6);
        z-index: 15;
        position : absolute;
        width: 100%;
        height: 100%;
    }
</style>