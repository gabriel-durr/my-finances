import {Dashboard} from "./components/Dashboard";
import {Header} from "./components/Header";
import {GlobalStyle} from "./styles/global";
import Modal from "react-modal";
import {useState} from "react";
import {NewTransactionModal} from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
		useState(false);
	// Estado responsável pelo modal (open ou fechado)

	function handleOpenNewTransactionModal() {
		// Função que abre o  modal setando estado para true através de um event
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		// Função que fecha o  modal setando estado para false através de um event
		setIsNewTransactionModalOpen(false);
	}

	return (
		/* Passamos via props para componet do modal que contém o event,
		 as funções e o estado para abrir e fechar o modal */
		<>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
			<Dashboard />
			<GlobalStyle />
		</>
	);
}
