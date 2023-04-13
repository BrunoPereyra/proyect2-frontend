import { useState } from "react"
import { useNavigate } from "react-router-dom"
import service from "../services/service"
import "../static/styles/signup.css"

export function Form_signup() {
    let navigate = useNavigate()
    const [AvatarUser, setAvatarUser] = useState("")
    const [InputsCreateUser, setInputsCreateUser] = useState({
        nameUser: "",
        fullName: "",
        Email: "",
        password: "",
    })
    const buttonClass = (
        InputsCreateUser.nameUser.length > 5 &&
            InputsCreateUser.password.length > 8 &&
            InputsCreateUser.Email.length > 10 &&
            InputsCreateUser.fullName.length > 5 ?
            "button_actived" : "button_desactived"
    )
    const HandleSubmit = async (e) => {
        e.preventDefault();
        if (InputsCreateUser.nameUser.length > 5 &&
            InputsCreateUser.password.length > 8 &&
            InputsCreateUser.Email.length > 10 &&
            InputsCreateUser.fullName.length > 5) {
            const formData = new FormData()
            formData.append("nameUser", InputsCreateUser.nameUser)
            formData.append("password", InputsCreateUser.password)
            formData.append("fullName", InputsCreateUser.fullName)
            formData.append("Email", InputsCreateUser.Email)
            formData.append("avatar", AvatarUser)

            try {
                const res = await service.createUser(formData)
                console.log(res.data.res);
                if (res.data.res.token) {
                    window.localStorage.setItem(
                        "loggedAppUser", JSON.stringify(res.data.res)
                    )   
                }

            } catch (err) {
                console.log(err.response.data.res);
            }
            // navigate("/home")
        }
    }
    const avatarChange = (e) => {
        setAvatarUser(e.target.files[0])
    }
    const HandleChange = (e) => {
        setInputsCreateUser({
            ...InputsCreateUser,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <section id="signup_section_form">
            <form onSubmit={HandleSubmit} id="form_Signup" >
                <input
                    value={InputsCreateUser.nameUser}
                    onChange={HandleChange}
                    type="text"
                    placeholder="Nombre de usuario"
                    id="name_user_signup"
                    className="inputsCreateUser_signup"
                    name="nameUser"
                />
                <input
                    value={InputsCreateUser.fullName}
                    onChange={HandleChange}
                    type="text"
                    placeholder="Nombre Completo"
                    id="full_name_signup"
                    className="inputsCreateUser_signup"
                    name="fullName"
                />
                <input
                    value={InputsCreateUser.Email}
                    onChange={HandleChange}
                    type="email"
                    placeholder="Correo electronico"
                    id="email_signup"
                    className="inputsCreateUser_signup"
                    name="Email"
                />
                <input
                    value={InputsCreateUser.password}
                    onChange={HandleChange}
                    type="password"
                    placeholder="contraseña"
                    id="password_signup"
                    className="inputsCreateUser_signup"
                    name="password"
                />
                <input
                    onChange={avatarChange}
                    type="file"
                    placeholder="Avatar"
                    id="AvatarUser"
                    className="inputsCreateUser_signup"
                    name="AvatarUser"
                />
                <button id="a">Registrarte</button>
            </form>
        </section>
    )
}
