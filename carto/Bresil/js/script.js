//variables globales
var affSpi = false;
var coordph = [138.7,168.7,613.4,799.6,1016,2000];
var coordCapt = [166.9,569,638.5,1028, 2000];
var nuancierP = ["#b8b8b8","#e40134","#00a7ca","#65b22e","#f7a600","#ec6a05"];
var phase = 0;
var ancPhase = 0;
var barbougeX = document.getElementById("barbouge").attributes.cx.value;
var barbougeY = document.getElementById("barbouge").attributes.cy.value;
var dicoMois = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
var dicoCapit = ["octobre 2002","mai 2008","avril 2009","septembre 2014","(...)"]

var x2000 = 42.5;
var x2016av= 1148;

var inner = document.getElementById("inner");
var pop = document.getElementById("pop");
var bout_0 = document.getElementById("bouton_0"); //bouton "démarrer"
var bout_l = document.getElementById("bouton_l"); //bouton "démarrer"

window.onload = function(){
	bout_l.onclick = function(){
		d3.select("#rules").style("display", "none")
		d3.select("#tout").style("opacity",1);
		regles();
		d3.select("#explis").style("text-align","");
		d3.select("#inner").attr("class","psurv").style("opacity",1).selectAll(".survool").remove();
		
		initialize();	
	}
	
	bout_0.onclick = function(){
		this.style.display = "none"; 
		d3.select("#rules").style("display","block");
	}
	
	
 }

//fonction princiaple
function initialize() {	
	inner.onmousemove = function(e){
		var cliX = e.clientX;
		move(cliX);
	}
	inner.onclick = function(){
		spirale();
	}
	pop.onmouseover= function(){
		regles();
	}
	pop.onmouseout= function(){
		reglesOut();
	}
	
		

	
	
}

