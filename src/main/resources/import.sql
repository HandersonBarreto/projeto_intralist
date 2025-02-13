-- Unidades
INSERT INTO tb_unidade (nome) VALUES ('Matriz Central');
INSERT INTO tb_unidade(nome) VALUES ('Filial 1');
INSERT INTO tb_unidade(nome) VALUES ('Filial 2');
INSERT INTO tb_unidade (nome) VALUES ('Filial 3');
INSERT INTO tb_unidade (nome) VALUES ('Filial 4');


-- Endereços (relacionado a Unidade)
INSERT INTO tb_endereco (id, logradouro, complemento, numero, bairro, cep, cidade, uf) VALUES (1, 'Av. Paulista', 'Prédio 1', 1000, 'Centro', '01000-000', 'São Paulo', 1);
INSERT INTO tb_endereco (id, logradouro, complemento, numero, bairro, cep, cidade, uf) VALUES (2, 'Rua Rio Solimões', 'Quadra 10 lt 21', 170, 'Arroio da Manteiga', '093145-590', 'São Leopoldo', 21);
INSERT INTO tb_endereco (id, logradouro, complemento, numero, bairro, cep, cidade, uf) VALUES (3, 'Rua Vinte e Um de Abril', 'Quadra 89 lt 15', 1779, 'Mustardinha', '50760-375', 'Recife', 17);
INSERT INTO tb_endereco (id, logradouro, complemento, numero, bairro, cep, cidade, uf) VALUES (4, 'Av. Rio Branco', 'Sala 5', 200, 'Centro', '20040-000', 'Rio de Janeiro', 19);
INSERT INTO tb_endereco (id, logradouro, complemento, numero, bairro, cep, cidade, uf) VALUES (5, 'Rua Sete de Setembro', 'Prédio B', 150, 'Jardim América', '01415-000', 'São Paulo', 1);


-- Departamentos
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('TI', 'Departamento de Tecnologia', 'Carlos Silva', 'Bloco A', 1);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Financeiro', 'Departamento de Finanças', 'Joao Batista Bezerra', 'Bloco D', 2);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Maketing', 'Departamento de comunicação e marketing', 'Maria das Graças Ferreira', 'Bloco C', 1);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('RH', 'Departamento de Recursos Humanos', 'Ana Paula Santos', 'Bloco B', 3);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Vendas', 'Departamento de Vendas', 'Fernando Almeida', 'Bloco E', 4);


-- Funcionários
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, status_funcionario, cargo, descricao, departamento_id) VALUES ('João Silva', 'https://img.com/joao.jpg', 'joao@email.com', '123.456.789-00', '(53) 98737-1386', 1, 'Desenvolvedor Back-end', 'Especialista em Java', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, status_funcionario, cargo, descricao, departamento_id) VALUES ('Maria Oliveira', 'https://img.com/maria.jpg', 'maria@email.com', '987.654.321-00', '(87) 98092-7924', 1, 'Analista de Dados', 'Especialista em PostgreSQL', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, status_funcionario, cargo, descricao, departamento_id) VALUES ('Carlos Eduardo Silva', 'https://img.com/carlos.jpg', 'carlos@email.com', '753.276.940-20', '(81) 2750-2633', 2, 'Analista Financeiro', 'Responsavel pela conciliação bancária e contas a receber', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, status_funcionario, cargo, descricao, departamento_id) VALUES ('Lorenna Feitosa Coelho', 'https://img.com/lorena.jpg', 'lorena@email.com', '782.181.110-69', '(53) 98737-1386', 1, 'Analista de Comunicação interna', 'Responsável pelo endo marketing', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, status_funcionario, cargo, descricao, departamento_id) VALUES ('Fernanda Lima', 'https://img.com/fernanda.jpg', 'fernanda@email.com', '312.456.789-01', '(21) 98765-4321', 1, 'Gerente de Projetos', 'Responsável por coordenação de projetos', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, status_funcionario, cargo, descricao, departamento_id) VALUES ('Ricardo Pereira', 'https://img.com/ricardo.jpg', 'ricardo@email.com', '654.321.987-02', '(11) 98765-0987', 1, 'Especialista em Segurança', 'Responsável por segurança da informação', 3);


-- Equipes
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe Backend', 'Responsável pela API', '2022-07-25T13:00:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe Dados', 'Análise de banco de dados', '2022-07-25T13:00:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe RH', 'Responsável por processos de RH', '2023-01-15T10:00:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe Vendas', 'Gestão de vendas e relacionamento com clientes', '2023-02-10T09:00:00Z');


-- Associando Funcionários a Equipes (Tabela Intermediária)
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (1, 1);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (2, 2);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (3, 3);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (4, 4);


-- Projetos
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Sistema de Gestão', 'Plataforma para gerenciamento de processos', '2022-07-25T13:00:00Z', '2022-07-25T13:00:00Z', '2025-01-30', NULL, 'Entregar MVP em 3 meses', 1, 2, 1);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Implementação de ERP', 'Implantação de sistema de ERP', '2023-03-01T08:00:00Z', '2023-03-01T08:00:00Z', '2024-03-01', NULL, 'Concluir implantação até o prazo', 2, 1, 2);


-- Tarefas
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Criar API', 'Desenvolver endpoints REST', '2022-07-25T13:00:00Z', '2022-07-25T13:00:00Z', '2024-12-15', NULL, NULL, 1, 1);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Configurar módulos de ERP', 'Configurar módulos padrão do ERP', '2023-03-01T08:00:00Z', '2023-03-01T08:00:00Z', '2023-11-01', NULL, NULL, 3, 2);
