import {useEffect} from "react";
import {api} from "../../services/api";
import {Container} from "./styles";

export function TransactionsTable() {
	useEffect(() => {
		api.get("transactions").then(response => console.log(response.data));
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
					<tr>
						<td>Desenvolvimento de website</td>
						<td className="deposit">R$12.000</td>
						<td>Desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
					<tr>
						<td>Hamburguer</td>
						<td className="withdraw">- R$ 70,00</td>
						<td>Casa</td>
						<td>17/02/2021</td>
					</tr>
					<tr>
						<td>Aluguel da Casa</td>
						<td className="withdraw">- R$1.000</td>
						<td>Desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
