import { useState } from 'react'

const Login = ({ onLogin }: { onLogin: (isAdmin: boolean) => void }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (username === 'Admin' && password === 'Portal') {
      localStorage.setItem('isAuthenticated', 'true')
      onLogin(true)
    } else {
      setError('Неверный логин или пароль')
      setTimeout(() => {
        window.location.reload() // Перезагрузка при ошибке
      }, 1000)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        width: '400px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#8B0000', marginBottom: '30px' }}>
          Вход в панель управления
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Логин:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px'
              }}
              required
            />
          </div>
          
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Пароль:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px'
              }}
              required
            />
          </div>
          
          {error && (
            <div style={{
              color: 'red',
              marginBottom: '15px',
              fontWeight: 'bold'
            }}>
              {error}
            </div>
          )}
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: '#8B0000',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login