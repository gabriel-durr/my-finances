import {useTransactions} from "../../hooks/useTransactions";

import {Container} from "./styles";

export function TransactionsTable() {
	const {transactions} = useTransactions();

	return (
		// Tabela que contem as informações das transações, consumidas pela API Mock (api fake)
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					{transactions.map(transaction => (
						// Map para percorrer  estado, que irá contem a lista de objetos, com as proprieades e valores da API
						<tr key={transaction.id}>
							<td>{transaction.title}</td>
							<td className={transaction.type}>
								{
									new Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(transaction.amount)
									// API nativa do browser para formatar o valor da entrada e saída que vem da nossa API em real Brasileiro
								}
							</td>
							<td>{transaction.category}</td>
							<td>
								{
									new Intl.DateTimeFormat("pt-BR").format(
										new Date(transaction.createdAt)
									)
									// API nativa do browser para formatar o a data que vem da nossa API, e convertemos a string para o formato data
								}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
}
