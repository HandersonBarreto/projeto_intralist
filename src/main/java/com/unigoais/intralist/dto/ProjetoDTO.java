package com.unigoais.intralist.dto;

import com.unigoais.intralist.entities.NivelRisco;
import com.unigoais.intralist.entities.Projeto;
import com.unigoais.intralist.entities.StatusProjeto;

import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ProjetoDTO {

    private Long id;
    private String nome;
    private String descricao;
    private Instant dataCriacao;
    private Instant dataInicio;
    private LocalDate dataFimPrevisto;
    private String meta;
    private NivelRisco risco;
    private StatusProjeto statusProjeto;
    private Instant dataFimReal;


    private List<TarefaDTO> tarefas = new ArrayList<>();

    public ProjetoDTO() {

    }

    public ProjetoDTO(Projeto entity) {
        id = entity.getId();
        nome = entity.getNome();
        descricao = entity.getDescricao();
        dataCriacao = entity.getDataCriacao();
        dataInicio = entity.getDataInicio();
        dataFimPrevisto = entity.getDataFimPrevisto();
        meta = entity.getMeta();
        risco = entity.getRisco();
        statusProjeto = entity.getStatusProjeto();
        dataFimReal = entity.getDataFimReal();

        if (entity.getTarefas() != null) {
            this.tarefas = entity.getTarefas().stream()
                    .map(TarefaDTO::new)
                    .collect(Collectors.toList());
        } else {
            this.tarefas = new ArrayList<>();
        }
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

    public Instant getDataFimReal() {
        return dataFimReal;
    }

    public void setDataFimReal(Instant dataFimReal) {
        this.dataFimReal = dataFimReal;
    }

    public List<TarefaDTO> getTarefas() {
        return tarefas;
    }

    public void setTarefas(List<TarefaDTO> tarefas) {
        this.tarefas = tarefas;
    }
}
