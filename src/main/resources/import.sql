-- Unidades
INSERT INTO tb_unidade (nome) VALUES ('Matriz Central');
INSERT INTO tb_unidade(nome) VALUES ('Filial 1');
INSERT INTO tb_unidade(nome) VALUES ('Filial 2');
INSERT INTO tb_unidade (nome) VALUES ('Filial 3');
INSERT INTO tb_unidade (nome) VALUES ('Filial 4');
INSERT INTO tb_unidade (nome) VALUES ('Filial 5');
INSERT INTO tb_unidade (nome) VALUES ('Filial 6');


-- Endereços (relacionado a Unidade)
INSERT INTO tb_endereco (id, logradouro, complemento, numero, bairro, cep, cidade, uf) VALUES (1, 'Av. Paulista', 'Prédio 1', 1000, 'Centro', '01000-000', 'São Paulo', 1);
INSERT INTO tb_endereco (id, logradouro, complemento, numero, bairro, cep, cidade, uf) VALUES (2, 'Rua Rio Solimões', 'Quadra 10 lt 21', 170, 'Arroio da Manteiga', '093145-590', 'São Leopoldo', 21);
INSERT INTO tb_endereco (id, logradouro, complemento, numero, bairro, cep, cidade, uf) VALUES (3, 'Rua Vinte e Um de Abril', 'Quadra 89 lt 15', 1779, 'Mustardinha', '50760-375', 'Recife', 17);
INSERT INTO tb_endereco (id, logradouro, complemento, numero, bairro, cep, cidade, uf) VALUES (4, 'Av. Rio Branco', 'Sala 5', 200, 'Centro', '20040-000', 'Rio de Janeiro', 19);
INSERT INTO tb_endereco (id, logradouro, complemento, numero, bairro, cep, cidade, uf) VALUES (5, 'Rua Sete de Setembro', 'Prédio B', 150, 'Jardim América', '01415-000', 'São Paulo', 1);
INSERT INTO tb_endereco (id, logradouro, complemento, numero, bairro, cep, cidade, uf) VALUES (6, 'Rua das Flores', 'Casa 10', 500, 'Vila Nova', '02020-200', 'Curitiba', 16);
INSERT INTO tb_endereco (id, logradouro, complemento, numero, bairro, cep, cidade, uf) VALUES (7, 'Av. Brasil', 'Loja 2', 750, 'Centro', '03030-300', 'Belo Horizonte', 11);


-- Departamentos
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('TI', 'Departamento de Tecnologia', 'Carlos Silva', 'Bloco A', 1);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Financeiro', 'Departamento de Finanças', 'Joao Batista Bezerra', 'Bloco D', 2);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Maketing', 'Departamento de comunicação e marketing', 'Maria das Graças Ferreira', 'Bloco C', 1);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('RH', 'Departamento de Recursos Humanos', 'Ana Paula Santos', 'Bloco B', 3);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Vendas', 'Departamento de Vendas', 'Fernando Almeida', 'Bloco E', 4);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Jurídico', 'Departamento responsável por assuntos legais e contratuais', 'Renato Albuquerque', 'Bloco F', 2);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Logística', 'Departamento de transporte e armazenagem', 'Carla Mendes', 'Bloco G', 3);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Compras', 'Departamento responsável por aquisição de materiais e serviços', 'Gustavo Almeida', 'Bloco H', 1);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Qualidade', 'Departamento de controle e garantia da qualidade', 'Fernanda Ribeiro', 'Bloco I', 4);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Suporte Técnico', 'Atendimento e suporte a clientes internos e externos', 'Rodrigo Martins', 'Bloco J', 5);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Pesquisa e Desenvolvimento', 'Inovação e criação de novos produtos e serviços', 'Mariana Souza', 'Bloco K', 2);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Treinamento', 'Capacitação e desenvolvimento de funcionários', 'Bruno Castro', 'Bloco L', 1);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Produção', 'Departamento responsável pela linha de produção', 'Helena Duarte', 'Bloco M', 3);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Auditoria Interna', 'Monitoramento e controle de processos internos', 'Fábio Rocha', 'Bloco N', 4);
INSERT INTO tb_departamento (nome, descricao, responsavel, localizacao, pertenceA_id) VALUES ('Sustentabilidade', 'Implementação de práticas sustentáveis', 'Isabela Nunes', 'Bloco O', 5);


