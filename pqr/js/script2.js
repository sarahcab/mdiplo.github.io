//////Variables globales
var nuancier = ["#E58A30", "#C31A1D","#3C5E48", "black", "#A3A3A3", "#FCFCFC","#333333","#C1C1C1"];
var choro = ["#F2F2F2","#D3D3D3","#97C9C7","#379BA5","#1F6777"]
var decalDiv = 364.5;
var ancDate = 1945;
var date = 1945;
var mode = "datePrec";
var choix = "Date 1";
	
//carte
var deform = 2;
var widthBarres = 3.8;
var heightBarres = widthBarres*deform;
var heightOmbres = heightBarres/2;
var width = 1000; 
var height = 600;
var transformation ="scale3d("+deform+", 1, 15)";

var projection = d3.geo.albers() 
	.center([9, 41.5])
	.rotate([-10, 0])
	.parallels([43, 62])
	.scale(1700)
	.translate([width / 2, height / 2]);

//3d
var decalageX = widthBarres/deform //3d barres
var decalageY = heightBarres/deform //3d barres
var skewB = Math.atan(decalageX/decalageY) //côté gauche
var skewC = Math.atan(decalageY/decalageX) //couvercle
var skewA = 0.8; //ombre
var transformation2 = transformation + " translate(-"+decalageX/2+"px, "+decalageY/2+"px)";

//legende 
var placeX = 310;
var placeY = 170;

//graphique
var zero = 145; //y zero
var x1945 = 30;
var pasX = 8;
var nbGrad = 4;

var echTit = 0.5; // data : 1 = 1000
var echTir = 1; // data : 1 = 100 000
var debut = x1945; 
var end = debut + pasX*69; //longueur de 1945 à 2014 (pasX = 1 ans)
var hauteur = 100;
var recSize = 10;
var recBigSize = pasX*5 + 10;
var recSize2014 = pasX*4 + 10;

var SWcourbe = 1.5;

//Définies à partir des données
var nomsVilles = [];
var listeVilles = new Object();
queue()											
	.defer(d3.csv,"data/coordVilles.csv")
	.await(callback0); 

function callback0(error, geo){ 
	for(i=0;i<geo.length;i++){
		 nomsVilles.push(geo[i].Ville)
		 listeVilles[geo[i].Ville] = [0, [], [], [], [], [], [], [], []]
	}
}

var nomsDepts = ["d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12","d13","d14","d15","d16","d17","d18","d19","d21","d22","d23","d24","d25","d26","d27","d28","d29","d30","d31","d32","d33","d34","d35","d36","d37","d38","d39","d40","d41","d42","d43","d44","d45","d46","d47","d48","d49","d50","d51","d52","d53","d54","d55","d56","d57","d58","d59","d60","d61","d62","d63","d64","d65","d66","d67","d68","d69","d70","d71","d72","d73","d74","d75","d76","d77","d78","d79","d80","d81","d82","d83","d84","d85","d86","d87","d88","d89","d90","d91","d92","d93","d94","d95","d2A","d2B"]
var listeDept = {
	d1	:	[0],
	d2	:	[0],
	d3	:	[0],
	d4	:	[0],
	d5	:	[0],
	d6	:	[0],
	d7	:	[0],
	d8	:	[0],
	d9	:	[0],
	d10	:	[0],
	d11	:	[0],
	d12	:	[0],
	d13	:	[0],
	d14	:	[0],
	d15	:	[0],
	d16	:	[0],
	d17	:	[0],
	d18	:	[0],
	d19	:	[0],
	d21	:	[0],
	d22	:	[0],
	d23	:	[0],
	d24	:	[0],
	d25	:	[0],
	d26	:	[0],
	d27	:	[0],
	d28	:	[0],
	d29	:	[0],
	d30	:	[0],
	d31	:	[0],
	d32	:	[0],
	d33	:	[0],
	d34	:	[0],
	d35	:	[0],
	d36	:	[0],
	d37	:	[0],
	d38	:	[0],
	d39	:	[0],
	d40	:	[0],
	d41	:	[0],
	d42	:	[0],
	d43	:	[0],
	d44	:	[0],
	d45	:	[0],
	d46	:	[0],
	d47	:	[0],
	d48	:	[0],
	d49	:	[0],
	d50	:	[0],
	d51	:	[0],
	d52	:	[0],
	d53	:	[0],
	d54	:	[0],
	d55	:	[0],
	d56	:	[0],
	d57	:	[0],
	d58	:	[0],
	d59	:	[0],
	d60	:	[0],
	d61	:	[0],
	d62	:	[0],
	d63	:	[0],
	d64	:	[0],
	d65	:	[0],
	d66	:	[0],
	d67	:	[0],
	d68	:	[0],
	d69	:	[0],
	d70	:	[0],
	d71	:	[0],
	d72	:	[0],
	d73	:	[0],
	d74	:	[0],
	d75	:	[0],
	d76	:	[0],
	d77	:	[0],
	d78	:	[0],
	d79	:	[0],
	d80	:	[0],
	d81	:	[0],
	d82	:	[0],
	d83	:	[0],
	d84	:	[0],
	d85	:	[0],
	d86	:	[0],
	d87	:	[0],
	d88	:	[0],
	d89	:	[0],
	d90	:	[0],
	d91	:	[0],
	d92	:	[0],
	d93	:	[0],
	d94	:	[0],
	d95	:	[0],
	d2A	:	[0],
	d2B	:	[0]
}

window.onload = initialize();

//////Fonctions

//fonction princiaple
function initialize(){ 

	//Dessin initial
	drawInit(date);
	actions();
	//buildGraph(2014);

};

//construction des listes à chaque date
function calc(dataset){	
	//initialisation des listes
	for (k=0; k<dataset.length; k++){	
		var idVille = dataset[k].villeOk;
		listeVilles[idVille][0] = 0;
		listeVilles[idVille][1] = [];
		listeVilles[idVille][2] = [];
		listeVilles[idVille][3] = [];
		listeVilles[idVille][4] = [];
		listeVilles[idVille][5] = [];
		listeVilles[idVille][6] = [];
		listeVilles[idVille][7] = [];
		listeVilles[idVille][8] = [];
		listeVilles[idVille][9] = [];
	}
	
	for(n=0;n<nomsDepts.length;n++){
		var idD = nomsDepts[n];
		listeDept[idD] = [0];
	}
	
	//mise à jour des listes
	if(mode=="datePrec"){
		var nDate = date;
		for (j=0; j<dataset.length; j++){
			if (dataset[j].Annee >= nDate && dataset[j].Deb_ann <= nDate){
				var idVille = dataset[j].villeOk;
				listeVilles[idVille][0] ++; //nombre de quotiiden par ville
				listeVilles[idVille][3].push(dataset[j].Titre1); //liste des quotidiens dans une ville
				listeVilles[idVille][6].push(dataset[j].Liste_entites); //Aide diffusion des quotidiens
				listeVilles[idVille][8].push(dataset[j].payant); //Payant ou non
				listeVilles[idVille][9].push(dataset[j].appartenance); //Payant ou non
				var string = dataset[j].Liste_entites;
				var liste = string.split(",");
				if(liste[0]=="none"||liste[0]=="National"){
				}else if (liste[0]){
					for(p=0;p<liste.length;p++){	
						var id = liste[p];
						console.log(id)
						listeDept["d"+id][0] ++; //nombre de quotidiens par département
					}
				}
			}
		}
		for (l=0; l<dataset.length; l++){
			if (dataset[l].Annee == nDate){
				var idVille = dataset[l].villeOk;
				listeVilles[idVille][1].push(dataset[l].Fin_type); //type des disparitions
				listeVilles[idVille][1].push(dataset[l].Titre1);	//nom des disparitions
				listeVilles[idVille][4].push(dataset[l].Liste_entites);	//localisation des disparitions
			}
		}
		for (m=0; m<dataset.length; m++){
			if (dataset[m].Deb_ann == nDate){
				var idVille = dataset[m].villeOk;
				listeVilles[idVille][2].push(dataset[m].Titre1); //nombre des quotidiens apparus
			}
			if (dataset[m].date_change == nDate){
				var idVille = dataset[m].villeOk;
				listeVilles[idVille][7].push(dataset[m].Titre1); //nombre des quotidiens apparus
				listeVilles[idVille][7].push(dataset[m].changement_nom); //nombre des quotidiens apparus
			}
		}
	} else if(mode=="compare"){
		//sens du changement de date
		if (date=>ancDate){
			var nDate = date;
			var vDate = ancDate
		} else {
			var nDate = ancDate
			var vDate = date
		}
		for (j=0; j<dataset.length; j++){
			if (dataset[j].Annee >= nDate && dataset[j].Deb_ann <= nDate){
				var idVille = dataset[j].villeOk;
				listeVilles[idVille][0] ++; //nombre de quotidiens à la date 2
				listeVilles[idVille][3].push(dataset[j].Titre1); //liste des quotidiens à la date 2
				listeVilles[idVille][6].push(dataset[j].Liste_entites); //aire de diffusion de ces quotidiens 
				listeVilles[idVille][8].push(dataset[j].payant); //payant
				listeVilles[idVille][9].push(dataset[j].appartenance); //payant
				var string = dataset[j].Liste_entites;
				var liste = string.split(",");
				if(liste[0]=="none"||liste[0]=="National"){
				}else if (liste[0]){
					for(p=0;p<liste.length;p++){	
						var id = liste[p];
						listeDept["d"+id][0] ++;
					}
				}
			}
			if (dataset[j].Annee >= vDate && dataset[j].Deb_ann <= vDate){
				var idVille = dataset[j].villeOk;
				listeVilles[idVille][5] ++; //nombre de quotidiens (ancienne date)
			}
		}
		for (l=0; l<dataset.length; l++){
			if (dataset[l].Annee >= vDate && dataset[l].Annee <= nDate){
				var idVille = dataset[l].villeOk;
				listeVilles[idVille][1].push(dataset[l].Fin_type); //liste de squotidiens disparus entre deux dates et leur tupe
				listeVilles[idVille][1].push(dataset[l].Titre1);	
				listeVilles[idVille][4].push(dataset[l].Liste_entites);	 // aire de diffusion de ces quotidiens
			}
		}
		for (m=0; m<dataset.length; m++){
			if (dataset[m].Deb_ann >= vDate && dataset[m].Deb_ann <= nDate){
				var idVille = dataset[m].villeOk;
				listeVilles[idVille][2].push(dataset[m].Titre1); //liste des apparitions entre deux dates
			}
			if (dataset[m].date_change >= vDate && dataset[m].date_change <= nDate){
				var idVille = dataset[m].villeOk;
				listeVilles[idVille][7].push(dataset[m].Titre1); //nombre des quotidiens apparus
				listeVilles[idVille][7].push(dataset[m].changement_nom); //nombre des quotidiens apparus
			}
		}
	}
}

