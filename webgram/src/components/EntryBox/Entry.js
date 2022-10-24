import { Container, InputBox, InputLabel } from "./styles"
export default function Entry({
    labelName = null,
    isPassword = false,
}) {
    const inputType = isPassword ? 'password' : 'text'; //if password, password entry, if not, textbox entry
    return (
        <Container>
            <InputLabel>{labelName}</InputLabel>
            <InputBox id="inputbox" name="Username" type={inputType}/>
        </Container>
       
    )
}