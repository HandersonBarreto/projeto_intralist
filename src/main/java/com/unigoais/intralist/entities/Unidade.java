package com.unigoais.intralist.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_unidade")
public class Unidade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;

    @OneToMany(mappedBy = "pertenceA")
    private List<Departamento> departamentos = new ArrayList<>();

    @OneToOne(mappedBy = "unidade", cascade = CascadeType.ALL, orphanRemoval = true)
    private Endereco endereco;
    public Unidade(){

    }

    public Unidade(Long id, String nome) {
        this.id = id;
        this.nome = nome;
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

    public List<Departamento> getDepartamentos() {
        return departamentos;
    }

    public Endereco getEndereco() {
        return endereco;
    }
}