function move(eX){
	//pour la fonction de survol
	var decalIn = inner.offsetLeft; //marge par défaut
	var largeur = inner.offsetWidth; //taille calculée par le pourcneatge
	var taillep = inner.style.width; //taille donnée en pourcentage (vérifier que c la meme partout dans l'index -> pour inner et pour les svg)
	var taille = taillep.split("%")[0]

	var x = eX - decalIn;
	var prc = x/largeur;
	var nX = 1190.5*prc;
	
	d3.select("#barre").attr("x1", nX).attr("x2",nX)
	d3.select("#visuel").attr("viewBox","0 0 "+nX+" 813.5").attr("width",prc*taille+"%")

	ancPhase = phase;
	phase = 0;
	capit = 0;
	for(i=1;i<6;i++){
		if(nX>=coordph[i-1] && nX<coordph[i]){
			phase = i;
		} 
	}
	for(j=1;j<5;j++){
		if(nX>=coordCapt[j-1] && nX<coordCapt[j]){
			capit = j;
		} 
	}
	
	//phases
	var explis="";
	var titre="";
	d3.select("#txt_phase"+phase).selectAll("tspan").text(function(){
		var val = this.innerHTML;
		explis = explis + val;
		return val;
	})
	d3.select("#titre_phase"+phase).selectAll("tspan").text(function(){
		var val = this.innerHTML;
		titre = titre + val +"<br/>";
		return val;
	})
	
	d3.select("#explis").html(explis);
	if(phase==2){
		d3.select("#explis").style("font-size","12px").style("margin-top","3px")
	} else {
		d3.select("#explis").style("font-size","14px").style("margin-top","8px")
	}
	d3.select("#titreP").html(titre).style("color",nuancierP[phase]);
	
	// if(phase!=ancPhase){
		// d3.select("#pop").style("border-color",nuancierP[phase]).transition().duration(200).style("border-style","solid");
		// d3.select("#pop").transition().delay(200).duration(200).style("border-style","none");
	// }
	
	
	//balance
	var bloublou = "hh"
	if(phase!=ancPhase){
		if(document.getElementById("sep"+phase)){
			var repPhase = document.getElementById("sep"+phase);
			var balangle = repPhase.attributes.balangle.value;
			if(document.getElementById("sep"+ancPhase)){
				var balangleB = document.getElementById("sep"+ancPhase).attributes.balangle.value
				var angleDiff = balangle - balangleB;
			} else {
				var angleDiff = balangle;
			}
			var temps = Math.abs(angleDiff)*50;
			var baldiste = repPhase.attributes.baldiste.value;
			var baldisti = repPhase.attributes.baldisti.value;
			
			d3.select("#balance0").transition().duration(500).attr("opacity",1)
			d3.select("#titre_balance").transition().duration(500).attr("fill",nuancierP[phase]);
			d3.select("#contourbalance").transition().duration(500).attr("stroke",nuancierP[phase]);
			
			d3.select("#barbouge").transition().duration(temps).attr("transform","rotate("+balangle+", "+barbougeX+", "+barbougeY+")");

			d3.select("#exportations")
				.transition().duration(temps).attr("transform","translate(0, "+baldiste+")")
				.selectAll(".glou").style("transform-origin",function(){
					var cx = this.attributes.cx.value;
					var cy = this.attributes.cy.value;
					return cx+"px "+cy+"px";
				}).transition().delay(temps*0.8).attr("class","tangue glou").transition().delay(temps*2).attr("class","glou");
			d3.select("#importations")
				.transition().duration(temps).attr("transform","translate(0, "+baldisti+")")
				.selectAll(".glou").style("transform-origin",function(){
					var cx = this.attributes.cx.value;
					var cy = this.attributes.cy.value
					return cx+"px "+cy+"px";
				}).transition().delay(temps*0.8).attr("class","tangue glou").transition().delay(temps*2).attr("class","glou");
			
			// d3.select("#importations")
				// .transition().duration(temps).attr("transform","translate(0, "+baldisti+")")
				// .attr("class","tangue").style("transform-origin",function(){
					// var val = this.attributes.centre.value;
					// return val;
				// }).transition().delay(temps*1.5).attr("class","");
			
		} else {
			d3.select("#balance0").transition().duration(500).attr("opacity",0.3)
			d3.select("#titre_balance").transition().duration(500).attr("fill","#000000");
			d3.select("#contourbalance").transition().duration(500).attr("stroke","#FFFFFF");
			
			d3.select("#barbouge").transition().duration(500).attr("transform","");
			d3.select("#exportations").transition().duration(500).attr("transform","");
			d3.select("#importations").transition().duration(500).attr("transform","");
		}
	}
	
	//capitaux
	d3.select("#fonds0").selectAll(".periode").remove();
	d3.select("#fonds0")
		.append("rect")
		.attr("class","periode")
		// .attr("fill","none")
		// .attr("stroke","#C6C6C6")
		// .attr("stroke-width",8)
		// .style("filter", "blur(3px)")
		.style("filter", "blur(13px)")
		.attr("fill","#F4F4F4")	
		.attr("x", coordCapt[capit-1])
		.attr("width",coordCapt[capit]-coordCapt[capit-1])
		.attr("y",0)
		.attr("height",900)
	
	if(capit==0){
		d3.select("#fuite_afflux").selectAll(".fuite").transition().duration(1000).attr("opacity",0.05)
		d3.select("#fuite_afflux").selectAll(".afflux").transition().duration(1000).attr("opacity",0.05)
		d3.select("#txt_fuite").text("(...)");
		d3.select("#date_fuite").text("");
	} else if(capit%2==0){
		d3.select("#fuite_afflux").selectAll(".fuite").transition().duration(1000).attr("opacity",1)
		d3.select("#fuite_afflux").selectAll(".afflux").transition().duration(1000).attr("opacity",0)
		d3.select("#txt_fuite").text("Fuite des capitaux");
		d3.select("#date_fuite").text(dicoCapit[capit-1]+" - "+dicoCapit[capit]);
	} else {
		d3.select("#fuite_afflux").selectAll(".fuite").transition().duration(1000).attr("opacity",0)
		d3.select("#fuite_afflux").selectAll(".afflux").transition().duration(1000).attr("opacity",1)
		d3.select("#txt_fuite").text("Afflux de capitaux");
		d3.select("#date_fuite").text(dicoCapit[capit-1]+" - "+dicoCapit[capit]);
	}
	
	//textes remarquables
	for(i=0;i<6;i++){
		var lim = document.getElementById("et"+i).attributes.x.value
		if(nX>lim){
			var txt = document.getElementById("tx"+i).innerHTML;
			var liste = txt.split(">");
			d3.select("#et"+i).transition().duration(500).attr("opacity",1)
			d3.select("#tx"+i).transition().duration(500).attr("opacity",1)
			//d3.select("#events").append("p").attr("id","evgr"+i).html(txt)
			// d3.select("#events").html(function(){
				// var val = this.innerHTML;
				// var nval = "<p id=evgr"+i+">"+liste[1]+"</p>";
				// return nval + val;
			// })
		} else {
			d3.select("#et"+i).transition().duration(500).attr("opacity",0)
			d3.select("#tx"+i).transition().duration(500).attr("opacity",0)
			// d3.select("#evgr"+i).remove();
		}
	}
	for(j=0;j<10;j++){
		var lim = document.getElementById("trait"+j).attributes.x1.value
		if(nX>lim){
			d3.select("#trait"+j).transition().duration(500).attr("opacity",1)
			d3.select("#rem"+j).transition().duration(500).attr("opacity",1)
			
		} else {
			d3.select("#trait"+j).transition().duration(500).attr("opacity",0)
			d3.select("#rem"+j).transition().duration(500).attr("opacity",0)
		}
	}
	d3.select("#text_elect").selectAll("text").attr("opacity", function(){
		var lim = this.attributes.position.value;
		var limI = this.attributes.position_init.value;
		if(nX>limI){
			return 1;
		} else {
			return 0;
		}
	})
	d3.select("#intuit").attr("opacity", function(){
		var lim = this.attributes.position.value;
		if(nX>lim){
			return 1;
		} else {
			return 0;
		}
	})
	
	//date
	// var x2000 = 43;
	// var x2016av= 1148;
	var ampliMM = x2016av-x2000;
	var date = 2001+ (15+1/3)*(nX-x2000)/ampliMM;
	var annee = parseInt(date);
	var moisInd = parseInt((date-annee)*12);
	var mois = dicoMois[moisInd];
	d3.select("#date").html(annee+" - "+mois);
	
	//test
	
	d3.select("#console").html(phase+" "+ancPhase+" "+temps);
 }
 
 function spirale(){
	 
	if(affSpi==false){
		d3.select("#fonds").transition().duration(1000).attr("opacity",0.1)
		d3.select("#graphique_fix").transition().duration(1000).attr("opacity",0.1)
		d3.select("#visuel").transition().duration(1000).attr("opacity",0.1)
		d3.select("#pop").transition().duration(1000).style("opacity",0.1)
		d3.select("#textesRema").transition().duration(1000).style("opacity",0.1)
		d3.select("#inner").attr("class","pspi")
		
		d3.select("#spiiii")
			//.attr("transform","translate(536.2,277.6) scale(0)")
			.transition()
			.duration(2000)
			.attr("opacity",1)
			.attr("transform","")
		
		affSpi = true;
	} else {
		d3.select("#fonds").transition().duration(1000).attr("opacity",1)
		d3.select("#graphique_fix").transition().duration(1000).attr("opacity",1)
		d3.select("#visuel").transition().duration(1000).attr("opacity",1)
		d3.select("#pop").transition().duration(1000).style("opacity",1)
		d3.select("#textesRema").transition().duration(1000).style("opacity",1)
		d3.select("#inner").attr("class","psurv")
		
		d3.select("#spiiii")
			.transition()
			.duration(2000)
			.attr("opacity",0.5)
			.attr("transform","translate(536.2,277.6) scale(0)")
		
		affSpi = false;
	}
 }
 
function regles(){
	d3.select("#explis").style("text-align","center").html("Survoler l'infographie pour voir la chronologie <img src = 'img/cursor2.png' style='width:14px'/> <br/> Cliquer pour afficher/masquer la spirale vicieuse <img src = 'img/cursor1.png' style='width:14px'>")
	d3.select("#titreP").html("")
	d3.select("#date").html("");
	if(affSpi==false){
		d3.select("#inner").style("opacity",0.2);
	}
	
	d3.select("#text_elect")
		.append("line")
		.attr("class","survool")
		.attr("x1",0)
		.attr("x2",0)
		.attr("x1",0)
		.attr("y1",0)
		.attr("y2",1000)
		.attr("opacity",0.4)
		.attr("stroke","#000000")
		.attr("stroke-width",10)
		.transition()
		.duration(800)
		.attr("transform", "translate(1500,0)")
		
} 
 function reglesOut(){
	d3.select("#explis").style("text-align","")
	d3.select("#inner").style("opacity",1).selectAll(".survool").remove();
}
