package com.unigoais.intralist.dto;

import com.unigoais.intralist.entities.StatusTarefa;
import com.unigoais.intralist.entities.Tarefa;

import java.time.Instant;
import java.time.LocalDate;

public class TarefaDTO {

    private Long id;
    private String nome;
    private String descricao;
    private Instant dataCriacao;
    private Instant dataInicio;
    private LocalDate fimPrevisto;
    private Instant fimReal;
    private Instant dataAtualizacao;
    private StatusTarefa statusTarefa;

    public TarefaDTO(){

    }

    public TarefaDTO(Tarefa entity) {
        id = entity.getId();
        nome = entity.getNome();
        descricao = entity.getDescricao();
        dataCriacao = entity.getDataCriacao();
        dataInicio = entity.getDataInicio();
        fimPrevisto = entity.getFimPrevisto();
        fimReal = entity.getFimReal();
        dataAtualizacao = entity.getDataAtualizacao();
        statusTarefa = entity.getStatusTarefa();
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

    public Instant getDataInicio() {
        return dataInicio;
    }

    public LocalDate getFimPrevisto() {
        return fimPrevisto;
    }

    public Instant getFimReal() {
        return fimReal;
    }

    public Instant getDataAtualizacao() {
        return dataAtualizacao;
    }

    public StatusTarefa getStatusTarefa() {
        return statusTarefa;
    }
}
