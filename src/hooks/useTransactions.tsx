import {createContext, useEffect, useState, ReactNode, useContext} from "react";
import {api} from "../services/api";
// Context que compartilha os gerenciamento das transações entre os components

type Transaction = {
	// Tipagem para o estado, que contém um array de transações (lista de objetos da API)
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createdAt: string;
};

type TransactionInput = Omit<Transaction, "id" | "createdAt">;
//tipagem para a função que cria uma nova tipagem

type TransactionsContextData = {
	// Tipagem para ser usado no context,
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
	// tipagem do contex, que retorna uma Promise (async function)
};

type TrasactionsProviderProps = {
	children: ReactNode;
};
//Tipagem para o component do context, que irá ficar por volta dos components filhos que queremos compartilhar os dados, e recebe como parâmetro esses filhos, e para tipar esse tipo de dado utilizamos como valor o ReactNode que importamos do react, que serve para dizer que a tipagem recebe tudo que é permitido no JSX do react.

const TransactionsContext = createContext<TransactionsContextData>(
	{} as TransactionsContextData
	// para o valor inicial do context  que é um objeto que irá conter, os mesmos tipos (Devemos forçar com "as" a tipagem do)
);
// Const exportada responsável por criar o contexto

export function TransactionsProvider({children}: TrasactionsProviderProps) {
	/* Função que sera o component (Provider) que iremos usar no component pai para compartilhar os dados do contexto, 
    que recebe como parâmetro os children que são todos os components que ele irá ficar por volta para compartilhar os dados do contexto */
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	// Estado que contém os transactions retornados da API e tipagem com base nos dados que iremos receber

	useEffect(() => {
		// Pega dados da API "mock", para serem exibidos
		api.get("transactions").then(response =>
			setTransactions(response.data.transactions)
		);
	}, []);

	async function createTransaction(transactionInput: TransactionInput) {
		const response = await api.post("/transactions", {
			...transactionInput,
			createdAt: new Date(),
		});
		const {transaction} = response.data;
		// Enviamos pelo método post, o objeto para rota da api

		setTransactions([...transactions, transaction]);
	}

	return (
		/* No retorno da do component, renderizamos a const que cria o context e acessamos a propriedade provider, 
        e passamos o value contendo todos valores que queremos compartilhar entre os components */
		<TransactionsContext.Provider value={{transactions, createTransaction}}>
			{children}
		</TransactionsContext.Provider>
	);
}

export function useTransactions() {
	// Hook para o nosso context, permitindo utilizar o context apenas importando o hook nos components
	const context = useContext(TransactionsContext);

	return context;
}
