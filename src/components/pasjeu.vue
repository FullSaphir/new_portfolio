<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue'

var showImage = ref(false)
var currentImage = ref("/img/pasjeu/1.jpg")

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
        <div class="font-['Lato'] text-4xl underline underline-offset-[15px] decoration-1 py-8"> Il n'y a pas de jeux ici </div>

<div class="text-xl py-5">

    <div class="py-3">Logiciels utilisés : Unity, Blender, PAINT.NET et Audacity</div>

    <div class=" py-5">"Il n'y a pas de jeux ici" est un jeu crée lors d'une Game Jam en 2021. Le thème était "arcade". J'ai crée le jeu seul en une après-midi. Ce fut ma première utilisation d'Unity.</div>

    <div class=" py-5">Il n'y a pas de jeu à proprement parler. Le joueur frappe la borne d'arcade pour la faire fonctionner tandis que son propriétaire lui ordonne d'arrêter sous risque de la casser.</div>

    <div class=" py-5">"Il n'y a pas de jeux ici" est téléchargeable en cliquant sur le lien ci-dessous :</div>
            
    <div class=" py-5">
        <p class="hover:bg-sky-700 active:bg-sky-500 w-max"><b><a href="https://mega.nz/file/n4w1DBCL#JbvpYxWu7S4UrRK9oJ1_FDu4VTZH81v7aH_v48dytK8">Télécharger "Il n'y a pas de jeux ici"</a></b></p>
    </div>

    <div class="py-5 flex justify-around content-center">
        <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/pasjeu/1.jpg')" src="/img/pasjeu/1.jpg" alt="game logo">
        <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/pasjeu/2.jpg')" src="/img/pasjeu/2.jpg" alt="game logo">
        <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/pasjeu/3.jpg')" src="/img/pasjeu/3.jpg" alt="game logo">   
    </div>

        </div>
    </div>

</template>

<style>
	#main {
		width: 50rem;
        color: white;
		background-color: rgba(27, 29, 32, 0.6);
        font-family: Lato;
        padding: 0.5rem 2rem 0.5rem 2rem;
        margin : 5rem;
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