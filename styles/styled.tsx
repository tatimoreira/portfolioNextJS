
import styled, { CreateStyled } from '@emotion/styled'

const theme = {
    colors: {
        primary: String,
        secondary: String,
    },
    spacing: {
        small: String,
        medium: String,
    },
}

// define your theme type (that you can import and reuse everywhere)
type Theme = typeof theme

export default styled as CreateStyled<Theme>



