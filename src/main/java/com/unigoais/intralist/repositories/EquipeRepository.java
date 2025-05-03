package com.unigoais.intralist.repositories;

import com.unigoais.intralist.entities.Equipe;
import com.unigoais.intralist.entities.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipeRepository extends JpaRepository<Equipe, Long> {
}
