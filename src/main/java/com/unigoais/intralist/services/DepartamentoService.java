package com.unigoais.intralist.services;

import com.unigoais.intralist.dto.DepartamentoDTO;
import com.unigoais.intralist.dto.EquipeDTO;
import com.unigoais.intralist.entities.Departamento;
import com.unigoais.intralist.entities.Equipe;
import com.unigoais.intralist.repositories.DepartamentoRepository;
import com.unigoais.intralist.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class DepartamentoService {

    @Autowired
    private DepartamentoRepository departamentoRepository;

    @Transactional(readOnly = true)
    public DepartamentoDTO findById(Long id){
        Optional<Departamento> result = departamentoRepository.findById(id);
        Departamento departamento = result.orElseThrow(
                () -> new ResourceNotFoundException("Recurso não encontrado"));
        DepartamentoDTO dto = new DepartamentoDTO(departamento);
        return dto;
    }

    @Transactional(readOnly = true)
    public Page<DepartamentoDTO> findAll(Pageable pageable){
        Page<Departamento> result = departamentoRepository.findAll(pageable);
        return result.map(x -> new DepartamentoDTO(x));
    }


}