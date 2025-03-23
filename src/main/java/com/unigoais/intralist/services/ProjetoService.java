package com.unigoais.intralist.services;

import com.unigoais.intralist.dto.ProjetoDTO;
import com.unigoais.intralist.entities.Projeto;
import com.unigoais.intralist.repositories.ProjetoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjetoService {


    @Autowired
    private ProjetoRepository repository;

    public ProjetoDTO findById(Long id) {
        Optional<Projeto> result = repository.findById(id);
        Projeto projeto = result.get();
        ProjetoDTO dto = new ProjetoDTO(projeto);
        return dto;
    }

    public Page<ProjetoDTO> findAll(Pageable pageable) {
        Page<Projeto> listProjeto = repository.findAll(pageable);
        return listProjeto.map(x -> new ProjetoDTO(x));
    }
}
