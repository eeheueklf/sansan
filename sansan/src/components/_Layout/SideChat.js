import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.jpg"

const SideChat = () => {
    const navigate = useNavigate();
    return (
        <SidebarContainer>
            <LogoContainer onClick={() => navigate("/")}>
                <LogoImage src={logo} alt="로고" />SANSANTRIP
            </LogoContainer>

        </SidebarContainer>
    );
};

const SidebarContainer = styled.aside`
    display: table-cell;
    width: 280px;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    top: 0;
    bottom: 0;
    z-index: 1;
    // padding-right: 20px;
    padding-top: 50px;
    background-color: white;

    @media screen and (max-width: 1360px) {
        display: none;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 40px;
    cursor: pointer;
    font-size: 1.1rem;
    color: #333;
    gap: 10px;
    font-family: 'SUIT', sans-serif;
`;

const LogoImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    object-fit: cover;
`;



export default SideChat;