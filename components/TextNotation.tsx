import React from 'react';
import { RoughNotation, types, RoughNotationProps } from 'react-rough-notation';

export interface ITextNotation extends Partial<RoughNotationProps> {
  notionType?: types;
}

export const TextNotation: React.FC<ITextNotation> = ({
  children,
  notionType = 'underline',
  ...roughNotationProps
}) => (
  <RoughNotation
    type={notionType}
    color={'#ff624b'}
    show={true}
    animate
    animationDelay={1200}
    animationDuration={1000}
    padding={5}
    strokeWidth={3}
    {...roughNotationProps}
  >
    {children}
  </RoughNotation>
);
