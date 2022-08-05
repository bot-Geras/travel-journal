import React from "react";

export default function Separate(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.imageUrl} className="card--img" />
            <div className="card--content">
                <div className="card--stats">
                    <img src="/pin.svg" className="card--star" />
                    <span className="bold stat--location">{props.location}</span>
                    <a href={props.googleMapsUrl} className="card--stat_link grey">View on Google Maps</a>
                </div>

                <div className="card--body">
                    <h1 className="card--body_destination">{props.title}</h1>
                    <p className="card--timeline"> {props.startDate}-{props.endDate} </p>
                    <p className="card--body_description">{props.description}</p>
                </div>

            </div>
            
        </div>

    )
}