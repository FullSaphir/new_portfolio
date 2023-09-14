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
        <div class="font-['Lato'] text-4xl underline underline-offset-[15px] decoration-1 py-8"> 1,2,3... 10 soleil ! </div>

<div class="text-xl py-5">

    <div class="py-3">Logiciels utilisés : Unreal Engine 4 et Audacity</div>

    <div class=" py-5">"1,2,3... 10 soleil !" est un jeu crée lors de la Ludum Dare 51. Le thème était "Every 10 seconds". J'ai crée le jeu en une journée.</div>

    <div class=" py-5">Je me suis inspiré du 1,2,3 soleil que tout le monde connaît puis je l'ai étiré pour que le tour du joueur dure 10 secondes. Le joueur doit ramasser toutes les pièces sans se faire voir par la lumière rouge.</div>

    <div class=" py-5">"1,2,3... 10 soleil !" est téléchargeable en cliquant sur le lien ci-dessous :</div>
            
    <div class=" py-5">
        <p class="hover:bg-sky-700 active:bg-sky-500 w-max"><b><a href="https://mega.nz/file/214HFTTT#5eh7bcnpJZGZWJJliGEiEKcAUPrpvAKP5u7PMC1L0wQ">Télécharger "1,2,3... 10 soleil !"</a></b></p>
    </div>

    <div class="flex flex-wrap justify-around">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/soleil/3.png')" src="/img/soleil/3.png" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/soleil/2.png')" src="/img/soleil/2.png" alt="game logo">
   
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