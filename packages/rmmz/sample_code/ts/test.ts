const interpreter = new Game_Interpreter()

const Game_Interpreter_command122 = Game_Interpreter.prototype.command122
Game_Interpreter.prototype.command122 = function (...args: Parameters<typeof Game_Interpreter_command122>) {
  const [params] = args
  switch (params[3]) {
    case 0:
    case 1:
      params[4]
      break
    case 3:
      switch (params[4]) {
        case 0:
        case 1:
        case 2:
          params[5]
          params[6]
          break
        case 3:
          params[5]
          params[6]
          break
        case 4:
          params[5]
          params[6]
          break
        case 5:
          params[5]
          params[6]
          break
        case 6:
          params[5]
          params[6]
          break
        case 7:
          params[5]
          params[6]
          break
        case 8:
          params[5]
          params[6]
          break
      }
      break
    case 4:
      params[4]
      break
  }
  return Game_Interpreter_command122.apply(this, args)
}
