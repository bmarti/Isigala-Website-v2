jQuery().ready(function(){
	$(".deroulant").next("div").hide();
	$(".deroulant").click(function.(){
			if($(this).next("div").is(":hidden")) /* Si les div enfants du courant sont cachés/remontés */
			$(".deroulant").next("div:visible").slideUp(); /* Les div de la classe "deroulant" et visibles remontent */
			$(this).next("div").slideDown(); /* Les div enfants du courant descendent */
	}};
}};