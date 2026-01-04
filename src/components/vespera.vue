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
        <div class="font-['Lato'] text-4xl underline underline-offset-[15px] decoration-1 py-8">Vespera</div>
        
        <div class="flex justify-around content-center">
            <img width="747" height="400" src="/img/vespera/pochette.jpg" alt="game image">
        </div>

        <div class="text-xl py-5">

            <div class="py-3">Logiciels utilisés : Unreal Engine 4, Blender, Paint.NET, Audacity & ClipStudioPaint </div>

            <div class=" py-5">
                "Vespera" est un shoot'em up et un projet incomplet sur lequel je travaille seul pendant mon temps libre.
            </div>
                <div class=" py-5">
                    Vespera est un shoot'em up où le joueur peut tirer dans quatre directions différentes : en face, sur la gauche, sur la droite et derrière. 
                    Il peut aussi frapper directement ses adversaires avec ses ailes.
            </div>

            <div class=" py-5">
                    Les niveaux de Vespera peuvent être à la fois à l'horizontale ou la verticale. Le but étant de réussir à vaincre un maximum d'ennemis tout en réussissant à survivre. Il y a également des boss.
            </div>

            <div class=" py-5">
                    Vespera raconte l'histoire des Séraphins, des armes humaines créées il y a des milliers d'années, et leur survie sur une Terre dépourvue d'humanité. 
                    Les derniers Séraphins survivants vont s'entretuer lors d'une quête de sens à leur existence. 
                    Ils sont accompagnés de Chérubins, des armes biologiques conçues pour accompagner les Séraphins dans leurs batailles.
            </div>

            <div class="flex flex-wrap justify-around">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/vespera/1.jpg')" src="/img/vespera/1.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/vespera/2.jpg')" src="/img/vespera/2.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/vespera/3.jpg')" src="/img/vespera/3.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/vespera/4.jpg')" src="/img/vespera/4.jpg" alt="game logo">   
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/vespera/5.jpg')" src="/img/vespera/5.jpg" alt="game logo">               
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/vespera/6.jpg')" src="/img/vespera/6.jpg" alt="game logo">
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/vespera/7.jpg')" src="/img/vespera/7.jpg" alt="game logo">  
                <img class="w-5/12 aspect-video mx-5 my-5 rounded-md" @click="showBig('/img/vespera/8.png')" src="/img/vespera/8.png" alt="game logo">              
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