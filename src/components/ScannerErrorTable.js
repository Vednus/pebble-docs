import React from "react"


const ScannerErrorTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{textAlign: "left", textTransform: "uppercase"}}>Error Code</th>
            <th style={{textAlign: "left", textTransform: "uppercase"}}>Description</th>
            <th style={{textAlign: "left", textTransform: "uppercase"}}>Fix</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{verticalAlign: "top", borderBottom: "1px solid #ccc"}}>
            <td><strong>Low Battery</strong></td>
            <td>The scanner has a low battery.</td>
            <td>Charge the scanner.</td>
          </tr>
          <tr style={{verticalAlign: "top"}}>
            <td><strong>Constantly tripping</strong></td>
            <td>The motion sensor on the scanner is constantly tripping.</td>
            <td>Blow on the center hole of the scanner with compressed air and press the reset button on the scanner.</td>
          </tr>
          <tr style={{verticalAlign: "top"}}>
            <td><strong>Weak Signal</strong></td>
            <td>The scanner is too far away from a gateway.</td>
            <td>Move the scanner closer to a gateway, move the closest gateway to a location closer to this scanner, or add another gateway to the gym.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ScannerErrorTable

