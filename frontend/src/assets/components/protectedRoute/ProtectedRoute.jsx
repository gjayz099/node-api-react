import React, { Redirect, Route } from 'react'

export default function ProtectedRoute({ component: Component, userRoles, ...rest }) {
  return (
    <Route
        {...rest}
        render={(props) =>
        userRoles.includes('admin') ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login" />
        )
        }
    />
  )
}
