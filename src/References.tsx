import { Accordion, AccordionTab } from 'primereact/accordion';
import styled from 'styled-components/macro'

export default function References() {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <ReferencesAccordion multiple activeIndex={[0]}>
        <AccordionTab header={Intl.DateTimeFormat('en', options).format(new Date(Date.UTC(2020, 11, 10)))}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </AccordionTab>
        <AccordionTab header={Intl.DateTimeFormat('en', options).format(new Date(Date.UTC(2022, 2, 10)))}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
          sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Consectetur, adipisci velit, sed quia non numquam eius modi.
        </AccordionTab>
        <AccordionTab header={Intl.DateTimeFormat('en', options).format(new Date(Date.UTC(2023, 10, 10)))}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
          mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </AccordionTab>
      </ReferencesAccordion>
    </>
  )
}

const ReferencesAccordion = styled(Accordion)`
  .p-accordion-tab {
    margin-bottom: 14px;
  }
`
