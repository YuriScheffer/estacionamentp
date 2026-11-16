const VagaModel = {
    totalVagas: 30,

    // Dados fictícios iniciais
    vagasCadastradas: [
        {
            nomeProprietario: "Carlos Alberto",
            numeroApartamento: "102",
            blocoApartamento: "A",
            modeloVeiculo: "Toyota Corolla",
            corVeiculo: "Prata",
            placaVeiculo: "ABC-1234",
            numeroVaga: "12"
        },
        {
            nomeProprietario: "Mariana Souza",
            numeroApartamento: "204",
            blocoApartamento: "B",
            modeloVeiculo: "Jeep Renegade",
            corVeiculo: "Preto",
            placaVeiculo: "XYZ-9876",
            numeroVaga: "25"
        }
    ],

    listarCadastradas() {
        return this.vagasCadastradas;
    },

    listarDisponiveis() {
        const ocupadas = this.vagasCadastradas.map(vaga => Number(vaga.numeroVaga));
        const disponiveis = [];

        for (let i = 1; i <= this.totalVagas; i++) {
            if (!ocupadas.includes(i)) {
                disponiveis.push(i);
            }
        }
        return disponiveis;
    },

    vagaOcupada(numeroVaga) {
        return this.vagasCadastradas.some(vaga => Number(vaga.numeroVaga) === Number(numeroVaga));
    },
    
    salvar(novaReserva) {
        this.vagasCadastradas.push(novaReserva);
    },

    remover(index) {
        this.vagasCadastradas.splice(index, 1);
    }
};