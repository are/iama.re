export const px = (value) => (typeof value === 'number' ? `${value}px` : value)
export const deg = (value) =>
  typeof value === 'number' ? `${value}deg` : value

const scrollHandlers = []

const wrapper = document.querySelector('.wrapper')

wrapper.addEventListener('scroll', () => {
  for (let h of scrollHandlers) {
    h()
  }
})

export const reset = () => {
  scrollHandlers.splice(0, scrollHandlers.length)
}

export const parallax = (value) => (entity, ctx) => {
  entity.style.top = px(ctx.y + wrapper.scrollTop * -value)

  scrollHandlers.push(() => {
    entity.style.top = px(ctx.y + wrapper.scrollTop * -value)
  })
}

export const oscillate = (fn) => (entity, ctx) => {
  entity.style.left = px(ctx.x)

  scrollHandlers.push(() => {
    entity.style.left = px(ctx.x + fn(wrapper.scrollTop))
  })
}

const IH = window.innerHeight

export const onScroll = (o) => (entity, ctx) => {
  const cb = () => {
    for (let [key, fn] of Object.entries(o)) {
      entity.style[key] = fn((wrapper.scrollTop / IH) * 360, ctx)
    }
  }

  cb()

  scrollHandlers.push(cb)
}

export const type = (name) => (entity) => {
  entity.classList.add(`type-${name}`)
}

export const initialPosition = (x, y) => (entity, ctx) => {
  ctx.x = x
  ctx.y = y

  entity.style.top = px(y)
  entity.style.left = px(x)
}

export const size = (x, y) => (entity) => {
  if (y === undefined) {
    y = x
  }

  entity.style.width = px(x)
  entity.style.height = px(y)
}

export const background = (value) => (entity) => {
  entity.style.background = value
}

export const linearGradient = (...entries) =>
  `linear-gradient(${entries.map(deg).join(',')})`

export const zIndex = (value) => (entity) => {
  entity.style.zIndex = value
}

export const text = (value) => (entity) => {
  entity.innerHTML = value
}

export const rotate = (value) => (entity) => {
  entity.style.transform += ` rotate(${deg(value)})`
}
