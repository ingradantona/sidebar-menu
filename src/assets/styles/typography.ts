import styled, { css } from "styled-components";

interface ITypography {
  $fontColor?: string;
}

export const Header1 = styled.h1<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: clamp(0.1rem, 1.5rem + 0.6vh, 3rem);
    font-family: "Poppins", sans-serif;
    color: ${$fontColor ? $fontColor : theme.colors.typography.title};
  `}
`;

export const Header3 = styled.h3<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: clamp(0.1rem, 1rem + 0.6vh, 1.5rem);
    font-family: "Poppins", sans-serif;
    color: ${$fontColor ? $fontColor : theme.colors.typography.basic};
  `}
`;

export const Body1 = styled.p<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: clamp(0.1rem, 0.8rem + 0.6vh, 1rem);
    font-family: "Poppins", sans-serif;
    color: ${$fontColor ? $fontColor : theme.colors.typography.basic};
  `}
`;
