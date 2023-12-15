import React from "react"


const ScannerErrorTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{textAlign: "left", textTransform: "uppercase", paddingRight: 5, paddingBottom: 5}}>Error</th>
            <th style={{textAlign: "left", textTransform: "uppercase", paddingRight: 5, paddingBottom: 5}}>Description</th>
            <th style={{textAlign: "left", textTransform: "uppercase", paddingRight: 5, paddingBottom: 5}}>Fix</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{verticalAlign: "top", borderBottom: "1px solid #ccc"}}>
            <td style={{paddingRight: 5, paddingBottom: 5}}><strong>Low Battery</strong></td>
            <td style={{paddingRight: 5, paddingBottom: 5}}>The scanner has a low battery.</td>
            <td style={{paddingRight: 5, paddingBottom: 5}}>Charge the scanner and make sure the scanner has the latest firmware by charging the scanner close to a gateway.</td>
          </tr>
          <tr style={{verticalAlign: "top"}}>
            <td style={{paddingRight: 5, paddingBottom: 5}}><strong>Constantly tripping</strong></td>
            <td style={{paddingRight: 5, paddingBottom: 5}}>The motion sensor on the scanner is constantly tripping.</td>
            <td style={{paddingRight: 5, paddingBottom: 5}}>Blow on the center hole of the scanner with compressed air and press the reset button on the scanner.</td>
          </tr>
          <tr style={{verticalAlign: "top"}}>
            <td style={{paddingRight: 5, paddingBottom: 5}}><strong>Weak Signal</strong></td>
            <td style={{paddingRight: 5, paddingBottom: 5}}>The scanner is too far away from a gateway.</td>
            <td style={{paddingRight: 5, paddingBottom: 5}}>Make sure all the gateways are plugged in and online. A gateway is online if it has a blue and red led lit up. If there are only red leds lit up, unplug it and plug it back in. If all gateways are online, you may need to move a gateway closer to this scanner or add another gateway to the gym.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ScannerErrorTable

