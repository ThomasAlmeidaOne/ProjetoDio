class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque;
        switch (this.tipo){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken"
                break;
            default:
            ataque = "ataque desconhecido";   
        }
        const mensagem = `o ${this.tipo} ataca usando ${ataque}`;
        console.log(mensagem)
    }
}

//Exemplo

 heroiGuerreiro = new Heroi("Link",20,"guerreiro");
heroiGuerreiro.atacar()
console.log("---------------------------")
heroiMago = new Heroi("Thomas",27,"mago");
heroiMago.atacar()