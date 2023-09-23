import logo from "../assets/logo2.svg";

function Footer() {
    return (
        <div className="bg-primary flex-col md:flex-row justify-around p-4 items-center">
            <div className="flex justify-center">
                <img src={logo} alt="Logo" className="h-20 w-20 ml-2" />
            </div>
            <div>
                <p className="text-extralight text-sm text-center py-4">
                    © 2024 Unbounce . All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer