package com.unigoais.intralist.dto;

import com.unigoais.intralist.entities.Departamento;
import com.unigoais.intralist.entities.Funcionario;
import com.unigoais.intralist.entities.StatusFuncionario;

public class FuncionarioDTO {

    private Long id;
    private String nome;
    private String fotoUrl;
    private String email;
    private String cpf;
    private String telefone;
    private String password;
    private StatusFuncionario statusFuncionario;
    private String cargo;
    private String descricao;
    private Long departamentoId;


    public FuncionarioDTO(){

    }

    public FuncionarioDTO(Long id, String nome, String fotoUrl, String email, String cpf, String telefone, String password, StatusFuncionario statusFuncionario, String cargo, String descricao, Long departamentoId) {
        this.id = id;
        this.nome = nome;
        this.fotoUrl = fotoUrl;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.password = password;
        this.statusFuncionario = statusFuncionario;
        this.cargo = cargo;
        this.descricao = descricao;
        this.departamentoId = departamentoId;
    }

    public FuncionarioDTO(Funcionario entity) {
        id = entity.getId();
        nome = entity.getNome();
        fotoUrl = entity.getFotoUrl();
        email = entity.getEmail();
        cpf = entity.getCpf();
        telefone = entity.getTelefone();
        password = entity.getPassword();
        statusFuncionario = entity.getStatusFuncionario();
        cargo = entity.getCargo();
        descricao = entity.getDescricao();
        departamentoId = entity.getDepartamento().getId();
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

    public String getPassword() {
        return password;
    }

    public Long getDepartamentoId() {
        return departamentoId;
    }
}

