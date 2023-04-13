import "../static/styles/Service/Search_service.css"


export function Search_Result_show({ Service }) {
    const idDiv = "Search_Result_divtheimg";
    return (
        <div className="Search_Result_Component">
            <div id={idDiv}>
                {/* <img id="Search_Result_img" src={Service.image.url} alt="imagen de servicio" /> */}
            </div>
            <div className="Search_Result_show">
                <h3 className="Search_Result_nameservice">{Service.name}</h3>
                <span className="price_content">
                    <span className="price">$ {Service.prize}</span>
                </span>
            </div>
        </div>
    )
}