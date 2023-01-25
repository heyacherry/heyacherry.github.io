import React from 'react';

interface ISectionTitle {
  prefix?: string | React.ReactNode;
  title: string;
  styles?: string;
}

export const SectionTitle: React.FC<ISectionTitle> = ({
  prefix = '///',
  title,
  styles,
}) => (
  <div className={`flex gap-2 text-2xl font-heading ${styles}`}>
    {prefix && <span className="text-primary">{prefix}</span>}
    <span className="font-bold">{title}</span>
  </div>
);
