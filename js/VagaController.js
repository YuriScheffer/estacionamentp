const VagaController = {
    inicializar() {
        const formReserva = document.getElementById('form-reserva');
        formReserva.addEventListener('submit', (evento) => this.salvar(evento));
        this.atualizarTelas();
    },

    navegar(telaDestino) {
        this.atualizarTelas();
        VagaView.alternarTela(telaDestino);
    },

    atualizarTelas() {
        VagaView.renderizarCadastradas(VagaModel.listarCadastradas());
        VagaView.renderizarDisponiveis(VagaModel.listarDisponiveis());
    },

    salvar(evento) {
        evento.preventDefault();

        const numeroVaga = document.getElementById('numeroVaga').value;

        if (VagaModel.vagaOcupada(numeroVaga)) {
            alert(`A vaga ${numeroVaga} já está ocupada! Escolha uma vaga disponível.`);
            return;
        }

        const novaReserva = {
            nomeProprietario: document.getElementById('nomeProprietario').value,
            numeroApartamento: document.getElementById('numeroApartamento').value,
            blocoApartamento: document.getElementById('blocoApartamento').value,
            modeloVeiculo: document.getElementById('modeloVeiculo').value,
            corVeiculo: document.getElementById('corVeiculo').value,
            placaVeiculo: document.getElementById('placaVeiculo').value,
            numeroVaga: numeroVaga
        };

        // Exibe as informações no console.log e o pop-up
        console.log("--- Nova Reserva Cadastrada ---");
        console.log(novaReserva);

        VagaModel.salvar(novaReserva);
        alert("Cadastro realizado com sucesso!");

        document.getElementById('form-reserva').reset();
        this.atualizarTelas();
        VagaView.alternarTela('cadastradas');
    },

    remover(index) {
        const vaga = VagaModel.listarCadastradas()[index];
        if (confirm(`Deseja realmente remover a reserva do veículo ${vaga.placaVeiculo}?`)) {
            console.log("Removendo vaga:", vaga);
            VagaModel.remover(index);
            this.atualizarTelas();
            alert("Reserva removida com sucesso!");
        }
    },

    selecionarVagaLivre(numero) {
        document.getElementById('numeroVaga').value = numero;
        VagaView.alternarTela('cadastro');
    }
};

document.addEventListener('DOMContentLoaded', () => VagaController.inicializar());