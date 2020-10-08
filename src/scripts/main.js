import { entity } from './entity.js'

import {
  parallax,
  type,
  initialPosition,
  size,
  background,
  linearGradient,
  zIndex,
  text,
  rotate,
  oscillate,
  onScroll,
  px,
  reset,
} from './effects.js'

const LOWEST = 1
const LOW = 5
const HIGH = 15

const IW = window.innerWidth
const IH = window.innerHeight

const vw = (perc) => (IW / 100) * perc
const vh = (perc) => (IH / 100) * perc

const rad = (value) => (value / 180) * Math.PI

entity(
  type('planet'),
  initialPosition(vw(10), vh(70)),
  size(vw(50)),
  background(
    linearGradient(135, 'rgba(8, 255, 235, 1) 0%', 'rgba(0, 108, 255, 1) 100%')
  ),
  parallax(1.2),
  zIndex(HIGH)
)

entity(
  type('planet'),
  initialPosition(vw(30), vh(70) + vw(20)),
  size(vw(10)),
  background(
    linearGradient(135, 'rgba(255,255,255,1) 0%', 'rgba(138,138,138,1) 100%')
  ),
  parallax(1.3),
  zIndex(HIGH),
  onScroll({
    left: (t, ctx) => px(ctx.x + Math.sin(rad((t + 180) / 2)) * vw(45)),
    zIndex: (t) => {
      return HIGH + (Math.cos(rad((t + 180) / 2)) < 0 ? -1 : 1)
    },
  })
)

entity(
  type('box'),
  initialPosition(vw(9), 100),
  size(vw(70), vh(68)),
  background(
    linearGradient(135, 'rgba(18, 11, 144, 1) 0%', 'rgba(125, 0, 166, 1) 100%')
  ),
  zIndex(LOW),
  parallax(1)
)

entity(
  type('box'),
  initialPosition(vw(15), vh(120)),
  size(vw(80), vh(50)),
  zIndex(LOW),
  background(
    linearGradient(135, 'rgba(221,255,27,1) 0%', 'rgba(253,29,29,1) 100%')
  ),
  parallax(1)
)

entity(
  type('planet'),
  initialPosition(vw(5), vh(220)),
  size(vw(20)),
  zIndex(LOW),
  background(
    linearGradient(135, 'rgba(255,255,255,1) 0%', 'rgba(253,29,29,1) 100%')
  ),
  parallax(2)
)

entity(
  type('planet'),
  initialPosition(vw(5), vh(220) + vw(5)),
  size(vw(10)),
  zIndex(LOW),
  background(
    linearGradient(135, 'rgba(255,255,255,1) 0%', 'rgba(253,29,29,1) 100%')
  ),
  parallax(2),
  onScroll({
    left: (t, ctx) => px(ctx.x + Math.sin(rad(-t + 90)) * vw(40)),
    test: (t) => console.log(t),
  })
)

entity(
  type('planet'),
  initialPosition(vw(5), vh(220) + vw(7.5)),
  size(vw(5)),
  zIndex(LOW),
  background(
    linearGradient(135, 'rgba(255,255,255,1) 0%', 'rgba(253,29,29,1) 100%')
  ),
  parallax(2),
  onScroll({
    left: (t, ctx) => px(ctx.x + Math.sin(rad(-t + 90)) * vw(80)),
  })
)

for (let i = 0; i < 14; i++) {
  entity(
    type('planet'),
    initialPosition(vw(30), vh(220 + i * 10)),
    size(vw(40)),
    zIndex(LOW),
    background(
      linearGradient(135, `hsl(120, 100%, 50%) 0%`, `hsl(250, 100%, 50%) 100%`)
    ),
    onScroll({
      left: (t, ctx) => px(ctx.x + Math.sin(rad(-t + 90 + i * 30)) * vw(30)),
    }),
    parallax(1.5)
  )
}

entity(
  type('box'),
  initialPosition(vw(0), vh(960)),
  size(vw(100), vh(30)),
  zIndex(LOW),
  background(
    linearGradient(135, 'rgba(221,27,255,1) 0%', 'rgba(253,29,29,1) 100%')
  ),
  parallax(3)
)

entity(
  type('text'),
  initialPosition(vw(20), vh(360)),
  size(vw(60)),
  zIndex(HIGH),
  text(`
    <h2>Contact: me@iama.re</h2>
  `),
  parallax(1)
)

entity(
  type('planet'),
  initialPosition(vw(-30), vh(220)),
  size(vw(160)),
  background(
    'radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,255,0,0.7183659585674158) 100%'
  ),
  parallax(0.5),
  zIndex(LOWEST)
)
