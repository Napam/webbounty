import { Accordion, AccordionTab } from 'primereact/accordion';
import styled from 'styled-components/macro'

export default function References() {
  let options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const header = () => (
    <HeaderContainer>
      <span className="reference-date">
        <i className="pi pi-calendar"></i>
        <span>
          {Intl.DateTimeFormat('en', options).format(new Date(Date.UTC(Math.round(Math.random() * 25) + 2000, Math.round(Math.random() * 11), 10)))}
        </span>
      </span>

      <span>
        <i className="pi pi-wallet"></i>
        <span className="reference-balance">
          {new Intl.NumberFormat('en', {maximumFractionDigits: 2, style: "decimal", notation: "standard"}).format((Math.random() * 35))}
        </span>
      </span>
    </HeaderContainer>
  )

  const Content = () => (
    <>
      Test
    </>
  )

  return (
    <>
      <ReferencesAccordion multiple activeIndex={[0]}>
        <AccordionTab header={header()}>
          <Content/>
        </AccordionTab>
        <AccordionTab header={header()}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
          sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Consectetur, adipisci velit, sed quia non numquam eius modi.
        </AccordionTab>
        <AccordionTab header={header()}>
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

  .p-accordion-header-text {
    width: 100%;
  }
`

const HeaderContainer = styled.span`
  display: flex;
  width: 100%;
  max-width: 22em;
  & > span > i {
    margin-right: 8px;
  }

  & > .reference-date {
    flex-grow: 1;
  }

  & > span > .reference-balance {
    display: inline-block;
    width: 3em;
  }
`
