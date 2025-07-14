import { keyPress } from "../../menu";
import { colors } from "../util/collors";

    // Criação de classes e metodos para conta
    export abstract class Conta {
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Preencher - fazer a inicialização
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    // Get (pegar) / Set (mandar) da classe conta
    public get numero(): number {
        return this._numero;
    }

    public set numero(value: number) {
        this._numero = value;
    }

    public get agencia(): number {
        return this._agencia;
    }

    public set agencia(value: number) {
        this._agencia = value;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public get titular(): string {
        return this._titular;
    }

    public set titular(value: string) {
        this._titular = value;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public set saldo(value: number) {
        this._saldo = value;
    }

    // Verificar saldo da conta
    public sacar(valor: number): boolean {

        if (this._saldo < valor) {
            console.clear();
            console.log("\n Saldo Insuficiente!");
            keyPress();
            return false;
        }

        this._saldo = this._saldo - valor;
        return true;
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    // Verificar tipo de conta
    public visualizar(): void {
        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
        }

        // Extrato da conta
        
        console.log(colors.fg.redstrong, "- - - - - - - - - - - - - - - - ",colors.reset);
        console.log("Dados da conta: ");
        console.log(colors.fg.redstrong, "- - - - - - - - - - - - - - - - ",colors.reset);
        console.log("Numero da Conta: " + this._numero);
        console.log("Agencia: " + this._agencia);
        console.log("Tipo de Conta: " + tipo);
        console.log("Titular: " + this._titular);
        console.log("Saldo: " + this._saldo.toFixed(2));
        
    }

}
