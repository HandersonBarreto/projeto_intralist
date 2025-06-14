package com.unigoais.intralist.services;

import com.unigoais.intralist.dto.EquipeDTO;
import com.unigoais.intralist.dto.FuncionarioDTO;
import com.unigoais.intralist.dto.ProjetoDTO;
import com.unigoais.intralist.entities.Equipe;
import com.unigoais.intralist.entities.Funcionario;
import com.unigoais.intralist.entities.Projeto;
import com.unigoais.intralist.repositories.EquipeRepository;
import com.unigoais.intralist.repositories.FuncionarioRepository;
import com.unigoais.intralist.repositories.ProjetoRepository;
import com.unigoais.intralist.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class EquipeService {

    @Autowired
    private EquipeRepository equipeRepository;

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @Autowired
    private ProjetoRepository projetoRepository;

    @Transactional(readOnly = true)
    public EquipeDTO findById(Long id){
        Optional<Equipe> result = equipeRepository.findById(id);
        Equipe Equipe = result.orElseThrow(
                () -> new ResourceNotFoundException("Recurso não encontrado"));
        EquipeDTO dto = new EquipeDTO(Equipe);
        return dto;
    }

    @Transactional(readOnly = true)
    public Page<EquipeDTO> findAll(Pageable pageable){
        Page<Equipe> result = equipeRepository.findAll(pageable);
        return result.map(x -> new EquipeDTO(x));
    }

    @Transactional
    public EquipeDTO insert(EquipeDTO dto){
        Equipe entity = new Equipe();

        entity.setNome(dto.getNome());
        entity.setDescricao(dto.getDescricao());
        entity.setDataCriacao(dto.getDataCriacao());

        for (FuncionarioDTO funcionarioDTO : dto.getFuncionarios()) {
            Funcionario funcionario = funcionarioRepository.getReferenceById(funcionarioDTO.getId());
            entity.getFuncionarios().add(funcionario);
        }

        entity = equipeRepository.save(entity);
        return new EquipeDTO(entity);
    }
}

