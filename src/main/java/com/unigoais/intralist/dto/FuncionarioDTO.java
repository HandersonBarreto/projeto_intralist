package com.unigoais.intralist.dto;

import com.unigoais.intralist.entities.Funcionario;
import com.unigoais.intralist.entities.StatusFuncionario;

public class FuncionarioDTO {

    private Long id;
    private String nome;
    private String fotoUrl;
    private String email;
    private String cpf;
    private String telefone;
    private StatusFuncionario statusFuncionario;
    private String cargo;
    private String descricao;

    public FuncionarioDTO(){

    }

    public FuncionarioDTO(Funcionario entity) {
        id = entity.getId();
        nome = entity.getNome();
        fotoUrl = entity.getFotoUrl();
        email = entity.getEmail();
        cpf = entity.getCpf();
        telefone = entity.getTelefone();
        statusFuncionario = entity.getStatusFuncionario();
        cargo = entity.getCargo();
        descricao = entity.getDescricao();
    }

    public String getDescricao() {
        return descricao;
    }

    public String getCargo() {
        return cargo;
    }

    public StatusFuncionario getStatusFuncionario() {
        return statusFuncionario;
    }

    public String getCpf() {
        return cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public String getEmail() {
        return email;
    }

    public String getFotoUrl() {
        return fotoUrl;
    }

    public String getNome() {
        return nome;
    }

    public Long getId() {
        return id;
    }
}

