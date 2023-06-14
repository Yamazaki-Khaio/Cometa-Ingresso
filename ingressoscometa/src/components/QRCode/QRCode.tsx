import React, { useState } from "react" ; 
import { QRCodeCanvas } from "qrcode.react" ; 
const QrCode = () => {  
    const [url, setUrl] = useState( "" );    
    const qrCodeEncoder = ( e ) => {  setUrl(e.target.value); };  
    const qrcode = (    < QRCodeCanvas
    id = "qrCode"
    value = {url}
    size = {300}
    bgColor = { "#00ff00"}      level = { " H "}  />
);  return (    < div className = "qrcode__container" >
    < div > 
        {qrcode} 
    </ div >
    < div className = "input__group" >    
        < label > Enter URL </ label >
        < input
          type = "text"
          value = {url}
          onChange = {qrCodeEncoder}
          placeholder = "https://hackernoon.com"/>
    </ div >
  </ div >
); }; export default QrCode;