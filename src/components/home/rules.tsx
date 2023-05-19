export default function Rules(){
  return (
    <div className="w-full max-w-3xl mx-auto mt-5">
      <h1 className="font-bold">Reglas del juego.</h1>
      <p className="text-gray-500 mt-2">¡Bienvenidos al emocionante juego de Serpientes y Escaleras! Sube y baja mientras respondes preguntas matemáticas al azar. ¿Estás listo para el desafío numérico? ¡Comienza el juego ahora!</p>
      <div className="text-gray-500 mt-2 flex flex-col gap-4">
        <p>🪜 - El jugador comienza lanzando el dado para determinar cuántas casillas avanzará.</p>
        <p>🐍 - Antes de avanzar, se le presenta una pregunta matemática al azar. Si la resuelve correctamente, avanza a la casilla correspondiente. En caso contrario, permanece en su posición actual.</p>
        <p>🪜 - Si el jugador llega a una casilla con una estrella amarilla, no se le hará ninguna pregunta y avanzará automáticamente a esa posición si los puntos obtenidos en el dado son suficientes para llegar.</p>
        <p>🐍 - Se aplican las reglas tradicionales del juego de Serpientes y Escaleras para el resto del tablero. Las serpientes arrastrarán al jugador hacia abajo, mientras que las escaleras lo elevarán hacia posiciones superiores.</p>
        <p>🪜 - El objetivo del juego es llegar a la casilla final en la posición más alta del tablero. El jugador gana al alcanzar esta casilla.</p>
        <p>¡Demuestra tus habilidades matemáticas y diviértete jugando a Serpientes y Escaleras!</p>
      </div>
    </div>
  )
}