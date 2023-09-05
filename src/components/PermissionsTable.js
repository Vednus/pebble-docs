import React from "react"
import permissionsJSON from "./permissionsDocumentation.json"

const PermissionsTable = () => {
  return (
    <div>
      {Object.keys(permissionsJSON).map(key => (
        <React.Fragment key={key}>
          <h4 style={{
            textTransform: "capitalize",
            marginTop: "3rem",
            marginBottom: ".5rem",
            fontFamily: "Manrope,sans-serif",
            fontWeight: 700,
            lineHeight: 1.25,
            color: "#003953",
            marginBottom: 0,
            fontSize: 20
          }}>{key} Permissions</h4>
          <table key={key}>
            <thead>
              <tr>
                <th width="40%"></th>
                {Object.keys(permissionsJSON[key][0].permissions).map(permission => {
                  return (
                    <th width={"15%"} key={permission}><h5>{permission.toUpperCase()}</h5></th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {permissionsJSON[key].map((item) => {
                return (
                  <tr key={item.title}>
                    <td style={{paddingTop: 10, paddingBottom: 10}}>{item.title}</td>
                    {Object.keys(item.permissions).map(permission => {
                      return (
                        <td style={{
                          margin: "auto",
                          textAlign: "center"
                        }} key={permission}>
                          {item.permissions[permission] ? "✅" : "❌"}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </React.Fragment>
      ))}
    </div>
  )
}

export default PermissionsTable

