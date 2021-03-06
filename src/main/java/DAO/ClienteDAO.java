package DAO;

import java.util.List;

import javax.persistence.TypedQuery;

import model.Cliente;
import utils.Estado;

public class ClienteDAO extends BaseDAO<Cliente> {

	public ClienteDAO() {
		this.entityClass = Cliente.class;
	}

	public List<Cliente> findByNome(String nome) {
		StringBuilder builder = new StringBuilder("FROM ");
		builder.append(Cliente.class.getSimpleName());
		builder.append(" c ");
		builder.append(" WHERE UPPER(c.nome) LIKE UPPER(:nome)");
		builder.append(" AND c.ativo = true");
		builder.append(" ORDER BY c.nome");

		TypedQuery<Cliente> query = getEm().createQuery(builder.toString(), Cliente.class);
		query.setParameter("nome", "%" + nome + "%");
		return query.getResultList();
	}
	
	public List<Cliente> findByEstado(Estado estado) {
		StringBuilder builder = new StringBuilder("Select c FROM ");
		builder.append(Cliente.class.getSimpleName());
		builder.append(" c ");
		builder.append(" WHERE c.endereco.estado = :estado");
		builder.append(" ORDER BY c.nome");

		TypedQuery<Cliente> query = getEm().createQuery(builder.toString(), Cliente.class);
		query.setParameter("estado", estado);
		return query.getResultList();
	}

}
