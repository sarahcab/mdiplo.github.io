
window.onload = function(){
// 	var ok = document.getElementById("ok");
// 	var cap = 100;
// 	var nbr = document.getElementById("nombre");
// 	nbr.onclick = function(){
// 		cap = this.value
// 	}
// 	ok.onclick = function(){
	  	document.getElementById("depart").remove();
 		document.getElementById("all").style.display = "flex";
		initialize(100);
 	//} 	
}

function initialize(cap) {
	var remplis_n8 = ["M509.61,364.481h-6.044h-1.938c0-0.352,45.327-0.637,101.24-0.637c55.912,0,101.24,0.285,101.24,0.637 h-11.832H509.61z", "M496.694,364.468	c-8.638-0.185-17.141-2.927-24.259-7.855c0.386-0.146,0.753-0.304,1.126-0.463c1.583-0.676,3.223-1.378,6.445-1.378	c3.224,0,4.859,0.702,6.442,1.378c1.482,0.637,2.887,1.246,5.771,1.246c2.883,0,4.296-0.609,5.777-1.246	c1.583-0.676,3.224-1.378,6.458-1.378c3.224,0,4.853,0.702,6.435,1.378c1.48,0.637,2.896,1.246,5.768,1.246	c2.886,0,4.3-0.609,5.778-1.246c1.583-0.676,3.225-1.378,6.457-1.378c3.224,0,4.863,0.702,6.446,1.378	c1.479,0.637,2.883,1.246,5.768,1.246c2.883,0,4.286-0.609,5.778-1.246c1.583-0.676,3.224-1.378,6.446-1.378	c3.231,0,4.874,0.702,6.457,1.378c1.479,0.637,2.884,1.246,5.769,1.246c0.101,0,0.19,0.027,0.283,0.054h0.01	c0.091-0.041,0.17-0.054,0.261-0.054c2.896,0,4.297-0.609,5.79-1.246c1.583-0.676,3.227-1.378,6.446-1.378s4.862,0.702,6.445,1.378	c1.479,0.637,2.884,1.246,5.769,1.246c2.896,0,4.298-0.609,5.777-1.246c1.596-0.676,3.231-1.378,6.459-1.378	c3.225,0,4.856,0.702,6.442,1.378c1.48,0.637,2.885,1.246,5.771,1.246c2.885,0,4.284-0.609,5.776-1.246	c1.582-0.676,3.226-1.378,6.443-1.378c3.221,0,4.865,0.702,6.447,1.378c1.479,0.637,2.883,1.246,5.766,1.246	c2.885,0,4.287-0.609,5.779-1.246c1.584-0.676,3.223-1.378,6.446-1.378s4.859,0.702,6.441,1.378	c1.482,0.637,2.887,1.246,5.771,1.246c2.895,0,4.282-0.609,5.774-1.246c1.584-0.676,3.228-1.378,6.445-1.378	c3.221,0,4.862,0.702,6.447,1.378c1.479,0.637,2.883,1.246,5.766,1.246c2.896,0,4.287-0.609,5.789-1.246	c1.572-0.676,3.213-1.378,6.438-1.378c0.091,0,0.183,0.013,0.261,0.053h0.012c0.078-0.041,0.182-0.053,0.271-0.053	c3.224,0,4.859,0.702,6.441,1.378c1.482,0.637,2.889,1.246,5.771,1.246c2.882,0,4.284-0.609,5.776-1.246	c1.584-0.676,3.224-1.378,6.445-1.378v0.027c1.18-0.001,2.145,0.092,2.967,0.237c-0.001,0.01-0.003,0.021-0.004,0.031	c1.964,0.222,3.214,0.751,4.423,1.268c0.233,0.1,0.466,0.199,0.701,0.295c-1.706,1.169-3.487,2.221-5.327,3.144	c-0.798,0.401-1.608,0.775-2.428,1.127c-5.121,2.203-10.606,3.451-16.098,3.566c-0.26,0.013-0.542,0.013-0.804,0.013h-3.49H503.566	L496.694,364.468z","M497.508,364.481c-0.283,0-0.542,0-0.814-0.013	c-9.605-0.205-19.048-3.569-26.602-9.59c-0.045-0.036-0.094-0.07-0.139-0.106c-3.776-3.037-7.063-6.751-9.661-11.069	c0.98,0.258,1.771,0.594,2.546,0.924c1.479,0.637,2.886,1.246,5.77,1.246s4.298-0.609,5.778-1.246	c1.22-0.521,2.474-1.053,4.458-1.272h3.97c1.984,0.219,3.243,0.751,4.462,1.272c1.479,0.637,2.884,1.246,5.769,1.246	c2.886,0,4.285-0.609,5.778-1.246c1.219-0.521,2.479-1.053,4.463-1.272h3.966c1.981,0.219,3.24,0.751,4.46,1.272	c1.481,0.637,2.886,1.246,5.771,1.246c2.883,0,4.296-0.609,5.778-1.246c1.219-0.521,2.479-1.053,4.469-1.272h3.97	c1.98,0.219,3.234,0.751,4.453,1.272c1.481,0.637,2.896,1.246,5.769,1.246c2.886,0,4.3-0.609,5.777-1.246	c1.219-0.521,2.481-1.053,4.469-1.272h3.972c1.983,0.219,3.244,0.751,4.463,1.272c1.479,0.637,2.883,1.246,5.768,1.246	c2.884,0,4.286-0.609,5.778-1.246c1.219-0.521,2.48-1.053,4.464-1.272h3.972c1.987,0.219,3.25,0.751,4.469,1.272	c1.479,0.637,2.883,1.246,5.768,1.246c0.102,0,0.191,0.027,0.283,0.054h0.01c0.091-0.041,0.17-0.054,0.262-0.054	c2.896,0,4.297-0.609,5.789-1.246c1.221-0.521,2.482-1.053,4.466-1.272h3.965c1.981,0.219,3.244,0.751,4.463,1.272	c1.479,0.637,2.883,1.246,5.768,1.246c2.896,0,4.3-0.609,5.777-1.246c1.229-0.521,2.49-1.053,4.475-1.272h3.968	c1.981,0.219,3.238,0.751,4.461,1.272c1.479,0.637,2.885,1.246,5.77,1.246s4.285-0.609,5.777-1.246	c1.219-0.521,2.479-1.053,4.463-1.272h3.963c1.983,0.219,3.246,0.751,4.465,1.272c1.479,0.637,2.883,1.246,5.767,1.246	c2.885,0,4.286-0.609,5.778-1.246c1.221-0.521,2.48-1.053,4.464-1.272h3.967c1.981,0.219,3.239,0.751,4.459,1.272	c1.481,0.637,2.887,1.246,5.771,1.246c2.896,0,4.283-0.609,5.775-1.246c1.22-0.521,2.481-1.053,4.465-1.272h3.963	c1.982,0.219,3.245,0.751,4.465,1.272c1.479,0.637,2.883,1.246,5.767,1.246c2.896,0,4.286-0.609,5.788-1.246	c1.212-0.521,2.471-1.053,4.455-1.272h4.511c1.981,0.219,3.239,0.751,4.459,1.272c1.481,0.637,2.889,1.246,5.771,1.246	s4.285-0.609,5.777-1.246c0.482-0.207,0.979-0.413,1.516-0.604c-2.633,4.131-5.935,7.756-9.713,10.748	c-0.046,0.036-0.094,0.07-0.14,0.106c-7.542,5.927-16.889,9.394-26.245,9.59c-0.26,0.013-0.542,0.013-0.805,0.013h-6.59H501.628	L497.508,364.481z","M497.508,364.481c-0.283,0-0.542,0-0.814-0.013	c-9.664-0.207-19.164-3.606-26.739-9.696c-3.708-2.981-6.94-6.617-9.516-10.833c-0.12-0.195-0.245-0.385-0.362-0.583	c-1.559-2.649-2.851-5.525-3.837-8.61c1.372-0.229,2.334-0.634,3.317-1.057c1.584-0.676,3.212-1.378,6.442-1.378	c3.228,0,4.863,0.702,6.446,1.378c1.479,0.637,2.884,1.246,5.769,1.246c2.886,0,4.286-0.609,5.778-1.246	c1.583-0.676,3.224-1.378,6.445-1.378c3.224,0,4.86,0.702,6.443,1.378c1.481,0.637,2.886,1.246,5.771,1.246	c2.883,0,4.296-0.609,5.778-1.246c1.583-0.676,3.223-1.378,6.458-1.378c3.223,0,4.852,0.702,6.434,1.378	c1.481,0.637,2.896,1.246,5.769,1.246c2.886,0,4.3-0.609,5.777-1.246c1.583-0.676,3.226-1.378,6.457-1.378	c3.225,0,4.863,0.702,6.446,1.378c1.479,0.637,2.883,1.246,5.768,1.246c2.884,0,4.286-0.609,5.778-1.246	c1.583-0.676,3.225-1.378,6.447-1.378c3.23,0,4.874,0.702,6.457,1.378c1.479,0.637,2.883,1.246,5.768,1.246	c0.102,0,0.191,0.027,0.283,0.054h0.01c0.092-0.041,0.17-0.054,0.262-0.054c2.896,0,4.297-0.609,5.789-1.246	c1.584-0.676,3.227-1.378,6.446-1.378s4.863,0.702,6.446,1.378c1.479,0.637,2.883,1.246,5.768,1.246	c2.896,0,4.298-0.609,5.776-1.246c1.597-0.676,3.233-1.378,6.459-1.378c3.225,0,4.858,0.702,6.443,1.378	c1.48,0.637,2.886,1.246,5.77,1.246c2.885,0,4.285-0.609,5.778-1.246c1.582-0.676,3.224-1.378,6.442-1.378	c3.22,0,4.864,0.702,6.447,1.378c1.479,0.637,2.883,1.246,5.767,1.246c2.885,0,4.286-0.609,5.778-1.246	c1.583-0.676,3.224-1.378,6.446-1.378s4.859,0.702,6.441,1.378c1.481,0.637,2.888,1.246,5.771,1.246	c2.894,0,4.283-0.609,5.774-1.246c1.584-0.676,3.227-1.378,6.445-1.378c3.22,0,4.863,0.702,6.446,1.378	c1.479,0.637,2.883,1.246,5.767,1.246c2.896,0,4.286-0.609,5.789-1.246c1.572-0.676,3.213-1.378,6.438-1.378	c0.09,0,0.182,0.013,0.26,0.053h0.012c0.078-0.041,0.184-0.053,0.271-0.053c3.224,0,4.859,0.702,6.441,1.378	c1.482,0.637,2.889,1.246,5.771,1.246c2.884,0,4.286-0.609,5.778-1.246c1.318-0.563,2.689-1.138,4.969-1.316	c0.377-0.03,0.779-0.049,1.211-0.054c0.091,0.001,0.176,0.005,0.265,0.007v0.012c0.249,0,0.483,0.006,0.715,0.014	c0.863,0.055,1.594,0.168,2.242,0.315c1.182,0.267,2.09,0.646,2.972,1.022c1.479,0.637,2.886,1.246,5.77,1.246	c1.046,0,1.895-0.082,2.626-0.214c-1.006,3.07-2.354,5.958-3.992,8.635l-0.375,0.583c-2.642,4.167-5.964,7.82-9.768,10.833	c-7.566,5.993-16.971,9.499-26.385,9.696c-0.261,0.013-0.542,0.013-0.805,0.013h-10.658H505.31H497.508z","M497.508,364.481c-0.283,0-0.542,0-0.814-0.013	c-21.723-0.464-42.645-17.03-42.645-44.131c0.293-0.014,0.607-0.027,0.945-0.027c3.234,0,4.875,0.702,6.458,1.378	c1.48,0.637,2.887,1.246,5.771,1.246s4.298-0.609,5.778-1.246c1.584-0.676,3.212-1.378,6.442-1.378c3.228,0,4.863,0.702,6.446,1.378	c1.479,0.637,2.884,1.246,5.768,1.246c2.887,0,4.286-0.609,5.779-1.246c1.583-0.676,3.223-1.378,6.445-1.378	c3.224,0,4.859,0.702,6.442,1.378c1.482,0.637,2.887,1.246,5.771,1.246c2.883,0,4.296-0.609,5.778-1.246	c1.583-0.676,3.223-1.378,6.458-1.378c3.223,0,4.852,0.702,6.434,1.378c1.481,0.637,2.896,1.246,5.768,1.246	c2.887,0,4.301-0.609,5.778-1.246c1.583-0.676,3.226-1.378,6.457-1.378c3.224,0,4.863,0.702,6.446,1.378	c1.479,0.637,2.883,1.246,5.768,1.246c2.883,0,4.286-0.609,5.778-1.246c1.583-0.676,3.224-1.378,6.447-1.378	c3.23,0,4.874,0.702,6.457,1.378c1.479,0.637,2.883,1.246,5.768,1.246c0.101,0,0.191,0.027,0.283,0.054h0.01	c0.091-0.041,0.17-0.054,0.261-0.054c2.896,0,4.297-0.609,5.79-1.246c1.583-0.676,3.227-1.378,6.446-1.378s4.863,0.702,6.446,1.378	c1.479,0.637,2.883,1.246,5.768,1.246c2.896,0,4.298-0.609,5.776-1.246c1.597-0.676,3.232-1.378,6.459-1.378	c3.225,0,4.857,0.702,6.442,1.378c1.481,0.637,2.887,1.246,5.771,1.246c2.885,0,4.285-0.609,5.777-1.246	c1.582-0.676,3.225-1.378,6.443-1.378s4.864,0.702,6.447,1.378c1.479,0.637,2.883,1.246,5.766,1.246	c2.885,0,4.287-0.609,5.779-1.246c1.583-0.676,3.223-1.378,6.446-1.378c3.223,0,4.858,0.702,6.441,1.378	c1.481,0.637,2.888,1.246,5.771,1.246c2.894,0,4.283-0.609,5.773-1.246c1.584-0.676,3.228-1.378,6.446-1.378	s4.863,0.702,6.446,1.378c1.479,0.637,2.883,1.246,5.767,1.246c2.896,0,4.286-0.609,5.789-1.246	c1.572-0.676,3.213-1.378,6.438-1.378c0.09,0,0.182,0.013,0.26,0.053h0.012c0.078-0.041,0.183-0.053,0.271-0.053	c3.224,0,4.858,0.702,6.441,1.378c1.482,0.637,2.889,1.246,5.771,1.246c2.884,0,4.286-0.609,5.777-1.246	c1.584-0.676,3.224-1.378,6.444-1.378v0.027c1.18-0.001,2.146,0.092,2.968,0.237c-0.011,0.133-0.021,0.266-0.045,0.398	c0.473,25.27-21.021,43.044-42.563,43.496c-0.261,0.013-0.542,0.013-0.805,0.013h-4.847H499.3H497.508z"]
	var remplis_n9 = ["M112.721,429.199c0,0.484-0.393,0.878-0.878,0.878s-0.878-0.394-0.878-0.878 		c0-0.303,0.152-0.568,0.384-0.727c0.141-0.097,0.311-0.152,0.494-0.152C112.328,428.32,112.721,428.714,112.721,429.199z", "M111.843,410.47c-5.475,0-10.402,2.35-13.827,6.096c-3.044,3.331-4.902,7.766-4.902,12.634 		c0,10.343,8.385,18.729,18.729,18.729c10.344,0,18.729-8.386,18.729-18.729S122.186,410.47,111.843,410.47z", "M111.843,391.741c-11.352,0-21.524,5.05-28.393,13.026 		c-5.649,6.559-9.064,15.096-9.064,24.432c0,20.687,16.771,37.458,37.458,37.458c20.687,0,37.458-16.771,37.458-37.458 		C149.301,408.512,132.53,391.741,111.843,391.741z", "M119.132,373.498h-14.578c-13.649,1.77-25.762,8.433-34.518,18.174 		c-8.94,9.945-14.379,23.1-14.379,37.527c0,28.558,21.313,52.124,48.898,55.7h14.577c27.585-3.576,48.898-27.143,48.898-55.7 		C168.03,400.64,146.716,377.074,119.132,373.498z", "M174.205,373.498h-55.073h-14.578H49.48c-4.143,0-7.513,3.37-7.513,7.512v19.595v28.098 		v28.099v20.587c0,4.142,3.37,7.512,7.513,7.512h2.969h2.984h2.105h0.177h46.838h14.577h33.032h8.25h0.176h13.615h0.001 		c4.143,0,7.513-3.37,7.513-7.512V381.01C181.718,376.868,178.347,373.498,174.205,373.498z"];
	var remplis_n10 = ["M1026.201,428.715c0,0.484-0.393,0.878-0.878,0.878s-0.878-0.394-0.878-0.878 		c0-0.317,0.168-0.596,0.421-0.75c0.134-0.082,0.29-0.129,0.457-0.129C1025.809,427.836,1026.201,428.229,1026.201,428.715z","M1024.447,410.195c-5.964,0-11.268,2.818-14.654,7.195 c-2.423,3.131-3.865,7.059-3.865,11.323c0,10.228,8.291,18.52,18.52,18.52c10.227,0,18.519-8.292,18.519-18.52 C1042.965,418.487,1034.673,410.195,1024.447,410.195z", "M1024.447,391.676c-11.841,0-22.385,5.557-29.166,14.206	c-4.933,6.291-7.873,14.219-7.873,22.832c0,20.455,16.584,37.039,37.039,37.039c20.454,0,37.037-16.584,37.037-37.039	C1061.484,408.26,1044.901,391.676,1024.447,391.676z", "M1024.447,373.157c-17.438,0-33,8.035-43.186,20.604	c-7.736,9.546-12.372,21.709-12.372,34.953c0,30.683,24.875,55.558,55.558,55.558c30.682,0,55.557-24.875,55.557-55.558	C1080.003,398.032,1055.128,373.157,1024.447,373.157z", "M1086.809,373.014H962.082c-4.142,0-7.512,3.37-7.512,7.512v19.843v28.346v28.346v19.843 		c0,4.144,3.37,7.512,7.512,7.512h17.146h1.012h0.33h3.138h36.495h6.109h3.305h1.024h56.166h0.001c4.142,0,7.512-3.368,7.512-7.512 		v-96.378C1094.321,376.383,1090.95,373.014,1086.809,373.014z"];
	var remplis_n11 = ["M374.086,456.392c0,0.484-0.393,0.878-0.878,0.878s-0.878-0.394-0.878-0.878	c0-0.331,0.184-0.62,0.455-0.77c0.125-0.069,0.27-0.109,0.423-0.109C373.693,455.513,374.086,455.906,374.086,456.392z", "M373.207,446.256c-2.212,0-4.258,0.708-5.925,1.91c-2.55,1.841-4.21,4.839-4.21,8.225 		c0,5.598,4.538,10.136,10.135,10.136s10.136-4.538,10.136-10.136S378.804,446.256,373.207,446.256z", "M373.207,436.12c-4.426,0-8.521,1.419-11.854,3.827c-5.098,3.682-8.416,9.675-8.417,16.443 		c0,11.195,9.076,20.271,20.271,20.271s20.271-9.076,20.271-20.271C393.477,445.196,384.402,436.12,373.207,436.12z", "M373.207,425.985c-7.206,0-13.827,2.507-19.038,6.696 		c-6.932,5.572-11.368,14.123-11.368,23.709c0,16.793,13.614,30.406,30.406,30.406s30.406-13.613,30.406-30.406 		C403.613,439.599,389.999,425.985,373.207,425.985z", "M417.144,463.056l-29.297-48.622c-1.043-1.734-2.955-2.809-4.994-2.809 		c-1.052,0-2.081,0.287-2.98,0.828l-48.625,29.295c-0.662,0.398-1.227,0.916-1.672,1.522c-0.446,0.606-0.774,1.303-0.961,2.059 		c-0.375,1.511-0.145,3.073,0.654,4.396l4.016,6.666l25.279,41.958c1.043,1.731,2.957,2.809,4.996,2.809 		c1.051,0,2.08-0.287,2.979-0.827l3.446-2.077l4.787-2.884l11.053-6.658l13.747-8.282l15.593-9.394 		c1.201-0.724,2.046-1.815,2.479-3.045C418.199,466.408,418.073,464.601,417.144,463.056z"];
	var rsr = Raphael('animRaph', '1190.55', '813.543'); 
	var remplin8 = rsr.path(remplis_n8[0]);
	var remplin9 = rsr.path(remplis_n9[0]);
	var remplin10 = rsr.path(remplis_n10[0]);
	var remplin11 = rsr.path(remplis_n11[0]);
	remplin8.attr({id: 'remp1_1_',opacity: '1',fill: '#98C3D7',"enable-background": 'new ','stroke-width': '0','stroke-opacity': '1'}).data('id', 'remp1_1_');
	remplin9.attr({id: 'remp1_1_',opacity: '1',fill: '#98C3D7',"enable-background": 'new ','stroke-width': '0','stroke-opacity': '1'}).data('id', 'remp1_1_');
	remplin10.attr({id: 'remp1_1_',opacity: '1',fill: '#98C3D7',"enable-background": 'new ','stroke-width': '0','stroke-opacity': '1'}).data('id', 'remp1_1_');
	remplin11.attr({id: 'remp1_1_',opacity: '1',fill: '#98C3D7',"enable-background": 'new ','stroke-width': '0','stroke-opacity': '1'}).data('id', 'remp1_1_');
	var listeR = [remplis_n8,remplis_n9, remplis_n10, remplis_n11];
	var listeObj = [remplin8, remplin9, remplin10, remplin11];
	document.getElementById("n12").attributes.capital.value = cap;
	var player = document.querySelector('#audioPlayer');
				
	var capInit = cap;
	var vit = 1000;
	var itBout = 0;
	var robi = document.getElementsByClassName("rob");
	var noeuds = document.getElementsByClassName("noeud");
	var boutTout = document.getElementById("boutTout");
	var boutLibre = document.getElementById("boutLibre");
	var affMode = document.getElementById("affMode");
	var nuancier = ["#F5F6F7", "#E6E8EE","#ACC1C3","#6F9E9C","#22847D"];
	var listeTemps = [6000,9000,11000,6000,5000,4000,4000,5000,4000,3500,3000,2000,2000,2500,1500,2000,7000,3000,1000,12000,0,17000,5000];
	var listeNoeuds = ["m", "q", "u","n", "o", "p", "w", "v", "r","a", "b", "c", "d", "e", "f", "g","t", "s", "l","k", "h", "i", "j"];

	
	
	//Choix des boutons
	choice2();
	
	
	//Création des éléments audio
	for(h=0;h<listeNoeuds.length;h++){
		d3.select("body").append("audio").attr("id","audio_"+listeNoeuds[h]).append("source").attr("src", "audio/"+listeNoeuds[h]+".wav")
	}
	
	for(i=0; i<robi.length; i++){	
		robi[i].onclick = function(){
			maj(this.id, capInit);
		};
		
	};
	
	var idnew= "";
	var bouton="";
	for(j=0; j<noeuds.length; j++){	
		idnew = noeuds[j].id
		bouton = document.getElementById("bou_"+idnew);
		bouton.onclick = function(){
			var idbout = this.attributes.direction.value;
			maj(idbout, capInit);
		};
		
	};
	//permettre l'arrêt de la fonction
	var continuue = false;
	var taps = 0;
		boutTout.onclick = function(){
		this.value = "Initialiser";
		boutLibre.value = "Utilisation libre";
		continuue = false;
	
	//initialisation
		reinitialize();
		d3.select("#images").append("div").style("width","1190.55px").style("height","813.543px").style("margin-top","200px").attr("id", "cache").style("position", "relative");
		d3.select("#txtFix").transition().duration(0.5*vit).attr("opacity", 0);
		d3.select("#noeuds_demo").transition().duration(0.5*vit).attr("opacity", 1).style("display", "block")
		d3.select("#txt_n8").transition().duration(0.5*vit).attr("opacity", 1).style("display", "block");
		d3.select("#explis").transition().duration(0.5*vit).attr("opacity", 0).style("display", "none");
		d3.select("#legende").transition().duration(0.5*vit).attr("opacity", 0).style("display", "none");
		d3.select("#legende2").transition().duration(0.5*vit).attr("opacity", 0).style("display", "none");
		d3.select("#introduction").style("display", "block");
		d3.select("#affMode").style("display", "none");
		d3.select("#modedEmploi").style("display", "none");
		d3.select("#divChoix2").selectAll(".boutPlus").style("opacity", "0");

	//Lancement de la démo
		
		var tps = 7000;
		var ind = 0;
		d3.select("body").append("audio").attr("id","audio_zero").append("source").attr("src", "audio/zero.wav")
		document.getElementById("audio_zero").play();
		d3.select("#periscope").transition().duration(500).attr("opacity", 1)
		
		queue()											
			.defer(d3.csv,"data/relations2.csv")
			.await(callback2); 
		function callback2(error, csvData){
			var test = taps;
			continuue = true;
			for(i=0;i<listeTemps.length;i++){
				if(i==0){
					var temps = tps;
				}		
				setTimeout(function(){
					if(continuue == true && test == taps){
					maj2(listeNoeuds[ind], csvData);
					
					document.getElementById("audio_"+listeNoeuds[ind]).play();
					ind ++;
					}
				}, temps)
				var temps = temps + listeTemps[i];
				
				if(i==0){
					setTimeout(function(){
						//alert("2 "+temps);
						d3.select("#fg_n10").attr("opacity", 1);
						d3.select("#fg_n10").transition().duration(vit).attr("transform", "translate("+0 +"," + 43 + ")");
						d3.select("#fa_n10").transition().duration(0.5*vit).attr("opacity", 1);
					}, temps)
				}else if(i==8){
					setTimeout(function(){
						d3.select("#n8d").transition().duration(500).style("opacity", 0).transition().delay(500).duration(500).style("opacity", 1)
					}, temps)
				} else if(i==19){
					setTimeout(function(){
						d3.select("#n8d").transition().duration(500).style("opacity", 0).transition().delay(500).duration(500).style("opacity", 1)
					}, temps)		
					setTimeout(function(){
						//alert("21 "+temps);
						d3.select("#fg_n9").attr("opacity", 1);
						d3.select("#fg_n9").transition().duration(vit).attr("transform", "translate("+0 +"," + 43 + ")");
						d3.select("#fa_n9").transition().duration(0.5*vit).attr("opacity", 1);
					}, temps)
				}
				
			}
		}
		taps ++;
	}
	
	boutLibre.onclick = function(){
		this.value = "Initialiser";
		boutTout.value = "Mode démonstration";
		//arrêt de la fonction demo
		continuue = false;
		reinitialize();
		d3.select("#cache").remove();
		d3.select("#txtFix").transition().duration(0.5*vit).attr("opacity", 1);
		d3.select("#noeuds_demo").transition().duration(0.5*vit).attr("opacity", 0).style("display", "none");
		d3.select("#explis").transition().duration(0.5*vit).attr("opacity", 1).style("display", "block");
		d3.select("#legende").transition().duration(0.5*vit).attr("opacity", 1).style("display", "block");
		d3.select("#legende2").transition().duration(0.5*vit).attr("opacity", 1).style("display", "flex");
		d3.select("#divChoix2").selectAll(".boutPlus").style("opacity", "0.5");
		
		//tas de pièces

		d3.select("#n12").selectAll(".t4").transition().duration(500).attr("opacity",0); 
		d3.select("#n12").selectAll(".t3").transition().duration(500).attr("opacity",0);
		d3.select("#n12").selectAll(".t2").transition().duration(500).attr("opacity",1); 
		d3.select("#n12").selectAll(".t1").transition().duration(500).attr("opacity",1); 
		
		
		d3.select("#introduction").style("display", "none");
		d3.select("#affMode").style("display", "block");
	}

	var itMode = 0;
	affMode.onclick = function(){
		var tst = itMode % 2;
		if(tst == 0){
			this.value = "Masquer";
			d3.select("#modedEmploi").style("display", "block");
		} else {
			this.value = "Afficher le mode d'emploi";
			d3.select("#modedEmploi").style("display", "none");
		}
		itMode ++;
	}
	
	function reinitialize(){
		if(document.getElementById("cacheInit").style.opacity == 1){
			d3.select("#cacheInit").transition().duration(1000).style("opacity", 0).transition().delay(1000).style("display", "none");
		} 
		//réinitialisation des tuyaux			
		d3.select("#anime").selectAll(".relation").attr("stroke-dasharray","1, 1000").attr("opacity",0); 
		d3.select("#anime").selectAll(".debit").attr("class", "none");
		
		
		//capital
		d3.select("#noeuds").selectAll("g").attr("capital", 0);
		d3.select("#n12").attr("capital", 100);
		
		//objets raphael
		for(i=0;i<listeObj.length;i++){
			listeObj[i].animate({path:listeR[i][0]},500);
		}
		d3.select("#anime").selectAll(".eff").attr("opacity",0);
		//noeuds dessin
		d3.select("#anime").selectAll(".t1").attr("opacity", 0);
		d3.select("#anime").selectAll(".t2").attr("opacity", 0);
		d3.select("#anime").selectAll(".t3").attr("opacity", 0);
		d3.select("#anime").selectAll(".t4").attr("opacity", 0);
		d3.select("#anime").selectAll("g").attr("cond", 0);
		
		//noeuds gris
		d3.select("#n13").attr("opacity", 0);
		d3.select("#anime").selectAll(".eteint").transition().duration(0.5*vit).attr("opacity", 1);
		d3.select("#anime").selectAll(".allume").transition().duration(0.5*vit).attr("opacity", 0);
		
		//gouttes
		d3.select("#anime").selectAll(".goutte").transition().duration(vit).style("opacity", 1).attr("transform", "");
		
		//fuites
		d3.select("#anime").selectAll(".fas").transition().duration(vit).style("opacity", 0);
		d3.select("#anime").selectAll(".fgs").transition().duration(vit).style("opacity", 0).attr("transform", "");
		
		//periscope
		d3.select("#periscope").transition().duration(vit).attr("opacity", 0);
		d3.select("#perisVar").attr("transform", "");
		
		//textes de la demo
		d3.select("#anime").selectAll(".txtDemo").transition().duration(vit).attr("opacity", 0);
		
		//boutons
		d3.select("#textes_bouts").selectAll(".boutCont").style("display", "none");
		
		//arrêt du son
		for(i=0;i<listeNoeuds.length;i++){
			document.getElementById("audio_"+listeNoeuds[i]).pause();
		}
	}
	
	function print(arg){
		alert(arg);
	}
	function maj(id, capInit) {
		var globale = true;
		listeTextes = [];
		listeXlab = [];
		listeYlab = [];
		queue()											
			.defer(d3.csv,"data/relations.csv")
			.await(callback); 
			
		function callback(error, csvData){
// 				if(id=="n9"){
// 					document.getElementById("n").attributes.ok.value == "ok"
// 				}  				
			var n12 = false;
			for(j=0; j<csvData.length; j++){
				if (csvData[j].n1 == id){
					var cap = document.getElementById(id).attributes.capital.value;
					if(cap==0){
						alert(0)
					}else{
						obj  = document.getElementById(csvData[j].n1);
						
						if(csvData[j].n1 != "n9" || document.getElementById("n8").attributes.capital.value > 0){
							d3.select("#"+csvData[j].n2)
								.attr("capital", function(){
									var anc = parseFloat(this.attributes.capital.value);
									var coeff = parseFloat(csvData[j].coef)/capInit;
									var capAd = cap * coeff;
									
									if(csvData[j].n1 == "n9"){											
										var valGlobal = document.getElementById("n8").attributes.capital.value/capInit;
										var val = (parseFloat(anc) + parseFloat(capAd))*valGlobal
									} else {
										var val = parseFloat(anc) + parseFloat(capAd);
									}
									return val;
								})
								.attr("cond", function(){
									var val = parseFloat(this.attributes.cond.value) + 1
									return val
								})
								.attr("class", "noeud done")
								
							d3.select("#"+csvData[j].r) 
								.attr("stroke-dasharray", "1, 2000")
								.attr("ok", "ok")
								.attr("stroke", function(){
									if(csvData[j].n1 == "n9"){
										var valGlobal = document.getElementById("n8").attributes.capital.value/capInit;
										coeff = valGlobal*(cap/capInit);
									} else {
										coeff = cap/capInit;
									}
									if(coeff>3){
										return nuancier[4];
									} else if (coeff>1){
										return nuancier[3];
									} else if (coeff>0.25){
										return nuancier[2];
									} else if (coeff>0){
										return nuancier[1];
									} else {
										return nuancier[0];
									}							
								})
								.attr("opacity", 1)
								.transition()
								.duration(1.8*vit)
								.attr("stroke-dasharray", "2000, 1")
								
								
							d3.select("#boules_"+csvData[j].r) 
								.transition()
								.delay(vit)
								.attr("class", "debit");
								
							d3.select("#"+id) 
							.transition().delay(0.5*vit)
								.attr("capital", 0)
								.attr("class", "noeud");
								
							if(document.getElementById("g_"+id)){
								d3.select("#g_"+id).transition().delay(2*vit).duration(vit).style("opacity", 0).attr("transform", "translate("+0 +"," + 100 + ")");
							}
										
// 						} else if (csvData[j].n1 == "n9" || document.getElementById("n").attributes.ok.value == "ok"){
// 							alert("ho")
// 							d3.select("#"+csvData[j].r) 
// 								.attr("stroke-dasharray", "1, 2000")
// 								.attr("ok", "ok")
// 								.attr("stroke", function(){
// 									console.log(document.getElementById("n").attributes.stroke.value);
// 									var val = document.getElementById("n").attributes.stroke.value;
// 									return val;
// 								})
// 								.attr("opacity", 1)
// 								.transition()
// 								.duration(1.8*vit)
// 								.attr("stroke-dasharray", "2000, 1")
						}else {
							globale = false;
							d3.select("#avert")
								.style("display", "block")
								.transition()
								.duration(1500)
								.style("opacity", "1")
								.transition()
								.delay(3500)
								.duration(500)
								.style("opacity", "0")
								.style("display", "none")
						}

						
						
						listeTextes.push(csvData[j].texte);
						listeXlab.push(csvData[j].xLab);
						listeYlab.push(csvData[j].yLab);

						if(document.getElementById("fa_"+id)){
							d3.select("#fg_"+id).attr("opacity", 1).transition().duration(vit).attr("transform", "translate("+0 +"," + 43 + ")");
							d3.select("#fa_"+id).transition().duration(0.5*vit).attr("opacity", 1);
						}
						
						if(csvData[j].n2=="n9"){
							d3.select("#periscope").transition().duration(1.5*vit).attr("opacity", 1)
							d3.select("#indicDemande").attr("opacity",0);
						}
						

						if(csvData[j].n2=="n13"){
							d3.select("#n13").transition().duration(1.5*vit).attr("opacity", 1)
						}
						
						
						//evaluation de la demande globale et ajout de l'argent de l'état
						
						var alimente = csvData[j].n1;
						var recoit = csvData[j].n2;
						if(recoit=="n12"){
							var n12 = true;
						}
						setTimeout(function(){
							var capDemande = document.getElementById("n8").attributes.capital.value;
							var capEtat = document.getElementById("n12").attributes.capital.value;
							if(capDemande/capInit>3){
								var quali = "TRÈS ÉLEVÉE";
							} else if (capDemande/capInit>1){
								var quali = "ÉLEVÉE";
							} else if (capDemande/capInit>0.25){
								var quali = "MOYENNE";
							} else if (capDemande/capInit>0){
								var quali = "FAIBLE";
							} else {
								var quali = "NULLE";
							}	
							d3.select("#valDemande").html(quali);
							var scale = 2*Math.sqrt(capDemande/capInit);
							if (scale>5){
								scale = 5;
							}
							var decalX = -437.521*(scale-1)+scale*(0.5)
							var decalY = -290.989*(scale-1)-scale*(0.5)
							d3.select("#perisVar").transition().duration(500).attr("transform", "translate("+decalX+","+decalY+") scale("+scale+")");

							
							if(Math.abs(capEtat/capInit)>3){
								d3.select("#n12").selectAll(".t4").transition().duration(500).attr("opacity",1); 
								d3.select("#n12").selectAll(".t3").transition().duration(500).attr("opacity",1);
								d3.select("#n12").selectAll(".t2").transition().duration(500).attr("opacity",1); 
								d3.select("#n12").selectAll(".t1").transition().duration(500).attr("opacity",1); 
							} else if(Math.abs(capEtat/capInit)>1){
								d3.select("#n12").selectAll(".t4").transition().duration(500).attr("opacity",0); 
								d3.select("#n12").selectAll(".t3").transition().duration(500).attr("opacity",1);
								d3.select("#n12").selectAll(".t2").transition().duration(500).attr("opacity",1); 
								d3.select("#n12").selectAll(".t1").transition().duration(500).attr("opacity",1); 
							} else if(Math.abs(capEtat/capInit)>0.25){
								d3.select("#n12").selectAll(".t4").transition().duration(500).attr("opacity",0); 
								d3.select("#n12").selectAll(".t3").transition().duration(500).attr("opacity",0);
								d3.select("#n12").selectAll(".t2").transition().duration(500).attr("opacity",1); 
								d3.select("#n12").selectAll(".t1").transition().duration(500).attr("opacity",1); 
							} else if(Math.abs(capEtat/capInit)>0){
								d3.select("#n12").selectAll(".t4").transition().duration(500).attr("opacity",0); 
								d3.select("#n12").selectAll(".t3").transition().duration(500).attr("opacity",0);
								d3.select("#n12").selectAll(".t2").transition().duration(500).attr("opacity",0); 
								d3.select("#n12").selectAll(".t1").transition().duration(500).attr("opacity",1); 
							} else {
								d3.select("#n12").selectAll(".t4").transition().duration(500).attr("opacity",0); 
								d3.select("#n12").selectAll(".t3").transition().duration(500).attr("opacity",0);
								d3.select("#n12").selectAll(".t2").transition().duration(500).attr("opacity",0); 
								d3.select("#n12").selectAll(".t1").transition().duration(500).attr("opacity",0); 
							}	
						
							
							
							if(capEtat/capInit>0){
								d3.select("#n12").selectAll(".coul").attr("fill", "#F4CB1E");
							} else {
								d3.select("#n12").selectAll(".coul").attr("fill", "red");
							}
							
						
							if(recoit =="n8"){
								d3.select("#periscope").transition().duration(1.5*vit).attr("opacity", 1)
							}
							
						},vit*2)
						//fin

						var row = csvData[j];
						if(csvData[j].n2=="p" && csvData[j].n2=="p"){   // a voir si virer
							console.log("2!")
						} else {
							var capEtat = document.getElementById("n12").attributes.capital.value;	
							for(i=8;i<12;i++){
								if(row.n2 =="n"+i) {
									cap = document.getElementById("n"+i).attributes.capital.value;
									if(cap/capInit>3){
										listeObj[i-8].animate({path:listeR[i-8][4]},1000);
										if(i==8){
											listeObj[i-8].animate({opacity:1},200);
											d3.select("#remp3").attr("opacity", 1)
										}
									} else if (cap/capInit>1){
										listeObj[i-8].animate({path:listeR[i-8][3]},1000);
										if(i==8){
											listeObj[i-8].animate({opacity:1},200);
											d3.select("#remp2").attr("opacity", 1)
										}
									} else if (cap/capInit>0.25){
										listeObj[i-8].animate({path:listeR[i-8][2]},1000);
										if(i==8){
											listeObj[i-8].animate({opacity:1},200);
											d3.select("#remp1").attr("opacity", 1)
										}
									} else if (cap>0){
										listeObj[i-8].animate({path:listeR[i-8][1]},1000);
										if(i==8){
											listeObj[i-8].animate({opacity:1},200);
										}
									} else {
										listeObj[i-8].animate({path:listeR[i-8][0]},1000);
									}	
									
								}
								if(row.n1 =="n"+i){
									if(i==8){
										listeObj[i-8].animate({opacity:0},0);
										d3.select("#anime").selectAll(".eff").attr("opacity",0);
									} else {
										listeObj[i-8].animate({path:listeR[i-8][0]},1000);
									}
								}	
							}
							
							
							for(i=9;i<12;i++){
								if(row.n2 =="n"+i) {
									cond = document.getElementById("n"+i).attributes.cond.value;
									if(cond==4){
										d3.select("#"+row.n2).selectAll(".t"+cond).transition().duration(500).attr("opacity", 1);
										d3.select("#"+row.n2).selectAll(".t"+3).transition().duration(500).attr("opacity", 0);
										d3.select("#"+row.n2).selectAll(".t"+2).transition().duration(500).attr("opacity", 0);
										d3.select("#"+row.n2).selectAll(".t"+1).transition().duration(500).attr("opacity", 1);
									} else if (cond==3){
										d3.select("#"+row.n2).selectAll(".t"+cond).transition().duration(500).attr("opacity", 1);
										d3.select("#"+row.n2).selectAll(".t"+2).transition().duration(500).attr("opacity", 0);
										d3.select("#"+row.n2).selectAll(".t"+4).transition().duration(500).attr("opacity", 0);
										d3.select("#"+row.n2).selectAll(".t"+1).transition().duration(500).attr("opacity", 1);
									} else if (cond==2){
										d3.select("#"+row.n2).selectAll(".t"+cond).transition().duration(500).attr("opacity", 1);
										d3.select("#"+row.n2).selectAll(".t"+3).transition().duration(500).attr("opacity", 0);
										d3.select("#"+row.n2).selectAll(".t"+4).transition().duration(500).attr("opacity", 0);
										d3.select("#"+row.n2).selectAll(".t"+1).transition().duration(500).attr("opacity", 1);
									} else if (cond==1){
										d3.select("#"+row.n2).selectAll(".t"+cond).transition().duration(500).attr("opacity", 1);
										d3.select("#"+row.n2).selectAll(".t"+3).transition().duration(500).attr("opacity", 0);
										d3.select("#"+row.n2).selectAll(".t"+4).transition().duration(500).attr("opacity", 0);
										d3.select("#"+row.n2).selectAll(".t"+2).transition().duration(500).attr("opacity", 0);
									} else if (cond==0){
										d3.select("#"+row.n2).selectAll(".t"+1).transition().duration(500).attr("opacity", 0);
										d3.select("#"+row.n2).selectAll(".t"+3).transition().duration(500).attr("opacity", 0);
										d3.select("#"+row.n2).selectAll(".t"+4).transition().duration(500).attr("opacity", 0);
										d3.select("#"+row.n2).selectAll(".t"+2).transition().duration(500).attr("opacity", 0);
									}	
								}
							}
							var nNoeud = document.getElementById(row.n2);
						
							if (nNoeud){
								d3.select("#bou_"+nNoeud.id).style("display","block");
							} 	
						}
						if(document.getElementById(id).className = "rob"){
							animeRob(id);
						}
					}
				}
		}
			var blop = 0;		
			setTimeout(function(){
				if(globale == true){
					var time = 1;
					var ii = 0;
					for (i=0;i<listeTextes.length;i++){
						liste = listeTextes;
						listeX = listeXlab;
						listeY = listeYlab;
						ii = 0;
						longueur = listeTextes[i].length;
						setTimeout(function(){
							
							txt = liste[ii];
							x = listeX[ii]-75;
							y = listeY[ii]-40;
							d3.select("#infBulle").remove();
							d3.select("#textes_bouts")
								.append("div")
								.style("width", "150px")
								.style("height", "80px")
								.style("margin-left", x+"px")
								.style("margin-top", y+"px")
								.style("border-width", "1px")
								.style("border-style", "solid")
								.style("border-color", "#B51808")
								.style("border-radius", "10px")
								.style("padding", "5px")
								.style("position", "absolute")
								.attr("id", "infBulle")
								.style("background-color", "#FFFFFF");
							d3.select("#infBulle").append("p").html(txt);
							ii++;
						}, time*vit*0.05);
						time = parseFloat(time)+ (parseFloat(longueur));
					}
					setTimeout(function(){
						d3.select("#infBulle").remove();
					},time*vit*0.07);
				}
			}, 10);	
		}
	}
	
	function maj2(id, csvData){
		for(j=0; j< csvData.length; j++){
			if (csvData[j].r == id){
				obj  = document.getElementById(csvData[j].n1);
				d3.select("#"+csvData[j].r) 
					.attr("opacity", 1)
					.transition()
					.duration(1.8*vit)
					.attr("stroke-dasharray", "2000, 1")
					.attr("stroke", csvData[j].couleur);
					
				d3.select("#boules_"+csvData[j].r) 
					.transition()
					.delay(vit)
					.attr("class", "debit");
				
				d3.select("#"+csvData[j].n1+"d")
					.transition()
					.duration(0.2*vit)
					.attr("opacity", 1)
											
				d3.select("#"+csvData[j].n2+"d")
					.transition()
					.delay(1.8*vit)
					.duration(0.2*vit)
					.attr("opacity", 1)
					
				if(document.getElementById("txt_"+csvData[j].r)){
					d3.select("#txt_"+csvData[j].r).transition().delay(0.5*vit).duration(0.5*vit).attr("opacity", 1);
				} 
							
				if(document.getElementById("txt2_"+csvData[j].r)){
					d3.select("#txt2_"+csvData[j].r).transition().delay(1.5*vit).duration(0.5*vit).attr("opacity", 1);
				}
				
				if(document.getElementById("txt_"+csvData[j].n1)){
					d3.select("#txt_"+csvData[j].n1).transition().delay(0.5*vit).duration(0.5*vit).attr("opacity", 1);
				}
				
				if(document.getElementById("g_"+csvData[j].n1)){
					d3.select("#g_"+csvData[j].n1).transition().delay(2*vit).duration(vit).style("opacity", 0).attr("transform", "translate("+0 +"," + 100 + ")");
				} 

				

				if(document.getElementById(csvData[j].n1).className = "rob"){
					animeRob(csvData[j].n1);
				}
		}
		}
		
	}
	
	function animeRob(rob, vit) {
		d3.select("#"+rob).selectAll(".eteint").transition().duration(0.5*vit).attr("opacity", 0);
		d3.select("#"+rob).selectAll(".allume").transition().duration(0.5*vit).attr("opacity", 1);
	}
	
	
	function choice2(){
		d3.select("#divChoix2")
			.on("mouseover", function(){
				d3.select("#divChoix2").selectAll(".boutPlus").style("opacity", 1);
			})
			.on("mouseout", function(){
				d3.select("#indic").text("");
				d3.select("#divChoix2").selectAll(".boutPlus").style("opacity", 0.5);				
			})
		var boutonDem = document.getElementById("bou_n8");
			boutonDem.onmouseover = function(){
				d3.select("#indicDemande").style("opacity",1).transition().duration(2000).style("opacity",0);
			}
		var boutons = document.getElementsByClassName("boutPlus");
		for (i=0;i<boutons.length;i++){
			boutons[i].onmouseover = function(){
				var id = this.attributes.direction.value;
				var indic = "";
				queue()											
					.defer(d3.csv,"data/relations.csv")
					.await(callback1); 
				
				function callback1(error, csvData){
					
					for(i=0;i<csvData.length;i++){
					
						if(csvData[i].n2==id){
							var indic = csvData[i].txt;
						}
					}
					d3.select("#indic").text(indic);
				}
				
			}
			boutons[i].onclick = function(){
				var idBout = this.id
				var id = this.attributes.direction.value;
				this.className = "boutPlus on";
				d3.select("#"+idBout).transition().delay(1000).duration(1000).attr("class", "boutPlus off");	
				var valeurBudget = capInit/10;
				var cap = document.getElementById(id).attributes.capital.value;
				newVal = parseFloat(cap) + parseFloat(valeurBudget);
				document.getElementById(id).attributes.capital.value = 	newVal;
				document.getElementById("n12").attributes.capital.value = document.getElementById("n12").attributes.capital.value - valeurBudget;
				var capEtat = document.getElementById("n12").attributes.capital.value;
				d3.csv("data/relations.csv", function(csvData){
					for(j=0; j< csvData.length; j++){
						if (csvData[j].n2 == id){
							var capInd = document.getElementById(id).attributes.capital.value;
							d3.select("#"+csvData[j].r) 
								.attr("stroke-dasharray", "1, 2000")
								.attr("stroke", function(){
									if(capInd/capInit>3){
										return nuancier[4];
									} else if (capInd/capInit>1){
										return nuancier[3];
									} else if (capInd/capInit>0.25){
										return nuancier[2];
									} else if (capInd/capInit>0){
										return nuancier[1];
									} else {
										return nuancier[0];
									}							
								})
								.attr("opacity", 1)
								.transition()
								.duration(1.8*vit)
								.attr("stroke-dasharray", "2000, 1");
							
							d3.select("#boules_"+csvData[j].r) 
									.transition()
									.delay(vit)
									.attr("class", "debit");
						}
					}
				})
				
				if(Math.abs(capEtat/capInit)>3){
					d3.select("#n12").selectAll(".t4").transition().duration(500).attr("opacity",1); 
					d3.select("#n12").selectAll(".t3").transition().duration(500).attr("opacity",1);
					d3.select("#n12").selectAll(".t2").transition().duration(500).attr("opacity",1); 
					d3.select("#n12").selectAll(".t1").transition().duration(500).attr("opacity",1); 
				} else if(Math.abs(capEtat/capInit)>1){
					d3.select("#n12").selectAll(".t4").transition().duration(500).attr("opacity",0); 
					d3.select("#n12").selectAll(".t3").transition().duration(500).attr("opacity",1);
					d3.select("#n12").selectAll(".t2").transition().duration(500).attr("opacity",1); 
					d3.select("#n12").selectAll(".t1").transition().duration(500).attr("opacity",1); 
				} else if(Math.abs(capEtat/capInit)>0.25){
					d3.select("#n12").selectAll(".t4").transition().duration(500).attr("opacity",0); 
					d3.select("#n12").selectAll(".t3").transition().duration(500).attr("opacity",0);
					d3.select("#n12").selectAll(".t2").transition().duration(500).attr("opacity",1); 
					d3.select("#n12").selectAll(".t1").transition().duration(500).attr("opacity",1); 
				} else if(Math.abs(capEtat/capInit)>0){
					d3.select("#n12").selectAll(".t4").transition().duration(500).attr("opacity",0); 
					d3.select("#n12").selectAll(".t3").transition().duration(500).attr("opacity",0);
					d3.select("#n12").selectAll(".t2").transition().duration(500).attr("opacity",0); 
					d3.select("#n12").selectAll(".t1").transition().duration(500).attr("opacity",1); 
				} else {
					d3.select("#n12").selectAll(".t4").transition().duration(500).attr("opacity",0); 
					d3.select("#n12").selectAll(".t3").transition().duration(500).attr("opacity",0);
					d3.select("#n12").selectAll(".t2").transition().duration(500).attr("opacity",0); 
					d3.select("#n12").selectAll(".t1").transition().duration(500).attr("opacity",0); 
				}	
			
				
				
				if(capEtat/capInit>0){
					d3.select("#n12").selectAll(".coul").attr("fill", "#F4CB1E");
				} else {
					d3.select("#n12").selectAll(".coul").attr("fill", "red");
				}
						
			}
		}
	}

	
	
}
