<script setup>
import aurora from '@/components/aurora.vue'
import action53r from '@/components/action53r.vue'
import action53web from '@/components/action53web.vue'
import pasjeu from '@/components/pasjeu.vue'
import soleil from '@/components/soleil.vue'
import sites from '@/components/sites.vue'
import stella from '@/components/stella.vue'
import prototypes from '@/components/prototypes.vue'
import chats from '@/components/chats.vue'
import { ref } from 'vue'

var currentGame = ref("aurora")

const changeGame= (game) => {
    currentGame.value = game
}

</script>

<template>


	<details class="dropdown z-40 m-5 fixed break-keep">

	<summary class="m-1 btn btn-circle btn-darkBlue">      
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
	</summary>

	<ul class="shadow bg-base-100 rounded-box mx-5 my-5">	

		<ul id="menu" class="text-xl fixed text-white z-50 rounded-box 	bg-[#27292D] p-5">
		
		<li class="font-bold py-3">
		<span>Mes jeux principaux</span>
		</li>
			<li class="px-5 py-3 cursor-pointer hover:bg-sky-700 active:bg-sky-500" @click="changeGame('action53web')"><a>Action53 Web</a></li>
			<li class="px-5 py-3 cursor-pointer hover:bg-sky-700 active:bg-sky-500" @click="changeGame('action53r')"><a>Action53 R</a></li>
			<li class="px-5 py-3 cursor-pointer hover:bg-sky-700 active:bg-sky-500" @click="changeGame('aurora')"><a>La Gare d'Aurora</a></li>


		<li class="font-bold py-3">
		<span>Game Jam</span>
		</li>
			<li class="px-5 py-3 cursor-pointer hover:bg-sky-700 active:bg-sky-500"  @click="changeGame('pasjeu')"><a>Il n'y a pas de jeux ici</a></li>
			<li class="px-5 py-3 cursor-pointer hover:bg-sky-700 active:bg-sky-500"  @click="changeGame('soleil')"><a>1,2,3... 10 soleil !</a></li>
			<li class="px-5 py-3 cursor-pointer hover:bg-sky-700 active:bg-sky-500"  @click="changeGame('stella')"><a>Stella</a></li>
			<li class="px-5 py-3 cursor-pointer hover:bg-sky-700 active:bg-sky-500"  @click="changeGame('chats')"><a>Petits Chats</a></li>

		<li class="font-bold py-3">
		<span>Autres</span>
		</li>
		<li class="px-5 py-3 cursor-pointer hover:bg-sky-700 active:bg-sky-500" @click="changeGame('sites')"><a>Sites</a></li>
		<li class="px-5 py-3 cursor-pointer hover:bg-sky-700 active:bg-sky-500" @click="changeGame('prototypes')"><a>Prototypes</a></li>
		<a href="Curiculum Vitae.pdf"><li class="px-5 py-3 cursor-pointer hover:bg-sky-700 active:bg-sky-500"><a>Curriculum vitæ</a></li></a>
	</ul>

	</ul>
	</details>


    <div class="flex justify-around overflow-y-scroll">
		<action53web v-if="currentGame=='action53web'"></action53web>

		<action53r v-if="currentGame=='action53r'"></action53r>

		<aurora v-if="currentGame=='aurora'"></aurora>
        
		<pasjeu v-if="currentGame=='pasjeu'"></pasjeu>

		<soleil v-if="currentGame=='soleil'"></soleil>

		<stella v-if="currentGame=='stella'"></stella>

		<sites v-if="currentGame=='sites'"></sites>

		<prototypes v-if="currentGame=='prototypes'"></prototypes>

		<chats v-if="currentGame=='chats'"></chats>

    </div>

    <div id="bg"></div>
</template>

<style>
	#bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-image: url("/img/bg.jpg");	
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 1;
	}

	#menu {
		font-family: Lato;
	}
</style>