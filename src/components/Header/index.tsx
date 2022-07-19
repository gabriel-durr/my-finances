import LogoImg from "../../assets/logo.svg";
import {Container, Content} from "./styles";

type headerProps = {
	onOpenNewTransactionModal: () => void;
};

export function Header({onOpenNewTransactionModal}: headerProps) {
	return (
		// Header, com button que recebe a função que abre o modal via props
		<Container>
			<Content>
				<img src={LogoImg} alt="logo my finances" />
				<button type="button" onClick={onOpenNewTransactionModal}>
					Nova transação
				</button>
			</Content>
		</Container>
	);
}
