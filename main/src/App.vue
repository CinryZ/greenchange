<template>
  
  	<main>	
  		<div id="app">
  			<router-view></router-view>
  		</div>
    <!-- <router-link to="index">点击进入应用>></router-link> -->
    <v-footer></v-footer>
    
    </main>
  
</template>

<script>
	import vfooter from './component/nav/footer.vue'
	export default {
	  name: 'app',
	  components:{
	  	'v-footer':vfooter
	  }
	};
</script>
<style scoped>
	
</style>
