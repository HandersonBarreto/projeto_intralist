package com.unigoais.intralist.entities;

import java.time.Instant;
import java.time.LocalDate;

public class Projeto {
    private Long id;
    private String nome;
    private String descricao;
    private Instant dataCriacao;
    private Instant dataInicio;
    private LocalDate dataFimPrevisto;
    private Instant dataFimReal;
    private String meta;
    private NivelRisco risco;
    private StatusProjeto statusProjeto;

    public Projeto(){

    }

    public Projeto(Long id, String nome, String descricao, Instant dataCriacao, Instant dataInicio, LocalDate dataFimPrevisto, Instant dataFimReal, String meta, NivelRisco risco, StatusProjeto statusProjeto) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
        this.dataInicio = dataInicio;
        this.dataFimPrevisto = dataFimPrevisto;
        this.dataFimReal = dataFimReal;
        this.meta = meta;
        this.risco = risco;
        this.statusProjeto = statusProjeto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Instant getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(Instant dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public Instant getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Instant dataInicio) {
        this.dataInicio = dataInicio;
    }

    public LocalDate getDataFimPrevisto() {
        return dataFimPrevisto;
    }

    public void setDataFimPrevisto(LocalDate dataFimPrevisto) {
        this.dataFimPrevisto = dataFimPrevisto;
    }

    public Instant getDataFimReal() {
        return dataFimReal;
    }

    public void setDataFimReal(Instant dataFimReal) {
        this.dataFimReal = dataFimReal;
    }

    public String getMeta() {
        return meta;
    }

    public void setMeta(String meta) {
        this.meta = meta;
    }

    public NivelRisco getRisco() {
        return risco;
    }

    public void setRisco(NivelRisco risco) {
        this.risco = risco;
    }

    public StatusProjeto getStatusProjeto() {
        return statusProjeto;
    }

    public void setStatusProjeto(StatusProjeto statusProjeto) {
        this.statusProjeto = statusProjeto;
    }
}

