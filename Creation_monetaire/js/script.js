
window.onload = function(){
	initialize();
 }

 //fonction princiaple
function initialize() {
 	var conteneur = document.getElementById("content"); //bloc contenant l'infographie
	var avancer = document.getElementById("avancer"); //element svg constituant le bouton "continuer"
	var init = document.getElementById("init"); //element svg constituant le bouton "remise à 0"
	var bout_0 = document.getElementById("bouton_0"); //bouton "démarrer"
	var bout_l = document.getElementById("bouton_l"); //bouton "ok" qui confirme la lecture des règles
	
	var etape = 0; //variable de temps initalement à 0
	d3.select("#content").style("display", "block").style("opacity", 1); //apparition de l'infographie
	d3.select("#fonds").selectAll("g").transition().duration(1500).attr("opacity",0.2); //apparition des fonds en coloré en transparence
	d3.select("body").selectAll(".pli").style("transform","translate(-30px)"); // décalage des fonds de droite pour enlever l'espace du pli
	
	bout_0.onclick = function(){
		this.style.display = "none"; 
		d3.select("#rules").style("display","block") //apparition des règles
	}
	
	bout_l.onclick = function(){
		d3.select("#fond_gris").style("display","none"); //disparition complète de l'image par défaut
		d3.select("#avancer").style("display","inline"); //apparition du bouton "continuer"
		//décalage des règle :
		d3.select("#rules").transition().duration(1000).style("margin-left","65%").style("margin-top","-2%").style("font-size", "12px").selectAll("p").style("margin","2px");
		d3.select("#rules").selectAll("img").transition().duration(1000).style("width","15px"); //réduction de la police des règles
		d3.select("#bouton_l").transition().duration(1000).style("opacity","0"); //disparition progressive du bouton ok
		d3.select("#bouton_l").transition().delay(1000).style("display","none"); //disparition totale du bouton ok
		d3.select("#intro").transition().duration(1000).attr("opacity",1)
	}
	
	init.onclick = function(){
		var centre = document.getElementById("revol").attributes.centre.value; //centre de la flèche dans le bouton
		var centre2 = document.getElementById("roue_a").attributes.centre.value; //centre de la roue qui va tourner pendant l'animation
		
		etape = 0; //réinitialisation du temps
		
		d3.select("#content").transition().duration(1000).style("opacity", 0) //disparition progressive du schéma
		document.getElementById("commentaire").innerHTML = ""; //réinitialisation du commentaire
		
		d3.select("#avancer").attr("class","bouts on"); //affichage blocage du bouton avancer
		d3.select("#avancer").style("display","inline"); //réapparition du bouton "continuer" au cas où celui-ci aie disparu
		d3.select("#init").attr("class","bouts on"); //affichage blocage du bouton cliqué
		d3.select("#divBouton").append("div").attr("id","cache"); //blocage effectifs des boutons
		
		d3.select("#divBouton").append("p").attr("id","decompte").html("3"); //début du décompte
		
		d3.select("#revol").style("transform-origin", centre).attr("class", "debitGauche"); //animation de la flèche du bouton
		d3.select("#revol").selectAll(".revolp").attr("fill","#FFFFFF"); //changement de couleur de la flèche
		
		d3.select("#attente").style("display","block"); //apparition de l'animation :
		d3.select("#roue_a").style("transform-origin", centre2).attr("class", "debitGauche"); 
		d3.select("#roue_b").style("transform-origin", centre2).attr("class", "debitDroite");
		
		//etapes du décompte
		setTimeout(function(){
			d3.select("#decompte").html("2");
		},1500)
		setTimeout(function(){
			d3.select("#decompte").html("1");
		},3500)
		setTimeout(function(){
			d3.select("#decompte").html("0");
			
			//réapparition de l'infographie
			d3.select("#content").transition().duration(500).style("opacity", 1)
			
			//réinitialisation effective de tous els éléments de l'infographie (faite en dernier pour ne pas internvenir avant la fin d'une animation, soit 7500 ms)
			for(i=0;i<9;i++){
				d3.select("#anime").selectAll(".spi"+i).attr("stroke-dasharray", "0,3000");
				d3.select("#anime").selectAll(".trace"+i).attr("stroke-dasharray", "0,3000");
				d3.select("#anime").selectAll(".dtrace"+i).attr("opacity",0);
				d3.select("#anime").selectAll(".d"+i).attr("stroke-dasharray", "0, 3000").attr("opacity",1)

				d3.select("#anime").selectAll(".txt"+i).attr("opacity", 0);
				d3.select("#defonce").selectAll(".a"+i).attr("opacity", 0);
				d3.select("#fonds").selectAll("g").attr("opacity",0.2)
				d3.select("#anime").selectAll(".f"+i).attr("opacity", 0);
				d3.select("#anime").selectAll(".centre"+i).attr("opacity", 0);
				d3.select("#anime").selectAll("#boule"+i).attr("opacity", 0).attr("r",0).attr("class", "boule");
				d3.select("#anime").selectAll(".r"+i).attr("opacity", 0).attr("class","r"+i);
				
			}
		},5000)
		
		setTimeout(function(){
			//déblocage du bouton avancer et disparition du bouton remise à zero
			d3.select("#cache").remove(); 
			d3.select("#decompte").remove(); 
			d3.select("#avancer").attr("class","bouts");
			d3.select("#init").attr("class","bouts").style("display","none");
			d3.select("#revol").style("transform-origin", centre).attr("class", "");
			d3.select("#revol").selectAll(".revolp").attr("fill","#333333");
			d3.select("#attente").style("display","none");
			d3.select("#attente").style("transform-origin", centre2).attr("class", "");
			
			
		},5500)
	
	}
	
	avancer.onclick = function(){
		etape++; //mise à jour du temps
		//blocage et animation des boutons
		d3.select("#avancer").attr("class","bouts on");
		d3.select("#init").attr("class","bouts on");
		d3.select("#init").style("display","inline");
		d3.select("#content").style("display", "block").style("opacity", 1);
		d3.select("#divBouton").append("div").attr("id", "cache");
		d3.select("#avancer").selectAll(".rempli").attr("fill","#FFFFFF").transition().duration(2650).attr("transform","translate(33)")
		setTimeout(function(){
			//déblocage des boutons
			d3.select("#cache").remove();
			d3.select("#avancer").attr("class","bouts");
			d3.select("#init").attr("class","bouts");
			d3.select("#avancer").selectAll(".rempli").attr("transform","").attr("fill","#333333");
		},2700)

		//apparition des spirales
		if(document.getElementsByClassName("spi"+etape)){
			d3.select("#anime").selectAll(".spi"+etape).transition().delay(1500).duration(6000).attr("stroke-dasharray", "3000, 0").attr("stroke-width", function(){
				return this.attributes.strokeinit.value;
			});
		}
		
		//tracé des liens entre les rouages et élément 'chaine'
		if(document.getElementsByClassName("trace"+etape)){
			d3.select("#anime").selectAll(".trace"+etape).transition().delay(function(){
				if(this.attributes.decal) {
					return 3500;
				} else {
					return 1500;
				}
			}).duration(3000).attr("stroke-dasharray", "3000, 0");
			d3.select("#anime").selectAll(".dtrace"+etape).transition().delay(function(){
				if(this.attributes.decal) {
					return 5500;
				} else {
					return 3500;
				}
			}).duration(2000).attr("opacity",0.6);
		}
		
		//dessin autour des fonds en couleurs - puis disparition
		if(document.getElementsByClassName("d"+etape)){
			d3.select("#anime").selectAll(".d"+etape).transition().delay(function(){
				if(this.attributes.decal) {
					return 2000;
				} else {
					return 0;
				}
			}).duration(3000).attr("stroke-dasharray", "3000, 0").attr("stroke-width", 2);
			d3.select("#anime").selectAll(".d"+etape).transition().delay(function(){
				if(this.attributes.decal) {
					return 4500;
				} else {
					return 2000;
				}
			}).duration(500).attr("opacity", 0);
		}
		
		//apparition des fonds en plus saturé
		if(document.getElementsByClassName("a"+etape)){
			d3.select("body").selectAll(".a"+etape).transition().delay(function(){
				if(this.attributes.decal) {
					return 4000;
				} else {
					return 800;
				}
			}).duration(1700).attr("opacity", 1);
		}
		
		//apparition des textes
		if(document.getElementsByClassName("txt"+etape)){
			d3.select("#anime").selectAll(".txt"+etape).transition().delay(function(){
				if(this.attributes.decal) {
					return 4500;
				} else {
					return 2000;
				}
			}).duration(2000).attr("opacity", 1);
		}
		
		//apparition des flèches sur les tracés
		// if(document.getElementsByClassName("f"+etape)){
			// d3.select("#anime").selectAll(".f"+etape).transition().delay(4000).duration(1000).attr("opacity", 1);
		// }
		
		//apparition des centres de spirales
		if(document.getElementsByClassName("centre"+etape)){
			d3.select("#anime").selectAll(".centre"+etape).transition().delay(1000).duration(1000).attr("opacity", 1);
		}
		
		//apparition des boules numérotées
		if(document.getElementById("boule"+etape)){
			d3.select("#boule"+etape)
				.on("mouseover", function(){
					var val = this.attributes.etape.value;
					hover(val);
				})
				.on("click", function(){
					var val = this.attributes.etape.value;
					this.attributes.class.value = "boule";
					afficheT(val)
				})
				.style("transform-origin",function(){
					var cx = this.attributes.cx.value;
					var cy = this.attributes.cy.value;
					return cx+ "px " + cy + "px";
				})
				.attr("class","boule clignote")
				.transition()
				.delay(4000)
				.duration(1000)
				.attr("opacity", 1)
				.select("circle")
				.attr("fill", "#E2E2E2")
				.transition()
				.delay(2700)
				.duration(1000)
				.attr("fill",function(){
					var couleur = this.attributes.fill2.value;
					return couleur
				});
		}
		
		//apparition des roues et animations en fonction du centre
		if(document.getElementsByClassName("r"+etape)){
			var liste = document.getElementsByClassName("r"+etape);
			for(i=0;i<liste.length;i++){
				var centre = liste[i].attributes.centre.value;
				var id = liste[i].id;
 				d3.select("#"+id).style("transform-origin", centre);
 				// if(etape == 1 || etape == 6){
					// sens = " debitGauche";
 				// }else{
					sens = " debitDroite";
				// }
				d3.select("#"+id).transition().delay(function(){
					if(this.attributes.decal){
						return 5500;
					} else {
						return 3500;
					}
				}).attr("opacity", 1).attr("class", "r"+etape+ " debitDroite");
			}
		}
		
		//disparition du bouton continuer à la fin du schéma
		if(etape == 8){
			d3.select("#avancer").style("display","none");
		}
	}
}

function hover(etape){
	//animation au survol des boules
	d3.select("#boule"+etape)
		.select("circle")
		.transition()
		.duration(1000)
		.attr("fill", "#E2E2E2")
		.transition()
		.delay(700)
		.duration(1000)
		.attr("fill", function(){
			var couleur = this.attributes.fill2.value;
			return couleur
		});
}
		
function afficheT(etape){
	//apparition du comentaire au clic sur les boules
	document.getElementById("permanent").innerHTML = "Ces commentaires décrivent uniquement la création monétaire par prêts aux entreprises (même si elle s’effectue également par prêts aux particuliers et à l’État)."
	d3.csv("data/etapes.csv", function(data){
		var texteOk = "";
		for(i=0;i<data.length;i++){
			if(data[i].etape == etape){
				texteOk = data[i].comm
			}
		}
		d3.select("#commentaire").html(texteOk)// .style("background-color","#FFFFFF").style("opacity",0).transition().duration(1500).style("opacity",0.8);
		// var time = texteOk.length*15;
		// setTimeout(function(){
			// d3.select("#commentaire").transition().duration(5000).style("opacity",0);
		// },time);
	})	
}
