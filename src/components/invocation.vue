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


    <div id="main">
        <div class="font-['Lato'] text-4xl underline underline-offset-[15px] decoration-1 py-8"> Invocation </div>
        
        <div class="flex justify-around content-center">
            <img width="747" height="400" @click="showBig('/img/stella/1.jpg')" src="/img/invocation/vignette.png" alt="game image">
        </div>

        <div class="text-xl py-5">

            <div class="py-3">Logiciels utilisés : Godot, Audacity, ClipStudioPaint & Paint.NET </div>

            <div class=" py-5">
                "Invocation" est un jeu crée lors de la Ludum Dare 55 s'étant déroulée le week end du 13 avril 2024. Le thème était "Invocation".
            </div>

            <div class=" py-5">
                    L'objectif du jeu est de mélanger les bons ingrédients afin de créer le monstre idéal pouvant vaincre le monstre adverse.
               </div> 

            <div class=" py-5">
                Mon objectif lors de cette GameJam était de m'améliorer sur l'utilisation du moter 'Godot'
            </div>

            <div class="flex flex-wrap justify-around">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/invocation/1.jpg')" src="/img/invocation/1.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/invocation/2.jpg')" src="/img/invocation/2.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/invocation/3.jpg')" src="/img/invocation/3.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/invocation/4.png')" src="/img/invocation/4.png" alt="game logo">   
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/invocation/5.jpg')" src="/img/invocation/5.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/invocation/6.jpg')" src="/img/invocation/6.jpg" alt="game logo"> 
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/invocation/7.png')" src="/img/invocation/7.png" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/invocation/8.jpg')" src="/img/invocation/8.jpg" alt="game logo">             
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