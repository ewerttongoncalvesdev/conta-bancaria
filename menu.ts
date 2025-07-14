//  Importandos as classes
import ler = require("readline-sync");
import { colors } from "./src/util/collors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { Conta } from "./src/model/Conta";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    // Instancia da Classe ContaController
    let contas: ContaController = new ContaController();

    // Variaveis auxiliares
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number
    let titular: string;
    const tiposContas = [`Conta Corrente`, `Conta Poupanca`];

    // Teste para mostrar todas as contas criadas -- > da linha 19 até a linha 33
    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();
    // Fim do test

    while (true) {

        // Menu do banco com as opções para seguir (Com as cores)
        console.clear();
        console.log(colors.fg.redstrong,
            "- - - - - - - - - - - - - - - - - - - - - - - - - - - -");
        console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - -", colors.reset);
        console.log("                                           ");
        console.log(colors.fg.greenstrong, "                         GRUBANK                      ", colors.reset);
        console.log("                                           ");
        console.log(colors.fg.redstrong, "- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -", colors.reset);
        console.log(colors.fg.redstrong, "| | 1 -", colors.reset + "              Criar uma conta" + colors.fg.redstrong, "             | |", colors.reset);
        console.log(colors.fg.redstrong, "| | 2 -", colors.reset + "         Exibir contas existentes" + colors.fg.redstrong, "         | |", colors.reset);
        console.log(colors.fg.redstrong, "| | 3 -", colors.reset + "        Buscar conta por numero" + colors.fg.redstrong, "           | |", colors.reset);
        console.log(colors.fg.redstrong, "| | 4 -", colors.reset + "       Atualizar dados da conta" + colors.fg.redstrong, "           | |", colors.reset);
        console.log(colors.fg.redstrong, "| | 5 -", colors.reset + "               Deletar conta" + colors.fg.redstrong, "              | |", colors.reset);
        console.log(colors.fg.redstrong, "| | 6 -", colors.reset + "               Efetuar saque" + colors.fg.redstrong, "              | |", colors.reset);
        console.log(colors.fg.redstrong, "| | 7 -", colors.reset + "             Efetuar deposito" + colors.fg.redstrong, "             | |", colors.reset);
        console.log(colors.fg.redstrong, "| | 8 -", colors.reset + "    Efetuar transferencia entre contas" + colors.fg.redstrong, "    | |", colors.reset);
        console.log(colors.fg.redstrong, "| | 9 -", colors.reset + "                   Sair" + colors.fg.redstrong, "                   | |", colors.reset);
        console.log(colors.fg.redstrong, "- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -", colors.reset);
        console.log("                                           ");

        console.log("Entre com a opcao desejada: ");
        opcao = ler.questionInt("");

        if (opcao == 9) {
            console.log("\n GRUBANK - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        //Opções do menu do banco
        switch (opcao) {

            // Opção para fazer cadastro de conta
            case 1:
                console.log("\nCriar uma conta\n");

                console.log(`Digite o Número da agencia: `);
                agencia = ler.questionInt(``);

                console.log(`Digite o Nome do Titular da Conta: `);
                titular = ler.question(``);

                console.log(`\nDigite o tipo da Conta: `);
                tipo = ler.keyInSelect(tiposContas, "", { cancel: false }) + 1;

                console.log(`\nDigite o Saldo da Conta (R$): `);
                saldo = ler.questionFloat(``);

                switch (tipo) {
                    // Tipo = Conta Corrente
                    case 1:
                        console.log(`Digite o Limite da Conta (R$): `);
                        limite = ler.questionFloat(``);
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;

                    // Tipo = Conta Poupança
                    case 2:
                        console.log(`Digite o Dia do aniversario da Conta Poupanca`);
                        aniversario = ler.questionInt(``);
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }

                keyPress()
                break;
            
            // Exibir contas existentes
            case 2:
                console.log("\nExibir contas existentes\n");
                contas.listarTodas();
                keyPress()
                break;
            
            // Buscar contas por numero
            case 3:
                console.log("\nBuscar conta por numero\n");

                console.log(`Digite o numero da Conta: `);
                numero = ler.questionInt(``);
                contas.procurarPorNumero(numero);
                keyPress()
                break;
            
            // Atualizar contas
            case 4:
                console.log("\nAtualizar dados da conta\n");
                
                console.log(`Digite o numero da Conta: `);
                numero = ler.questionInt(``);

                let conta = contas.buscarNoArray(numero);
                
                if(conta != null){

                    console.log(`Digite o numero da agencia: `);
                    agencia = ler.questionInt(``);

                    console.log(`Digite o Nome do titular da conta: `);
                    titular = ler.question(``);

                    tipo = conta.tipo;
                    
                    console.log(`\nDigite o saldo da conta (R$): `);
                    saldo = ler.questionFloat(``);

                    switch(tipo){
                        case 1:
                            console.log(`Digite o dia do aniversario da Conta Poupanca: `);
                            aniversario = ler.questionInt(``);
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));

                            break;
                    }
                } else{
                    console.log(`\nA Conta numero` + numero + ` não foi encontrada!`);
                }

                keyPress()
                break;
            
            // Deletar conta
            case 5:
                console.log("\nDeletaar conta\n");

                console.log(`Digite o numero da Conta: `);
                numero = ler.questionInt(``);
                contas.deletar(numero);

                keyPress()
                break;

            // Efetuar saque
            case 6:
                console.log("\nEfetuar saque\n");

                console.log(`\nDigite o numero da Conta: `);
                numero = ler.questionInt(``);

                console.log(`\nDigite o valor do Saque (R$): `);
                valor = ler.questionFloat(``);

                contas.sacar(numero, valor);

                keyPress()
                break;

            // Efetuar Deposito
            case 7:
                console.log("\nEfetuar deposito\n");

                console.log(`Digite o numero da conta: `);
                numero = ler.questionInt(``);

                console.log(`\nDigite o valor do Deposito (R$): `);
                valor = ler.questionFloat(``);

                contas.depositar(numero, valor);

                keyPress()
                break;
            
            // Efetuar Transferencia
            case 8:
                console.log("\nEfetuar transferencia entre contas\n");

                console.log(`Digite o numero da Conta origem: `);
                numero = ler.questionInt(``);

                console.log(`Digite o numero da Conta de Destino: `);
                numeroDestino = ler.questionInt(``);

                console.log(`\nDigite o valor para Transferir (R$): `);
                valor = ler.questionFloat(``);

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");
                break;
        }

    }

}

// Dados de quem desenvolveu o programa
export function sobre(): void {
    console.clear();
    console.log(colors.fg.redstrong, "- - - - - - - - - - - - - - - - - - - - - - - - - - -", colors.reset);
    console.log(colors.fg.redstrong, "| |", colors.reset + "Projeto Desenvolvidor por: Ewertton Gonçalves" + colors.fg.redstrong, "| |", colors.reset);
    console.log(colors.fg.redstrong, "| |", colors.reset + "Email: dev.ewerttongoncalves@gmail.com" + colors.fg.redstrong, "       | |", colors.reset);
    console.log(colors.fg.redstrong, "| |", colors.reset + "https://github.com/ewerttongoncalvesdev" + colors.fg.redstrong, "      | |", colors.reset);
    console.log(colors.fg.redstrong, "- - - - - - - - - - - - - - - - - - - - - - - - - - -", colors.reset);
}

//  Função para apertar o enter para continuar
export function keyPress(): void {
    console.log(colors.fg.redstrong, "- - - - - - - - - - - - - - - - ", colors.reset)
    console.log("Pressione enter para continuar...");
    ler.prompt();
}

main()