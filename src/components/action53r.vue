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
        <div class="font-['Lato'] text-4xl underline underline-offset-[15px] decoration-1 py-8"> Action53 R </div>
        
        <div class="flex justify-around content-center">
            <iframe width="747" height="400" src="https://www.youtube.com/embed/ydGgWvZVdKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="text-xl py-5">

            <div class="py-3">Logiciels utilisés : Unreal Engine 4, Blender, PAINT.NET et Audacity.</div>

            <div class=" py-5">Action53 R est une sorte de remake d'Action 53 Web. J'ai utilisé ce jeu afin d'apprendre à utiliser l'Unreal Ungine 4 et pouvoir réaliser mes idées impossibles à faire auparavant.</div>

            <div class=" py-5">L'histoire d'Action53 R est plus ou moins la même que la version Web mais racontée différement.
                J'ai rajouté aux énigmes des flashbacks jouables que l'on explore afin de découvrir la vérité sur les meurtres des dernières années.</div>

                <div class=" py-5">Action53 se déroule dans une pièce mystérieuse. Le joueur doit trouver un moyen de sortir d'ici en explorant des flashbacks de son propre passé oublié. 
                Ces énigmes sont toutes reliées à une ancienne série de meurtre s'étant étalée sur plusieurs années. Le coupable ne fut jamais retrouvé et le mystère resta entier. 
                C'est au joueur de mettre fin à cette histoire en découvrant la vérité sur celle-ci. À moins bien sûr que la vérité ne soit trop dure à admettre ?</div>

            <div class=" py-5">Action53 R est téléchargeable en cliquant sur le lien ci-dessous :</div>
            
            <div class=" py-5">
                <p class="hover:bg-sky-700 active:bg-sky-500 w-max"><b><a href="https://mega.nz/folder/mshXFYZK#uIA4VyNmXQSll9ILbB0Raw">Télécharger Action53 R</a></b></p>
            </div>

            <div class="py-5 flex justify-around content-center">
                <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/action53r/1.jpg')" src="/img/action53r/1.jpg" alt="game logo">
                <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/action53r/2.jpg')" src="/img/action53r/2.jpg" alt="game logo">
                <img class="w-48 h-32 mx-5 rounded-md" @click="showBig('/img/action53r/3.png')" src="/img/action53r/3.png" alt="game logo">   
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