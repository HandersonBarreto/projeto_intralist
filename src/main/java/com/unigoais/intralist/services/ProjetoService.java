package com.unigoais.intralist.services;

import com.unigoais.intralist.dto.ProjetoDTO;
import com.unigoais.intralist.dto.TarefaDTO;
import com.unigoais.intralist.entities.Projeto;
import com.unigoais.intralist.entities.StatusProjeto;
import com.unigoais.intralist.entities.Tarefa;
import com.unigoais.intralist.repositories.ProjetoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ProjetoService {

    @Autowired
    private ProjetoRepository repository;

    @Transactional(readOnly = true)
    public ProjetoDTO findById(Long id) {
        Optional<Projeto> result = repository.findById(id);
        Projeto projeto = result.get();
        ProjetoDTO dto = new ProjetoDTO(projeto);
        return dto;
    }

    @Transactional(readOnly = true)
    public Page<ProjetoDTO> search(String nome, Pageable pageable) {
        Page<Projeto> result = repository.findByNomeContainingIgnoreCase(nome, pageable);
        return result.map(ProjetoDTO::new);
    }

    @Transactional(readOnly = true)
    public Page<ProjetoDTO> findAll(String nome, StatusProjeto statusProjeto, Pageable pageable) {
        Page<Projeto> result;

        if (nome != null && statusProjeto != null) {
            result = repository.findByNomeContainingIgnoreCaseAndStatusProjeto(nome, statusProjeto, pageable);
        } else if (nome != null) {
            result = repository.findByNomeContainingIgnoreCase(nome, pageable);
        } else if (statusProjeto != null) {
            result = repository.findByStatusProjeto(statusProjeto, pageable);
        } else {
            result = repository.findAll(pageable);
        }

        return result.map(ProjetoDTO::new);
    }


    @Transactional(readOnly = true)
    public Page<ProjetoDTO> findAll(Pageable pageable) {
        Page<Projeto> listProjeto = repository.findAll(pageable);
        return listProjeto.map(x -> new ProjetoDTO(x));
    }

    @Transactional
    public ProjetoDTO insert(ProjetoDTO dto) {
        Projeto entity = new Projeto();
        copyDtoForInsert(dto, entity);
        entity = repository.save(entity);
        return new ProjetoDTO(entity);
    }

    @Transactional
    public ProjetoDTO update(Long id, ProjetoDTO dto) {
        Projeto entity = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Projeto com ID " + id + " não encontrado para atualização."));

        copyDtoForUpdate(dto, entity);

        entity = repository.save(entity);
        return new ProjetoDTO(entity);
    }

    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }

    private void copyDtoForInsert(ProjetoDTO dto, Projeto entity) {
        entity.setNome(dto.getNome());
        entity.setDescricao(dto.getDescricao());
        entity.setDataCriacao(dto.getDataCriacao());
        entity.setDataInicio(dto.getDataInicio());
        entity.setDataFimPrevisto(dto.getDataFimPrevisto());
        entity.setMeta(dto.getMeta());
        entity.setRisco(dto.getRisco());
        entity.setStatusProjeto(dto.getStatusProjeto());
        entity.setDataFimReal(dto.getDataFimReal());

        entity.setTarefas(new ArrayList<>());
        if (dto.getTarefas() != null) {
            for (TarefaDTO tarefaDTO : dto.getTarefas()) {
                Tarefa tarefa = new Tarefa();
                tarefa.setNome(tarefaDTO.getNome());
                tarefa.setDescricao(tarefaDTO.getDescricao());
                tarefa.setDataCriacao(tarefaDTO.getDataCriacao());
                tarefa.setDataInicio(tarefaDTO.getDataInicio());
                tarefa.setFimPrevisto(tarefaDTO.getFimPrevisto());
                tarefa.setFimReal(tarefaDTO.getFimReal());
                tarefa.setDataAtualizacao(tarefaDTO.getDataAtualizacao());
                tarefa.setStatusTarefa(tarefaDTO.getStatusTarefa());
                tarefa.setProjeto(entity);
                entity.getTarefas().add(tarefa);
            }
        }
    }

    private void copyDtoForUpdate(ProjetoDTO dto, Projeto entity) {
        entity.setNome(dto.getNome());
        entity.setDescricao(dto.getDescricao());
        entity.setDataCriacao(dto.getDataCriacao());
        entity.setDataInicio(dto.getDataInicio());
        entity.setDataFimPrevisto(dto.getDataFimPrevisto());
        entity.setMeta(dto.getMeta());
        entity.setRisco(dto.getRisco());
        entity.setStatusProjeto(dto.getStatusProjeto());
        entity.setDataFimReal(dto.getDataFimReal());

    }
}

