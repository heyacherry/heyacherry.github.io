import React from 'react';
import { types } from 'react-rough-notation';
import { TextNotation } from './TextNotation';

interface IStringWithLink {
  startString: string;
  start?: React.ReactNode;
  endString?: string;
  link: { label: string; link: string };
  highlightColor?: string;
  highlightType?: types;
}

// TODO: Requirements, more than two links in a string
export const StringWithLink: React.FC<IStringWithLink> = ({
  startString,
  endString,
  link,
  highlightColor,
  highlightType,
  start,
}) => {
  return (
    <div className="leading-relaxed">
      <span>{start ?? startString}</span>
      <TextNotation
        notionType={highlightType ?? 'underline'}
        color={highlightColor}
      >
        <a
          href={link.link}
          target={'_blank'}
          rel="noreferrer"
          className="text-primary hover:text-warning"
        >
          {link.label}
        </a>
      </TextNotation>
      {endString && <span className="ml-2">{endString}</span>}
    </div>
  );
};
