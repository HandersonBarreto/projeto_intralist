package com.unigoais.intralist.entities;

import jakarta.persistence.*;

import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_projeto")
public class Projeto {

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
    private LocalDate dataFimPrevisto;
    private Instant dataFimReal;
    private String meta;

    @Enumerated(EnumType.STRING)
    private NivelRisco risco;

    @Enumerated(EnumType.STRING)
    private StatusProjeto statusProjeto;

    @ManyToOne
    @JoinColumn(name = "equipe_id")
    private Equipe equipe;

    @OneToMany(mappedBy = "projeto")
    private List<Tarefa> tarefas = new ArrayList<>();

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
        // Se o status for concluído e ainda não tiver uma data de fim real, preenche com o momento atual
        if (statusProjeto == StatusProjeto.CONCLUIDO && this.dataFimReal == null) {
            this.dataFimReal = Instant.now();
        }
    }


    public Equipe getEquipe() {
        return equipe;
    }

    public List<Tarefa> getTarefas() {
        return tarefas;
    }
}

