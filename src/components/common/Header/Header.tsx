export const Header = () => {
  return (
    <header style={{ 
      background: '#8B0000', 
      color: 'white', 
      padding: '1rem',
      textAlign: 'center',
      borderBottom: '4px solid #FFD700'
    }}>
      <h1 style={{ margin: 0, fontSize: '2rem' }}>
        Великая Отечественная Война 1941-1945
      </h1>
      <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
        Никто не забыт, ничто не забыто
      </p>
    </header>
  )
}