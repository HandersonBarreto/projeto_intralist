package com.unigoais.intralist.services;

import com.unigoais.intralist.dto.FuncionarioDTO;
import com.unigoais.intralist.entities.Funcionario;
import com.unigoais.intralist.repositories.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository repository;

    @Transactional(readOnly = true)
    public FuncionarioDTO findById(Long id){
        Optional<Funcionario> result = repository.findById(id);
        Funcionario funcionario = result.get();
        FuncionarioDTO dto = new FuncionarioDTO(funcionario);
        return dto;
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
        entity = repository.save(entity);
        return new FuncionarioDTO(entity);
    }

    @Transactional
    public FuncionarioDTO update(Long id,FuncionarioDTO dto){
        Funcionario entity = repository.getReferenceById(id);
        copyDtoToEntity(dto, entity);
        entity = repository.save(entity);
        return new FuncionarioDTO(entity);
    }

    private void copyDtoToEntity(FuncionarioDTO dto, Funcionario entity) {
        entity.setNome(dto.getNome());
        entity.setFotoUrl(dto.getFotoUrl());
        entity.setEmail(dto.getEmail());
        entity.setCpf(dto.getCpf());
        entity.setTelefone(dto.getTelefone());
        entity.setStatusFuncionario(dto.getStatusFuncionario());
        entity.setCargo(dto.getCargo());
        entity.setDescricao(dto.getDescricao());
    }
}
