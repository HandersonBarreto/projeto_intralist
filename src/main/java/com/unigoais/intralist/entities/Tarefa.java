package com.unigoais.intralist.entities;

import jakarta.persistence.*;

import java.time.Instant;
import java.time.LocalDate;

@Entity
@Table(name = "tb_tarefa")
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant dataCriacao;

    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant dataInicio;
    private LocalDate fimPrevisto;

    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant fimReal;

    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant dataAtualizacao;

    @Enumerated(EnumType.STRING)
    private StatusTarefa statusTarefa;

    @ManyToOne
    @JoinColumn(name = "projeto_id")
    private Projeto projeto;

    public Tarefa(){

    }

    public Tarefa(Long id, String nome, String descricao, Instant dataCriacao, Instant dataInicio, LocalDate fimPrevisto, Instant fimReal, Instant dataAtualizacao, StatusTarefa statusTarefa) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
        this.dataInicio = dataInicio;
        this.fimPrevisto = fimPrevisto;
        this.fimReal = fimReal;
        this.dataAtualizacao = dataAtualizacao;
        this.statusTarefa = statusTarefa;
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

    public LocalDate getFimPrevisto() {
        return fimPrevisto;
    }

    public void setFimPrevisto(LocalDate fimPrevisto) {
        this.fimPrevisto = fimPrevisto;
    }

    public Instant getFimReal() {
        return fimReal;
    }

    public void setFimReal(Instant fimReal) {
        this.fimReal = fimReal;
    }

    public Instant getDataAtualizacao() {
        return dataAtualizacao;
    }

    public void setDataAtualizacao(Instant dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }

    public StatusTarefa getStatusTarefa() {
        return statusTarefa;
    }

    public void setStatusTarefa(StatusTarefa statusTarefa) {
        this.statusTarefa = statusTarefa;
    }

    public Projeto getProjeto() {
        return projeto;
    }

    public void setProjeto(Projeto projeto) {
        this.projeto = projeto;
    }
}
