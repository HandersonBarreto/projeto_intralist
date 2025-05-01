package com.unigoais.intralist.dto;

import com.unigoais.intralist.entities.Equipe;

import java.time.Instant;
import java.util.List;

public class EquipeDTO {
    private Long id;
    private String nome;
    private String descricao;
    private Instant dataCriacao;

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
}
