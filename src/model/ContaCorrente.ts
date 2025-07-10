// Importando a classe Conta
import { Conta } from "./conta";

// Criando um classe Conta Corrente com herança da classe Conta
export class ContaCorrente extends Conta {

    private _limite: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        // Chamando os atribudos da classe conta
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;

    }

    // Get e Set do limite da conta
    public get limite(): number {
        return this._limite;
    }
    public set limite(value: number) {
        this._limite = value;
    }

    // Configuração sobre metodo especifico do saldo da conta
    public sacar(valor: number): boolean {

        if ((this.saldo + this._limite) < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;
    }

    // Void do limite da conta
    public visualizar(): void {
        super.visualizar();
        console.log("Limite Disponivel: " + this._limite.toFixed(2));
    }

}