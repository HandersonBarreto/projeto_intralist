package com.unigoais.intralist.dto;

import com.unigoais.intralist.entities.NivelRisco;
import com.unigoais.intralist.entities.Projeto;
import com.unigoais.intralist.entities.StatusProjeto;

import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

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
    private Long equipeId;
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
        equipeId = entity.getEquipe().getId();
        entity.getTarefas().forEach(tarefa -> this.tarefas.add(new TarefaDTO(tarefa)));
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

    public LocalDate getDataFimPrevisto() {
        return dataFimPrevisto;
    }

    public String getMeta() {
        return meta;
    }

    public NivelRisco getRisco() {
        return risco;
    }

    public StatusProjeto getStatusProjeto() {
        return statusProjeto;
    }

    public Long getEquipeId() {
        return equipeId;
    }

    public List<TarefaDTO> getTarefas() {
        return tarefas;
    }
}
