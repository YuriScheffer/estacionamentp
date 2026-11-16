const VagaView = {
    alternarTela(telaDestino) {
        const telas = ['cadastro', 'cadastradas', 'disponiveis'];

        telas.forEach(tela => {
            document.getElementById(`tela-${tela}`).classList.toggle('active', tela === telaDestino);
            document.getElementById(`nav-${tela}`).classList.toggle('active', tela === telaDestino);
        });
    },

    renderizarCadastradas(vagas) {
        const tbody = document.querySelector('#tabela-vagas tbody');
        tbody.innerHTML = '';

        if (vagas.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" style="text-align: center;">Nenhuma vaga cadastrada.</td></tr>`;
            return;
        }

        vagas.forEach((vaga, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${vaga.nomeProprietario}</td>
                <td>${vaga.numeroApartamento} / ${vaga.blocoApartamento}</td>
                <td>${vaga.modeloVeiculo}</td>
                <td>${vaga.corVeiculo}</td>
                <td>${vaga.placaVeiculo}</td>
                <td>${vaga.numeroVaga}</td>
                <td>
                    <button class="btn-remover" onclick="VagaController.remover(${index})">Remover</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    },

    renderizarDisponiveis(vagasLivres) {
        const grid = document.getElementById('grid-disponiveis');
        grid.innerHTML = '';

        if (vagasLivres.length === 0) {
            grid.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Não há vagas disponíveis no momento.</p>';
            return;
        }

        vagasLivres.forEach(numero => {
            const div = document.createElement('div');
            div.className = 'vaga-livre';
            div.textContent = `Vaga ${String(numero).padStart(2, '0')}`;
            div.onclick = () => VagaController.selecionarVagaLivre(numero);
            grid.appendChild(div);
        });
    }
};