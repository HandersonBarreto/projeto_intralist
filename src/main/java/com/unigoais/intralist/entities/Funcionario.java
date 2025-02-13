package com.unigoais.intralist.entities;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_funcionario")
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String fotoUrl;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String cpf;
    private String telefone;

    @Enumerated(EnumType.STRING)
    private StatusFuncionario statusFuncionario;
    private String cargo;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @ManyToOne
    @JoinColumn(name = "departamento_id")
    private Departamento departamento;


    @ManyToMany
    @JoinTable(name = "tb_funcionario_equipe",
            joinColumns = @JoinColumn(name = "funcionario_id"),
            inverseJoinColumns = @JoinColumn(name = "equipe_id"))
    private Set<Equipe> equipes = new HashSet<>();

    public Funcionario(){

    }

    public Funcionario(Long id, String nome, String fotoUrl, String email, String cpf, String telefone, StatusFuncionario statusFuncionario, String cargo, String descricao) {
        this.id = id;
        this.nome = nome;
        this.fotoUrl = fotoUrl;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.statusFuncionario = statusFuncionario;
        this.cargo = cargo;
        this.descricao = descricao;
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

    public String getFotoUrl() {
        return fotoUrl;
    }

    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public StatusFuncionario getStatusFuncionario() {
        return statusFuncionario;
    }

    public Departamento getDepartamento() {
        return departamento;
    }

    public Set<Equipe> getEquipes() {
        return equipes;
    }

    public void setStatusFuncionario(StatusFuncionario statusFuncionario) {
        this.statusFuncionario = statusFuncionario;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
