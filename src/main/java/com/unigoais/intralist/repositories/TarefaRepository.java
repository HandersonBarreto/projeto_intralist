package com.unigoais.intralist.repositories;

import com.unigoais.intralist.dto.TaskStatusMetricDTO;
import com.unigoais.intralist.entities.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
    @Query("SELECT new com.unigoais.intralist.dto.TaskStatusMetricDTO(p.statusTarefa, COUNT(p)) FROM Tarefa p GROUP BY p.statusTarefa")
    List<TaskStatusMetricDTO> countTasksByStatus();
}
