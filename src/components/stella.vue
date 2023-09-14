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
        <div class="font-['Lato'] text-4xl underline underline-offset-[15px] decoration-1 py-8"> Stella </div>
        
        <div class="flex justify-around content-center">
            <img width="747" height="400" src="/img/stella/stella.png" alt="game image">
        </div>

        <div class="text-xl py-5">

            <div class="py-3">Logiciels utilisés : Unreal Engine 4 & ClipStudioPaint </div>

            <div class=" py-5">
                "Stella" est un jeu créé lors de la GMTK Game Jam 2023. Le thème était "roles reversed". Le jeu a été crée en un week-end puis un peu peaufiné lors de la semaine suivante.
            </div>
                <div class=" py-5">
                L'idée classique de ce thème, aurait été de jouer un rôle différent de d'habitude dans un genre de jeu déjà bien connu. Comme par exemple d'incarner les ennemis dans un jeu de plateforme.
                J'ai donc décidé de faire autrement et d'intégrer littéralement le thème dans la boucle de gameplay. 
            </div>
                <div class=" py-5">
                Le concept du jeu est de contrôler deux personnages pouvant alterner leurs rôles et leurs places à tout moment. 
                Le personnage bleu pouvant traverser les barrières bleues, et le personnage rouge pouvant traverser les barrières rouges.
                
               </div>

            <div class=" py-5">Stella est téléchargeable en cliquant sur le lien ci-dessous :</div>
            
            <div class=" py-5">
                <p class="hover:bg-sky-700 active:bg-sky-500 w-max"><b><a href="https://mega.nz/file/H1ZiwRZD#8-fuaxfWdfGkmHZ2JVbCLglf7lXuFa7em_bv_54JvvYk">Télécharger Stella</a></b></p>
            </div>


            <div class="flex flex-wrap justify-around">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/stella/1.jpg')" src="/img/stella/1.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/stella/2.jpg')" src="/img/stella/2.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/stella/3.jpg')" src="/img/stella/3.jpg" alt="game logo">   

                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/stella/4.jpg')" src="/img/stella/4.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/stella/5.jpg')" src="/img/stella/5.jpg" alt="game logo">

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