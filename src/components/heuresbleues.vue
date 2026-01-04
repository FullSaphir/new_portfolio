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
        <div class="font-['Lato'] text-4xl underline underline-offset-[15px] decoration-1 py-8"> Les Heures Bleues : Sang sur pierre à Pétrichor</div>
        
        <div class="flex justify-around content-center">
            <img width="747" height="400" src="/img/heuresbleues/Pochette_fr.png" alt="game image">
        </div>

        <div class="text-xl py-5">

            <div class="py-3">Logiciels utilisés : Renpy, Unreal Engine 4, Audacity & ClipStudioPaint </div>

            <div class=" py-5">
                "Les Heures Bleues" est un Visual Novel crée en hiver 2024. J'ai essayé de faire quelque chose d'extrêmement simple. J'ai fait les dessins, le script ainsi que les décors. J'ai utilité des sons et musiques libres de droit.
            </div>
                <div class=" py-5">
                    Mon premier Visual Novel (ou plutôt Sound Novel), c'est court (~3h30 de lecture) et gratuit.
                    Une détective est appelée pour résoudre un mystérieux meurtre dans un vieux village reculé. À vous de résoudre le mystère…
                    
            </div>
                <div class=" py-5">
                    Accompagnez la détective Aurore Dupin dans le village reculé de Pétrichor pour résoudre le mystère derrière la mort d'un des habitants du village...
               </div>

            <div class=" py-5">Les Heures Bleues est téléchargeable en cliquant sur le lien ci-dessous :</div>
            
            <div class=" py-5">
                <p class="hover:bg-sky-700 active:bg-sky-500 w-max"><b><a href="https://mega.nz/file/24AlXZoT#dVvV5hQxhVubdSqjxj8m-rdiUKpL4UZx6Ky0Oekv59o">Télécharger Les Heures Bleues</a></b></p>
            </div>


            <div class="flex flex-wrap justify-around">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/heuresbleues/1.jpg')" src="/img/heuresbleues/1.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/heuresbleues/2.png')" src="/img/heuresbleues/2.png" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/heuresbleues/4.png')" src="/img/heuresbleues/4.png" alt="game logo">   
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