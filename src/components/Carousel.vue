<template>
	<div class="carousel slide" >
		<ol class="carousel-indicators">
			
		</ol>
		<div class="carousel-inner">
			<slot></slot>
		</div>
	</div>
</template>

<script >

export default {
	mounted() {
		this.interval = setInterval(() => {
			this.next()
		}, 5000)
	},
	 beforeDestroy () {
      clearInterval(this.interval)
      this.sliding = false
    },
	methods: {
		to() {

		},
		next() {

		},
		prev() {

		}
	}
}
</script>