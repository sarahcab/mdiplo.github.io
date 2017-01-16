//variables globales
var etape = -1;
var ind="-1";
var test ="";
var lock = false;
var ancChoix="";
var tlh = 15;
var tll = 15;
var sens = "false";
var oeil = "ouvert";
var largTL = document.getElementById("pop").offsetWidth;

var alter = document.getElementById("alter");
var possible = document.getElementById("possible");
var suite = document.getElementById("suite");
var retour = document.getElementById("retour");
var masque = document.getElementById("masque");
var init = document.getElementById("init"); 
var bout_0 = document.getElementById("bouton_0"); //bouton "démarrer"
var bout_l = document.getElementById("bouton_l"); //bouton "démarrer"

window.onload = function(){
	initialize();
 }

function initialize(){
	bout_l.onclick = function(){			
		//d3.select("#rules").style("display", "none")
		d3.select("#rules").transition().duration(1000).style("margin-top","500px").style("font-size", "14px").selectAll("p").style("margin","0px")
		d3.select("#rules").transition().delay(1000).style("margin-top","43%").style("width","78%").style("text-align","right").style("margin-left","18%");
		d3.select("#rules").selectAll("img").transition().duration(1000).style("width","15px"); //réduction de la police des règles
		d3.select("#bydefault").transition().delay(1000).style("display","none")
		this.style.display = "none";
		d3.select("#pop").transition().duration(500).style("opacity",1);
		reseet();
		
		affiche("");
		setTimeout(function(){
			maj();
			affiche("");
		}, 1000);
		buildTimeLine();		
	}
	
	bout_0.onclick = function(){
		this.style.display = "none"; 
		d3.select("#rules").style("display","block");
		
	}
	
}
 //fonction princiaple
function reseet() {	

	alter.onclick = function(){
		sens = "false";
		if(document.getElementById("chemb"+ind)){
			affiche("b");
		}
		//majFenetre();
	}
	possible.onclick = function(){
		sens = "false";
		if(document.getElementById("chemb"+ind)){
			if(document.getElementById("chema"+ind)){
				affiche("a");
			} else {
				affiche("b");
			}
		}
		//majFenetre();
	}
	suite.onclick = function(){
		sens = "false";
		maj();
		if(document.getElementById("chem"+ind)){
			affiche("");
		} else {
			affiche("a")
		}
		//majFenetre();
	}
	retour.onclick = function(){
		sens = "true";
		etape = etape -2;
		maj();
		if(document.getElementById("chema"+ind)){
			affiche("a");
		}else {
			affiche("");
		}
		
		//majFenetre();
	}
	masque.onclick=function(){
		if(oeil == "ouvert"){
			d3.select("#pop").selectAll("p").style("opacity", 0);
			d3.select("#pop").selectAll("svg").style("opacity", 0);
			d3.select("#pop").selectAll("input").style("opacity", 0);
			d3.select("#pop").style("width","3%")
			d3.select("#masque").style("opacity", 1)
			oeil="ferme";
			//d3.select("#anime").style("stroke-dasharray","");
		} else {
			//d3.select("#anime").transition().duration(1000).style("stroke-dasharray","10,10");
			d3.select("#pop").selectAll("*").style("opacity", 1)
			d3.select("#pop").style("width","20%")
			oeil="ouvert";
		}
	}
	
	masque.onmouseover=function(){
		if(oeil == "ouvert"){
			d3.select("#masque").attr("src", "img/oeil_f.png");
		} else {
			d3.select("#masque").attr("src", "img/oeil_o.png");
		}	
	}
	
	masque.onmouseout=function(){
		if(oeil == "ferme"){
			d3.select("#masque").attr("src", "img/oeil_f.png");
		} else {
			d3.select("#masque").attr("src", "img/oeil_o.png");
		}	
	}
	
	init.onclick =function(){
		zero();
		d3.select("#timeLine").selectAll("*").remove();
		d3.select("#defaut").transition().duration(500).attr("opacity",1)
		setTimeout(function(){
			affiche("");
			buildTimeLine();	
		},1000);
		setTimeout(function(){
			maj();
			affiche("");
		}, 2000);
	}
	d3.select("#defaut").transition().duration(700).attr("opacity",1)
}

