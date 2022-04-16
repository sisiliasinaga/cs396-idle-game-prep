console.log("hello world")

document.addEventListener("DOMContentLoaded", function(){
   console.log("is page loaded?")
	// Vue, take control of SOME ELEMENT
	new Vue({
		template: `
			<div>
			A REACTIVE PAGE by {{name}}

			<button @click="score">get point</button>

			<button @click="buy">get token</button>

			points: {{points}}

			tokens: {{tokens}}
			</div>
		`,
		el: "#app",

		methods: {
			score() {
				console.log("SCORE")
				// Incret
				this.points += 1
			},

			buy() {
				console.log("BUY")
				if (this.points >= 10) {
					this.points -= 10
					this.tokens += 1
				}
				else {
					console.log("Need at least 10 points")
				}
			}
		},


		mounted() {
			console.log("heelllloo?")

			/*
			setInterval(() => {
				console.log("Tick")
				this.points += 1
			}, 300)
			*/
		},

		data: {
			points: 0,
			tokens: 0,
			name: "Kate",
			emoji: ["💖"]
		}
	}) 
});

