package com.unigoais.intralist.controllers;

import com.unigoais.intralist.dto.MonthlyCompletionMetricDTO;
import com.unigoais.intralist.dto.ProjectStatusMetricDTO;
import com.unigoais.intralist.dto.TaskStatusMetricDTO;
import com.unigoais.intralist.entities.StatusTarefa;
import com.unigoais.intralist.repositories.ProjetoRepository;
import com.unigoais.intralist.repositories.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/dashboard")
@CrossOrigin(origins = "http://localhost:63342")
public class DashboardController {

    @Autowired
    private ProjetoRepository projetoRepository;

    @Autowired
    private TarefaRepository tarefaRepository;

    @GetMapping("/projects-by-status")
    public List<ProjectStatusMetricDTO> getProjectByStatus(){
        return  projetoRepository.countProjectsByStatus();
    }

    @GetMapping("/tasks-by-status")
    public List<TaskStatusMetricDTO> getTaskByStatus(){
        return  tarefaRepository.countTasksByStatus();
    }

    @GetMapping("/completed-tasks-by-month")
    public List<MonthlyCompletionMetricDTO> getCompletedTasksByMonth(
            @RequestParam(name = "year", defaultValue = "2024") int year) {
        return tarefaRepository.countCompletedTasksByMonthAndYear(StatusTarefa.CONCLUIDO, year);
    }

}
