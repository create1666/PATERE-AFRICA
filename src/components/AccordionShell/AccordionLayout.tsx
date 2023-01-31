import { Accordion } from '@mantine/core';
import React from 'react';

export interface AccordionMock {
  arrData: [
    {
      label: string;
      value: string;
      description: string;
    }
  ];
}

const accordionData = (items: any) => items;

export const AccordionLayout = (
  arrData: AccordionMock[],
  props: any
): JSX.Element => {
  const filledArray = accordionData(arrData);
  return (
    <div>
      {filledArray.arrData.map(
        (item: {
          value: string;
          label:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          description:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
        }): JSX.Element => {
          return (
            <div key={item.value}>
              <Accordion {...props}>
                <Accordion.Item value={item.value}>
                  <Accordion.Control className="text-[#004E98]">
                    {item.label}
                  </Accordion.Control>
                  <Accordion.Panel>{item.description}</Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          );
        }
      )}
    </div>
  );
};
