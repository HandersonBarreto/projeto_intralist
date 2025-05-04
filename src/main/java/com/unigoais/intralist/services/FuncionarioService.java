package com.unigoais.intralist.services;

import com.unigoais.intralist.controllers.handler.DatabaseException;
import com.unigoais.intralist.dto.FuncionarioDTO;
import com.unigoais.intralist.entities.Departamento;
import com.unigoais.intralist.entities.Funcionario;
import com.unigoais.intralist.entities.Role;
import com.unigoais.intralist.entities.Tarefa;
import com.unigoais.intralist.projections.FuncionarioDetailsProjection;
import com.unigoais.intralist.repositories.DepartamentoRepository;
import com.unigoais.intralist.repositories.FuncionarioRepository;
import com.unigoais.intralist.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class FuncionarioService implements UserDetailsService {

    @Autowired
    private FuncionarioRepository repository;

    @Autowired
    private DepartamentoRepository departamentoRepository;

    @Transactional(readOnly = true)
    public FuncionarioDTO findById(Long id){
        Optional<Funcionario> result = repository.findById(id);
        Funcionario funcionario = result.orElseThrow(
                () -> new ResourceNotFoundException("Recurso não encontrado"));
        FuncionarioDTO dto = new FuncionarioDTO(funcionario);
        return dto;
    }

    // No FuncionarioService.java
    @Transactional(readOnly = true)
    public Page<FuncionarioDTO> search(String nome, Pageable pageable) {
        Page<Funcionario> result = repository.findByNomeContainingIgnoreCase(nome, pageable);
        return result.map(FuncionarioDTO::new);
    }

    @Transactional(readOnly = true)
    public Page<FuncionarioDTO> findAll(Pageable pageable){
        Page<Funcionario> result = repository.findAll(pageable);
        return result.map(x -> new FuncionarioDTO(x));
    }

    @Transactional
    public FuncionarioDTO insert(FuncionarioDTO dto){
        Funcionario entity = new Funcionario();
        copyDtoToEntity(dto, entity);

        Departamento departamento = departamentoRepository.getReferenceById(dto.getDepartamentoId());
        entity.setDepartamento(departamento);

        entity = repository.save(entity);
        return new FuncionarioDTO(entity);
    }

    @Transactional
    public FuncionarioDTO update(Long id,FuncionarioDTO dto){
        try {
            Funcionario entity = repository.getReferenceById(id);
            copyDtoToEntity(dto, entity);

            Departamento departamento = departamentoRepository.getReferenceById(dto.getDepartamentoId());

            entity.setDepartamento(departamento);

            entity = repository.save(entity);
            return new FuncionarioDTO(entity);
        }
        catch (ResourceNotFoundException e){
            throw new ResourceNotFoundException("Recurso não encontrado");
        }
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new ResourceNotFoundException("Recurso não encontrado");
        }
        try {
            repository.deleteById(id);
        }
        catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Falha de integridade referencial");
        }
    }

    private void copyDtoToEntity(FuncionarioDTO dto, Funcionario entity) {
        entity.setNome(dto.getNome());
        entity.setFotoUrl(dto.getFotoUrl());
        entity.setEmail(dto.getEmail());
        entity.setCpf(dto.getCpf());
        entity.setTelefone(dto.getTelefone());
        entity.setPassword(dto.getPassword());
        entity.setStatusFuncionario(dto.getStatusFuncionario());
        entity.setCargo(dto.getCargo());
        entity.setDescricao(dto.getDescricao());
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<FuncionarioDetailsProjection> result = repository.searchUserAndRolesByEmail(username);
        if (result.size() == 0){
            throw new UsernameNotFoundException("User not found");
        }

        Funcionario funcionario = new Funcionario();
        funcionario.setEmail(username);
        funcionario.setPassword(result.get(0).getPassword());
        for (FuncionarioDetailsProjection projection : result){
            funcionario.addRole(new Role(projection.getRoleId(), projection.getAuthority()));
        }
        return funcionario;
    }
}
