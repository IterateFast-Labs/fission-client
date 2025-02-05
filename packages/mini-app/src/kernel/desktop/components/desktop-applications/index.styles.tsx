import styled from 'styled-components';

export const StyledList = styled.div`
  padding: 1rem;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const StyledListItem = styled.button`
  position: relative;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
  cursor: pointer;
  width: fit-content;
  height: fit-content;

  &:disabled {
    cursor: not-allowed;
    filter: grayscale(1);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
  }

  .label {
    font-size: 1rem;
    color: white;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    z-index: 2;
    padding: 1px 4px;
    border: 2px dotted transparent;
    text-align: center;
  }

  &.clicked .label {
    color: yellow;
    background-color: ${({ theme }) => theme.hoverBackground};
    border: 2px dotted yellow;
  }
`;
