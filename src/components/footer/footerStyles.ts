import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: black;
  height: 20rem;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15rem;

  @media screen and (max-width: 1024px) {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
    text-align: center;
    justify-content: center;
    padding: 0 2.5rem 1rem;
  }
`;

export const SocialMediaLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-evenly;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    grid-row: span 2;
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialMediaLinks = styled.img`
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
  @media screen and (max-width: 1024px) {
    height: 2rem;
    width: 2rem;
    margin: 1rem;
  }
`;

export const SocialMediaSection = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FoodCertificateImg = styled.img<{ $ismobile: boolean }>`
  width: ${({ $ismobile }) => ($ismobile ? "8rem" : "17rem")};
  border-radius: 15px;
`;
