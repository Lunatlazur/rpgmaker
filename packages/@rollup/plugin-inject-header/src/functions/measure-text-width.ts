import easta from 'easta'
import Graphemer from 'graphemer'

const splitter = new Graphemer()
export function measureTextWidth(text: string) {
  return splitter.splitGraphemes(text).reduce((length, char) => {
    const eaw = easta(char)
    switch (eaw) {
    case 'F':
    case 'W':
        return length + 2
    case 'Na':
    case 'H':
    case 'A':
    case 'N':
        return length + 1
    }
  }, 0)
}
