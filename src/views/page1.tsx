import React from 'react';

interface Page1Props {
  time: string;
}

export const Page1: React.FC<Page1Props> = (props: Page1Props) => {
  return <div>The time is {props.time} </div>;
};
