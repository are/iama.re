export function entity(...effects) {
  const element = document.createElement('div')
  const context = {}

  element.classList.add('entity')

  for (let effect of effects) {
    effect(element, context)
  }

  document.querySelector('.wrapper').appendChild(element)
}