function actions(){
	
	var compare = document.getElementById("compare")
	compare.onclick =  function(){
		modeCompare()
	}
	
	var datePrec = document.getElementById("datePrec")
	datePrec.onclick = function(){
		modeDatePrec()
	}

	
	var inter2 = document.getElementById("mousemo");
	inter2.onmousemove = function(e){
		move(e);
	}
	inter2.onclick = function(){
		afficheEvol();
	}
		
		// .on("mousemove", function(){
			
		// })
		// .on("click",function(){
			// afficheEvol();
		// })
		// .append("div")
		// .style("position","absolute")
		// .style("height",hauteur+"px")
		// .attr("id","masque")
		// .style("opacity",0.8)
		// .style("background-color",nuancier[3])	
		// .style("margin-top",zero-hauteur+"px")
		// .style("margin-left",x1945+"px")
		// .attr("x",x1945)
		// .attr("largeur",x1945)
		// .append("p")
		// .attr("id","indic")
		// .html(1945);
	
	// d3.select("#masque")
		// .append("p")
		// .attr("id","indicAnc")
}

function modeCompare(){
	ancDate = date;
	d3.select("#compare").style("display","none");
	d3.select("#datePrec").style("display","");
	d3.select("#schem").selectAll(".choixComp").style("display","block");
	d3.select("#schem").selectAll(".choixOne").style("display","none");

	mode = "compare";
	d3.select("#carte").selectAll(".labDouble").style("display","block")
	d3.select("#carte").selectAll(".labSimple").attr("fill",nuancier[3])
	d3.select("#carte").selectAll(".labSimple").attr("opacity",0.4)
}

function modeDatePrec(){
	d3.select("#datePrec").style("display","none");
	d3.select("#compare").style("display","");
	d3.select("#carte").selectAll(".barreAnc").style("display","none");
	d3.select("#schem").selectAll(".choixComp").style("display","none");
	d3.select("#schem").selectAll(".choixOne").style("display","block");
	mode = "datePrec";
	d3.select("#carte").selectAll(".labDouble").style("display","none")
	d3.select("#carte").selectAll(".labSimple").attr("fill",nuancier[1])
	d3.select("#carte").selectAll(".labSimple").attr("opacity",0.7)
}


