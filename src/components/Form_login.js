import { useState } from "react"
import { useNavigate } from "react-router-dom"
import service from "../services/service"

export function Form_login() {
    let navigate = useNavigate()

    const [LoginInput, setLoginInput] = useState({
        nameUser: "",
        password: "",
    })

    const ButtonColorif = (
        LoginInput.password.length >= 6 && LoginInput.nameUser.length >= 6
            ? "start_section_button_actived" : "start_section_button"
    )
    const Handlesubmit = async (e) => {
        e.preventDefault()
        if (
            LoginInput.password.length >= 6 &&
            LoginInput.nameUser.length >= 6
        ) {
            try {
                var res = await service.LoginUser(LoginInput)
                if (res.data.token) {
                    window.localStorage.setItem(
                        "loggedAppUser", JSON.stringify(res.data)
                    )
                    service.setToken(res.token)
                    navigate("/home")

                }
            } catch (err) {
                console.log(err.response.data)
            }
        }
    }

    const Handlechange = (e) => {
        setLoginInput({
            ...LoginInput,
            [e.target.name]: e.target.value,
        })

    }
    return (
        <section className="form_login_section">
            <form onSubmit={Handlesubmit} id="Form_login_form">
                <input
                    value={LoginInput.nameUser}
                    onChange={Handlechange}
                    name="nameUser"
                    className="inputs_login"
                    type="text"
                    maxLength="80"
                    placeholder="Nombre de Usuario"
                />
                <input
                    value={LoginInput.password}
                    onChange={Handlechange}
                    className="inputs_login"
                    type="password"
                    autoComplete="off"
                    maxLength="80"
                    name="password"
                    placeholder="contraseña"
                />
                <button id="button_login" className={ButtonColorif}>
                    <p id="start_section">
                        Start section
                    </p>
                </button>
            </form>
        </section>
    )
}