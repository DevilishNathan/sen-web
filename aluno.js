    window.onload = function() {
        console.warn("Olá Mundo")
        
        let meuForm = $("form#formAluno")

        console.log(meuForm)

        meuForm.on("submit", function(event){
            event.preventDefault()

            console.log("Deu Certo")
            let botao = $("form button")
            console.log(botao)

            let botaoQueGira = Ladda.create(botao[0])
            botaoQueGira.start()
            fetch("http://localhost:8080/sen-api/teste.php").then(function(resposta){
                return resposta.json()
            }).then(function(dados){
                alert(dados.mensagem)
            })
        })

    }