// Importando a Classe conta
import { keyPress } from "../../menu";
import { Conta } from "./conta";

// Criando classe Conta Poupança e atribuindo a ela os atributos da classe conta
export class ContaPoupanca extends Conta{

    private _aniversario: number;
   
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversario: number){
        // Chamando os atribudos da classe conta
        super(numero, agencia, tipo, titular, saldo);
        this._aniversario = aniversario;
    }

    // Get e Set
     public get aniversario(): number {
        return this._aniversario;
    }
    public set aniversario(value: number) {
        this._aniversario = value;
    }

    // Void para visualizar o dia do aniversário
    public visualizar(): void {
        super.visualizar();
        console.log("Dia do aniversário:  " + this._aniversario);
    }

    
}