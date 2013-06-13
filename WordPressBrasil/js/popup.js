function busca(){
	var itens = $("#buscar-item").val();
	if(itens){
		chrome.tabs.create({
			url: "https://www.facebook.com/groups/wordpress.brasil/search/?query=" + encodeURI(itens.toLowerCase())
		});
	}
}

$(document).ready(function(){
	$("input").focus();
	$("#buscar-item").keyup(function(e) { 
		e.which == 13 && busca();
	})
	$("#buscar-acao").click(busca)
})