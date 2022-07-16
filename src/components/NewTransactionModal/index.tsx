import Modal from "react-modal";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import {Container, TransactionTypeContainer, RadioBox} from "./styles";
import {FormEvent, useState} from "react";
import {api} from "../../services/api";
//tipagem que vem do react, que mostra todos os dados que tem dentro do evento form

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) {
	const [title, setTitle] = useState("");
	// Estado responsável pelo title do input do modal
	const [value, setValue] = useState(0);
	// Estado responsável pelo valor do input do modal
	const [category, setCategory] = useState("");
	// Estado responsável pela categoria do modal do input do modal
	const [type, setType] = useState("deposit");
	// Estado responsável pela type "entrada" ou "saída"  do input do modal

	function handleCreateNewTransaction(event: FormEvent) {
		/* função que sera executada através do event de submit ou
		enter no form */

		event.preventDefault();
		/* pega o evento do submit e previne o funcionamento padrão que é
		faz reload na página ao dar submit */

		const data = {
			// Criamos variável que Pega o valor de todos estados que foram digitados no input  e cria um objeto.
			title,
			value,
			category,
			type,
		};

		api.post("/transactions", data);
		// Enviamos pelo método post, o objeto para rota da api
	}

	return (
		<Modal
			// Modal da aplicação
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content">
			<button
				//Button personalizado, que fecha o modal
				type="button"
				onClick={onRequestClose}
				className="react-modal-close">
				<img src={closeImg} alt="Fechar Modal" />
			</button>

			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar informação </h2>

				<input
					placeholder="Título"
					value={title}
					// Value com o valor de texto estado, pra sempre que for alterado ser passado para o input
					onChange={event => setTitle(event.target.value)}
					//Evento que pega o texto digitado no input e passa pro estate
				/>

				<input
					type="number"
					placeholder="Valor"
					value={value}
					// Value com o valor númerico do estado, pra sempre que for alterado ser passado para o input
					onChange={event => setValue(Number(event.target.value))}
					//Evento que pega o valor númerico digitado no input, converte para number, pois ele retorna um text e passa para função do estado
				/>

				<TransactionTypeContainer>
					<RadioBox
						type="button"
						onClick={() => {
							setType("deposit");
						}}
						isActive={type === "deposit"}
						activeColor="green">
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>
					<RadioBox
						type="button"
						onClick={() => {
							setType("withdraw");
						}}
						isActive={type === "withdraw"}
						activeColor="red">
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input
					placeholder="Categoria"
					value={category}
					// Value recebe o texto do estado responsável pela categoria, pra sempre que for alterado ser passado para o input
					onChange={event => setCategory(event.target.value)}
					//Evento que pega a categoria digitada no input e envia para função do estado
				/>

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
