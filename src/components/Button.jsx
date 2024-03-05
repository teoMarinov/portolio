import clsx from "clsx"

const Button = ({ text, open, textColor }) => {
    return (
        <button className={clsx(`group font-poppins p-3 text-lg rounded-md text-${textColor} text-lgtransition-all`)}>
            <p className="group-hover:-translate-y-2 transition-all duration-200 delay-75">{text}</p>
            <p className={clsx("text-3xl group-hover:scale-125 scale-0 p-0 -m-4 transition-all duration-300 delay-100", open === text && 'scale-125')}>.</p>
        </button>
    )
}

export default Button