function zero(){
	etape = -1;
	ind="-1";	
	
	d3.select("#anime").selectAll(".opa02").transition().duration(1000).attr("opacity",0.02)
	d3.select("#anime").selectAll(".opa0").transition().duration(1000).attr("opacity",0)
	d3.select("#anime").selectAll(".opa01").transition().duration(1000).attr("opacity",0.1)
	d3.select("#anime").selectAll(".stroked").transition().duration(1000).attr("stroke-dasharray","0,300")
}

function maj(){	
	etape++;
	ind = etape;
	if (etape>=0&&etape<=9){
		ind = "0"+etape;
	}
	var et2 = etape;
	et2 ++;
	if (et2>=0&&et2<=9){
		test = "0"+et2;
	} else {
		test = et2;
	}
	
}

function affiche(choix){
	
	/////////////////////sur le dessin	
	d3.select("#contour_alter").selectAll("path").transition().duration(500).attr("stroke","#FFFFFF").attr("stroke-width","1.417");
	d3.select("#chemins_contour").selectAll("path").transition().duration(500).attr("stroke","#FFFFFF").attr("stroke-width","1.417");

	d3.select("#att"+choix+ind).transition().duration(1000).attr("opacity",1);
	d3.select("#dessin"+choix+ind).transition().duration(1000).attr("opacity",1);
	d3.select("#texte"+choix+ind).transition().duration(2000).attr("opacity",1);
	d3.select("#ind"+choix+ind).transition().duration(1000).attr("opacity",1).select("line").transition().duration(1000).attr("stroke-dasharray","500,0")
	d3.select("#anime").selectAll(".info").attr("transform","");
	d3.select("#info"+choix+ind)
		.attr("transform",function(){
			var cX = this.attributes.cx.value/2;
			var cY = this.attributes.cy.value/2;
			return "translate("+cX+","+cY+") scale(0.5)"
		})
		.transition()
		.duration(1000)
		.attr("opacity",1)
		.attr("transform",function(){
			var cX = this.attributes.cx.value/2;
			var cY = this.attributes.cy.value/2;
			return "translate(-"+cX+",-"+cY+") scale(1.5)"
		})
	d3.select("#chem"+choix+ind).attr("opacity",0.9).attr("stroke-dasharray","0,300").transition().duration(1500).attr("stroke-dasharray","300,0");
	d3.select("#chem"+choix+ind+"_2").attr("opacity",0.9).attr("stroke-dasharray","0,300").transition().duration(1500).attr("stroke-dasharray","300,0");
	d3.select("#chem"+choix+ind+"_3").attr("opacity",0.9).attr("stroke-dasharray","0,300").transition().duration(1500).attr("stroke-dasharray","300,0");
	
	d3.select("#cont"+choix+ind).transition().duration(500).attr("opacity",1).attr("stroke","#000000").attr("stroke-width","3");
	
	/////////////////////fenêtre
	var texte ="";
	var texte2 ="";
	var dessin ="";
	var centreX =0;
	var centreY =0;
	
	d3.select("#texte"+choix+ind).selectAll("tspan").text(function(){
		var val = this.innerHTML;
		texte = texte + val +" ";
		return val;
	})
	
	d3.select("#info"+choix+ind).selectAll("tspan").text(function(){
		var val = this.innerHTML;
		texte2 = texte2 + val +" ";
		return val;
	})
	
	d3.select("#dessin"+choix+ind).html(function(){
		var val = this.innerHTML;
		var valX = this.attributes.cx.value;
		var valY = this.attributes.cy.value;
		dessin = val;
		centreX = valX- 20;
		centreY = valY- 20;
		return val;
	})
	
	d3.select("#txt").html(texte);
	d3.select("#plus").html(texte2);
	d3.select(".dessinT").html(dessin).attr("transform", "translate(-"+centreX+",-"+centreY+")");
	
	////timeLine et contour
	if(sens=="true"){	
	//alert("#cont"+ancChoix+test)
		d3.select("#tx"+test).attr("class","bougeT tx")
		d3.select("#trait"+test).attr("class","bougeR indT")
		d3.select("#bloc"+test).attr("class","bougeC elt")
		d3.select("#blocb"+test).attr("class","bougeC elt altern")
		d3.select("#cont"+ancChoix+test).transition().duration(600).attr("opacity",0);
	} 
	//cercles : initialements ils étaient tous dans des mêmes classes, et on les bougeait avec transform scale. Mais cest mieux en bougeant leurs attributs
	d3.select("#timeLine").selectAll(".elt").attr("fill","#f6e9d9").attr("r",tll/2).attr("font-size",10).attr("cy",tll*2);
	d3.select("#timeLine").selectAll(".altern").attr("cy",tll*3);

	d3.select("#timeLine").selectAll(".bougeC").transition().duration(400).attr("cx", function(){
		var val = this.attributes.x.value;
		return parseFloat(val) - (etape-0.5)*tll;
	});
	d3.select("#timeLine").selectAll(".gaucheC").transition().duration(400).attr("cx", function(){
		var val = this.attributes.x.value;
		return parseFloat(val) - (parseFloat(etape)+parseFloat(0.5))*tll;
	})
	d3.select("#bloc"+ind)
		.transition()
		.duration(600)
		.attr("fill", function(){
			var val =this.attributes.fill2.value;
			return val;
		})
		.attr("class",function(){
			if(sens=="false"){
				return "gaucheC elt"
			} else {
				return "gaucheC elt"
			}
		})
		.attr("r", tll)
		.attr("cx", function(){
			var val = this.attributes.x.value;
			var decalX = parseFloat(val)-etape*tll;
			return decalX
		})
		.attr("cy",function(){
			if(document.getElementById("chemb"+ind)){
				return tll*1.5
			} else {
				return tll*2
			}
		})
		
	d3.select("#blocb"+ind)
		.transition()
		.duration(600)
		.attr("fill", function(){
			var val =this.attributes.fill2.value;
			return val;
		})
		.attr("class",function(){
			if(sens=="false"){
				return "gaucheC elt altern"
			} else {
				return "bougeC elt altern"
			}
		})
		.attr("r", tll)
		.attr("cx", function(){
			var val = this.attributes.x.value;
			var decalX = parseFloat(val) -etape*tll;
			return decalX
		})
		.attr("cy",tll*3.5)

	
	//traits

	// d3.select("#timeLine").selectAll(".indD").attr("x2","#f6e9d9");
	d3.select("#timeLine").selectAll(".bougeR").transition().duration(400).attr("x1", function(){
		var val = this.attributes.x.value;
		return parseFloat(val) - (etape-0.5)*tll;
	}).attr("x2", function(){
		var val = this.attributes.x.value;
		return parseFloat(val) - (etape-0.5)*tll;
	});
	d3.select("#timeLine").selectAll(".gaucheR").transition().duration(400).attr("x1", function(){
		var val = this.attributes.x.value;
		return parseFloat(val) - (parseFloat(etape)+parseFloat(0.5))*tll;
	}).attr("x2", function(){
		var val = this.attributes.x.value;
		return parseFloat(val) - (parseFloat(etape)+parseFloat(0.5))*tll;
	})
	d3.select("#trait"+ind)
		.transition()
		.duration(600)
		.attr("class",function(){
			if(sens=="false"){
				return "gaucheR indT"
			} else {
				return "bougeR indT"
			}
		})
		.attr("x1", function(){
			var val = this.attributes.x.value;
			var decalX = parseFloat(val) -etape*tll;
			return decalX
		})
		.attr("x2", function(){
			var val = this.attributes.x.value;
			var decalX = parseFloat(val) -etape*tll;
			return decalX
		})

	//textes
	d3.select("#timeLine").selectAll(".tx").attr("font-size",10)
	d3.select("#timeLine").selectAll(".bougeT").transition().duration(400).attr("x", function(){
		var val = this.attributes.xD.value;
		return parseFloat(val) - (etape-0.5)*tll;
	});
	d3.select("#timeLine").selectAll(".gaucheT").transition().duration(400).attr("x", function(){
		var val = this.attributes.xD.value;
		return parseFloat(val) - (parseFloat(etape)+parseFloat(0.5))*tll;
	})
	d3.select("#tx"+ind)
		.transition()
		.duration(600)
		.attr("class",function(){
			if(sens=="false"){
				return "gaucheT tx"
			} else {
				return "bougeT tx"
			}
		})
		.attr("x", function(){
			var val = this.attributes.xD.value;
			var decalX = parseFloat(val) -etape*tll;
			return decalX
		})
		//.attr("transform","translate(-"+etape*tll+")") 
		//.attr("y", tlh*3)
		.attr("font-size",14)
	
	
		
	
	/////////////////////affichage des boutons
	majBout(choix);
	
	/////////////////////exceptions
	if(ind=="00"){
		var texte2 = "";
		d3.select("#texte-1").html(function(){
			var val = this.innerHTML;
			texte2 = texte2 +" "+ val;
			return val;
		})
		d3.select("#plus").html(texte2);
	}
	if(ind=="-1"){
		for(i=1;i<8;i++){
			d3.select("#b"+i).attr("transform", function(){
				var cx = this.attributes.cx.value;
				var cy = this.attributes.cy.value;
				return "translate("+cx+","+cy+") scale(0)";
			})
			.transition().duration(1000).attr("transform","")
		}
		
	}
	if(ind=="16"){
		d3.select("body").selectAll(".haut")
			.attr("class","haut coupeHaut")
			.style("transform-origin",function(){
				var cX = this.attributes.cx.value;
				var cY = this.attributes.cy.value;
				return cX+"px "+cY+"px";
			})
		d3.select("body").selectAll(".bas")
			.attr("class","bas coupeBas")
			.style("transform-origin",function(){
				var cX = this.attributes.cx.value;
				var cY = this.attributes.cy.value;
				return cX+"px "+cY+"px";
			})
		if(document.getElementById("dessin16").attributes.opacity.value == 0){
			d3.select("#dessin16")
				.attr("transform", "translate(-30)")
				.transition().duration(4000)
				.attr("transform", "")
				.attr("opacity", "1")		
			d3.select("#dessin16droite")
				.attr("transform", "translate(30)")
				.transition().duration(4000)
				.attr("transform", "")
				.attr("opacity", "1")
		}
	} else {
		d3.select("body").selectAll(".bas").attr("class","bas")
		d3.select("body").selectAll(".haut").attr("class","haut")
	}
	if(ind=="15"||ind=="09"||ind=="25"||ind=="07"){
		d3.select("#dessin"+choix+ind).select(".courbe").transition().delay(500).duration(2500).attr("stroke-dasharray","200,0")
		d3.select("#dessin"+choix+ind).select(".tete").transition().delay(2000).duration(500).attr("opacity","1")
		d3.select(".dessinT").select(".courbe").transition().delay(500).duration(2500).attr("stroke-dasharray","200,0")
		d3.select(".dessinT").select(".tete").transition().delay(2000).duration(500).attr("opacity","1")
	}
	if(ind=="13"||ind=="18"){
		var cX = document.getElementById("dessin"+choix+ind).attributes.cx.value;
		var cY = document.getElementById("dessin"+choix+ind).attributes.cy.value;
		d3.select("#dessin"+choix+ind).selectAll("polygon")
			.attr("class","tourne")
			.style("transform-origin",function(){
				return cX+"px "+cY+"px";
			})
	} else{
		d3.select("#anime").selectAll(".tourne")
			.attr("class","")
	}
	if(ind=="06"){
		d3.select("body").selectAll(".fleur")
			.attr("class","fleur tourne10")
			.style("transform-origin",function(){
				var cx = this.attributes.cx.value;
				var cy = this.attributes.cy.value;
				return cx+"px "+cy+"px";
			})
		// .attr("transform", function(){
			// var cx = this.attributes.cx.value;
			// var cy = this.attributes.cy.value;
			// return "translate(0) rotate(-100 "+cx+" "+cy+")"
		// })
		.transition()
		.delay(2000)
		.attr("class","fleur")
		// .attr("transform", function(){
			// var cx = this.attributes.cx.value;
			// var cy = this.attributes.cy.value;
			// return "translate(0) rotate(0 "+cx+" "+cy+")"
		// })
		
		d3.select("body").selectAll(".tijmob2").attr("opacity",1).transition().duration(1000).attr("opacity",0)
		d3.select("body").selectAll(".tijmob").attr("opacity",0).transition().duration(1000).attr("opacity",1)
	}
	if(etape=="02"){
		d3.select("#dessin02").attr("transform","translate(-20)").attr("opacity",0).transition().duration(1000).attr("transform","").attr("opacity",1)
	}
	
	ancChoix = choix;
}

