<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue'

var showImage = ref(false)
var currentImage = ref("/img/stella/1.jpg")

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
        <div class="font-['Lato'] text-4xl underline underline-offset-[15px] decoration-1 py-8">Les Heures Bleues : L'Antre d'Astérie</div>
        
        <div class="flex justify-around content-center">
            <img width="747" height="400" src="/img/asterie/4.jpg" alt="game image">
        </div>

        <div class="text-xl py-5">

            <div class="py-3">Logiciels utilisés : Renpy, Unreal Engine 4, Paint.NET, Audacity & ClipStudioPaint </div>

            <div class=" py-5">
                "Les Heures Bleues : Mariage à Astérie" est un projet récent. C'est la suite des Heures Bleues, présente également dans ce portfolio.
            </div>
                <div class=" py-5">
                    Ce visual novel est très similaire à son prédécesseur sauf que cette fois les personnages sont bien plus vivants. 
                    Bien sûr, cela raconte une histoire différente dans un lieu différente et avec des personnages différents.
            </div>

            <div class=" py-5">
                    Le joueur peut toujours faire des choix pour influencer l'histoire, mais cette fois-ci il peut également choisir où aller enquêter.
                    Le jeu se déroulant sur une semaine entière et les journées ayant un temps limité, le joueur devra choisir avec précaution les endroits qu'il veut visiter pour récolter les meilleurs indices afin de résoudre le mystère entourant la ville d'Astérie !
            </div>
			
            <div class=" py-5">
                    Synopsis :
					Aurore Dupin, une détective, est chargée de trouver l'origine d'étranges bruits nocturnes dans le vieux village montagneux d'Astérie !

					Alors que les préparations pour le mariage entre la noble Hélène Marvos et Valefort Aspro battent son plein, Aurore va vite comprendre que les mystères d'Astérie ne se résument pas qu'à de simples bruits nocturnes...

					Découvrez en parallèle l'histoire du Chevalier d'Or et son fidèle destrier !
            </div>
			
            <div class=" py-5">"Les Heures Bleues : Mariage à Astérie" est téléchargeable en cliquant sur le lien ci-dessous :</div>
            
            <div class=" py-5">
                <p class="hover:bg-sky-700 active:bg-sky-500 w-max"><b><a href="https://mega.nz/file/exZhyTDJ#Oc2_EHR2W2pKEJIcx6_SNWb_d29xcFonXj6UBk2VNiU">Télécharger Les Heures Bleues</a></b></p>
            </div>

            <div class="flex flex-wrap justify-around">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/asterie/1.jpg')" src="/img/asterie/1.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/asterie/2.png')" src="/img/asterie/2.png" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/asterie/3.jpg')" src="/img/asterie/3.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/asterie/4.jpg')" src="/img/asterie/4.jpg" alt="game logo">   
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/asterie/5.jpg')" src="/img/asterie/5.jpg" alt="game logo">            
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
