import ler = require("readline-sync");
import { colors } from "./src/util/collors";

export function main() {
    let opcao: number;

    while (true) {

        // Menu do banco com as opções para seguir (Com as cores)
        console.log(colors.fg.redstrong,
            "- - - - - - - - - - - - - - - - - - - - - - - - - - - -");
        console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - -", colors.reset);
        console.log("                                           ");
        console.log(colors.fg.greenstrong, "                         GRUBANK                      ", colors.reset);
        console.log("                                           ");
        console.log(colors.fg.redstrong, "- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -", colors.reset);
        console.log(colors.fg.redstrong,"| | 1 -",colors.reset + "              Criar uma conta" + colors.fg.redstrong,"             | |",colors.reset);
        console.log(colors.fg.redstrong,"| | 2 -",colors.reset + "         Exibir contas existentes" + colors.fg.redstrong,"         | |",colors.reset);
        console.log(colors.fg.redstrong,"| | 3 -",colors.reset + "        Buscar conta por numero" + colors.fg.redstrong,"           | |",colors.reset);
        console.log(colors.fg.redstrong,"| | 4 -",colors.reset + "       Atualizar dados da conta" + colors.fg.redstrong,"           | |",colors.reset);
        console.log(colors.fg.redstrong,"| | 5 -",colors.reset + "               Deletar conta" + colors.fg.redstrong,"              | |",colors.reset);
        console.log(colors.fg.redstrong,"| | 6 -",colors.reset + "               Efetuar saque" + colors.fg.redstrong,"              | |",colors.reset);
        console.log(colors.fg.redstrong,"| | 7 -",colors.reset + "             Efetuar deposito" + colors.fg.redstrong,"             | |",colors.reset);
        console.log(colors.fg.redstrong,"| | 8 -",colors.reset + "    Efetuar transferencia entre contas" + colors.fg.redstrong,"    | |",colors.reset);
        console.log(colors.fg.redstrong,"| | 9 -",colors.reset + "                   Sair" + colors.fg.redstrong,"                   | |",colors.reset);
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
    console.log(colors.fg.redstrong, "- - - - - - - - - - - - - - - - - - - - - - - - - - -", colors.reset);
    console.log(colors.fg.redstrong,"| |",colors.reset + "Projeto Desenvolvidor por: Ewertton Gonçalves" + colors.fg.redstrong,"| |",colors.reset);
    console.log(colors.fg.redstrong,"| |",colors.reset +       "Email: dev.ewerttongoncalves@gmail.com" + colors.fg.redstrong,"       | |",colors.reset);
    console.log(colors.fg.redstrong,"| |",colors.reset +      "https://github.com/ewerttongoncalvesdev" + colors.fg.redstrong, "      | |",colors.reset);
    console.log(colors.fg.redstrong, "- - - - - - - - - - - - - - - - - - - - - - - - - - -", colors.reset);
}

main()