import { motion } from "framer-motion";
import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  display: flex;
`;

interface IPageProps {
  isOpen?: boolean;
}

export const Menu = styled(motion.div).attrs<IPageProps>(({ isOpen }) => ({
  variants: {
    open: {
      width: "22vw",
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 13,
      },
    },
    close: {
      width: "10vw",
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 13,
      },
    },
  },
  initial: "close",
  animate: isOpen ? "open" : "close",
}))`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.darkGray};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow-y: auto;
`;

export const Content = styled(motion.main).attrs(() => ({
  variants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "ease",
      },
    },
  },
  initial: "hidden",
  animate: "visible",
}))``;
