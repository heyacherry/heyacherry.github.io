import React from 'react';
import { ITextNotation, TextNotation } from './TextNotation';

interface INotationButton {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  notationProps?: ITextNotation;
  buttonStyles?: string;
}

export const NotationButton: React.FC<INotationButton> = ({
  children,
  active,
  onClick,
  notationProps,
  buttonStyles,
}) => {
  return (
    <div
      className={`p-2 cursor-pointer hover:text-warning text-base-200 ${buttonStyles}`}
      onClick={onClick}
    >
      <TextNotation show={active} animationDelay={0} {...notationProps}>
        {children}
      </TextNotation>
    </div>
  );
};
