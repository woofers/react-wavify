import WaveDev from './react-wavify.module.dev.js'
import Wave from './react-wavify.module.js'

export default process.env.NODE_ENV === 'production' ? Wave : WaveDev
