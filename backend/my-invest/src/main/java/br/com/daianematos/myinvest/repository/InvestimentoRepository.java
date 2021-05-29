package br.com.daianematos.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.daianematos.myinvest.domain.Investimento;

public interface InvestimentoRepository extends JpaRepository<Investimento, Long> {

}
