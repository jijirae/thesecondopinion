// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

interface Outline {
    /**
     * The levels of headings to be displayed in the outline.
     * Single number means only headings of that level will be displayed.
     * If a tuple is passed, the first number is the minimum level and the second number is the maximum level.
     * `'deep'` is same as `[2, 6]`, which means all headings from `<h2>` to `<h6>` will be displayed.
     *
     * @default 2
     */
    level?: number | [number, number] | 'deep'
  
    /**
     * The title to be displayed on the outline.
     *
     * @default 'adasdasd'
     */
    label?: string
  }
  export default DefaultTheme