import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css"

const Forecast = ({ data }) => {
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem>
                        <AccordionItemHeading></AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>   
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;