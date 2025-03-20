package com.unigoais.intralist.services;

import com.unigoais.intralist.dto.TarefaDTO;
import com.unigoais.intralist.entities.Tarefa;
import com.unigoais.intralist.repositories.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TarefaService {

    @Autowired
    private TarefaRepository repository;

    public TarefaDTO findById(Long id) {
        Optional<Tarefa> result = repository.findById(id);
        Tarefa tarefa = result.get();
        TarefaDTO dto = new TarefaDTO(tarefa);
        return dto;
    }
}
