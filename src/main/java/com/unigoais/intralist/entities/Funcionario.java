package com.unigoais.intralist.entities;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_funcionario")
public class Funcionario implements UserDetails {

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
    private String password;

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

    @ManyToMany
    @JoinTable(name = "tb_user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public Funcionario(){

    }

    public Funcionario(Long id, String nome, String fotoUrl, String email, String cpf, String telefone, String password, StatusFuncionario statusFuncionario, String cargo, String descricao, Departamento departamento, Set<Equipe> equipes, Set<Role> roles) {
        this.id = id;
        this.nome = nome;
        this.fotoUrl = fotoUrl;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.password = password;
        this.statusFuncionario = statusFuncionario;
        this.cargo = cargo;
        this.descricao = descricao;
        this.departamento = departamento;
        this.equipes = equipes;
        this.roles = roles;
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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void addRole(Role role){
        roles.add(role);
    }

    public boolean hasRole(String nameRole){
        for (Role role: roles){
            if (role.getAuthority().equals(nameRole)){
                return true;
            }
        }
        return false;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setDepartamento(Departamento departamento) {
        this.departamento = departamento;
    }
}
