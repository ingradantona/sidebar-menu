import { motion } from "framer-motion";
import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

interface IPageProps {
  isOpen?: boolean;
}

export const Menu = styled(motion.div).attrs<IPageProps>(({ isOpen }) => ({
  variants: {
    open: {
      width: "25vw",
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
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 0 15px 15px 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const LogoButton = styled.button`
  width: 100%;
  height: 5vh;
  position: relative;

  & img {
    position: absolute;
    width: 3vw;
    top: 0;
    left: calc(5vw - 3vw);
  }
`;

const hiddenVariants = {
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
};

export const LogoTitle = styled(motion.h3).attrs(() => ({
  variants: hiddenVariants,
  initial: "hidden",
  animate: "visible",
}))`
  font-size: clamp(0.1rem, 1rem + 0.6vh, 1.2rem);
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.colors.typography.basic};
  margin-left: 5vw;
`;

export const Content = styled(motion.main).attrs(() => ({
  variants: hiddenVariants,
  initial: "hidden",
  animate: "visible",
}))`
  width: 100%;
`;
