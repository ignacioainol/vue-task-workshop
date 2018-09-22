new Vue({
	el: '#appVue',
	data:{
		lists:[
			// {keep: 'Eins', completed: false},
			// {keep: 'Zwei', completed: false},
			// {keep: 'drei', completed: true}
		],
		newKeep: ''
	},
	methods: {
		addKeep: function(){
			this.lists.push({keep: this.newKeep, completed: false });
			this.newKeep = '';
		}
	}
})