interface Player {
  x: number;
  y: number;
}


export function verifyPosition(pyload: number, players: Player) {
  if (players.y === 1 || players.y === 3 || players.y === 5 || players.y === 7 || players.y === 9) {
    if ((players.x - pyload) < 1) {
      if (
        (players.y + 1 === 2 && pyload - (10 - ((10 - players.x) + 1)) === 4) ||
        (players.y + 1 === 4 && pyload - (10 - ((10 - players.x) + 1)) === 3) ||
        (players.y + 1 === 6 && pyload - (10 - ((10 - players.x) + 1)) === 2) ||
        (players.y + 1 === 8 && pyload - (10 - ((10 - players.x) + 1)) === 4) 
        ) {
        return true;
      }
    } else {
      if (players.x - pyload === 9 && players.y === 1 || players.x - pyload === 5 && players.y === 1) {
        return true;
      }

      if (players.x - pyload === 2 && players.y === 3 || players.x - pyload === 6 && players.y === 3) {
        return true;
      }

      if(players.x - pyload === 8 && players.y === 5 || players.x - pyload === 6 && players.y === 5 || players.x - pyload === 3 && players.y === 5){
        return true;
      }

      if(players.x - pyload === 9 && players.y === 7 || players.x - pyload === 3 && players.y === 7){
        return true;
      }
    }
  } else {
    if (players.y === 0 || players.y === 2 || players.y === 4 || players.y === 6 || players.y === 8) {
      if ((players.x + pyload) > 10) {
        if (
          (players.y + 1 === 1 && 10 - ((players.x + pyload) - 11) === 9) ||
          (players.y + 1 === 3 && 10 - ((players.x + pyload) - 11) === 6) ||
          (players.y + 1 === 5 && 10 - ((players.x + pyload) - 11) === 8) ||
          (players.y + 1 === 5 && 10 - ((players.x + pyload) - 11) === 6) ||
          (players.y + 1 === 7 && 10 - ((players.x + pyload) - 11) === 9) ||
          (players.y + 1 === 9 && 10 - ((players.x + pyload) - 11) === 5)
          ) {
          return true;
        }
      } else {
        if (players.x + pyload === 3 && players.y === 0 || players.x + pyload === 6 && players.y === 0) {
          return true;
        }
        if (players.x + pyload === 4 && players.y === 2 || players.x + pyload === 8 && players.y === 2) {
          return true;
        }

        if (players.x + pyload === 3 && players.y === 4 || players.x + pyload === 8 && players.y === 4) {
          return true;
        }

        if (players.x + pyload === 2 && players.y === 6 || players.x + pyload === 7 && players.y === 6) {
          return true;
        }

        if (players.x + pyload === 4 && players.y === 8 || players.x + pyload === 7 && players.y === 8) {
          return true;
        }
      }
    }
  }

}