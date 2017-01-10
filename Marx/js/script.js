//variables globales

var decalage = [0,1000,2000,3000,4000,5000];
var etape = 0; 
var init = document.getElementById("init"); 
var bout_0 = document.getElementById("bouton_0"); //bouton "démarrer"
var bout_l = document.getElementById("bouton_l"); //bouton "démarrer"

window.onload = function(){
	initialize();
	d3.select("#default").selectAll("text").style("display","none");
	d3.select("#tout").transition().delay(200).duration(500).style("opacity",0.5);
	bout_l.onclick = function(){			
		//d3.select("#rules").style("display", "none")
		d3.select("#rules").transition().duration(1000).style("margin-left","0").style("margin-top","500px").style("font-size", "12px").selectAll("p").style("margin","0px")
		d3.select("#rules").transition().delay(1000).style("margin-top","49%").style("width","79%").style("text-align","right")
		d3.select("#rules").selectAll("img").transition().duration(1000).style("width","15px"); //réduction de la police des règles
		this.style.display = "none";
		d3.select("#general").transition().duration(1000).attr("opacity",1);
		d3.select("#tout").transition().duration(500).style("opacity",1);
		for(i=1;i<7;i++){
			d3.select(".deboule"+i).attr("display","block");
		}
		d3.select("#default").selectAll("text").style("display","block");
	}
	
	bout_0.onclick = function(){
		this.style.display = "none"; 
		d3.select("#rules").style("display","block");

	}
}

 //fonction princiaple
 
 function initialize() {	 
	reseet();
	init.onclick = function(){
		var id= this.id;
		var centre = document.getElementById("revol").attributes.centre.value; //centre de la flèche dans le bouton
		etape = 0; //réinitialisation du temps
		
		
		d3.select("#init").attr("class","bouts on");
		d3.select("#revol").style("transform-origin", centre).attr("class", "debitGauche"); //animation de la flèche du bouton
		d3.select("#revol").selectAll(".revolp").attr("fill","#FFFFFF"); //changement de couleur de la flèche
		for(i=1;i<7;i++){
			d3.select(".deboule"+i).attr("display","none");
		}
		d3.select("#default").selectAll("text").style("display","none");
		
		setTimeout(function(){
			reseet();
			d3.select("#revol").style("transform-origin", centre).attr("class", ""); //animation de la flèche du bouton
			d3.select("#revol").selectAll(".revolp").attr("fill","#000000"); 
			for(i=1;i<7;i++){
				d3.select(".deboule"+i).attr("display","block");
			}
			d3.select("#default").selectAll("text").style("display","block");
			d3.select("#init").style("display","none").attr("class","bouts");
		},3000);
		
		
		
		
		
	}
}
//function remise a zero et initale
function reseet() {
	queue()											
		.defer(d3.csv,"data/etapes.csv")
		.await(callback0); 
		
	function callback0(error, data){
		for(i=0;i<data.length;i++){
			d3.select("#"+data[i].id)
				.attr("class", function(){
					return data[i].class +data[i].etape;
				})
				.attr("animation", function(){
					return data[i].class;
				})
				.attr("etape", function(){
					return data[i].etape
				})
				.attr("decal", function(){
					return data[i].decal
				})
				.attr("duree", function(){
					return data[i].duree
				})
				.attr("size", function(){
					return data[i].size
				})
				.attr("centre", function(){
					return data[i].centre
				})
				.selectAll("tspan")
				.attr("decal", function(){
					return data[i].decal
				})
				.attr("size", function(){
					return data[i].size
				})
		}
		for(i=0;i<7;i++){
			d3.select("#anime")
				.selectAll(".deboule"+i)
				.attr("transform",function(){
					var decal = this.attributes.centre.value;
					var liste = decal.split(",")
					var l = parseFloat(liste[1]) + parseFloat(i*132);
					//alert("translate("+liste[0]+","+l+")");
					//alert(l + " : "+ liste[1])
					var larg = liste[0]- 5;
					return "scale(0.5) translate("+larg+","+l+") ";
				})
				.attr("selected","never")
				.on("click",function(){
					etape = this.attributes.etape.value;
					test = this.attributes.selected.value;
					if(test=="never"){
						this.attributes.selected.value="false";
						d3.select("#c"+etape+"_titre").attr("opacity",0)
						affiche(etape);
						d3.select("#init").style("display","block");
						majBoutons(etape);
					} else if(test=="false") {
						this.attributes.selected.value="true";
						d3.select("#bulle"+etape).transition().duration(1000).attr("transform",function(){
							var centre = document.getElementById("b"+etape+"_titre").attributes.centre.value;
							var ls=centre.split(",")
							return "translate(-"+ls[0]*0.9+" -"+ls[1]*0.8+") scale(2)";
						})
						
					} else {
						this.attributes.selected.value="false";
						d3.select("#bulle"+etape).transition().duration(1000).attr("transform","")
						
					}
					
				})
				.select("path")
				.attr("opacity", 0)
			
			d3.select("#bulle"+i)
				.attr("transform","")
			d3.select("#anime")
				.selectAll(".grandit"+i)
				.attr("font-size",0)
				.selectAll("tspan")
				.attr("font-size",0)
				
			d3.select("#anime")
				.selectAll(".resserre"+i)
				.attr("opacity",0)
				.attr("transform",function(){
					var centre = this.attributes.centre.value;
					return "translate(-"+centre+") scale(2)";
				})	
			
			d3.select("#anime")
				.selectAll(".appar"+i)
				.attr("opacity",0)
				
			d3.select("#anime")
				.selectAll(".opac"+i)
				.attr("opacity",0)
	
			d3.select("#anime")
				.selectAll(".clik"+i)
				.attr("font-size",0)
				.attr("size",0)
				.selectAll("tspan")
				.attr("font-size",0)
				.attr("size",0)

			d3.select("#anime")
				.selectAll(".oclik"+i)
				.attr("opacity",0)			
			
			d3.select("#anime")
				.selectAll(".gauche_droite"+i)
				.attr("width",0)
				
			d3.select("#anime")
				.selectAll(".droite_gauche"+i)
				.attr("width",0)
			
			
			d3.select("#anime")
				.selectAll(".dashplein"+i)
				.selectAll("path")
				.attr("fill","#efefef")
				.attr("stroke","black")
				.attr("stroke-width",0.2)
				.attr("stroke-dasharray",function(){
					var lol = this.getTotalLength();
					return "0,"+lol;
				})
			
			d3.select("#anime")
				.selectAll(".gonfle"+i)
				.attr("transform",function(){
					var cx = this.attributes.cx.value;
					var cy = this.attributes.cy.value;
					return "translate("+cx+","+cy+") scale(0)";
				})
				
			d3.select("#chemins")
				.selectAll("path")
				.attr("stroke-dasharray","0,30")
				.attr("stroke-linecap","round")
				.attr("opacity",0.2);
				
			d3.select("#maison").attr("stroke-dasharray","0,300")
		}
		affiche(0)
		majBoutons(0);
	}
	
	d3.select("#anime").selectAll(".blop").attr("class","blop");
	d3.select("#default").selectAll("text").attr("opacity",1)
	d3.select("#anime").selectAll("appar").attr("opacity",1)
}

