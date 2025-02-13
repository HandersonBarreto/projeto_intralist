package com.unigoais.intralist.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_endereco")
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    private String logradouro;

    @Column(columnDefinition = "TEXT")
    private String complemento;
    private Integer numero;
    private String bairro;
    private String cep;
    private String cidade;
    private Uf uf;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private Unidade unidade;

    public Endereco(){

    }

    public Endereco(Long id, String logadouro, String complemento, Integer numero, String bairro, String cep, String cidade, Uf uf) {
        this.id = id;
        this.logradouro = logadouro;
        this.complemento = complemento;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
        this.cidade = cidade;
        this.uf = uf;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogadouro() {
        return logradouro;
    }

    public void setLogadouro(String logadouro) {
        this.logradouro = logadouro;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public Uf getUf() {
        return uf;
    }

    public void setUf(Uf uf) {
        this.uf = uf;
    }

    public Unidade getUnidade() {
        return unidade;
    }


}
