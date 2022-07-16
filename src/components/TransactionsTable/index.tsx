import {useEffect, useState} from "react";
import {api} from "../../services/api";
import {Container} from "./styles";

type Transaction = {
	// Tipagem para o estado, que contém um array de transações (lista de objetos da API)
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createdAt: string;
};

export function TransactionsTable() {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	// Estado que contém os transactions retoranos da API

	useEffect(() => {
		// Pega dados da API "mock", para serem exibidos
		api.get("transactions").then(response =>
			setTransactions(response.data.transactions)
		);
	}, []);

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
								{transaction.amount}
							</td>
							<td>{transaction.category}</td>
							<td>{transaction.createdAt}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
}
