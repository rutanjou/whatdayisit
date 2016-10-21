(function(){	
	var app = {
		jour:null,
		week:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		mounth:null,
		year:null,
		init:function(){
			app.listeners();
		},
		listeners:function(){
			$("#button").on('click',function(){
				app.jour = $("#jour").val();
				app.mounth = $("#mois").val();
				app.year = $("#annee").val();
				app.verif();
				app.affiche();
			});
		},
		verif: function(){
			if(app.jour >= 1 && app.jour <= 31){

			}else {
				console.log("Error");
			}
			if(app.year > 0){	
			
			}else {
				console.log("Error");
			};
			console.log(app.mounth + '/'+ app.jour +'/'+ app.year);
		},
		affiche: function(){
			var date = moment(app.jour +'/'+ app.mounth +'/'+ app.year);
			var jour = date.format("dddd",'fr');
			console.log(jour);
			



		},



	};
	app.init();
})();
