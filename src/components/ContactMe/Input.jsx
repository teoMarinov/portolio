import clsx from "clsx"

const Input = ({ label, placeholder, error, onChange }) => {


    return (
        <div className="relative text-2xl group">
            <p className="text-4xl m-4 focus:text-blue-500 group-focus-within:text-gray-200" >{label}</p>
            <input placeholder={placeholder} className={clsx('h-12 group-focus-within:text-gray-200 placeholder:text-gray-600 group-focus-within:placeholder:text-gray-500 bg-transparent border-b border-gray-400 focus:outline-0 focus:border-gray-200 p-4 pb-7 w-full', error && 'border-b border-red-700')} type="text" onChange={(e) => onChange(e.target.value)} />
            {error && <p className={"text-red-700 absolute"}>{error}</p>}
        </div>
    )
}

export default Input
