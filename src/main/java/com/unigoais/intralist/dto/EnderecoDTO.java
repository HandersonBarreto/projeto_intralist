package com.unigoais.intralist.dto;


import com.unigoais.intralist.entities.Endereco;
import com.unigoais.intralist.entities.Uf;

public class EnderecoDTO {

    private  Long id;
    private String logradouro;
    private String complemento;
    private Integer numero;
    private String bairro;
    private String cep;
    private String cidade;
    private Uf uf;

    public EnderecoDTO(Long id, String logradouro, String complemento, Integer numero, String bairro, String cep, String cidade, Uf uf) {
        this.id = id;
        this.logradouro = logradouro;
        this.complemento = complemento;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
        this.cidade = cidade;
        this.uf = uf;
    }

    public EnderecoDTO(Endereco entity) {
        id = entity.getId();
        logradouro = entity.getLogadouro();
        complemento = entity.getComplemento();
        numero = entity.getNumero();
        bairro = entity.getBairro();
        cep = entity.getCep();
        cidade = entity.getCidade();
        uf = entity.getUf();
    }

    public Long getId() {
        return id;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public String getComplemento() {
        return complemento;
    }

    public Integer getNumero() {
        return numero;
    }

    public String getBairro() {
        return bairro;
    }

    public String getCep() {
        return cep;
    }

    public String getCidade() {
        return cidade;
    }

    public Uf getUf() {
        return uf;
    }
}
