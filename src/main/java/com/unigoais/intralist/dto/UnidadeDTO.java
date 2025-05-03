package com.unigoais.intralist.dto;

import com.unigoais.intralist.entities.Unidade;

public class UnidadeDTO {

    private Long id;
    private String nome;

    public UnidadeDTO(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public UnidadeDTO(Unidade entity) {
        id = entity.getId();
        nome = entity.getNome();
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }
}
