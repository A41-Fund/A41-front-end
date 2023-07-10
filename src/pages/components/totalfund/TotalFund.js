import React from "react";
import "./TotalFund.css";

const TotalFund = ({total}) => {
    return(
        <div className="funddisplay">
        <div className="total-container">
            <img src="https://static.vecteezy.com/system/resources/previews/012/598/212/original/currency-coin-cartoon-png.png" />
            <h1>{total} VND</h1>
        </div>
        </div>
    );
};

export default TotalFund;