//construction des éléments de départ
function drawInit(date) {

	//svg : 2 (cadre et hors cadre)
	var map = d3.select("#inter") 
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("id", "carte")	
		.style("overflow", "visible")
		
	var schem = d3.select("#inter2") 
		.append("svg")
		.attr("width", width-200)
		.attr("x", 1200)
		.attr("height", height)
		.attr("id", "schem")
		.style("overflow", "visible")
		.style("position", "absolute")
	
	schem.append("rect")
		.attr("width", end-debut)
		.attr("height", hauteur)
		.attr("id", "mousemo")
		.attr("x",debut)
		.attr("y",zero-hauteur)
		.attr("opacity",0)
	
	var path = d3.geo.path() 
		.projection(projection);
	
	graphInit();
		
	queue()											
		.defer(d3.json, "data/eu.topojson") 
		.defer(d3.json, "data/dept3.json") 
		.defer(d3.csv,"data/coordVilles.csv")
		.defer(d3.csv,"data/Nombre_tirages.csv")
		.defer(d3.csv,"data/quotidiens.csv")
		.await(callback5); 

	function callback5(error, dataPays, dataFrance, geo, data, dataset){ //geo pays - geo depts - villes - tirage - noms quotidiens 
	
		calc(dataset);
		var nbr = geo.length;
		
		//reflet barre National
		var xnat = projection([geo[0].cX, geo[0].cY])[0];
		var ynat = projection([geo[0].cX, geo[0].cY])[1];
		
		var gradient2 = d3.select("#schem")
			.append("linearGradient")
			.attr("id", "SVGID_2_")
			.attr("gradientUnits", "userSpaceOnUse")
			.attr("x1", xnat)
			.attr("x2", xnat)
			.attr("y1", ynat-40)
			.attr("y2", parseFloat(ynat)+150)
			
		gradient2.selectAll("stop").data([["0.2857","stop-color:#FFFFFF"],["0.7086", "stop-color:#FFFFFF;stop-opacity:0"]])
				.enter()
				.append("stop")
				.attr("offset", function(d){
					return d[0];
				})
				.attr("style", function(d){
					return d[1];
				});

		map.append("rect")
			.attr("x", xnat-decalageX)
			.attr("y", ynat)
			.attr("width", widthBarres+parseFloat(decalageX))
			.attr("height", heightBarres*listeVilles[geo[0].Ville][0])
			.attr("fill", nuancier[4])
			.attr("opacity", 0.1)
			.style("transform", transformation2)
		
		map.append("rect")
			.attr("id","barre_r")
			.attr("x", xnat-decalageX)
			.attr("y", ynat)
			.attr("width", widthBarres+parseFloat(decalageX))
			.attr("height", heightBarres*listeVilles[geo[0].Ville][0])
			.attr("fill", function(){
				return nuancier[0]
			})
			.attr("opacity", 0.2)
			.style("transform", transformation2)
			
		map.append("rect")
			.attr("x", xnat-5)
			.attr("y", ynat)
			.attr("width", parseFloat(widthBarres)+10)
			.attr("height", 200)
			.attr("fill", "url(#SVGID_2_)")
			.style("transform", transformation2)

		////entites geo
			
		// var pays = map.selectAll(".pays")  
			// .data(topojson.feature(dataPays,
				// dataPays.objects.europe).features)
			// .enter() 
			// .append("path") 
			// .attr("class", "pays") 
			// .attr("d", path) 
			// .attr("opacity", 0.5)
			// .attr("fill", nuancier[5]) //initialement #FAFAFA
			// .style("transform", transformation);
	
		var depts = map.selectAll(".depts")  
			.data(topojson.feature(dataFrance,
				dataFrance.objects.nuts3).features)
			.enter() 
			.append("path") 
			.attr("class", "depts") 
			.attr("d", path) 
			.attr("opacity",0.7)
			.attr("code", function(d){
				var code = d.properties.nuts_id;
				var result = "";
				if(code.length==8){
					result = code[6] + code[7];
				} else if(code.length==7){
					result = code[6];
				}
				return result;
			})
			.attr("id", function(d){
				var code = d.properties.nuts_id;
				var result = code;
				if(code.length==8){
					result = "d"+code[6] + code[7];
				}
				return result;
			})
			.attr("stroke", "#FFFFFF")
			.attr("fill", "#FFFFFF")
			.attr("stroke-width", 0.5)
			.attr("stroke-dasharray", "0,80")
			.style("transform", transformation)
		
		
		map.selectAll(".depts") 
			.transition()
			.duration(5000)
			.attr("stroke-dasharray", "80,0");

			
		//groupes ville : nécessaire à la disposition
		var gVilles = map.selectAll(".gVille")
			.data(geo)
			.enter()
			.append("g")
			.attr("class", "gVille")
			.attr("Ville", function(d){
				return "gr_"+d.Ville
			})
			.attr("cX", function(d) {
				return projection([d.cX, d.cY])[0]
			})
			.attr("cY", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.append("g")
			.attr("class","barreAnc")
			
		var hoverC = map.selectAll(".gVille")
			.append("circle")
			.attr("class", "hoverc")
			.attr("fill", "#FFFFFF")
			.attr("id", function(d){
				return "c_"+d.Ville
			})
			.attr("cx", function(d) {
				return parseFloat(projection([d.cX, d.cY])[0])+widthBarres/2;
			})
			.attr("cy", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.attr("r", 0)
			.style("transform", transformation2)	
			
		//support
		// var traits = schem.selectAll(".gVille")		
			// .append("rect")
			// .attr("y", function(d) {
				// return projection([d.cX, d.cY])[1] - heightBarres + 3;
			// })
			// .attr("x", function(d) {
				// return projection([d.cX, d.cY])[0] - 1.5;
			// })
			// .attr("width", parseFloat(widthBarres) + 3)
			// .attr("height", heightBarres - 1.5)
			// .attr("stroke", nuancier[6])
			// .attr("stroke-width", 0.5)
			// .attr("fill", "none")
			// .attr("class", "trait")
			// .style("transform", transformation2)
			// .attr("id", function(d){
				// return "tr_"+d.Ville
			// })
			// .style("transform", function(d){
				// var decalY = parseFloat(projection([d.cX, d.cY])[1]);	
 				// var decalX = (Math.tan(skewB)*decalY) //+parseFloat(decalageX);
 				// return transformation2+" skewX("+skewB+"rad) translate(-"+decalX+"px)";
 			// });
	
		// Ombre (date choisie)
		var ombre = map.selectAll(".gVille")
			.append("rect")
			.attr("x", function(d) {
				return projection([d.cX, d.cY])[0]
			})
			.attr("y", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.attr("y0", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.attr("width", widthBarres)
			.attr("height", 0)
			.attr("fill", function(d){
				if(d.Ville == "National"){
					return nuancier[0]
				} else {
					return nuancier[1]
				}
			})
			.attr("class", "ombre")
			.attr("opacity", 0.2)
			.attr("id", function(d){
				return "omb_"+d.Ville
			})
			.style("transform", function(d){
				var decalY = parseFloat(projection([d.cX, d.cY])[1]);		
 				var decalX = Math.tan(skewA)*decalY;
 				return transformation2+" skewX("+skewA+"rad) translate(-"+decalX+"px)";
 			});
			
 		// Ombres (1945)
 		var ombre19 = map.selectAll(".barreAnc")
			.append("rect")
			.attr("x", function(d) {
				return projection([d.cX, d.cY])[0]
			})
			.attr("y", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1])
			})
			.attr("y0", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1])
			})
			.attr("width", widthBarres)
			.attr("height", function(d){
 				return heightOmbres*listeVilles[d.Ville][0]	
 			})
			.attr("class", "ombre19")
			.attr("opacity", 0.1)
			.attr("fill", nuancier[4])
			.attr("id", function(d){
				return "omb19_"+d.Ville
			})
			.style("transform", function(d){
				var decalY = parseFloat(projection([d.cX, d.cY])[1]);		
 				var decalX = Math.tan(skewA)*decalY;
 				return transformation2+" skewX("+skewA+"rad) translate(-"+decalX+"px)";
 			});
 		
		
		//elements 3d fixes (1945)
		//côté gauche
		var barresA19 = map.selectAll(".barreAnc")
			.append("rect")
			.attr("x", function(d) {
				return projection([d.cX, d.cY])[0]
			})
			.attr("y", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.attr("y0", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.attr("width", decalageX)
			.attr("height", function(d){	
				return heightBarres*listeVilles[d.Ville][0]	
			})
			.attr("fill", nuancier[3])
			.attr("opacity", 0.5)
			.attr("class", "barresA19")
			.attr("id", function(d){
				return "b19A_"+d.Ville
			})
			.style("transform", function(d){
				var decalX = parseFloat(projection([d.cX, d.cY])[0]);		
 				var decalY = Math.tan(skewC)*decalX;
 				return transformation2+" skewY("+skewC+"rad) translate(-"+decalageX+"px,-"+decalY+"px)";
 			});
			
		//plafond
		var barresB19 = map.selectAll(".barreAnc")
			.append("rect")
			.attr("x", function(d) {
				return projection([d.cX, d.cY])[0]
			})
			.attr("y", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.attr("y0", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.attr("width", widthBarres)
			.attr("height", decalageY)
			.attr("fill", nuancier[3])
			.attr("opacity", 0.3)
			.attr("class", "barresB19")
			.attr("id", function(d){
				return "b19B_"+d.Ville
			})
			.style("transform", function(d){
				var decalY = parseFloat(projection([d.cX, d.cY])[1]) - heightBarres*listeVilles[d.Ville][0];		
 				var decalX = (Math.tan(skewB)*decalY) //+parseFloat(decalageX);
 				return transformation2+" skewX("+skewB+"rad) translate(-"+decalX+"px, -"+decalageY+"px)";
 			});
		
		//elements 3d mobiles	
		//côté gauche
		var barresA = map.selectAll(".gVille")
			.append("rect")
			.attr("x", function(d) {
				return projection([d.cX, d.cY])[0]
			})
			.attr("y", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]) - heightBarres*listeVilles[d.Ville][0];
			})
			.attr("stroke-width",0.1)
			.attr("stroke",nuancier[4])
			.attr("width", decalageX)
			.attr("height", function(d){	
				return heightBarres*listeVilles[d.Ville][0]	
			})
			.attr("y0", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.attr("fill", function(d){
				if(d.Ville == "National"){
					return nuancier[0]
				} else {
					return nuancier[1]
				}
			})
			.attr("opacity", 0.8)
			.attr("class", "barresA")
			.attr("id", function(d){
				return "bA_"+d.Ville
			})
			.style("transform", function(d){
				var decalX = parseFloat(projection([d.cX, d.cY])[0]);		
 				var decalY = Math.tan(skewC)*decalX;
 				return transformation2+" skewY("+skewC+"rad) translate(-"+decalageX+"px,-"+decalY+"px)";
 			});
		
		//plafond
		var barresB = map.selectAll(".gVille")
			.append("rect")
			.attr("x", function(d) {
				return projection([d.cX, d.cY])[0]
			})
			.attr("y", function(d) {
				var val = parseFloat(projection([d.cX, d.cY])[1]) - heightBarres*listeVilles[d.Ville][0];
				return parseFloat(projection([d.cX, d.cY])[1]) - heightBarres*listeVilles[d.Ville][0];
			})
			.attr("width", widthBarres)
			.attr("height", decalageY)
			.attr("stroke-width",0.1)
			.attr("stroke",nuancier[4])
			.attr("fill", function(d){
				if(d.Ville == "National"){
					return nuancier[0]
				} else {
					return nuancier[1]
				}
			})
			.attr("y0", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.attr("opacity", 0.8)
			.attr("class", "barresB")
			.attr("id", function(d){
				return "bB_"+d.Ville
			})
			.style("transform", function(d){
				var decalY = parseFloat(projection([d.cX, d.cY])[1]) - heightBarres*listeVilles[d.Ville][0];	
 				var decalX = (Math.tan(skewB)*decalY) //+parseFloat(decalageX);
 				return transformation2+" skewX("+skewB+"rad) translate(-"+decalX+"px, -"+decalageY+"px)";
 			});
			
		
		//barres de face
		//en 1945
		var barres19 = map.selectAll(".barreAnc")
			.append("rect")
			.attr("x", function(d) {
				return projection([d.cX, d.cY])[0]
			})
			.attr("y", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.attr("y0", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.attr("width", widthBarres)
			.attr("height", function(d){	
				return heightBarres*listeVilles[d.Ville][0]	
			})
			.attr("fill", nuancier[3])
			.attr("opacity", 0.2)
			.style("transform", transformation2)
			.attr("class", "barres19")
			
			.attr("id", function(d){
				return "b19_"+d.Ville
			})
		
		//date choisie
		var barres = map.selectAll(".gVille")
			.append("rect")
			.attr("x", function(d) {
				return projection([d.cX, d.cY])[0]
			})
			.attr("y", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]) - height;
			})
			.attr("y0", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.attr("width", widthBarres)
			.style("opacity", 0.7)
			.attr("height", 0)
			.attr("stroke-width",0.1)
			.attr("stroke",nuancier[4])
			.attr("fill", function(d){
				if(d.Ville == "National"){
					return nuancier[0]
				} else {
					return nuancier[1]
				}
			})
			.style("transform", transformation2)
			.attr("class", "barres")
			.attr("ville",  function(d){
				return d.Ville
			})
			.attr("id", function(d){
				return "b_"+d.Ville
			})
			.on("mouseover", function(){
				hoverVille(this);
			})
			.on("mouseout", function(){
				outVille(this);
			})
			.on("click", function(){
				labelVille(this);
			})

		//texte survol : nom de la Ville
		var hovert = map.selectAll(".gVille")	
			.append("text")
			.attr("id", function(d){
				return "t_"+d.Ville
			})
			.attr("class", "hovert")
			.attr("x", function(d) {
				return parseFloat(projection([d.cX, d.cY])[0] +10)*deform;
			})
			.attr("y", function(d) {
				return parseFloat(projection([d.cX, d.cY])[1]);
			})
			.html(function(d){
				return d.Ville
			})
			//.attr("fill", nuancier[3])
			.attr("font-size", 12)
			.attr("opacity", 0)
			.style("display","none");
		
				
		/////construction de la légende//////////////////////////////////////////////////`
		
		//cadre
		d3.select("#carte")
			.append("rect")
			.attr("x",placeX-40)
			.attr("y",placeY-30)
			.attr("width",80)
			.attr("height",110)
			.attr("fill","#FFFFFF")
			.attr("opacity",0.8)
			//.attr("stroke",nuancier[4])
			.attr("rx",5)
			.style("transform", transformation)

		d3.select("#carte")
			.append("rect")
			.attr("x",placeX-40)
			.attr("y",parseFloat(placeY)+150)
			.attr("width",80)
			.attr("height",200)
			.attr("rx",5)
			.attr("opacity",0.8)
			.attr("fill","#FFFFFF")
			//.attr("stroke",nuancier[4])
			.style("transform", transformation)
		
		//nombre de quotidiens : barres

		d3.select("#carte")
			.append("rect")
			.attr("fill", nuancier[3])
			.attr("class", "legendeF")
			.attr("width", widthBarres)
			.attr("opacity", 0.5)
			.attr("height", heightBarres*6)
			.attr("x",placeX)
			.attr("y",parseFloat(placeY)+210)
			.attr("class","labSimple")
			.style("transform", transformation)
			.attr("opacity",0.2)
		
		d3.select("#carte")
			.append("rect")
			.attr("fill", nuancier[3])
			.attr("x",placeX)
			.attr("y",placeY+210-decalageY)
			.attr("class","labSimple")
			.attr("width", decalageX)
			.attr("height", heightBarres*6)
			.attr("opacity", 0.5)
			.style("transform", function(d){
				var decalX = placeX;		
 				var decalY = Math.tan(skewC)*decalX;
 				return transformation2+" skewY("+skewC+"rad) translate(-"+decalageX/2+"px,-"+decalY+"px)";
 			});
			
		d3.select("#carte")
			.append("rect")
			.attr("fill", nuancier[3])
			.attr("x",placeX)
			.attr("y",placeY+210-decalageY)
			.attr("class","labSimple")
			.attr("width", widthBarres)
			.attr("height", decalageY)
			.attr("opacity", 0.4)
			.style("transform", function(d){
				var decalY = placeY+210-decalageY;
 				var decalX = (Math.tan(skewB)*decalY) //+parseFloat(decalageX);
 				return transformation2+" skewX("+skewB+"rad) translate(-"+decalX+"px, -"+decalageY/2+"px)";
 			});
			
		d3.select("#carte")
			.append("rect")
			.attr("fill", nuancier[1])
			.attr("class","labDouble")
			.attr("width", widthBarres)
			.attr("height", heightBarres)
			.attr("x",placeX)
			.attr("y",placeY+heightBarres*5+210)
			.style("transform", transformation)
			.attr("opacity",0.7)
		
		d3.select("#carte")
			.append("rect")
			.attr("fill", nuancier[1])
			.attr("class","labDouble")
			.attr("x",placeX)
			.attr("y",placeY+heightBarres*5+210-decalageY)
			.attr("width", decalageX)
			.attr("height", heightBarres)
			.attr("opacity", 0.8)
			.style("transform", function(d){
				var decalX = placeX;		
 				var decalY = Math.tan(skewC)*decalX;
 				return transformation2+" skewY("+skewC+"rad) translate(-"+decalageX/2+"px,-"+decalY+"px)";
 			});
		
		d3.select("#carte")
			.append("rect")
			.attr("class","labDouble")
			.attr("fill", nuancier[1])
			.attr("x",placeX)
			.attr("y",placeY+heightBarres*5+210-decalageY)
			.attr("width", widthBarres)
			.attr("height", decalageY)
			.attr("opacity", 0.8)
			.style("transform", function(d){
				var decalY = placeY+heightBarres*5+210-decalageY;
 				var decalX = (Math.tan(skewB)*decalY) //+parseFloat(decalageX);
 				return transformation2+" skewX("+skewB+"rad) translate(-"+decalX+"px, -"+decalageY/2+"px)";
 			});
			
	
		//graduations
		d3.select("#carte").selectAll(".traitsLeg")
			.data([
				[parseFloat(placeX)+3,parseFloat(placeX)+9,placeY+heightBarres*5+210, "1,1","#000000","traitLeg"],
				[parseFloat(placeX)+3,parseFloat(placeX)+9,parseFloat(placeY)+210, "1,1","#000000","traitLeg"],
				[placeX-3,placeX,parseFloat(placeY)+210,"","#000000","traitLeg labDouble"],
				[placeX-3,placeX,placeY+heightBarres*5+210,"","#000000","traitLeg labDouble"]
			])
			.enter()
			.append("line")
			.attr("stroke-width", 0.5)
			.attr("stroke", function(d){
				return d[4]
			})
			.attr("class",  function(d){
				return d[5]
			})
			.style("transform", transformation)
			.attr("x1", function(d){
				return d[0]
			})
			.attr("x2",function(d){
				return d[1]
			})
			.attr("y1", function(d){
				return d[2]
			})
			.attr("y2", function(d){
				return d[2]
			})
			.attr("stroke-dasharray", function(d){
				return d[3]
			});
		
		//textes
		d3.select("#carte").selectAll(".txtLeg")
			.data([
				[parseFloat(placeY)+215,"",(placeX-20)*deform,14,"labAnc"],
				[placeY+heightBarres*5+215,"",(placeX-20)*deform,14,"labDate"],
				[placeY+heightBarres*5+215,"1",(parseFloat(placeX)+10)*deform,14,"b"],
				[parseFloat(placeY)+215,"6",(parseFloat(placeX)+10)*deform,14,"c"],
				//[parseFloat(placeY)+85,"Moins de deux",(placeX-23)*deform,16],
				//[parseFloat(placeY)+100,"quotidiens par",(placeX-23)*deform,16],
				//[parseFloat(placeY)+115,"département",(placeX-23)*deform,16]
			])
			.enter()
			.append("text")
			.attr("class", "txtLeg")
			.attr("x", function(d){
				return d[2]
			})
			.attr("font-size", function(d){
				return d[3]
			})
			.attr("y",function(d){
				return d[0]
			})
			.attr("id",function(d){
				return d[4]
			})
			.text(function(d){
				return d[1]
			});
		
		//intitulés
		d3.select("#carte").selectAll(".titrelgende")
			.data([["Nombre de quotidiens",parseFloat(placeY+170),"int1"],["- par ville",parseFloat(placeY)+190,"int2"],["- par département ("+date+")",parseFloat(placeY)+295,"int3"]])
			.enter()
			.append("text")
			.attr("class", "titrelgende")
			.attr("x", (placeX-35)*deform)
			.attr("y",function(d){
				return d[1]
			})
			.attr("id",function(d){
				return d[2]
			})
			.attr("font-size", 18)
			.text(function(d){
				return d[0]
			})

		//entrées de légende
		d3.select("#carte").selectAll(".rcolor")
			.data([
				[nuancier[0],parseFloat(placeY)+10,placeX-33,widthBarres,heightBarres,1],
				[nuancier[1],parseFloat(placeY)-30,placeX-33,widthBarres,heightBarres,1],
				["red",parseFloat(placeY)+55,placeX-35,10,20,0.2]
				//[nuancier[7],parseFloat(placeY)+80,placeX-35,20/deform,20]
			])
			.enter()
			.append("rect")
			.attr("x", function(d){
				return d[2]
			})
			.attr("y", function(d){
				return d[1]
			})
			.attr("fill", function(d){
				return d[0]
			})
			.attr("width",  function(d){
				return d[3]
			})
			.attr("height",  function(d){
				return d[4]
			})
			.attr("opacity",  function(d){
				return d[5]
			})
			.attr("class", "rcolor")
			.style("transform", transformation)
			
		
		d3.select("#carte").selectAll(".textchoro")
			.data([["1"],["2"],["3"],["5"]])
			.enter()
			.append("text")
			.attr("class","textchoro")
			.attr("y",parseFloat(placeY)+345)
			.attr("x", function(d,i){
				return (placeX-25 + i*(12))*deform;
			})
			.attr("font-size",12)
			.text(function(d){
				return d[0]
			})

		d3.select("#carte").selectAll(".choro")
			.data([
				[choro[0]],
				[choro[1]],
				[choro[2]],
				[choro[3]],
				[choro[4]]
			])
			.enter()
			.append("rect")
			.attr("y", parseFloat(placeY)+310)
			.attr("x", function(d,i){
				return parseFloat(placeX)-35 + i*(12);
			})
			.attr("fill", function(d){
				return d[0]
			})
			.attr("width", 10)
			.attr("height", 20)
			.attr("class", "choro")
			.style("transform", transformation)
		
		var pointill = 3/deform;
		d3.select("#carte").selectAll(".lcolor")
			.data([
				[nuancier[1],parseFloat(placeY)-15,placeX-35,""],
				[nuancier[0],parseFloat(placeY)+25,placeX-35,""],
				[nuancier[1],parseFloat(placeY)-5,placeX-35,pointill+","+pointill],
				[nuancier[0],parseFloat(placeY)+35,placeX-35,pointill+","+pointill]
			])
			.enter()
			.append("line")
			.attr("x1", function(d){
				return d[2]
			})
			.attr("x2", function(d){
				return d[2]+10;
			})
			.attr("y1", function(d){
				return d[1]
			})
			.attr("y2", function(d){
				return d[1]
			})
			.attr("stroke", function(d){
				return d[0]
			})
			.attr("stroke-dasharray", function(d){
				return d[3]
			})
			.attr("stroke-width", SWcourbe)
			.attr("class", "lcolor")
			.style("transform", transformation)
		
		//txts locaux/nationaux
		d3.select("#carte").selectAll(".rtext")
			.data([["Nationaux",parseFloat(placeY)+30],["Locaux",parseFloat(placeY)-10],["Zone de diffusion",parseFloat(placeY)+70]])
			.enter()
			.append("text")
			.attr("x", (placeX-23)*deform)
			.attr("y", function(d){
				return d[1]
			})
			.text(function(d){
				return d[0]
			})
			.attr("font-size", 16)
			.attr("class", "rtext")
			
		//fonction de mise à jour
		majCarte(dataset, geo);
		majPage();
		d3.select("#carte").selectAll(".barreAnc").style("display","none");
		modeDatePrec();
	}
}

 function move(e){
	var x = e.clientX-decalDiv;
	date = parseInt(1945 + parseFloat((x - x1945)/pasX));
	//var x = parseFloat(x1945)+(date-1945)*pasX;
	if(mode == "datePrec"){
		d3.select("#survolDate")
	//	.transition()
	//	.duration(500)
		.attr("x1", x)
		.attr("x2", x)
	} else if(choix=="Date 1"){
		d3.select("#ancChoix")
		.attr("x1", x)
		.attr("x2", x)
	} else {
		d3.select("#choix")
		.attr("x1", x)
		.attr("x2", x)
	}
	d3.select("#indic")
		.attr("x", x)
		.text(date)
	
 }
// function move(){
	// var largeurInit = d3.event.clientX-decalDiv; //nouvelle valeur
	// var xInit = document.getElementById("masque").attributes.x.value; //ancienne valeur
	// var x = 0;
	// var largeur = 0;
	// dateGauche = "";
	// dateDroite = "";
	// if (xInit <= largeurInit){  //s'étend à droite
		// x = xInit; //position du div
		// largeur = largeurInit; //taille du div et prochaine position
		// date = parseInt(1945 + parseFloat((d3.event.clientX-decalDiv - x1945)/pasX));
	// } else {
		// largeur = xInit;
		// x = largeurInit;
		// ancDate = parseInt(1945 + parseFloat((d3.event.clientX-decalDiv - x1945)/pasX))
	// }
	// d3.select("#masque")
		// .style("margin-left", x + "px")
		// .style("width", largeur-x + "px")
		// .attr("largeur", largeur)
	// d3.select("#indic")
		// .style("margin-left", largeur-x-40+"px")
		// .html(date)
	
	// d3.select("#indicAnc")
		// .html(ancDate)
// }


function afficheEvol(){
	//date = 1970;
	//d3.select("body").selectAll(".infosE").transition().duration(500).style("opacity", 1);
	//d3.select("body").selectAll(".infosE").transition().style("display","block");
	if(choix=="Date 1" && mode=="compare"){
		choix = "Date 2";
		ancDate = date;
		buildGrap(ancDate);
		d3.select("#schem").append("rect")
		.attr("width", 0)
		.attr("height", hauteur)
		.attr("id", "cache")
		.attr("x",debut)
		.attr("y",zero-hauteur)
		.attr("fill","#FFFFFF")
		.attr("opacity",0.5)
		.attr("z-index",10)
		.transition()
		.duration(1000)
		.attr("width", (ancDdate-1945)*pasX)
	} else {
		if(choix=="Date 2"){
			choix = "Date 1"
		}
		queue()											
			.defer(d3.csv,"data/quotidiens.csv")
			.defer(d3.csv,"data/coordVilles.csv")
			.await(callback5); 

		function callback5(error, dataset, dataVille){
			majPage();
			majCarte(dataset, dataVille);
		}
	}
	
}

//construction des éléments du graphique
function graphInit(){
	//barre
	// d3.select("#carte")
		// .append("line")
		// .attr("x1",20)
		// .attr("x2",20)
		// .attr("y1",-120)
		// .attr("y2",600)
		// .attr("stroke","black")
	
	// d3.select("#carte")
		// .append("polygon")
		// .attr("points","20")
		
	//axes Y
	d3.select("#schem").selectAll(".axeY")
		.data([["yTit", debut, ""], ["yTir", end, "3,3"]])
		.enter()
		.append("line")
		.attr("class","axeY")
		.attr("id", function(d){
			return d[0]
		})
		.attr("x1", function(d){
			return d[1]
		})
		.attr("x2", function(d){
			return d[1]
		})
		.attr("stroke-dasharray", function(d){
			return d[2]
		})
		.attr("y1", zero)
		.attr("y2", zero-hauteur-15)
		.attr("stroke", nuancier[6])
		.attr("stroke-width",SWcourbe)
	
	//axe X
	d3.select("#schem")
		.append("line")
		.attr("class","axeX")
		.attr("id", "xTemps")
		.attr("x1", debut-1)
		.attr("x2", parseFloat(end)+1)
		.attr("y1", zero)
		.attr("y2", zero)
		.attr("stroke", nuancier[6])
		.attr("stroke-width",1.5)
	
	//labels
	d3.select("#schem").selectAll(".labelCourbes")
		.data([["Nombre de titres", debut-30,zero - hauteur - 25], ["Tirage (nombre de", end-90,zero - hauteur - 42], ["quotidiens par jour)", end-80,zero - hauteur - 25]])
		.enter()
		.append("text")
		.text(function(d){
			return d[0]
		})
		.attr("class", "labelCourbes")
		.attr("font-size", 16)
		.attr("x", function(d){
			return d[1];
		})
		.attr("y", function(d){
			return d[2];
		})
	
	d3.select("#schem")
		.append("text")
		.attr("id","titreGraph")
		.attr("y", parseFloat(zero) + 50)
		.attr("x", parseFloat(x1945) + pasX*20)
		.text("Tirage des quotidiens d'information générale et politique")
		.attr("font-size", 18)
		.attr("fill", nuancier[2])
		
	//graduations en Y
	for (i=0;i<nbGrad+1;i++){
		var pasGrad = hauteur/nbGrad;
		d3.select("#schem").selectAll(".grad"+i)
			.data([[debut-10, parseFloat(debut)+1, "grad"+i+" tit"], [parseFloat(end)+10, end-1,"grad"+i+" tir"]])
			.enter()
			.append("line")
			.attr("x1", function(d){
				return d[0]
			})
			.attr("x2", function(d){
				return d[1]
			})
			.attr("y1", zero-pasGrad*i)
			.attr("y2", zero-pasGrad*i)
			.attr("class", function(d){
				return d[2]
			})
			.attr("stroke-width", 0.5)
			.attr("stroke", nuancier[6])
			
		d3.select("#schem")
			.append("line")
			.attr("x1", debut-10)
			.attr("x2", parseFloat(end)+10)
			.attr("y1", zero-pasGrad*i)
			.attr("y2", zero-pasGrad*i)
			.attr("class", "grad")
			.attr("stroke-width", 0.5)
			.attr("stroke", nuancier[2])
	
		
		//text
		d3.select("#schem").selectAll(".gradText"+i)
			.data([[debut-30,"gradText"+i+" tit", 1/echTit], [parseFloat(end)+10, "gradText"+i+" tir", 100000/echTir]])
			.enter()
			.append("text")
			.attr("x", function(d){
				return d[0]
			})
			.attr("y", zero-pasGrad*i)
			.attr("class", function(d){
				return d[1]
			})
			.attr("font-size", 10)
			.text(function(d){
				return i*pasGrad*d[2];
			})
	}
			
	//graduations en X
	var it = 0;
	for (j=1945;j<2015;j=j+5){
		var tst = j%2;

		d3.select("#schem")
			.append("line")
			.attr("x1", x1945+it*pasX)
			.attr("x2", x1945+it*pasX)
			.attr("y1", zero)
			.attr("y2", function(){
				if(tst==0){
					return parseFloat(zero) +16;
				} else {
					return parseFloat(zero) +8;
				}
			})
			.attr("class",  "grad"+j)
			.attr("stroke-width", 0.5)
			.attr("stroke", nuancier[6]);
	
		//text
		d3.select("#schem")
			.append("text")
			.text(j)
			.attr("x", x1945+it*pasX-16)
			.attr("y", function(){
				if(tst==0){
					return parseFloat(zero) +29;
				} else {
					return parseFloat(zero) +21;
				}
			})
			.attr("class",  "tdate")
			.attr("font-size", 12)
			.attr("fill", nuancier[6])
			.attr("id", "t"+j)
			
		it= it+5;
	}
	////rectangles
	d3.select("#schem").selectAll(".rects")
		.data([[0.7, "", "none", nuancier[2]], [1, "rect1", nuancier[2], "none"]])
		.enter()
		.append("rect")
		.attr("id", function(d){
			return d[1]
		})
		.attr("opacity", function(d){
			return d[0]
		})
		.attr("fill", function(d){
			return d[3]
		})
		.attr("y", zero-recSize/2)
		.attr("x", x1945-recSize/2)
		.attr("width", recSize)
		.attr("height", recSize)
		.attr("class","rects")
		.attr("stroke", function(d){
			return d[2]
		})
		.attr("rx",recSize/2)
		
	//barres de choix
	
	d3.select("#schem").selectAll(".selectBarres")
		.data([["choix",nuancier[2],"choixComp"],["ancChoix",nuancier[4],"choixComp"],["survolDate",nuancier[2],"choixOne"]])
		.enter()
		.append("line")
		.attr("y1",zero-hauteur-5)
		.attr("y2",parseFloat(zero)+5)
		.attr("x1",x1945)
		.attr("x2",x1945)
		.attr("class", "selectBarres")
		.attr("stroke",function(d){
			return d[1]
		})
		.attr("id",function(d){
			return d[0]
		})
		.attr("stroke-width",2)
		.attr("class",function(d){
			return d[2]
		})
	
	d3.select("#schem")
		.append("text")
		.attr("id","indic")
		.attr("y",zero-parseFloat(hauteur)+15)
		.attr("font-size",12)
		
}

//Mise à jour des indications
function majPage() {
	d3.select("body").selectAll(".indTps").html("De "+ancDate+" à "+date);
	if(mode=="datePrec"){
		d3.select("#indDate").html("Situation en " +date);
		d3.select("#int3").text("- par département");
	} else {
		d3.select("#indDate").html("De " + ancDate + " à "+date);
		d3.select("#labAnc").text(ancDate);
		d3.select("#labDate").text(date);
		d3.select("#int3").text("- par département ("+date+")");
	}
	d3.select("#schem").selectAll(".tdate").attr("font-size",12).attr("font-weight","");
	d3.select("#t"+date).attr("font-size",14).attr("font-weight",900);
}

//Mise à jour de la carte en fonction de la date
function majCarte(dataset, dataVille) {
	buildGraph(date);
	console.log(listeVilles);
	d3.select("body").selectAll(".item").remove();
	calc(dataset);
	var it = 0;
	
	d3.select("#barre_r")			
		.transition()
		.delay(100)
		.duration(500)
		.attr("height", function(){
			return heightBarres*listeVilles["National"][0]
		})
		
	for(i=0;i<nomsVilles.length;i++){
		
		var id = nomsVilles[i];
		//taille des barres
		d3.select("#b_"+id)
			.transition()
			.delay(100)
			.duration(500)
			.attr("y", function(){
				var newH = heightBarres*listeVilles[id][0];
				var ancY = this.attributes.y0.value;
				var val = parseFloat(ancY - newH);
				return val;
			})
			.attr("height", function(){
				return heightBarres*listeVilles[id][0]
			});	
			
		//taille des barres 3d
		d3.select("#bA_"+id)
			.transition()
			.delay(100)
			.duration(500)
			.attr("y", function(){
				var newH = heightBarres*listeVilles[id][0];
				var ancY = this.attributes.y0.value;
				var val = parseFloat(ancY - newH);
				return val;
			})
			.attr("height", function(){
				return heightBarres*listeVilles[id][0]
			});		
			
		if(listeVilles[id][0]==0){
			d3.select("#bB_"+id)
				.attr("opacity",0)
		} else {
			d3.select("#bB_"+id)
				.attr("opacity",0.8)
		}		
		
		d3.select("#bB_"+id)
			.style("transform", function(){
				var decalY = this.attributes.y0.value -heightBarres*listeVilles[id][0];
 				var decalX = (Math.tan(skewB)*decalY) //+parseFloat(decalageX);
 				return transformation2+" skewX("+skewB+"rad) translate(-"+decalX+"px, -"+decalageY+"px)";
 			})	
			.transition()
			.delay(100)
			.duration(500)
			.attr("y", function(){
				var newH = heightBarres*listeVilles[id][0];
				var ancY = this.attributes.y0.value;
				var val = parseFloat(ancY - newH);
				return val;
			})
			
		
		//taille des ombres
		d3.select("#omb_"+id)			
			.style("transform", function(){
				var decalY = this.attributes.y0.value;
 				var decalX = Math.tan(skewA)*decalY
 				return transformation2+"skewX("+skewA+"rad) translate(-"+decalX+"px)";
 			})	
			.transition()
			.delay(100)
			.duration(500)
			.attr("y", function(){
				var newH = heightOmbres*listeVilles[id][0];
				var ancY = this.attributes.y0.value;
				var val = parseFloat(ancY - newH);
				return val;
			})
			.attr("height", function(){
				return heightOmbres*listeVilles[id][0]
			})
		
		if(mode=="compare"){
			d3.select("#carte").selectAll(".barreAnc").style("display","block");
			//taille des barres
			d3.select("#b19_"+id)
				.transition()
				.delay(100)
				.duration(500)
				.attr("y", function(){
					var newH = heightBarres*listeVilles[id][5];
					var ancY = this.attributes.y0.value;
					var val = parseFloat(ancY - newH);
					return val;
				})
				.attr("height", function(){
					return heightBarres*listeVilles[id][5]
				});	
				
			//taille des barres 3d
			d3.select("#b19A_"+id)
				.transition()
				.delay(100)
				.duration(500)
				.attr("y", function(){
					var newH = heightBarres*listeVilles[id][5];
					var ancY = this.attributes.y0.value;
					var val = parseFloat(ancY - newH);
					return val;
				})
				.attr("height", function(){
					return heightBarres*listeVilles[id][5]
				});		
			
			d3.select("#b19B_"+id)
				.style("transform", function(){
					var decalY = this.attributes.y0.value -heightBarres*listeVilles[id][5];
					var decalX = (Math.tan(skewB)*decalY) //+parseFloat(decalageX);
					return transformation2+" skewX("+skewB+"rad) translate(-"+decalX+"px, -"+decalageY+"px)";
				})
				.transition()
				.delay(100)
				.duration(500)
				.attr("y", function(){
					var newH = heightBarres*listeVilles[id][5];
					var ancY = this.attributes.y0.value;
					var val = parseFloat(ancY - newH);
					return val;
				})
				
			//taille des ombres
			d3.select("#omb19_"+id)			
				.style("transform", function(d){
					var decalY = this.attributes.y0.value;
					var decalX = Math.tan(skewA)*decalY
					return transformation2+"skewX("+skewA+"rad) translate(-"+decalX+"px)";
				})	
				.transition()
				.delay(100)
				.duration(500)
				.attr("y", function(){
					var newH = heightOmbres*listeVilles[id][5];
					var ancY = this.attributes.y0.value;
					var val = parseFloat(ancY - newH);
					return val;
				})
				.attr("height", function(){
					return heightOmbres*listeVilles[id][5]
				})
			
			if(listeVilles[id][5]==0){
				d3.select("#b19B_"+id)
					.transition()
					.delay(100)
					.duration(500)	
					.attr("opacity",0)
			} else {
				d3.select("#b19B_"+id)
					.attr("opacity",0.4)
			}

		}
		for (j=0;j<listeVilles[id][1].length; j++){	
			it++;
			var tst = j % 2;
			if (tst == 1){
				var coordX = document.getElementById("b_"+nomsVilles[i]).attributes.x.value;
				var coordY = document.getElementById("b_"+nomsVilles[i]).attributes.y.value;
				d3.select("#carte")
					.append("text")
					.html(listeVilles[id][1][j])
					.attr("x", coordX*deform)
					.attr("y", coordY)
					.attr("opacity", 0.7)
					.attr("font-size", 9)
					.attr("fill", function(){
						if(id=="National"){
							return nuancier[0]
						} else {
							return nuancier[1]
						}
					})
					.attr("class", "labels")
					.transition()
					.delay(35*it)
					.duration(1500)
					.attr("x", -100)
					.attr("y", function(){
						if(listeVilles[id][1][j-1] == "cesse"){
							return 100;
						} else if(listeVilles[id][1][j-1] == "fusion"){
							return 300;
						}
					})
					.style("opacity", 0)
					
				var name = listeVilles[id][1][j];
				var type = listeVilles[id][1][j-1];
				var indexSpe = (j/2)-0.5;
				var entite = listeVilles[id][4][indexSpe];
								
				d3.select("#liste_"+type).append("p")
					.attr("class","item")
					.attr("ville", id)
					//.attr("entites", entite)
					.style("opacity", 0.7)
					.style("color", function(){
						if(id=="National"){
							return nuancier[0]
						} else {
							return nuancier[1]
						}
					})
					.html(name)
					.style("display", "none")
					.on("mouseover", function(){
						hoverVille(this);
					})
					.on("mouseout", function(){
						outVille(this);
					})
			}
		}
		for (m=0;m<listeVilles[id][2].length; m++){	
			var coordX = document.getElementById("b_"+nomsVilles[i]).attributes.x.value;
			var coordY = document.getElementById("b_"+nomsVilles[i]).attributes.y.value;
			d3.select("#carte")
				.append("text")
				.html(listeVilles[id][2][m])			
				.attr("font-size", 9)
				.attr("fill", function(){
					if(id=="National"){
						return nuancier[0]
					} else {
						return nuancier[1]
					}
				})
				.attr("class", "labels")
				.attr("x", -200)
				.attr("y", 100)
				.attr("opacity", 0)
				.transition()
				.delay(35*it)
				.duration(1500)
				.attr("x", coordX*deform)
				.attr("y", coordY)
				.style("opacity", 1)
				.transition()
				.delay(35*it+1500)
				.duration(500)
				.style("opacity", 0)
				
			var name = listeVilles[id][2][m];
			d3.select("#liste_appar").append("p")
				.attr("class","item")
				.style("color", function(){
					if(id=="National"){
						return nuancier[0]
					} else {
						return nuancier[1]
					}
				})
				.style("opacity", 0.7)
				.attr("ville", id)
				.html(name)
				.style("display", "none")
				.on("mouseover", function(){
					hoverVille(this);
				})
				.on("mouseout", function(){
					outVille(this);
				})
		}
		for (n=0;n<listeVilles[id][7].length;n++){
			var tst = n%2;
			if (tst==1){
				var string = listeVilles[id][7][n];
				var liste = string.split(",");
				if(liste[1]=="true"){
					var name2 = liste[2];
					var name1 = listeVilles[id][7][n-1];
				} else {
					var name1 = liste[2];
					var name2 = listeVilles[id][7][n-1];
				}
				d3.select("#liste_change").append("p")
					.attr("class","item")
					.style("color", function(){
						if(id=="National"){
							return nuancier[0]
						} else {
							return nuancier[1]
						}
					})
					.style("opacity", 0.7)
					.attr("ville", id)
					.html(function(){
						if(liste[0]=="true"){
							var val = name1 + " devient "+name2 +" (fusion)";
						} else {
							var val = name1 + " devient "+name2;
						}
						return val;
					})
					.style("display", "none")
					.on("mouseover", function(){
						hoverVille(this);
					})
					.on("mouseout", function(){
						outVille(this);
					})
			}
			
		}
	}
	setTimeout(function(){
		d3.select("#infos").selectAll("p").style("display", "block");
		d3.select("#infos2").selectAll("p").style("display", "block");
	}, 35*it+2000);
	
	//pluralisme
	d3.select("#carte").selectAll(".depts").attr("fill", function(){
		if(this.attributes.code.value){
			var idDept = this.attributes.code.value;
			var val = listeDept["d"+idDept][0];
			if(val>5){
				return choro[4];
			} else if(val>3){
				return choro[3]
			} else if(val>=2){
				return choro[2]
			} else if(val==1){
				return choro[1]
			} else if(val==0){
				return choro[0]
			}
		} else {
			return this.attributes.fill.value;
		}
	})
	.attr("fill2",function(){
		return this.attributes.fill.value;
	})
	

		date = ancDate;
	//ancDate = date;
	// var x = document.getElementById("masque").attributes.largeur.value;
	
	// d3.select("#masque")
		// .attr("x", x)
}
//mise à jour du graphique
function buildGraph(date){
d3.select("#conteneur").selectAll(".courbe").attr("class", "courbe remove");
	queue()											
		.defer(d3.csv,"data/Nombre_tirages.csv")
		.await(callback6); 
	function callback6(error, dataset){
		d3.select("#conteneur").selectAll(".courbe").attr("class","courbe remove");
		
		var iter = date - 1945 +1;
		var YNt = zero - (dataset[0].NAT_Nb_titres*echTit);
		var YLt = zero - (dataset[0].LOC_Nb_titres*echTit);
		var cheminNAT_tit = "M"+x1945+"," + YNt;
		var cheminLOC_tit = "M"+x1945+"," + YLt;
		
		var YNr = zero - (dataset[0].NAT_Tirages*echTir);
		var YLr = zero - (dataset[0].LOC_Tirages*echTir);
		var cheminNAT_tir = "M"+x1945+"," + YNr;
		var cheminLOC_tir = "M"+x1945+"," + YLr;
		
		
		for(i=1;i<iter;i++){
			var valNt = dataset[i].NAT_Nb_titres;
			var valLt = dataset[i].LOC_Nb_titres;
			cheminNAT_tit = cheminNAT_tit + " L"+parseFloat(x1945+i*pasX)+","+parseFloat(zero-valNt*echTit);
			cheminLOC_tit = cheminLOC_tit + " L"+parseFloat(x1945+i*pasX)+","+parseFloat(zero-valLt*echTit);
			
			var valNr = dataset[i].NAT_Tirages;
			var valLr = dataset[i].LOC_Tirages;
			cheminNAT_tir = cheminNAT_tir +" L"+parseFloat(x1945+i*pasX)+","+parseFloat(zero-valNr*echTir);
			cheminLOC_tir = cheminLOC_tir +" L"+parseFloat(x1945+i*pasX)+","+parseFloat(zero-valLr*echTir);
		}
		
		if(document.getElementById("NAT_TIT")){
			var pathNt = document.getElementById("NAT_TIT")
			var pathNr = document.getElementById("NAT_TIR")
			var pathLt = document.getElementById("LOC_TIT")
			var pathLr = document.getElementById("LOC_TIR")
			var lenNt = pathNt.getTotalLength()
			var lenNr = pathNr.getTotalLength()
			var lenLt = pathLt.getTotalLength()
			var lenLr = pathLr.getTotalLength()
		} else {
			len = 0;
		}
		var dur = 1500;
		var tabOmbres = [[cheminNAT_tit, nuancier[0], "1500,0", SWcourbe, "NAT_TIT", dur, lenNt], [cheminLOC_tit, nuancier[1],"1500,0", SWcourbe, "LOC_TIT", dur, lenLt], [cheminLOC_tir, nuancier[1], "0,3,3,0", SWcourbe, "LOC_TIR",  dur,lenLr], [cheminNAT_tir, nuancier[0],"0,3,3,0", SWcourbe, "NAT_TIR",  dur, lenNr]];
		var tabCourbes = [[cheminNAT_tit, nuancier[0], "1500,0", SWcourbe, "NAT_TIT", dur, lenNt], [cheminLOC_tit, nuancier[1],"1500,0", SWcourbe, "LOC_TIT", dur, lenLt], [cheminLOC_tir, "#FFFFFF", "1500,0", parseFloat(SWcourbe)+0.5, "LOC_TIR", dur, lenLr], [cheminNAT_tir, "#FFFFFF","1500,0",parseFloat(SWcourbe)+0.5, "NAT_TIR",  dur, lenNr], [cheminLOC_tir, nuancier[1], "1500,0",SWcourbe, "LOC_TIR",  dur,lenLr], [cheminNAT_tir, nuancier[0],"1500,0",SWcourbe, "NAT_TIR",  dur, lenNr], [cheminLOC_tir, "#FFFFFF", "3,3",parseFloat(SWcourbe)+0.5, "LOC_TIR",  0, lenLr], [cheminNAT_tir, "#FFFFFF","3,3",parseFloat(SWcourbe)+0.5, "NAT_TIR",  0, lenNr]];
		
		d3.select("#schem").selectAll(".co"+date)
			.data(tabOmbres)
			.enter()
			.append("path")
			.attr("d", function(d){
				return d[0]
			})
			.attr("stroke", "#000000")
			.attr("stroke-dasharray", function(d){
				return d[6]+",500"
			})
			.attr("stroke-width", SWcourbe)
			.attr("fill", "none")
			.attr("class", "courbe co"+date)
			.attr("opacity", 0)
			.attr("transform", "translate(-1.5,-1.5)")
			
			.attr("id",function(d){
				return d[4]
			})
			.attr("stroke-dasharray", function(d){
				return d[2]
			})
			.transition()
			.duration(function(d){
				return d[5]
			})
			.attr("opacity", 0.1)
				
		d3.select("#schem").selectAll(".c"+date)
			.data(tabCourbes)
			.enter()
			.append("path")
			.attr("d", function(d){
				return d[0]
			})
			.attr("stroke", function(d){
				return d[1]
			})
			.attr("stroke-dasharray", function(d){
				return d[6]+",500"
			})
			.attr("stroke-width", function(d){
				return d[3]
			})
			.attr("fill", "none")
			.attr("class", "courbe c"+date)
			.transition()
			.attr("id",function(d){
				return d[4]
			})
			.duration(function(d){
				return d[5]
			})
			.attr("stroke-dasharray", function(d){
				return d[2]
			})
	
		 setTimeout(function(){
 			d3.select("#conteneur").selectAll(".remove").remove();
 		}, 100)
	}
}

function hoverVille(obj) {
	var ville = obj.attributes.ville.value;
	
	d3.select("#t_"+ville)
		.transition()
		.duration(300)
		.attr("opacity", 1)
		.style("display","block");
	
	if(obj.attributes.appart){
		var id = obj.id;
		d3.select("#"+id).html(function(){
			var val = this.innerHTML +" ("+ this.attributes.appart.value +")<br/><br/>";
			return val;
		})	
	}
	if(obj.attributes.entites){
		var entite = obj.attributes.entites.value;
		console.log(entite);
		var liste = entite.split(",");
		for (i=0;i<liste.length;i++){
			d3.select("#d"+liste[i])
				.attr("fill2",function(){
					return this.attributes.fill.value;
				})
				.attr("fill", "red")
				.attr("stroke","red")
				.attr("opacity",0.2)
		}
		if(liste.length==0){
			d3.select("#c_"+ville)
				.attr("fill","#000000")
				.transition()
				.duration(1000)
				.atrr("fill","#FFFFFF")
		}
		if(entite=="National"){
			d3.select("#carte").selectAll(".depts")
				.attr("fill2",function(){
					return this.attributes.fill.value;
				})
				.attr("fill", "orange")
				.attr("opacity",0.2)
				.attr("stroke","orange")
		}
	}
	d3.select("#c_"+ville)
		.transition()
		.duration(300)
		.attr("r", 10);	
	
	
}

function outVille(obj) {
	d3.select("#carte").selectAll(".depts")
		.attr("fill",function(){
			return this.attributes.fill2.value;
		})
		.attr("stroke","#FFFFFF")
		.attr("opacity",1)
	
	d3.select("#liste_ville").selectAll(".item")
		.html(function(){
			return this.attributes.html2.value;
		})
	var ville = obj.attributes.ville.value;
	d3.select("#c_"+ville)
		.transition()
		.duration(300)
		.attr("r", 0)
		.attr("fill","#FFFFFF")
	d3.select("#t_"+ville)
		.transition()
		.duration(300)
		.attr("opacity", 0)
		.style("display","none")
	var out = document.getElementById("label"+ville);
	// if(out){
		// setTimeout(function(){
			// out.remove();
		// },3000);
	// }
}

function labelVille(obj){
	d3.select("#liste_ville").selectAll(".item").remove();
	d3.select("#liste_ville").selectAll(".pieces").remove();
	var ville = obj.attributes.ville.value;

	if(mode=="compare"){
		d3.select("#nomVille").html(ville + " ("+date+")");
	}else{
		d3.select("#nomVille").html(ville);
	}
	for(i=0;i<listeVilles[ville][3].length;i++){
		d3.select("#liste_ville")
			.append("p")
			.attr("class","item")
			.attr("ville",ville)
			.attr("entites", listeVilles[ville][6][i])
			.style("opacity", 0.7)
			.attr("id","item"+i)
			.attr("ville", ville)
			.style("color", function(){
				if(ville=="National"){
					return nuancier[0]
				} else {
					return nuancier[1]
				}
			})
			.html(listeVilles[ville][3][i])
			
			.on("mouseover", function(){
				hoverVille(this);
			})
			.on("mouseout", function(){
				outVille(this);
			})
		if(listeVilles[ville][8][i]=="oui"){
			d3.select("#item"+i)
				.append("img")
				.attr("src","img/pieces.png")
				.attr("width",15)
				.attr("height",15)
		}	
		if(listeVilles[ville][9][i]!="none"&&listeVilles[ville][9][i]!=""){
			d3.select("#item"+i)
				.attr("appart",listeVilles[ville][9][i])
		}	
		var html2 = document.getElementById("item"+i).innerHTML;
		d3.select("#item"+i)
			.attr("html2",html2)
	}
	// var left = document.getElementById("b_"+ville).attributes.x.value;
	// var top = document.getElementById("b_"+ville).attributes.y0.value;
	// d3.select("#inter2").append("div")
		// .style("position", "absolute")
		// .attr("id", "label"+ville)
		// .style("margin-left", parseFloat(left*deform)+"px")
		// .attr("yy", top)
		// .style("margin-top", parseFloat(parseFloat(top)+10)+"px")
		// .style("background-color","black")
		// .html(function(){
			// var noms = "";
		 	// for(i=0;i<listeVilles[ville][3].length;i++){
		 		// noms = noms + "<p style='font-size : 12px;margin : 10px' entites='"+listeVilles[ville][4][i]+"'>"+listeVilles[ville][3][i]+"</p>";
		 	// }
			// return noms;
		// })
		// .style("color", "white")
	// d3.select("#label"+ville).selectAll("p")
		// .style("color","red")
}	
