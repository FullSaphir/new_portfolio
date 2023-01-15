<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue'

var showImage = ref(false)
var currentImage = ref("/img/aurora/1.jpg")

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
        <div class="font-['Lato'] text-4xl underline underline-offset-[15px] decoration-1 py-8"> La Gare d'Aurora </div>
        
        <div class="flex justify-around content-center">
            <iframe width="747" height="400" src="https://www.youtube.com/embed/X4xu4B842J4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="text-xl py-5">

            <div class="py-3">Logiciels utilisés : Unreal Engine 4 + Plugins, Blender, PAINT.NET et Audacity</div>

            <div class=" py-5">La Gare d'Aurora est un jeu créé seul en 2021 pendant mon temps libre. Je l'ai créé sous l'Unreal Engine 4, mon objectif était de faire un jeu abouti en utilisant ce que j'ai appris lors de la création d'Action53 et de mes divers prototypes.</div>

            <div class=" py-5">Le joueur se retrouve au beau milieu d'une gare dans laquelle circule d'étranges rumeurs. C'est en explorant les lieux que le joueur se rend compte que le temps boucle sur lui-même toutes les 5 minutes. Le but sera alors de découvrir les lourds secrets que renferme la gare d'Aurora à l'aide de ce mystérieux phénomène. Il semblerait que cette histoire puisse vous amener bien plus loin que vous ne le pensé...</div>

            <div class=" py-5">La Gare d'Aurora est téléchargeable en cliquant sur le lien ci-dessous :</div>
            
            <div class=" py-5">
                <p class="hover:bg-sky-700 active:bg-sky-500 w-max"><b><a href="https://mega.nz/file/C4Y2RTCT#4TglehI22e-_gi7b4b1KMU2MxSSZh4jKRnr-aDMI-Ck">Télécharger La Gare d'Aurora</a></b></p>
            </div>

            <div class="py-5 flex justify-around content-center">
                <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/aurora/1.jpg')" src="/img/aurora/1.jpg" alt="game logo">
                <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/aurora/2.png')" src="/img/aurora/2.png" alt="game logo">
                <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/aurora/3.jpg')" src="/img/aurora/3.jpg" alt="game logo">   
            </div>

            <div class="py-3 flex justify-around content-center">
                <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/aurora/4.jpg')" src="/img/aurora/4.jpg" alt="game logo">
                <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/aurora/5.jpg')" src="/img/aurora/5.jpg" alt="game logo">
                <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/aurora/6.jpg')" src="/img/aurora/6.jpg" alt="game logo">   
            </div>

            <div class="py-3 flex justify-around content-center">
                <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/aurora/7.png')" src="/img/aurora/7.png" alt="game logo">
                <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/aurora/8.jpg')" src="/img/aurora/8.jpg" alt="game logo">
                <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/aurora/9.jpg')" src="/img/aurora/9.jpg" alt="game logo">   
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