import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import {useTransactions} from "../../hooks/useTransactions";

import {Container} from "./styles";

export function Summary() {
	const {transactions} = useTransactions();

	const summary = transactions.reduce(
		// Reduce que começa com objeto vazio referente aos valores que iremos renderizar na tela, que irá percorrer por cada transaction somar e subtrair e retornar para const summary, para exibir nos cards o resultado de cada um dos valores das propriedades.
		(acc, transaction) => {
			if (transaction.type === "deposit") {
				acc.deposits += transaction.amount;
				acc.total += transaction.amount;
			} else {
				acc.withdraws += transaction.amount;
				acc.total -= transaction.amount;
			}

			return acc;
		},
		{
			deposits: 0,
			withdraws: 0,
			total: 0,
		}
	);

	// Cards que contém as entradas / saídas e o total..
	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(summary.deposits)}
				</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Entradas" />
				</header>
				<strong>
					-
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(summary.withdraws)}
				</strong>
			</div>
			<div className="highLight-background">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Entradas" />
				</header>
				<strong>
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(summary.total)}
				</strong>
			</div>
		</Container>
	);
}
