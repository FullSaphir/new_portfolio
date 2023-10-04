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
        <div class="z-20 py-48 fixed flex justify-around ">
            <iframe class="rounded-md" src="PetitsChats/index.html" width="948" height="533"></iframe>
        </div>
    </div>

    <div id="main">
        <div class="font-['Lato'] text-4xl underline underline-offset-[15px] decoration-1 py-8"> Petits Chats </div>
        
        <div class="flex justify-around content-center">
            <img width="747" height="400" @click="showBig('/img/stella/1.jpg')" src="/img/chats/titre.png" alt="game image">
        </div>

        <div class="text-xl py-5">

            <div class="py-3">Logiciels utilisés : Godot & Paint.NET </div>

            <div class=" py-5">
                "Petits Chats" est un jeu crée lors de la Ludum Dare 54 s'étant déroulée le week end du 1er octobre 2023. Le thème était "Limited Space".
            </div>

            <div class=" py-5">
                    L'objectif du jeu est de trouver une bonne position pour dormir sans déranger les chats. Le gameplay est très simple, il suffit de dessiner un trait suffisamment long avec la souris sans toucher les chats.
               </div> 

            <div class=" py-5">
                J'ai voulu utiliser cette Ludum Dare comme d'un moyen afin d'apprendre à utiliser le moteur "Godot". C'était la première fois que je m'en servais. 
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