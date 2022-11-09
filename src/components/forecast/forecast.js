import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDay()
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek))

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="desc">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_max)}°F / {Math.round(item.main.temp_min)}°F</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label className="dark">Humidity:</label>
                                    <label className="light">{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label >Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label className="dark">Wind Speed:</label>
                                    <label className="light">{item.wind.speed} mph</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea Level:</label>
                                    <label>{item.main.sea_level} ft</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label className="dark">Feels Like:</label>
                                    <label className="light">{Math.round(item.main.feels_like)} mph</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;