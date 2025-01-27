import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { SelectType } from '../tableArea/index.types';

export const Wrapper = styled.div`
  width: 231px;

  border-radius: 5.5px;
  border: 1px solid ${theme.colors.addTableBorder};
  color: ${theme.colors.gray06};
  ${theme.typography.medium02};

  overflow: hidden;
`;

export const Top = styled.div`
  display: flex;
  width: 100%;
  height: 37px;
  border-bottom: 1px solid ${theme.colors.addTableBorder};
`;

export const Bottom = styled.div`
  display: flex;
  width: 100%;
`;

export const Blank = styled.div`
  width: 17px;
  height: 36px;

  border-right: 1px solid ${theme.colors.addTableBorder};
`;

export const DateWrapper = styled.div`
  display: flex;
`;

export const Date = styled.div<{ isValidDate: boolean }>`
  width: ${({ isValidDate }) => (isValidDate ? '70px' : '71px')};
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray06};
  ${theme.typography.medium04};

  background: ${({ isValidDate }) =>
    isValidDate ? theme.colors.gray01 : theme.colors.gray02};

  border-left: ${({ isValidDate }) =>
    !isValidDate && `1px solid ${theme.colors.addTableBorder}`};

  & + & {
    width: 71px;
    border-left: 1px solid ${theme.colors.addTableBorder};
  }
`;

export const TimeWrapper = styled.div`
  width: 17px;
  border-right: 1px solid ${theme.colors.addTableBorder};
`;

export const Time = styled.div`
  width: 16px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray04};
  ${theme.typography.regular03};

  & + & {
    height: 37px;
    border-top: 1px solid ${theme.colors.addTableBorder};
  }
`;

export const SelectWrapper = styled.div`
  width: 70px;

  & + & {
    width: 71px;
    border-left: 1px solid ${theme.colors.addTableBorder};
  }
`;

export const Select = styled.div<SelectType>`
  height: 17px;
  box-sizing: content-box;

  background-color: ${({ isValidDate }) =>
    isValidDate ? `${theme.colors.gray01}` : `${theme.colors.gray02}`};

  &.selected {
    background-color: ${({ selectedMethod }) =>
      selectedMethod === 'possible'
        ? `${theme.colors.purple06}`
        : `${theme.colors.orange02}`};
  }

  &:nth-of-type(even) {
    height: 18px;
    border-bottom: 1px dashed ${theme.colors.addTableBorder};
  }

  &:nth-of-type(odd) {
    border-bottom: 1px solid ${theme.colors.addTableBorder};
  }

  &:last-of-type {
    border-bottom: none;
  }
`;
