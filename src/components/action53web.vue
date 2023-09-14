<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue'

var showImage = ref(false)
var currentImage = ref("/img/action53web/1.jpg")

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
        <div class="font-['Lato'] text-4xl underline underline-offset-[15px] decoration-1 py-8"> Action53 Web </div>

        <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/tJMv1GOP6jo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div class="text-xl py-5">

            <div class="py-3">Logiciels utilisés : Blender, PAINT.NET et Audacity.</div>

            <div class=" py-5">Action53 est un jeu d'escape-game crée avec deux amis en 2019 en utilisant HTML, CSS et un peu de Javascript.</div>

            <div class=" py-5">Action53 se déroule dans une pièce mystérieuse. Le joueur doit trouver un moyen de sortir d'ici en résolvant les différentes énigmes dissimulées autour de lui. 
                Ces énigmes sont toutes reliées à une ancienne série de meurtre s'étant étalée sur plusieurs années. Le coupable ne fut jamais retrouvé et le mystère resta entier. 
                C'est au joueur de mettre fin à cette histoire en découvrant la vérité sur celle-ci. À moins bien sûr que la vérité ne soit trop dure à admettre ?</div>

            <div class=" py-5">Action53 Web est téléchargeable en cliquant sur le lien ci-dessous :</div>
            
            <div class=" py-5">
                <p class="hover:bg-sky-700 active:bg-sky-500 w-max"><b><a href="https://mega.nz/file/O5Bg2KKD#ljSqNI8b317emeT5tgQNsDH9gLsrlxSdcccx4x66Ch8">Télécharger Action53</a></b></p>
            </div>

            <div class="flex flex-wrap justify-around">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/action53web/1.jpg')" src="/img/action53web/1.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/action53web/2.jpg')" src="/img/action53web/2.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/action53web/3.jpg')" src="/img/action53web/3.jpg" alt="game logo">   
 
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