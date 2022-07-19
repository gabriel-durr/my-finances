import styled from "styled-components";

export const Container = styled.header`
	background: var(--golden-light);
`;

export const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto;

	padding: 0 1rem 15rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	& {
		@media (max-width: 790px) {
			display: flex;
			flex-direction: column;
		}
	}

	button {
		font-size: 1rem;
		color: #fff;
		background: var(--golden);
		border: 0;
		margin-top: 1rem;
		padding: 0 1rem;
		border-radius: 0.25rem;
		height: 3rem;

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;
