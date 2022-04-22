
/*

Case sensitive = reconhce letras maiusculas e minusuculas

 por tag: getElementByTagName()
 por Id: getElementById()
 por nome: getElementByName
 por classe: getElementByClassName
 por seletor: querySelector()

 */

 let nome = window.document.getElementById('nome')
 let email = document.querySelector('#email')
 let assunto = document.querySelector('#assunto')
 let nomeOk = false
 let emailOk = false
 let assuntoOk = false
 let mapa = document.querySelector ("#mapa")

 nome.style.width = '100%'
 email.style.width = '100%'
 assunto.style.width = '100%'



                 // NOME //

 function validaNome () {
    let txtNome = document.querySelector ("#txtNome")
        if (nome.value.length < 3) {

            txtNome.innerHTML = "Nome Inválido !"
            txtNome.style.color = "red"
                  
        }else {

            txtNome.style.color = "green"
            txtNome.innerHTML = "Nome Válido"
            nomeOk = true
        }

    }

                // E-MAIL //

    function validaEmail () {
        let txtEmail = document.querySelector ("#txtEmail")
            if(email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) { //Ponto antes ou depois e com arroba válida o campo

                txtEmail.innerHTML = "E-Mail Inválido !"
                txtEmail.style.color = "red"
            
            }else {

                txtEmail.style.color = "green"
                txtEmail.innerHTML = "E-Mail Inválido !"
                emailOk = true

            }
    }

            // ASSUNTO //

    function validaAssunto () {

        let txtAssunto = document.querySelector ('#txtAssunto')

        if (assunto.value.length >= 100) {
            
            txtAssunto.innerHTML = 'Que Textão Hein! <p> Por favor, digite no máximo 100 caracteres, muito obrigado ! </p>'
            txtAssunto.style.color = "red"
            txtAssunto.style.display = 'block'    

        } else {

            txtAssunto.style.display = 'none'
            assuntoOk = true
        }

    }

            // ENVIAR //

    function enviar () {

     if (nomeOk == true && emailOk == true && assuntoOk == true) {
        
        alert ("Formulário Enviado Com Sucesso !")

     } else {
        
        alert ("Prencha O Formulário Corretamente Antes De Enviar")
        
     }

    }

            // MAPA - ZOOM //

    function mapaZoom () {

        mapa.style.width = "800px"
        mapa.style.height = "600px"
        

    }

            // MAPA - NORMAL //

    function mapaNormal () {

        mapa.style.width = "400px"
        mapa.style.height = "250px"

    }

