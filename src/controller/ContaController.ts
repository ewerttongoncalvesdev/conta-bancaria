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

        if (buscaConta != null) {
            this.listarContas.splice(this.listarContas.indexOf(buscaConta), 1);
            console.log(`\nA Conta numero: ` + numero + ` foi apagada com sucesso!`);

        } else {
            console.log(`\nA Conta numero: ` + numero + ` não foi encontrada!`);
        }
    }

    // Metodo para sacar
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {

            if (conta.sacar(valor) == true) {
                console.log(`\nO Saque na Conta numero: ` + numero + ` foi realizado com sucesso!`);
            }
        } else {
            console.log(`\nA Conta numero: ` + ` não foi encontrada!`);
        }
    }

    // Metodo Depositar
    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log(`\nO Deposito na Conta numero: ` + numero + ` foi realizado com sucesso!`);

        } else {
            console.log(`\nA Conta numero: ` + numero + ` não foi encontrada!`);
        }
    }

    // Metodo de transferencia
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if(contaOrigem.sacar(valor) == true){
            contaDestino.depositar(valor);
            console.log(`\nTransferencia da Conta numero: ` + numeroOrigem + ` para a conta numero ` + numeroDestino + ` foi efetuado com sucesso!`);

            }
        } else {
            console.log(`\nA Conta numero ` + numeroOrigem + ` e / ou a conta numero: ` + numeroDestino + ` não foram encontradas!`);
        }
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