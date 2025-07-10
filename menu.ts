import ler = require("readline-sync");
import { colors } from "./src/util/collors";
import { Conta } from "./src/model/conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
    let opcao: number;

    // Testes (linha 9 até linha 30)
    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    keyPress();
    conta.sacar(10500);
    conta.visualizar();
    keyPress();
    conta.depositar(5000);
    conta.visualizar();
    keyPress();

    //  Teste de Conta Corrente
    const contacorrente: ContaCorrente = new ContaCorrente (2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    keyPress();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    keyPress();
    contacorrente.depositar(1000);
    contacorrente.visualizar();
    keyPress();
    
    //  Teste de Conta Poupança
    const contapoupanca: ContaPoupanca = new ContaPoupanca (3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    keyPress();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    keyPress();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();
    // Fim dos testes acima

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
            case 1:
                console.log("\nCriar uma conta\n");
                break;

            case 2:
                console.log("\nExibir contas existentes\n");
                break;

            case 3:
                console.log("\nBuscar conta por numero\n");
                break;

            case 4:
                console.log("\nAtualizar dados da conta\n");
                break;

            case 5:
                console.log("\nDeletaar conta\n");
                break;

            case 6:
                console.log("\nEfetuar saque\n");
                break;

            case 7:
                console.log("\nEfetuar deposito\n");
                break;

            case 8:
                console.log("\nEfetuar transferencia entre contas\n");
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
    console.log(colors.fg.redstrong, "- - - - - - - - - - - - - - - - ",colors.reset)
    console.log("Pressione enter para continuar...");
    ler.prompt();
}

main()