function majBout(choix){
	d3.select("#cacheAlter").remove();
	d3.select("#cachePossible").remove();
	d3.select("#cacheSuite").remove();
	if(document.getElementById("chema"+test)){
		d3.select("#suite").attr("class","bouts rouge")
		d3.select("#suite").attr("opacity",1)
		d3.select("#cacheSuite").remove();
	} else if(document.getElementById("chem"+test)){
		d3.select("#suite").attr("class","bouts bleu")
		d3.select("#suite").attr("opacity",1)
		d3.select("#cacheSuite").remove();
	} else {
		d3.select("#suite").attr("opacity",0.2)
		d3.select("#espBoutons").append("svg")
			.attr("width","5%")
			.attr("height","9%")
			.style("position","absolute")
			.style("margin-top","2.5%")
			.style("margin-left","10%")
			//.style("background","red")
			.attr("id","cacheSuite")
	}
	if(document.getElementById("chema"+ind)){
		d3.select("#possible").attr("class","bouts rouge")
	} else {
		d3.select("#possible").attr("class","bouts bleu")
	}
	
	if(document.getElementById("chemb"+ind) && choix!="b"){
		d3.select("#alter").attr("opacity",1)
		d3.select("#cacheAlter").remove();
	} else {
		d3.select("#alter").attr("opacity",0.2)
		
		d3.select("#espBoutons").append("svg")
			.attr("width","5%")
			.attr("height","9%")
			.style("position","absolute")
			.style("margin-left","5%")
			.style("margin-top","5%")
			//.style("background","green")
			.attr("id","cacheAlter")
	}
	if(choix=="b"){
		d3.select("#possible").attr("opacity",1)
		d3.select("#cachePossible").remove();
	} else {
		
		d3.select("#possible").attr("opacity",0.2)
		d3.select("#espBoutons").append("svg")
			.attr("width","5%")
			.attr("height","9%")
			.style("position","absolute")
			.style("margin-left","5%")
			//.style("background","blue")
			.attr("id","cachePossible")
	}
	if(etape<=0){
		init.style.display = "none";
		retour.style.display = "none";
	} else {
		init.style.display = "inline";
		retour.style.display = "inline";
	}
}

