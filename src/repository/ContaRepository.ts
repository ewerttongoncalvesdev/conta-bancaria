// Importando a classe Conta
import { Conta } from "../model/Conta";

// Criando Interface da Conta para exportar
export interface ContaRepository {

    // CRUD da conta (Criar / Ler / Atualizar / Deletar)
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    // Metodos bancarios
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}