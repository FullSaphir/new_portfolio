<script setup>
import aurora from '@/components/aurora.vue'
import action53r from '@/components/action53r.vue'
import action53web from '@/components/action53web.vue'
import pasjeu from '@/components/pasjeu.vue'
import soleil from '@/components/soleil.vue'
import sites from '@/components/sites.vue'
import prototypes from '@/components/prototypes.vue'
import { ref } from 'vue'

var currentGame = ref("aurora")

const changeGame= (game) => {
    currentGame.value = game
}

</script>

<template>

	<ul id="menu" class="text-xl px-5 fixed text-white top-1/4 w-66 z-50 p-2 rounded-box">


		<li class="font-bold py-3 ">
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

		<li class="font-bold py-3">
		<span>Autres</span>
		</li>
		<li class="px-5 py-3 cursor-pointer hover:bg-sky-700 active:bg-sky-500" @click="changeGame('sites')"><a>Sites</a></li>
		<li class="px-5 py-3 cursor-pointer hover:bg-sky-700 active:bg-sky-500" @click="changeGame('prototypes')"><a>Prototypes</a></li>
	</ul>

    <div class="flex justify-around flex-wrap">
		<action53web v-if="currentGame=='action53web'"></action53web>

		<action53r v-if="currentGame=='action53r'"></action53r>

		<aurora v-if="currentGame=='aurora'"></aurora>
        
		<pasjeu v-if="currentGame=='pasjeu'"></pasjeu>

		<soleil v-if="currentGame=='soleil'"></soleil>

		<sites v-if="currentGame=='sites'"></sites>

		<prototypes v-if="currentGame=='prototypes'"></prototypes>
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
		background-image: url("img/bg.jpg");	
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 1;
	}

	#menu {
		font-family: Lato;
	}
</style>