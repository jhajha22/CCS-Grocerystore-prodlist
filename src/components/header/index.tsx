import { Container } from "../../styles/global"
import { ToggleTheme } from "../toggle-theme"
import { Styles } from "./styles"

export const Header = () => {
    return (
        <Styles.Container>
            <Container>
                <h1>CCS Grocery Store Product List</h1>
                <ToggleTheme />
            </Container>
        </Styles.Container>
    )
}
