const GameOver = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-6xl text-red-800">GAME OVER!</h1>
      <h1 className="text-3xl text-red-800">Você perdeu seu personagem, crie outra conta!</h1>
    </div>
  )
}

export default GameOver