import React from 'react';

interface Page2Props {
  message: string;
}

export const Page2: React.FC<Page2Props> = (props: Page2Props) => {
  return <div>{props.message}</div>;
};
