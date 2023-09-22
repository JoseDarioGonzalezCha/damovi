import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
        padding: 0;
        box-sizing: border-box;
	}

	body{
        font-family:'Inter', sans-serif;;
        overflow-x:hidden ;
        scroll-behavior: smooth;
        background-color: #ffffff;
        
    }

	button{
        cursor: pointer;
    }

	img{
        max-width: 100%;
    }

	h1, h2, h3 {
        font-weight: 400;
		font-family: 'Times New Roman', Times, serif;
    }

	p {
        font-weight: 300;
    }
`;
