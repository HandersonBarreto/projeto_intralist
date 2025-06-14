package com.unigoais.intralist.dto;

import com.unigoais.intralist.entities.Equipe;
import com.unigoais.intralist.entities.Funcionario;
import com.unigoais.intralist.entities.Projeto;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class EquipeDTO {
    private Long id;
    private String nome;
    private String descricao;
    private Instant dataCriacao;

    private List<FuncionarioDTO> funcionarios = new ArrayList<>();
    private List<ProjetoDTO> projetos = new ArrayList<>();

    public EquipeDTO() {
    }

    public EquipeDTO(Long id, String nome, String descricao, Instant dataCriacao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
    }

    public EquipeDTO(Equipe entity) {
        id = entity.getId();
        nome = entity.getNome();
        descricao = entity.getDescricao();
        dataCriacao = entity.getDataCriacao();

        for (Funcionario funcionario : entity.getFuncionarios()){
            funcionarios.add(new FuncionarioDTO(funcionario));
        }
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public Instant getDataCriacao() {
        return dataCriacao;
    }

    public List<FuncionarioDTO> getFuncionarios() {
        return funcionarios;
    }

    public List<ProjetoDTO> getProjetos() {
        return projetos;
    }
}
