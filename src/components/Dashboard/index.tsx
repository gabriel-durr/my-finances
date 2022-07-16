import {Summary} from "../Summary";
import {TransactionsTable} from "../TransactionsTable";
import {Container} from "./styles";

export function Dashboard() {
	// Dashboard (container) que contém, os cards de transações e a tabela com registros
	return (
		<Container>
			<Summary />
			<TransactionsTable />
		</Container>
	);
}
