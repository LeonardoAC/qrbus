function exibeMenu(){
	// console.log("teste");
	// Le o arquivo texto (html) e exibe-o como HTML embutido
			fetch("menu-topo.html")
			.then(response => response.text())
			.then(text => document.getElementById("barratopo").innerHTML = text);
}

function exibeMenuRestrito(){
	// console.log("teste");
	// Le o arquivo texto (html) e exibe-o como HTML embutido
			fetch("menu-topo-restrito.html")
			.then(response => response.text())
			.then(text => document.getElementById("barratopo-restrito").innerHTML = text);
}

function autenticacao(){
	// Se clicou no botao para logar-se, verifica as credenciais [provisorio!!!]
	let user = document.getElementById("txtUser").value;
	let passwd = document.getElementById("txtPasswd").value;
	if (user == "teste" && passwd == "teste"){
		window.location.href = "busca-main.html";
	}else{
		console.log("erro no login");
	}
}
