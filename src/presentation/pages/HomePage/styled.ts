import styled from "@emotion/styled";

// Feel free to change / add / remove components however you wish

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 200px;
    justify-content: center;
    align-items: center;
    width: 1200px;
    background: #f8f8f8;
    margin: 0 auto;
    
`;

export const ProfileContainer = styled.div`
    width: 1152px;
    height: 144px;
    padding: 40px;
    border-radius: 4px;
    background: white;
    position: absolute;
    top: 112px;
    display: flex;
`
export const ProfileDescription = styled.div`
    width: 704px;
    height: 64px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ProgressItem = styled.div`
    width: 244px;
    height: 140px;
    border-radius: 4px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid #F0F0F0;
    background: white;
    box-shadow: -1px 3px 16px 0 #959DA530;
`;
export const ProgressItemDescription = styled.div`
    width: 196px;
    height: 52px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const ProgressItemDescriptionTitle = styled.div`
    color: #33384F;
    font-family: 'Open Sans', 'Helvetica', sans-serif;
    font-size: 14px;
    font-weight: bold
`

export const HeaderContainer = styled.div`
    height: 72px;
    padding: 12px 24px 12px 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    background: white;
`;

export const GlobalProgress = styled.div``;

export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 1152px;
    height: 220px;
    padding: 40px;
    gap: 32px;
    background: white;
    position: absolute;
    top: 258px;
`;


export const AnnouncementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1152px;
    height: 368px;

    padding: 40px;
    gap: 32px;
    border-radius: 4px;
    background: white;
    margin-top: 250px;





`;

export const AnnouncementsTitle = styled.div`
    display: flex;
    align-items: center;
    width: 1072px;
    height: 24px;
    color: #5ACEE8;
    gap: 16px;
    font-size: 18px;
    font-family: 'Open Sans', 'Helvetica', sans-serif;



`;
export const AnnouncementContainerDescription = styled.div<{ isOpen: boolean }>`
    border: ${({ isOpen }) => (isOpen ? `1px solid #5ACEE8` : 'none')};
    display: flex;
    flex-direction: column;
    width: 1072px;
    height: 232px;
    //gap: 24px;
    //border: 1px solid #5ACEE8;
    border-radius: 8px;
`;
