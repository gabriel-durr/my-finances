import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import {createServer, Model} from "miragejs";
createServer({
	models: {
		// Banco de dados do mirage, responsável
		transaction: Model,
	},

	seeds(server) {
		// Função para deixar dados pré cadastrados na API para o front consumir
		server.db.loadData({
			// nome é sempre o nome do model em plural
			transactions: [
				{
					id: 1,
					title: "Bico de motorista",
					type: "deposity",
					category: "Motorista",
					amount: 500,
					createdAt: new Date("2022-07-22 22:00:00"),
				},
				{
					id: 2,
					title: "Conta de Luz",
					type: "withdraw",
					category: "Casa",
					amount: 300,
					createdAt: new Date("2022-07-20 08:00:00"),
				},
			],
		});
	},

	routes() {
		this.namespace = "api";

		this.get("/transactions", () => {
			// Rota de listagem, que re retorna todas transações que temos no banco de dados
			return this.schema.all("transaction");
		});

		this.post("/transactions", (shema, request) => {
			// Rota para lidar com a criação de uma nova transação
			const data = JSON.parse(request.requestBody);
			//que  converte os dados recebidos para formato de JSON

			return this.schema.create("transaction", data);
			// E Retorna para o banco de dados  "schema, para o parâmetro do banco "transaction", os dados que estão vindo da requisição
		});
	},
});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
