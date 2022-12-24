import React from "react";
import styles from "detail.module.css"
import { useParams } from "react-router-dom";


export const DetailPage: React.FC = () => {
    var params = useParams<"touristRouteId">();
    return(
        <h1>page detail, information id: {params.touristRouteId}</h1>
    )
}