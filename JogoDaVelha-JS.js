let turno = 0
let pontosX = 0
let pontosO = 0
let c, l, cont = 0
let vetorP = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

vetorP[0][0] = document.getElementById("dv1")
vetorP[0][1] = document.getElementById("dv2")
vetorP[0][2] = document.getElementById("dv3")
vetorP[1][0] = document.getElementById("dv4")
vetorP[1][1] = document.getElementById("dv5")
vetorP[1][2] = document.getElementById("dv6")
vetorP[2][0] = document.getElementById("dv7")
vetorP[2][1] = document.getElementById("dv8")
vetorP[2][2] = document.getElementById("dv9")

function trocaTurno() {
    if (turno == 1) {
        turno = 0
    } else if (turno == 0) {
        turno = 1
    }
}


function vitoria(c, l) {
    vetorP[c][l].style.color = "red"
}

function reiniciaTabuleiro() {
    for (let c = 0; c < 3; c++) {
        for (let l = 0; l < 3; l++) {
            vetorP[c][l].value = ""
        }
    }
}

function ganhador() {
    if (((vetorP[0][0].value == "O") || (vetorP[0][0].value == "X")) && (vetorP[0][0].value == vetorP[0][1].value) && (vetorP[0][1].value == vetorP[0][2].value)) {
        vitoria(0, 0)
        vitoria(0, 1)
        vitoria(0, 2)
        return 0
            // window.alert(`O jogador ${vetorP[0][0].value} foi o vencedor`)
    }
    if (((vetorP[1][0].value == "O") || (vetorP[1][0].value == "X")) && (vetorP[1][0].value == vetorP[1][1].value) && (vetorP[1][1].value == vetorP[1][2].value)) {
        vitoria(1, 0)
        vitoria(1, 1)
        vitoria(1, 2)
        return 0

        // window.alert(`O jogador ${vetorP[1][0].value} foi o vencedor`)
    }
    if (((vetorP[2][0].value == "O") || (vetorP[2][0].value == "X")) && (vetorP[2][0].value == vetorP[2][1].value) && (vetorP[2][1].value == vetorP[2][2].value)) {
        vitoria(2, 0)
        vitoria(2, 1)
        vitoria(2, 2)
        return 0

        // window.alert(`O jogador ${vetorP[2][0].value} foi o vencedor`)
    }
    if (((vetorP[0][0].value == "O") || (vetorP[0][0].value == "X")) && (vetorP[0][0].value == vetorP[1][0].value) && (vetorP[1][0].value == vetorP[2][0].value)) {
        vitoria(0, 0)
        vitoria(1, 0)
        vitoria(2, 0)
        return 0
            // window.alert(`O jogador ${vetorP[0][0].value} foi o vencedor`)
    }
    if (((vetorP[0][1].value == "O") || (vetorP[0][1].value == "X")) && (vetorP[0][1].value == vetorP[1][1].value) && (vetorP[1][1].value == vetorP[2][1].value)) {
        vitoria(0, 1)
        vitoria(1, 1)
        vitoria(2, 1)
        return 0

        // window.alert(`O jogador ${vetorP[0][0].value} foi o vencedor`)
    }
    if (((vetorP[0][2].value == "O") || (vetorP[0][2].value == "X")) && (vetorP[0][2].value == vetorP[1][2].value) && (vetorP[1][2].value == vetorP[2][2].value)) {
        vitoria(0, 2)
        vitoria(1, 2)
        vitoria(2, 2)
        return 0
            //window.alert(`O jogador ${vetorP[0][0].value} foi o vencedor`)
    }
    if (((vetorP[0][0].value == "O") || (vetorP[0][0].value == "X")) && (vetorP[0][0].value == vetorP[1][1].value) && (vetorP[1][1].value == vetorP[2][2].value)) {
        vitoria(0, 0)
        vitoria(1, 1)
        vitoria(2, 2)
        return 0

        //window.alert(`O jogador ${vetorP[0][0].value} foi o vencedor`)
    }
    if (((vetorP[0][2].value == "O") || (vetorP[0][2].value == "X")) && (vetorP[0][2].value == vetorP[1][1].value) && (vetorP[1][1].value == vetorP[2][0].value)) {
        vitoria(0, 2)
        vitoria(1, 1)
        vitoria(2, 0)
        return 0

        //window.alert(`O jogador ${vetorP[0][0].value} foi o vencedor`)
    }
}

function valueTo(c, l) {
    let empate
    console.log(`O valor de empate é ${empate}`)
    vetorP[c][l].addEventListener("click", function() {

        if ((turno == 1) && ((vetorP[c][l].value != "X") && (vetorP[c][l].value != "O"))) {
            vetorP[c][l].value = "O"
            trocaTurno()
            console.log(vetorP[c][l])

        } else if ((turno == 0) && ((vetorP[c][l].value != "O") && (vetorP[c][l].value != "X"))) {
            vetorP[c][l].value = "X"
            trocaTurno()
            console.log(vetorP[c][l])

        }
        letreiro()
        console.log(vetorP[0][0].value)
        this.innerHTML = vetorP[c][l].value
        empate = ganhador()
        if (empate != 0) {
            cont++
            //console.log(`O valor de empate é ${empate}`)
            if (cont == 9) {
                quemJoga.innerHTML = ("Houve um empate!")
                let botao = document.getElementById("reload")
                botao.style.display = "flex"
                    // window.alert("Empate")
            }
        } else if (empate == 0) {
            if (turno == 1) {
                let quemVence = document.getElementById("quemVence")
                quemJoga.innerHTML = ("O jogador X venceu!")
                let botao = document.getElementById("reload")
                botao.style.display = "flex"
            } else {
                quemJoga.innerHTML = ("O jogador O venceu!")
                let botao = document.getElementById("reload")
                botao.style.display = "flex"
                    //window.alert("O vencedor foi O")
            }
        }
    })
}


function letreiro() {
    let quemJoga = document.getElementById("quemJoga")
    if (turno == 1) {
        quemJoga.innerHTML = ("Vez de O")
    } else {
        quemJoga.innerHTML = ("Vez de X")
    }
}

function jogo() {
    valueTo(0, 0)
    valueTo(0, 1)
    valueTo(0, 2)
    valueTo(1, 0)
    valueTo(1, 1)
    valueTo(1, 2)
    valueTo(2, 0)
    valueTo(2, 1)
    valueTo(2, 2)

}

function inicia() {
    jogo()
}
let btn = document.getElementById('reload')

btn.addEventListener('click', function() {
    location.reload()
})

window.addEventListener("load", inicia)