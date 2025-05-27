package com.unigoais.intralist.repositories;

import com.unigoais.intralist.dto.MonthlyCompletionMetricDTO;
import com.unigoais.intralist.dto.MonthlyStatusMetricDTO;
import com.unigoais.intralist.dto.TaskStatusMetricDTO;
import com.unigoais.intralist.entities.StatusTarefa;
import com.unigoais.intralist.entities.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
    @Query("SELECT new com.unigoais.intralist.dto.TaskStatusMetricDTO(p.statusTarefa, COUNT(p)) FROM Tarefa p GROUP BY p.statusTarefa")
    List<TaskStatusMetricDTO> countTasksByStatus();

    @Query("SELECT new com.unigoais.intralist.dto.MonthlyCompletionMetricDTO(MONTH(t.fimReal), COUNT(t)) " +
            "FROM Tarefa t " +
            "WHERE t.statusTarefa = :statusConcluido " +
            "AND t.fimReal IS NOT NULL " +
            "AND YEAR(t.fimReal) = :year " +
            "GROUP BY MONTH(t.fimReal) " +
            "ORDER BY MONTH(t.fimReal)")
    List<MonthlyCompletionMetricDTO> countCompletedTasksByMonthAndYear(
            @Param("statusConcluido") StatusTarefa statusConcluido,
            @Param("year") int year);

    @Query("SELECT new com.unigoais.intralist.dto.MonthlyStatusMetricDTO(MONTH(t.dataCriacao), COUNT(t), CAST(t.statusTarefa AS string)) " +
            "FROM Tarefa t " +
            "WHERE YEAR(t.dataCriacao) = :year " +
            "GROUP BY MONTH(t.dataCriacao), t.statusTarefa " +
            "ORDER BY MONTH(t.dataCriacao), t.statusTarefa")
    List<MonthlyStatusMetricDTO> countTasksByStatusAndMonth(@Param("year") int year);
}
