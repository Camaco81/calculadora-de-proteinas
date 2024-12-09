const app = Vue.createApp({

	data(){
		return{
			seleccion:"Selecione una opcion",
			variableProtein:0,
			peso:0,
			result:0,
		}
	},
	methods:{
		comprobarYCalular(){
			if (this.seleccion=="moderado") {
				this.calcularModerado();
			}else{
				this.calcularAltaIntesidad();
			}
		},
		calcularModerado(){
			let proteina=this.variableProtein=1.6;
			let pesoEnkl=this.peso;
				this.result="La catidad de proteina que debe consumir a diario es "+" "+pesoEnkl*proteina;


		},
		calcularAltaIntesidad(){
			let proteina=this.variableProtein=2.0;
			let pesoEnkl=this.peso;
			this.result="La catidad de proteina que debe consumir a diario es "+" "+pesoEnkl*proteina;
		}
	}
}).mount("#app");