function buildTimeLine(){
	var listeInd = [[0,"10 mai 1981"],[1,"La relance..."],[10,"février 1982"],[16,"mars 1983"],[22,"juillet 1984"],[27,"decembre"],[28,"16 avril 1988"]];
	for(i=0;i<29;i++){
		if (i<=9){
			var j= "0"+i;
		} else {
			var j = i;
		}
		d3.select("#timeLine")
			.append("circle")
			.attr("x", function(){
				return i*(tll)+parseFloat(largTL/2);
			}).attr("cx", function(){
				return i*(tll)+parseFloat(largTL/2);
			})
			.attr("class","bougeC elt")
			.attr("cy",tll*2)
			.attr("r",tll/2)
			.attr("stroke","#FFFFFF")
			.attr("stroke-width",1.5)
			.attr("id", "bloc"+j)
			.attr("fill","#f6e9d9")
			.attr("fill2",function(){
				if(document.getElementById("chemb"+j)){
					return "#E30613"
				} else {
					return "#B3D8ED"
				}
			})
		
		if(document.getElementById("chemb"+j)){
			d3.select("#timeLine")
				.append("circle")
				.attr("x", function(){
				return i*(tll)+parseFloat(largTL/2);
				})
				.attr("cx", function(){
					return i*(tll)+parseFloat(largTL/2);
				})
				.attr("class","bougeC elt altern")
				.attr("cy", tll*3)
				.attr("r",tll/2)
				.attr("stroke","#FFFFFF")
				.attr("stroke-width",1.5)
				.attr("id", "blocb"+j)
				.attr("fill","#f6e9d9")
				.attr("fill2","#7FB029")
		} 
		
	};
		
	d3.select("#timeLine")
		.selectAll(".indT")
		.data(listeInd)
		.enter()
		.append("line")
		.attr("double",function(d){
			if(d[0]==0||d[0]==27){
				return true;
			} else {
				return false;
			}
		})
		.attr("x1", function(d){
			return parseFloat(largTL/2)+ tll*(d[0]+0.5);
		})
		.attr("x2", function(d){
			return parseFloat(largTL/2)+ tll*(d[0]+0.5);
		}).attr("x", function(d){
			return parseFloat(largTL/2)+ tll*(d[0]+0.5);
		})
		.attr("y1", tll*3)
		.attr("y2", function(){
			if(this.attributes.double.value=="true"){
				return tll*5
			} else {
				return tll*4
			}			
		})
		.attr("stroke", "black")
		.attr("stroke-width", 0.5)
		.attr("class", "bougeR indT")
		.attr("id", function(d){
			j = d[0];
			if (d[0]<=9){
				var j = "0"+d[0];
			}
			return "trait"+j;
		})
			
	d3.select("#timeLine")
		.selectAll(".tx")
		.data(listeInd)
		.enter()
		.append("text")
		.attr("double",function(d){
			if(d[0]==0||d[0]==27){
				return true;
			} else {
				return false;
			}
		})
		.attr("x", function(d){
			return parseFloat(largTL/2)+2+ tll*(d[0]+0.5);
		})
		.attr("xD", function(d){
			return parseFloat(largTL/2)+2+ tll*(d[0]+0.5);
		})
		.attr("y", function(){
			if(this.attributes.double.value=="true"){
				return tll*5
			} else {
				return tll*4
			}			
		})
		.attr("class", "bougeT tx")
		.attr("id", function(d){
			j = d[0];
			if (d[0]<=9){
				var j = "0"+d[0];
			}
			return "tx"+j;
		})
		.text( function(d){
			return d[1];
		})
		.attr("font-size",10)
	
	d3.select("#timeLine")
		.selectAll(".fix")
		.data([[-60],[largTL-60]])
		.enter()
		.append("rect")
		.attr("x", function(d){
			return d[0]
		})
		.attr("y", -25)
		.attr("class","fix")
		.attr("width",80)
		.attr("fill","#FFFFFF")
		.attr("height",100)
		.attr("filter","blur(10px)")
};

// function majFenetre(){
	// if(sens=="false"){
		// if(etape>16){
			// d3.select("#pop").style("margin-top","20%").style("margin-left","0%")
		// } else if(etape>12){
			// d3.select("#pop").style("margin-top","34%").style("margin-left","37%")
		// } else {
			// d3.select("#pop").style("margin-left","23.3%").style("margin-top","12%")
		// }
	// } else {
		// if(etape<13){
			// d3.select("#pop").style("margin-left","23.3%").style("margin-top","12%")
		// } else if(etape<17){
			// d3.select("#pop").style("margin-top","34%").style("margin-left","37%")
		// } else {
			// d3.select("#pop").style("margin-top","20%").style("margin-left","0%")
		// }
	// }
	
// }
