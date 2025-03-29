package com.unigoais.intralist.services;

import com.unigoais.intralist.dto.TarefaDTO;
import com.unigoais.intralist.entities.Tarefa;
import com.unigoais.intralist.repositories.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TarefaService {

    @Autowired
    private TarefaRepository repository;

    @Transactional(readOnly = true)
    public TarefaDTO findById(Long id) {
        Optional<Tarefa> result = repository.findById(id);
        Tarefa tarefa = result.get();
        TarefaDTO dto = new TarefaDTO(tarefa);
        return dto;
    }

    @Transactional(readOnly = true)
    public Page<TarefaDTO> findAll(Pageable pageable) {
        Page<Tarefa> ListTarefa = repository.findAll(pageable);
        return ListTarefa.map(x -> new TarefaDTO(x));
    }
    @Transactional
    public TarefaDTO insert(TarefaDTO dto) {
        Tarefa entity = new Tarefa();
        copyDtoToEntity(dto, entity);
        entity = repository.save(entity);
        return new TarefaDTO(entity);
    }
    @Transactional
    public TarefaDTO update(Long id, TarefaDTO dto) {
        Tarefa entity = repository.getReferenceById(id);
        copyDtoToEntity(dto, entity);
        entity = repository.save(entity);
        return new TarefaDTO(entity);
    }

    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }

    private void copyDtoToEntity(TarefaDTO dto, Tarefa entity) {
        entity.setNome(dto.getNome());
        entity.setDescricao(dto.getDescricao());
        entity.setDataCriacao(dto.getDataAtualizacao());
        entity.setDataInicio(dto.getDataInicio());
        entity.setFimPrevisto(dto.getFimPrevisto());
        entity.setFimReal(dto.getFimReal());
        entity.setDataAtualizacao(dto.getDataAtualizacao());
        entity.setStatusTarefa(dto.getStatusTarefa());
    }
}