-- Funcionários
-- joão Silva abc123
-- handerson abc456
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('João Silva', 'https://img.com/joao.jpg', 'joao@email.com', '123.456.789-00', '(53) 98737-1386', '$2a$10$.b1EMQMXP3A0FpoOPT2NventRMOsCEWEiAJYnPtG.q9.zvmy/pefe', 1, 'Desenvolvedor Back-end', 'Especialista em Java', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Handerson Aires Barreto Ferreira', 'https://img.com/handerson.jpg', 'handerson@email.com', '123.456.789-10', '(62) 98737-1586', '$2a$10$YnuQYPeMytRiXVJxJ7XrtuYCvNJWJqnbHbI1Q1TijE3ANPvOdhrmu', 1, 'Desenvolvedor Back-end', 'Especialista em Java foco em Spring Boot, banco de dados', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Maria Oliveira', 'https://img.com/maria.jpg', 'maria@email.com', '987.654.321-00', '(87) 98092-7924', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Analista de Dados', 'Especialista em PostgreSQL', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Carlos Eduardo Silva', 'https://img.com/carlos.jpg', 'carlos@email.com', '753.276.940-20', '(81) 2750-2633', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 2, 'Analista Financeiro', 'Responsavel pela conciliação bancária e contas a receber', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Lorenna Feitosa Coelho', 'https://img.com/lorena.jpg', 'lorena@email.com', '782.181.110-69', '(53) 98737-1386','$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Analista de Comunicação interna', 'Responsável pelo endo marketing', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Fernanda Lima', 'https://img.com/fernanda.jpg', 'fernanda@email.com', '312.456.789-01', '(21) 98765-4321','$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Gerente de Projetos', 'Responsável por coordenação de projetos', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Ricardo Pereira', 'https://img.com/ricardo.jpg', 'ricardo@email.com', '654.321.987-02', '(11) 98765-0987', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Especialista em Segurança', 'Responsável por segurança da informação', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Ana Souza', 'https://img.com/ana.jpg', 'ana@email.com', '789.654.123-00', '(31) 98777-1234', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Desenvolvedora Front-end', 'Especialista em HTML, CSS e JavaScript, com experiência em frameworks como Angular e React', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Felipe Andrade', 'https://img.com/felipe.jpg', 'felipe@email.com', '456.789.123-00', '(21) 98767-1234','$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Analista de Testes', 'Responsável por testes manuais e automatizados, garantindo a qualidade do software', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Juliana Ramos', 'https://img.com/juliana.jpg', 'juliana@email.com', '654.123.789-00', '(61) 98765-1234', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Engenheira de Software', 'Especialista em desenvolvimento de sistemas complexos, utilizando práticas de DevOps', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Gustavo Ferreira', 'https://img.com/gustavo.jpg', 'gustavo@email.com', '987.123.456-00', '(11) 98761-2345', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Designer UX/UI', 'Responsável pelo design de interfaces de usuário intuitivas e experiências de usuário otimizadas', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Camila Borges', 'https://img.com/camila.jpg', 'camila@email.com', '123.456.789-11', '(71) 98765-6789', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Analista de Marketing Digital', 'Especialista em estratégias de marketing digital, incluindo SEO e campanhas em redes sociais', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Rodrigo Menezes', 'https://img.com/rodrigo.jpg', 'rodrigo@email.com', '789.123.456-11', '(43) 98765-4321', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Engenheiro de Dados', 'Responsável pela arquitetura e manutenção de pipelines de dados, utilizando ferramentas como Apache Spark e Hadoop', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Patrícia Amaral', 'https://img.com/patricia.jpg', 'patricia@email.com', '456.789.123-11', '(34) 98765-5678', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Cientista de Dados', 'Especialista em análise de dados e criação de modelos preditivos utilizando Python e R', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Marcos Vinícius', 'https://img.com/marcos.jpg', 'marcos@email.com', '321.654.987-11', '(44) 98765-6789', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Administrador de Banco de Dados', 'Responsável pela gestão e otimização de bancos de dados, garantindo alta disponibilidade e desempenho', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Renata Barbosa', 'https://img.com/renata.jpg', 'renata@email.com', '987.654.321-11', '(19) 98765-7890', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Especialista em Redes', 'Responsável pela configuração e manutenção de redes corporativas, garantindo segurança e performance', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Lucas Almeida', 'https://img.com/lucas.jpg', 'lucas@email.com', '123.456.789-22', '(41) 98765-8910', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'DevOps Engineer', 'Especialista em integração contínua e entrega contínua (CI/CD) utilizando ferramentas como Jenkins e Docker', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Larissa Mendes', 'https://img.com/larissa.jpg', 'larissa@email.com', '456.789.123-22', '(51) 98765-1234', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Especialista em Inteligência Artificial', 'Responsável pelo desenvolvimento de modelos de machine learning e deep learning', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Thiago Santos', 'https://img.com/thiago.jpg', 'thiago@email.com', '789.123.456-22', '(55) 98765-6789', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Gerente de TI', 'Responsável por gerenciar a infraestrutura de tecnologia da informação, incluindo servidores e redes', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Débora Silva', 'https://img.com/debora.jpg', 'debora@email.com', '321.654.987-22', '(85) 98765-7890', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Especialista em Desenvolvimento Mobile', 'Especialista em desenvolvimento de aplicativos para iOS e Android, utilizando Swift e Kotlin', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('André Gomes', 'https://img.com/andre.jpg', 'andre@email.com', '654.321.987-22', '(67) 98765-8910', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Arquiteto de Soluções', 'Responsável pelo design de arquiteturas de software escaláveis e eficientes', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Bianca Nunes', 'https://img.com/bianca.jpg', 'bianca@email.com', '987.123.456-33', '(32) 98765-1234', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Analista de Suporte', 'Responsável pelo suporte técnico a usuários finais, solucionando problemas e garantindo a continuidade dos serviços', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Júlio César', 'https://img.com/julio.jpg', 'julio@email.com', '123.456.789-33', '(95) 98765-5678', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Engenheiro de Software', 'Responsável pelo desenvolvimento de aplicações web escaláveis utilizando tecnologias modernas', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Vanessa Souza', 'https://img.com/vanessa.jpg', 'vanessa@email.com', '456.789.123-33', '(84) 98765-6789', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Gerente de Marketing', 'Responsável pelo planejamento e execução de estratégias de marketing, incluindo campanhas publicitárias', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Bruno Costa', 'https://img.com/bruno.jpg', 'bruno@email.com', '789.123.456-33', '(62) 98765-7890', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Desenvolvedor Full-stack', 'Especialista em desenvolvimento de aplicações web, desde o front-end até o back-end', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Alice Fernandes', 'https://img.com/alice.jpg', 'alice@email.com', '321.654.987-33', '(35) 98765-8910', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Analista de Infraestrutura', 'Responsável pela manutenção e otimização da infraestrutura de TI, incluindo servidores e redes', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Rafael Lima', 'https://img.com/rafael.jpg', 'rafael.lima@email.com', '654.321.987-33', '(47) 98765-1234', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Especialista em Cloud', 'Responsável pela migração e manutenção de sistemas em ambientes de computação em nuvem, utilizando AWS e Azure', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Fernando Reis', 'https://img.com/fernando.jpg', 'fernando.reis@email.com', '987.456.123-44', '(21) 98765-5678', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Analista de Sistemas', 'Responsável pela análise e desenvolvimento de sistemas, com experiência em UML e BPMN', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Cláudia Duarte', 'https://img.com/claudia.jpg', 'claudia.duarte@email.com', '123.654.987-44', '(31) 98765-6789', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Engenheira de Segurança', 'Especialista em segurança da informação, com certificação CISSP', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Rafael Moura', 'https://img.com/rafael.jpg', 'rafael.moura@email.com', '456.123.789-44', '(41) 98765-7890', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Administrador de Sistemas', 'Responsável pela gestão de servidores Linux e Windows, garantindo alta disponibilidade', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Gabriela Sousa', 'https://img.com/gabriela.jpg', 'gabriela.sousa@email.com', '789.456.123-44', '(71) 98765-8910', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Especialista em Big Data', 'Responsável pela análise de grandes volumes de dados, utilizando ferramentas como Hadoop e Spark', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Pedro Alves', 'https://img.com/pedro.jpg', 'pedro.alves@email.com', '123.789.456-44', '(51) 98765-1234', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Desenvolvedor iOS', 'Especialista em desenvolvimento de aplicativos para iOS, utilizando Swift', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Viviane Santos', 'https://img.com/viviane.jpg', 'viviane.santos@email.com', '456.789.123-55', '(61) 98765-5678', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Analista de RH', 'Responsável pelo recrutamento e seleção de novos talentos, além de treinamento e desenvolvimento', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Fábio Lima', 'https://img.com/fabio.jpg', 'fabio.lima@email.com', '789.123.456-55', '(81) 98765-6789', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Administrador de Redes', 'Especialista em configuração e manutenção de redes, com certificação CCNA', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Renata Costa', 'https://img.com/renata.jpg', 'renata.costa@email.com', '123.456.789-55', '(91) 98765-7890', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Desenvolvedora Android', 'Especialista em desenvolvimento de aplicativos para Android, utilizando Java e Kotlin', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Leonardo Ferreira', 'https://img.com/leonardo.jpg', 'leonardo.ferreira@email.com', '456.789.123-66', '(11) 98765-8910', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Gerente de Infraestrutura', 'Responsável pela gestão da infraestrutura de TI, garantindo a continuidade dos serviços e a segurança', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Isabela Martins', 'https://img.com/isabela.jpg', 'isabela.martins@email.com', '789.123.456-66', '(21) 98765-1234', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Analista de Segurança da Informação', 'Responsável por implementar políticas de segurança e realizar auditorias de segurança', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Rodrigo Silva', 'https://img.com/rodrigo.jpg', 'rodrigo.silva@email.com', '123.456.789-66', '(31) 98765-5678', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Gerente de Desenvolvimento', 'Responsável por coordenar a equipe de desenvolvimento, garantindo a entrega de projetos de software', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Tatiana Rocha', 'https://img.com/tatiana.jpg', 'tatiana.rocha@email.com', '456.789.123-77', '(41) 98765-6789', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Especialista em Testes Automatizados', 'Responsável por criar e manter scripts de testes automatizados, utilizando Selenium e JUnit', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Diego Costa', 'https://img.com/diego.jpg', 'diego.costa@email.com', '789.123.456-77', '(81) 98765-7890', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Engenheiro de DevOps', 'Especialista em automação de infraestrutura e processos de CI/CD, utilizando ferramentas como Ansible e Kubernetes', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Marcela Freitas', 'https://img.com/marcela.jpg', 'marcela.freitas@email.com', '123.456.789-77', '(91) 98765-8910', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Especialista em SEO', 'Responsável por otimizar o conteúdo digital para motores de busca, aumentando a visibilidade e o tráfego', 3);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Carlos Henrique', 'https://img.com/carlos.jpg', 'carlos.henrique@email.com', '456.789.123-88', '(51) 98765-1234', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Desenvolvedor PHP', 'Especialista em desenvolvimento de aplicações web utilizando PHP, com experiência em frameworks como Laravel', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Patrícia Almeida', 'https://img.com/patricia.jpg', 'patricia.almeida@email.com', '789.123.456-88', '(61) 98765-5678', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Especialista em Business Intelligence', 'Responsável por criar e manter soluções de BI, utilizando ferramentas como Power BI e Tableau', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Bruno Vieira', 'https://img.com/bruno.jpg', 'bruno.vieira@email.com', '123.456.789-88', '(71) 98765-6789', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Desenvolvedor Ruby', 'Especialista em desenvolvimento de aplicações web utilizando Ruby on Rails', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Daniela Mendes', 'https://img.com/daniela.jpg', 'daniela.mendes@email.com', '456.789.123-99', '(21) 98765-7890', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Analista de Negócios', 'Responsável por entender as necessidades dos clientes e propor soluções tecnológicas que atendam a essas necessidades', 2);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Luiz Felipe', 'https://img.com/luiz.jpg', 'luiz.felipe@email.com', '789.123.456-99', '(31) 98765-8910', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Desenvolvedor Python', 'Especialista em desenvolvimento de aplicações utilizando Python, com experiência em frameworks como Django e Flask', 1);
INSERT INTO tb_funcionario (nome, foto_url, email, cpf, telefone, password, status_funcionario, cargo, descricao, departamento_id) VALUES ('Mariana Costa', 'https://img.com/mariana.jpg', 'mariana.costa@email.com', '123.456.789-99', '(81) 98765-1234', '$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la', 1, 'Gerente de Qualidade', 'Responsável por garantir a qualidade dos produtos e serviços entregues pela empresa, através de auditorias e melhorias contínuas', 3);

-- Role
INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

-- Associação Funcionario + role
INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (5, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (6, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (7, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (8, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (9, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (10, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (11, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (12, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (13, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (14, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (15, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (16, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (17, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (18, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (19, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (20, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (21, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (22, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (23, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (24, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (25, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (26, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (27, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (28, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (29, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (30, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (31, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (32, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (33, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (34, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (35, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (36, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (37, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (38, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (39, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (40, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (41, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (42, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (43, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (44, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (45, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (46, 1);


-- Equipes
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe Backend', 'Responsável pela API', '2022-07-25T13:00:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe Dados', 'Análise de banco de dados', '2022-07-25T13:00:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe RH', 'Responsável por processos de RH', '2023-01-15T10:00:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe Vendas', 'Gestão de vendas e relacionamento com clientes', '2023-02-10T09:00:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe DevOps', 'Equipe de automação e CI/CD', '2023-03-05T14:30:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe Financeira', 'Equipe de análise de fluxo de caixa e investimentos', '2023-03-06T15:45:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Publicidade', 'Criação de campanhas publicitárias', '2023-03-07T16:00:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Recrutamento', 'Seleção de novos talentos', '2023-03-08T09:15:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe Comercial', 'Vendas e relacionamento com clientes', '2023-03-09T10:20:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe Jurídica Contratual', 'Gestão de contratos empresariais', '2023-03-10T11:30:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe Logística', 'Otimização de rotas e distribuição', '2023-03-11T12:40:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Compras', 'Aquisição de produtos e serviços estratégicos', '2023-03-12T13:50:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Controle de Qualidade', 'Garantia da qualidade dos produtos', '2023-03-13T14:55:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Atendimento Técnico', 'Suporte técnico aos clientes', '2023-03-14T15:05:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Inovação', 'Pesquisa e desenvolvimento de novos produtos', '2023-03-15T16:10:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Treinamento Interno', 'Capacitação de funcionários', '2023-03-16T17:15:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Produção', 'Linha de montagem e manufatura', '2023-03-17T18:20:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Auditoria', 'Verificação e auditoria dos processos', '2023-03-18T19:25:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Sustentabilidade', 'Ações ambientais e sociais', '2023-03-19T20:30:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Engenharia de Software', 'Desenvolvimento de aplicações', '2023-03-20T08:35:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Segurança da Informação', 'Proteção contra ameaças cibernéticas', '2023-03-21T09:40:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Inteligência de Mercado', 'Estudos e tendências de mercado', '2023-03-22T10:45:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Endomarketing', 'Engajamento e comunicação interna', '2023-03-23T11:50:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Social Media', 'Gerenciamento de redes sociais', '2023-03-24T12:55:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Benefícios e Salários', 'Administração da folha de pagamento', '2023-03-25T13:00:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Estratégia Comercial', 'Definição de metas e estratégias de vendas', '2023-03-26T14:05:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Compliance', 'Garantia do cumprimento de normas', '2023-03-27T15:10:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Distribuição', 'Coordenação de transporte e logística', '2023-03-28T16:15:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Suprimentos', 'Gestão de estoque e fornecedores', '2023-03-29T17:20:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Processos e Qualidade', 'Melhoria contínua dos processos', '2023-03-30T18:25:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Atendimento ao Cliente', 'Solução de dúvidas e suporte ao consumidor', '2023-03-31T19:30:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Pesquisa Tecnológica', 'Investigação de novas tecnologias', '2023-04-01T20:35:00Z');
INSERT INTO tb_equipe (nome, descricao, data_criacao) VALUES ('Equipe de Treinamento Externo', 'Capacitação para parceiros e clientes', '2023-04-02T21:40:00Z');


-- Associando Funcionários a Equipes (Tabela Intermediária)
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (1, 1);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (2, 2);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (3, 3);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (4, 4);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (2, 1);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (3, 2);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (4, 3);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (5, 4);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (6, 5);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (7, 6);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (8, 7);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (9, 8);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (10, 9);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (11, 10);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (12, 11);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (13, 12);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (14, 13);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (15, 14);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (16, 15);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (17, 16);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (18, 17);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (19, 18);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (20, 19);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (21, 20);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (22, 21);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (23, 22);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (24, 23);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (25, 24);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (26, 25);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (27, 26);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (28, 27);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (29, 28);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (30, 29);
INSERT INTO tb_funcionario_equipe (funcionario_id, equipe_id) VALUES (31, 30);


-- Projetos
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Sistema de Gestão', 'Plataforma para gerenciamento de processos', '2022-07-25T13:00:00Z', '2022-07-25T13:00:00Z', '2025-01-30', NULL, 'Entregar MVP em 3 meses', 1, 2, 1);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Implementação de ERP', 'Implantação de sistema de ERP', '2023-03-01T08:00:00Z', '2023-03-01T08:00:00Z', '2024-03-01', NULL, 'Concluir implantação até o prazo', 2, 1, 2);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Portal do Cliente', 'Sistema de autoatendimento para clientes', '2023-04-01T09:00:00Z', '2023-04-02T09:00:00Z', '2024-06-30', NULL, 'Lançamento do portal em 6 meses', 2, 1, 1);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Automação de Processos', 'Automação de tarefas manuais', '2023-05-05T10:00:00Z', '2023-05-06T10:00:00Z', '2024-09-15', NULL, 'Reduzir custos operacionais', 3, 2, 2);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Sistema de RH', 'Gerenciamento de folha de pagamento', '2023-06-10T11:00:00Z', '2023-06-11T11:00:00Z', '2024-08-20', NULL, 'Melhorar eficiência no RH', 1, 1, 3);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('E-commerce B2B', 'Plataforma de vendas para empresas', '2023-07-15T12:00:00Z', '2023-07-16T12:00:00Z', '2024-11-30', NULL, 'Expandir vendas online', 2, 2, 4);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Integração ERP-CRM', 'Conectar ERP com CRM', '2023-08-20T13:00:00Z', '2023-08-21T13:00:00Z', '2024-10-10', NULL, 'Facilitar gestão de clientes', 2, 1, 5);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Plataforma de Feedback', 'Sistema para coleta de feedback dos usuários', '2023-09-10T14:00:00Z', '2023-09-11T14:00:00Z', '2024-12-01', NULL, 'Melhorar a experiência do usuário', 1, 2, 6);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Sistema de Chatbot', 'Desenvolvimento de chatbot para atendimento', '2023-10-05T15:00:00Z', '2023-10-06T15:00:00Z', '2025-01-15', NULL, 'Automatizar atendimentos', 3, 1, 7);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('App de Mobilidade', 'Aplicativo para gestão de transporte', '2023-11-01T16:00:00Z', '2023-11-02T16:00:00Z', '2025-03-01', NULL, 'Facilitar a gestão de frotas', 2, 2, 8);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Sistema de Inventário', 'Controle de estoque e produtos', '2023-12-05T17:00:00Z', '2023-12-06T17:00:00Z', '2025-06-01', NULL, 'Reduzir falhas no controle de estoque', 1, 1, 9);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Plataforma de E-learning', 'Sistema de ensino online', '2024-01-05T18:00:00Z', '2024-01-06T18:00:00Z', '2025-07-01', NULL, 'Ampliar oferta de cursos', 2, 3, 10);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Sistema de Agendamento', 'Sistema de marcação de compromissos', '2024-02-05T19:00:00Z', '2024-02-06T19:00:00Z', '2025-08-01', NULL, 'Facilitar agendamentos online', 1, 2, 11);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Automatização de Faturamento', 'Automação do processo de faturamento', '2024-03-01T20:00:00Z', '2024-03-02T20:00:00Z', '2025-09-01', NULL, 'Reduzir erros no faturamento', 3, 1, 12);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Sistema de Atendimento ao Cliente', 'Plataforma para atendimento via chat', '2024-04-15T21:00:00Z', '2024-04-16T21:00:00Z', '2025-10-01', NULL, 'Melhorar a experiência do cliente', 2, 3, 13);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Sistema de Contabilidade', 'Sistema para controle contábil da empresa', '2024-05-10T22:00:00Z', '2024-05-11T22:00:00Z', '2025-11-15', NULL, 'Simplificar processos contábeis', 1, 1, 14);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Integração de Sistemas', 'Conectar diferentes plataformas da empresa', '2024-06-01T08:00:00Z', '2024-06-02T08:00:00Z', '2025-12-01', NULL, 'Melhorar comunicação entre sistemas', 3, 2, 15);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Gestão de Projetos', 'Sistema para controle de projetos internos', '2024-07-05T09:00:00Z', '2024-07-06T09:00:00Z', '2026-01-01', NULL, 'Otimizar gestão de projetos', 2, 1, 16);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Plataforma de Marketing', 'Sistema de criação e gestão de campanhas', '2024-08-10T10:00:00Z', '2024-08-11T10:00:00Z', '2026-03-01', NULL, 'Aumentar alcance de campanhas', 1, 2, 17);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Integração de APIs', 'Conectar sistemas externos via APIs', '2024-09-10T11:00:00Z', '2024-09-11T11:00:00Z', '2026-05-01', NULL, 'Facilitar a integração com parceiros', 2, 1, 18);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Sistema de Suporte Técnico', 'Plataforma para gestão de tickets de suporte', '2024-10-01T12:00:00Z', '2024-10-02T12:00:00Z', '2026-06-15', NULL, 'Otimizar atendimento ao cliente', 3, 3, 19);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Gestão de Vendas', 'Sistema de gerenciamento de pipeline de vendas', '2024-11-15T13:00:00Z', '2024-11-16T13:00:00Z', '2026-07-01', NULL, 'Aumentar a conversão de vendas', 1, 1, 20);
INSERT INTO tb_projeto (nome, descricao, data_criacao, data_inicio, data_fim_previsto, data_fim_real, meta, risco, status_projeto, equipe_id) VALUES ('Sistema de Comunicação Interna', 'Plataforma de comunicação para funcionários', '2024-12-10T14:00:00Z', '2024-12-11T14:00:00Z', '2026-08-01', NULL, 'Melhorar engajamento interno', 2, 2, 21);



-- Tarefas
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Criar API', 'Desenvolver endpoints REST', '2022-07-25T13:00:00Z', '2022-07-25T13:00:00Z', '2024-12-15', NULL, NULL, 1, 1);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Configurar módulos de ERP', 'Configurar módulos padrão do ERP', '2023-03-01T08:00:00Z', '2023-03-01T08:00:00Z', '2023-11-01', NULL, NULL, 3, 2);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Desenvolver frontend', 'Criar interface para usuários', '2023-04-01T09:30:00Z', '2023-04-02T09:30:00Z', '2024-06-01', NULL, NULL, 1, 1);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Criar banco de dados', 'Modelagem e criação do BD', '2023-04-01T10:00:00Z', '2023-04-02T10:00:00Z', '2024-06-15', NULL, NULL, 1, 1);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Configurar autenticação', 'Implementação de login seguro', '2023-05-01T11:00:00Z', '2023-05-02T11:00:00Z', '2024-07-01', NULL, NULL, 2, 2);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Criar API REST', 'Desenvolver endpoints de integração', '2023-05-10T12:00:00Z', '2023-05-11T12:00:00Z', '2024-07-10', NULL, NULL, 2, 2);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Testes de segurança', 'Testar vulnerabilidades e falhas', '2023-06-01T13:00:00Z', '2023-06-02T13:00:00Z', '2024-08-01', NULL, NULL, 3, 3);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Desenvolver página de login', 'Implementação da interface de login', '2023-06-05T14:00:00Z', '2023-06-06T14:00:00Z', '2024-08-15', NULL, NULL, 2, 3);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Criar sistema de notificações', 'Desenvolver funcionalidade de notificações', '2023-07-01T15:00:00Z', '2023-07-02T15:00:00Z', '2024-09-01', NULL, NULL, 2, 4);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Desenvolver integração de pagamentos', 'Implementar integração com gateways de pagamento', '2023-07-10T16:00:00Z', '2023-07-11T16:00:00Z', '2024-09-15', NULL, NULL, 2, 4);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Testes de integração', 'Testar todas as integrações entre sistemas', '2023-08-01T17:00:00Z', '2023-08-02T17:00:00Z', '2024-10-01', NULL, NULL, 3, 5);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Desenvolver backend', 'Criar a lógica de backend do sistema', '2023-08-15T18:00:00Z', '2023-08-16T18:00:00Z', '2024-10-15', NULL, NULL, 1, 6);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Implantar sistema de análise de dados', 'Implementar funcionalidades de análise de dados para relatórios', '2023-09-05T19:00:00Z', '2023-09-06T19:00:00Z', '2024-11-01', NULL, NULL, 3, 7);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Testar integração de API', 'Testar endpoints e funcionalidades da API', '2023-09-10T20:00:00Z', '2023-09-11T20:00:00Z', '2024-11-10', NULL, NULL, 2, 8);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Criar painel de controle', 'Desenvolver painel de controle para administradores', '2023-09-20T21:00:00Z', '2023-09-21T21:00:00Z', '2024-12-01', NULL, NULL, 1, 9);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Desenvolver integração com CRM', 'Integrar o sistema com a plataforma CRM', '2023-10-01T22:00:00Z', '2023-10-02T22:00:00Z', '2025-01-15', NULL, NULL, 2, 10);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Implementar recursos de segurança', 'Adotar melhores práticas de segurança no sistema', '2023-10-10T23:00:00Z', '2023-10-11T23:00:00Z', '2025-02-01', NULL, NULL, 1, 11);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Desenvolver funcionalidade de relatórios', 'Criar geração de relatórios personalizados para o sistema', '2023-10-15T08:00:00Z', '2023-10-16T08:00:00Z', '2025-03-01', NULL, NULL, 2, 12);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Configurar ambiente de produção', 'Preparar servidores e serviços para produção', '2023-11-01T09:00:00Z', '2023-11-02T09:00:00Z', '2025-04-15', NULL, NULL, 3, 13);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Testar funcionalidades principais', 'Realizar testes nas funcionalidades principais do sistema', '2023-11-15T10:00:00Z', '2023-11-16T10:00:00Z', '2025-05-01', NULL, NULL, 2, 14);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Finalizar documentação do sistema', 'Documentar o sistema e funcionalidades', '2023-12-01T11:00:00Z', '2023-12-02T11:00:00Z', '2025-06-01', NULL, NULL, 3, 15);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Testar performance do sistema', 'Avaliar o desempenho do sistema sob carga', '2024-01-05T12:00:00Z', '2024-01-06T12:00:00Z', '2025-07-01', NULL, NULL, 1, 16);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Validar dados do sistema', 'Verificar a integridade dos dados no sistema', '2024-01-15T13:00:00Z', '2024-01-16T13:00:00Z', '2025-08-01', NULL, NULL, 2, 17);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Ajustes no layout', 'Modificar o layout da plataforma para ser mais intuitivo', '2024-02-01T14:00:00Z', '2024-02-02T14:00:00Z', '2025-09-15', NULL, NULL, 3, 18);
INSERT INTO tb_tarefa (nome, descricao, data_criacao, data_inicio, fim_previsto, fim_real, data_atualizacao, status_tarefa, projeto_id) VALUES ('Finalizar integração com ERP', 'Concluir a integração com o ERP', '2024-02-10T15:00:00Z', '2024-02-11T15:00:00Z', '2025-10-01', NULL, NULL, 1, 19);