import {TCanvas} from './TCanvas'
import {qs} from './utils'

const m_canvas = new TCanvas(qs<HTMLDivElement>('.canvas-container'));

window.addEventListener('beforeunload', () => {
    m_canvas.dispose()
  })