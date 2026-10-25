import { useState } from 'react'

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          padding: '40px 30px',
          borderRadius: '24px',
          backgroundColor: '#ffffff',
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(79, 70, 229, 0.15)',
        }}
      >
        {isLoggedIn ? (
          <>
            <div
              style={{
                width: '70px',
                height: '70px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                backgroundColor: '#dcfce7',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 'bold',
              }}
            >
              ✓
            </div>

            <h1 style={{ fontSize: '30px', color: '#1e293b' }}>
              Welcome Back!
            </h1>

            <p style={{ marginTop: '14px', color: '#64748b' }}>
              You are successfully logged in.
            </p>

            <button
              onClick={handleLogout}
              style={{
                width: '100%',
                marginTop: '28px',
                padding: '14px',
                border: 'none',
                borderRadius: '12px',
                backgroundColor: '#ef4444',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div
              style={{
                width: '70px',
                height: '70px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                backgroundColor: '#dbeafe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '34px',
              }}
            >
              👋
            </div>

            <h1 style={{ fontSize: '30px', color: '#1e293b' }}>
              Welcome!
            </h1>

            <p style={{ marginTop: '14px', color: '#64748b' }}>
              Please log in to continue.
            </p>

            <button
              onClick={handleLogin}
              style={{
                width: '100%',
                marginTop: '28px',
                padding: '14px',
                border: 'none',
                borderRadius: '12px',
                backgroundColor: '#4f46e5',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginStatus