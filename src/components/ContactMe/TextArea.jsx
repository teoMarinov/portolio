import clsx from "clsx"

const TextArea = ({ name, label, placeholder, error, value, onChange }) => {


    return (
        <div className="relative md:text-2xl group mb-16">
            <label className="md:text-4xl text-2xl m-4 focus:text-blue-500 group-focus-within:text-gray-200" >{label}</label>
            <textarea name={name} placeholder={placeholder} className={clsx('h-72 mt-4 group-focus-within:text-gray-200 placeholder:text-gray-600 group-focus-within:placeholder:text-gray-500 bg-transparent border-b border-gray-400 focus:outline-0 focus:border-gray-200 p-4 pb-7 w-full', error && 'border-b border-red-600')} type="text" value={value} onChange={(e) => onChange(e.target.value)} />
            {error && <p className={"text-red-600 absolute"}>{error}</p>}
        </div>
    )
}

export default TextArea
