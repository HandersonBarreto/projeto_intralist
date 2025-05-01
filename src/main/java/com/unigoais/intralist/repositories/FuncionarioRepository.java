package com.unigoais.intralist.repositories;

import com.unigoais.intralist.entities.Funcionario;
import com.unigoais.intralist.projections.FuncionarioDetailsProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {

    Funcionario findByEmail(String email);

    @Query(nativeQuery = true, value = """
			SELECT tb_funcionario.email AS username, tb_funcionario.password, tb_role.id AS roleId, tb_role.authority
			FROM tb_funcionario
			INNER JOIN tb_user_role ON tb_funcionario.id = tb_user_role.user_id
			INNER JOIN tb_role ON tb_role.id = tb_user_role.role_id
			WHERE tb_funcionario.email = :email
		""")
    List<FuncionarioDetailsProjection> searchUserAndRolesByEmail(String email);


}
