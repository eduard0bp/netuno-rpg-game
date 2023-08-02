import paladino from '../../../public/images/paladino.webp'
import atirador from '../../../public/images/atirador.webp'
import guerreiro from '../../../public/images/guerreiro.webp'
import barbaro from '../../../public/images/barbaro.webp'
import arqueiro from '../../../public/images/arqueiro.jpg'

export const useClassList = () => {
  const classList = [
    { className: 'Paladino', image: `${paladino.src}` },
    { className: 'Atirador', image: `${atirador.src}` },
    { className: 'Guerreiro', image: `${guerreiro.src}` },
    { className: 'Barbaro', image: `${barbaro.src}` },
    { className: 'Arqueiro', image: `${arqueiro.src}` }
  ]

  return {
    classList
  }
}