function affiche(i){
	//alert(i)
	d3.select("#anime")
		.selectAll(".grandit"+i)
		.transition()
		.delay(function(){
			var ind = this.attributes.decal.value;
			return decalage[ind];
		})
		.duration(1000)
		.attr("font-size",function(){
			var size = this.attributes.size.value;
			return size;
		})
		
	d3.select("#anime")
		.selectAll(".grandit"+i)
		.selectAll("tspan")
		.transition()
		.delay(function(){
			var ind = this.attributes.decal.value;
			return decalage[ind];
		})
		.duration(1000)
		.attr("font-size",function(){
			var size = this.attributes.size.value;
			return size;
		})

	d3.select("#anime")
		.selectAll(".resserre"+i)
		.transition()
		.delay(function(){
			var ind = this.attributes.decal.value;
			return decalage[ind];
		})
		.duration(1000)
		.attr("opacity",1)
		.attr("transform",function(){
			return "";
		})
	
	d3.select("#anime")
		.selectAll(".dashplein"+i)
		.transition()
		.delay(function(){
			var ind = this.attributes.decal.value;
			return decalage[ind];
		})
		.selectAll("path")
		.transition()
		.duration(1500)
		.attr("stroke-dasharray",function(){
			var lol = this.getTotalLength();
			return lol+",0";
		})
		.transition()
		.duration(500)
		.attr("fill","black")
		.attr("stroke","none")
	
	d3.select("#anime")
		.selectAll(".dash"+i)
		.attr("stroke-linecap","")
		.attr("opacity",1)
		.attr("stroke-dasharray",function(){
			var lol = this.getTotalLength();
			return "0,"+lol;
		})
		.transition()
		.delay(function(){
			var ind = this.attributes.decal.value;
			return decalage[ind];
		})
		.duration(function(){
			var lol = this.getTotalLength();
			return lol*4;
		})
		.attr("stroke-dasharray",function(){
			var lol = this.getTotalLength();
			return lol+",0";
		})

	d3.select("#anime")
		.selectAll(".appar"+i)
		.attr("opacity",0)
		.transition()
		.delay(function(){
			var trace = this.id[1];
			var lol = document.getElementById("t"+trace).getTotalLength()*5;
			var ind = this.attributes.decal.value;
			return decalage[ind] + lol;
		})
		.duration(1000)
		.attr("opacity",1)
	
	d3.select("#anime")
		.selectAll(".gonfle"+i)
		.transition()
		.delay(function(){
			var ind = this.attributes.decal.value;
			return decalage[ind];
		})
		.duration(1000)
		.attr("transform",function(){
			return "";
		});
		
	d3.select("#anime")
		.selectAll(".opac"+i)
		.attr("opacity",0)
		.transition()
		.delay(function(){
			var ind = this.attributes.decal.value;
			return decalage[ind];
		})
		.duration(1000)
		.attr("opacity",1);
		
	d3.select("#b"+i+"_clone")
		.attr("opacity",0)
	
	d3.select("#anime")
		.selectAll(".deboule"+i)
		.transition()
		.delay(function(){
			var ind = this.attributes.decal.value;
			return decalage[ind];
		})
		.duration(1000)
		.attr("transform","")
		.select("path")
		.attr("opacity", 1)
			
	
	d3.select("#anime")
		.selectAll(".gauche_droite"+i)
		.attr("width",0)
		.transition()
		.delay(function(){
			var ind = this.attributes.decal.value;
			return decalage[ind];
		})
		.duration(1000)
		.attr("width",68.3)

	d3.select("#anime")
		.selectAll(".droite_gauche"+i)
		.attr("width",0)
		.attr("x",800.6+parseFloat(77.4))
		.transition()
		.delay(function(){
			var ind = this.attributes.decal.value;
			return decalage[ind];
		})
		.duration(1000)
		.attr("width",77.4)
		.attr("x",800.6)
	
	d3.select("#anime")
		.selectAll(".oclik"+i)
		.attr("class", "oclik"+i+" gonfle")
		.style("transform-origin",function(){
			var cx = this.attributes.cx.value;
			var cy = this.attributes.cy.value;
			return cx+ "px " + cy + "px";
		})
		.on("click", function(){
			var id = this.id;
			var ind = id[4]+id[5];
			var lsclasse = this.attributes.class.value;
			var classe = lsclasse.split(" ");
			d3.select("#"+id).attr("class",classe[0]);
			d3.select("#mob"+ind)
				.transition(500)
				//.selectAll("tspan")
				.attr("size", function(){
					if(this.attributes.size.value==0){
						return 12;
					} else {
						return 0;
					}
				})
				.attr("font-size",function(){
					var val = this.attributes.size.value;
					return val;
				})
				.selectAll("tspan")
				.attr("size", function(){
					if(this.attributes.size.value==0){
						return 12;
					} else {
						return 0;
					}
				})
				.attr("font-size",function(){
					var val = this.attributes.size.value;
					return val;
				})
		})
		.on("mouseover", function(){
			var id = this.id;
			hover(id);
		})
		.transition()
		.delay(function(){
			var ind = this.attributes.decal.value;
			return decalage[ind];
		})
		.duration(1000)
		.attr("opacity",1)
}

function hover(id){
	//animation au survol des boules
	d3.select("#"+id)
		.select(".surcercle")
		.transition()
		.duration(1000)
		.attr("fill", "#E2E2E2")
		.transition()
		.delay(700)
		.duration(1000)
		.attr("fill", "#000000");
}

function majBoutons(etape){
	d3.select("#anime").selectAll(".blop").attr("class","blop")
	var id = parseFloat(etape)+1;
	d3.select("#bulle"+id)
		.attr("class",function(){
			var test = document.getElementById("b"+id+"_contour").attributes.selected.value;
			if(test=="never"){
				return 	"clignote blop"
			} else {
				return "blop"
			}
		})
}
