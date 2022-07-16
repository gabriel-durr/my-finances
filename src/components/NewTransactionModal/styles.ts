import styled from "styled-components";
import {darken, transparentize} from "polished";
// Polished, biblioteca de estilos específicos

export const Container = styled.form`
	//Style do container de dentro do modal
	h2 {
		color: var(--text-title);
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		border-radius: 0.25rem;

		border: 1px solid #d7d7d7;
		background: #e7e9ee;

		font-weight: 400;
		font-size: 1rem;

		&::placeholder {
			color: var(--text-body);
		}

		& + input {
			margin-top: 1rem;
		}
	}

	button[type="submit"] {
		width: 100%;
		padding: 1.2rem 1.5rem;
		background: var(--green);
		color: #fff;
		border-radius: 0.25rem;
		border: 0;
		font-size: 1rem;
		margin-top: 1.5rem;
		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;

export const TransactionTypeContainer = styled.div`
	//Estyles dos buttons de entrada e saída do modal
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
`;

type RadioBoxProps = {
	/* Tipagem responsável pelas estilização específicas 
	do button, através de props no componet do styled */
	isActive: boolean;
	activeColor: "green" | "red";
};

const colors = {
	/* Duas opões que cores que a propriedade, do component   
		do Styled pode receber 
	*/
	green: "#33CC95",
	red: "#E52E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
	height: 4rem;
	border: 1px solid #d7d7d7;
	border-radius: 0.25rem;

	background: ${props =>
		props.isActive
			? transparentize(0.8, colors[props.activeColor])
			: "transparent"};
	/* recebemos as props criadas no component do styled, e criada uma condição: se a props estiver ativa, irá aplicar 
	color green ou red com transparentize da lib polished, e lá será aplicado apenas para um dos buttons cada style */

	display: flex;
	align-items: center;
	justify-content: center;

	transition: border-color 0.2s;

	&:hover {
		border-color: ${darken(0.1, "#d7d7d7")};
	}

	img {
		width: 20px;
		height: 20px;
	}

	span {
		display: inline-block;
		margin-left: 1rem;
		font-size: 1rem;
		color: var(--text-title);
	}
`;
