function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #8B0000 0%, #2F2F2F 50%, #000000 100%)'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#8B0000',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '4px solid #FFD700'
      }}>
        <h1 style={{ margin: 0, fontSize: '28px' }}>Великая Отечественная Война 1941-1945</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '18px' }}>Никто не забыт, ничто не забыто</p>
      </div>

      {/* Main Content - ЗАНИМАЕТ ВЕСЬ ЭКРАН */}
      <div style={{
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '50px',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%'
        }}>
          <h2 style={{ color: '#8B0000', fontSize: '32px', marginBottom: '10px' }}>
            Великая Отечественная Война
          </h2>
          
          <p style={{ fontSize: '24px', color: '#555', marginBottom: '20px' }}>
            1941-1945
          </p>
          
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', marginBottom: '40px' }}>
            Сайт находится в разработке<br />
            Скоро здесь появится интерактивный портал о подвиге советского народа
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            <div style={{ 
              padding: '25px', 
              backgroundColor: '#8B0000', 
              color: 'white',
              borderRadius: '10px',
              minWidth: '200px'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>🗓️ Хронология</h3>
              <p style={{ margin: 0 }}>События по годам</p>
            </div>
            
            <div style={{ 
              padding: '25px', 
              backgroundColor: '#2F2F2F', 
              color: 'white',
              borderRadius: '10px',
              minWidth: '200px'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>🗺️ Сражения</h3>
              <p style={{ margin: 0 }}>Ключевые битвы</p>
            </div>
            
            <div style={{ 
              padding: '25px', 
              backgroundColor: '#FFD700', 
              color: '#333',
              borderRadius: '10px',
              minWidth: '200px'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>🎖️ Герои</h3>
              <p style={{ margin: 0 }}>Подвиги солдат</p>
            </div>
          </div>

          <div style={{
            padding: '20px',
            backgroundColor: '#FFF0F0',
            borderRadius: '10px',
            border: '2px solid #8B0000'
          }}>
            <p style={{ 
              color: '#8B0000',
              fontSize: '18px',
              fontWeight: 'bold',
              margin: 0
            }}>
              🕯️ Никто не забыт, ничто не забыто
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App