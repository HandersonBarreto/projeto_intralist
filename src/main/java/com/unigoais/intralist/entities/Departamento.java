package com.unigoais.intralist.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_departamento")
public class Departamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descricao;
    private String responsavel;
    private String localizacao;

    @OneToMany(mappedBy = "alocadoEm")
    private List<Funcionario> funcionarios = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "pertenceA_id")
    private Unidade pertenceA;

    public Departamento(){

    }

    public Departamento(long id, String nome, String descricao, String responsavel, String localizacao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.responsavel = responsavel;
        this.localizacao = localizacao;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    public String getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(String responsavel) {
        this.responsavel = responsavel;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public List<Funcionario> getFuncionarios() {
        return funcionarios;
    }
}
