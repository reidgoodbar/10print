/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const w = process.stdout.columns

function draw () {
  setTimeout(draw, 100)
  let output = '\x1b[44m\x1b[94m'
  for (let i = 0; i < w; i++) {
    if (Math.random() > 0.2) {
      output += '\x1b[37m╲'
    } else {
      output += '\x1b[37m╱'
    }
  }
  console.log(output)
}

draw()
