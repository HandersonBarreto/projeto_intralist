package com.unigoais.intralist.dto;

import com.unigoais.intralist.entities.Departamento;

public class DepartamentoDTO {
    private Long id;
    private String cargo;
    private String nome;
    private String descricao;
    private String responsavel;
    private String localizacao;

    public DepartamentoDTO() {
    }

    public DepartamentoDTO(Long id, String cargo, String nome, String descricao, String responsavel, String localizacao) {
        this.id = id;
        this.cargo = cargo;
        this.nome = nome;
        this.descricao = descricao;
        this.responsavel = responsavel;
        this.localizacao = localizacao;
    }

    public DepartamentoDTO(Departamento entity) {
        id = entity.getId();
        cargo = entity.getCargo();
        nome = entity.getNome();
        descricao = entity.getDescricao();
        responsavel = entity.getResponsavel();
        localizacao = entity.getLocalizacao();
    }

    public Long getId() {
        return id;
    }

    public String getCargo() {
        return cargo;
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getResponsavel() {
        return responsavel;
    }

    public String getLocalizacao() {
        return localizacao;
    }
}
