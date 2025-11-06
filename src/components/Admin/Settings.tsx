const AdminSettings = () => {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    window.location.reload()
  }

  return (
    <div style={{
      background: 'rgba(255,255,255,0.95)',
      padding: '30px',
      borderRadius: '15px',
      margin: '20px auto',
      maxWidth: '800px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        borderBottom: '2px solid #8B0000',
        paddingBottom: '15px'
      }}>
        <h2 style={{ color: '#8B0000', margin: 0 }}>Панель администратора</h2>
        <button
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            background: '#8B0000',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Выйти
        </button>
      </div>

      <div style={{ display: 'grid', gap: '20px' }}>
        <div style={{
          padding: '20px',
          background: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}>
          <h3 style={{ color: '#8B0000' }}>Настройки сайта</h3>
          <p>Здесь могут быть настройки контента, пользователей и т.д.</p>
        </div>

        <div style={{
          padding: '20px',
          background: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}>
          <h3 style={{ color: '#8B0000' }}>Статистика</h3>
          <p>Просмотры: 1,234</p>
          <p>Пользователи: 567</p>
        </div>

        <div style={{
          padding: '20px',
          background: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}>
          <h3 style={{ color: '#8B0000' }}>Управление контентом</h3>
          <button style={{
            margin: '5px',
            padding: '8px 16px',
            background: '#8B0000',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Добавить статью
          </button>
          <button style={{
            margin: '5px',
            padding: '8px 16px',
            background: '#2F2F2F',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Редактировать разделы
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings