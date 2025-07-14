// Importando as classes Conta e ContaRepository
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

// Classe ContaController com implementos da classe ContaRepository
export class ContaController implements ContaRepository {

    // Array para armazenar dados
    private listarContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    // Metodo para procurar conta ja existente
    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else {
            console.log(`\nA Conta numero: ` + numero + ` não foi encontrada!`);
        }
    }

    // Metodos para listar todas as contas
    listarTodas(): void {
        for (let conta of this.listarContas) {
            conta.visualizar();
        }
    }

    // Metodos para cadastrar conta
    cadastrar(conta: Conta): void {
        this.listarContas.push(conta);
        console.log(`\nA Conta número: ` + conta.numero + `  foi criada com sucesso!`);
    }

    // Metodos para atualizar conta
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listarContas[this.listarContas.indexOf(buscaConta)] = conta;
            console.log(`\nConta Numero: ` + conta.numero + ` foi atualizada com sucesso!`);

        } else {
            console.log(`\nA Conta numero: ` + conta.numero + ` não foi encontrada!`);
        }
    }

    // Metodos para deletar conta
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta != null){
            this.listarContas.splice(this.listarContas.indexOf(buscaConta), 1);
            console.log(`\nA Conta numero: ` + numero + ` foi apagada com sucesso!`);

        }else {
            console.log(`\nA Conta numero: ` + numero + ` não foi encontrada!`);
        }
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    // Gerar número da conta automatico
    public gerarNumero(): number {
        return ++this.numero
    }

    // Verificar se uma conta existe
    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listarContas) {
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }
}