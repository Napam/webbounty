import { Accordion, AccordionTab } from 'primereact/accordion';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import styled from 'styled-components/macro'
import React, { useState } from 'react'

export default function References() {
  let options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const getDate = () => Intl.DateTimeFormat('en', options).format(new Date(Date.UTC(Math.round(Math.random() * 25) + 2000, Math.round(Math.random() * 11), 10)))
  const getBalance = () => new Intl.NumberFormat('en', { maximumFractionDigits: 2, style: "decimal", notation: "standard" }).format((Math.random() * 35))

  const createHeader = (date: string, balance: string) => (
    <HeaderContainer>
      <span className="reference-date">
        <i className="pi pi-calendar"></i>
        <span>
          {date}
        </span>
      </span>
      <span>
        <i className="pi pi-wallet"></i>
        <span className="reference-balance">
          {balance}
        </span>
      </span>
    </HeaderContainer>
  )

  const [accordionsData, setAccordions] = useState([...Array(4).keys()].map(() => ({ date: getDate(), balance: getBalance() })))

  const accordions = () => {
    return accordionsData.map((data, i) =>
      <AccordionTab key={i} header={createHeader(data.date, data.balance)}>
        <ReferenceFormContainer>
          <label>Reference date</label>
          <div className="p-inputgroup">
            <Calendar />
            <span className="p-inputgroup-addon">
              <i className="pi pi-calendar"></i>
            </span>
          </div>
          <label>Reference balance</label>
          <div className="p-inputgroup">
            <InputNumber />
            <span className="p-inputgroup-addon">
              <i className="pi pi-wallet"></i>
            </span>
          </div>
          <label>Notes</label>
          <div className="p-inputgroup">
            <InputTextarea />
            <span className="p-inputgroup-addon">
              <i className="pi pi-info-circle"></i>
            </span>
          </div>
          <Button
            outlined
            label="Delete"
            severity="danger"
            size="small"
            onClick={() => { setAccordions(accordionsData.filter((_, x) => x !== i)) }}
          />
        </ReferenceFormContainer>
      </AccordionTab>)
  }

  return (
    <>
      <TopButtonContainer>
        <Button label="Add new reference" size="small" />
      </TopButtonContainer>
      <ReferencesAccordion multiple >
        {accordions()}
      </ReferencesAccordion>
    </>
  )
}

const TopButtonContainer = styled.div`
  margin-bottom: 20px;
`

const ReferencesAccordion = styled(Accordion)`
  .p-accordion-tab {
    margin-bottom: 14px;
  }

  .p-accordion-header-text {
    width: 100%;
  }
`

const ReferenceFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20em;
  label {
    display: block;
    font-size: 0.90em;
    margin-bottom: 4px;
  }

  input, textarea {
    padding: 6px 6px;
    font-size: 0.90em;
  }

  textarea {
    height: 6em;
  }

  & > div {
    margin-bottom: 24px;
  }

  .p-inputgroup-addon {
    padding: 0;
  }

  > button {
    width: fit-content;
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
