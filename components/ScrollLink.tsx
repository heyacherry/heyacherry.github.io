import React from 'react';
import { Link } from 'react-scroll';

interface IScrollLink {
  children: React.ReactNode;
  to: string;
  activeClass?: string;
  className?: string;
}

export const ScrollLink: React.FC<IScrollLink> = ({
  children,
  to,
  ...props
}) => {
  return (
    <Link to={to} spy={true} smooth={true} duration={500} {...props}>
      {children}
    </Link>
  );
};
