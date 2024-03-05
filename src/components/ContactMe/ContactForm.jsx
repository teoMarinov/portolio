import { useState } from "react"
import clsx from "clsx";
import Input from "./Input";

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('a');
    const [honey, setHoney] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (honey) return;

        setErrors({ name: '', email: '', message: '' })

        if (!name) {
            setErrors(prevErrors => ({ ...prevErrors, name: "Please enter your name" }));

        }
        if (!email) {
            setErrors(prevErrors => ({ ...prevErrors, email: "Please enter your email" }));

        } else if (!email.includes('@')) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Enter a valid email' }));

        }
        if (!message) {
            setErrors(prevErrors => ({ ...prevErrors, message: "Please enter your message" }));
        }
        if (errors.name || errors.email || errors.message) return;
    


        console.log({ name, email, message });
    }


    return (
        <form className="flex gap-16 flex-col w-2/3" onSubmit={handleSubmit}>
            <input type="text" className="hidden" onChange={(e) => setHoney(e.target.value)} />
            <Input label="Name" placeholder="Enter your name" error={errors.name} onChange={(val) => setName(val)} />
            <Input label="Email" placeholder="Enter your email" error={errors.email} onChange={(val) => setEmail(val)} />
            {/* <div>
                <p className="text-gray-300 text-lg mb-1 focus:outline-none " >Message:</p>
                <textarea className={clsx('h-96 rounded-md p-2 w-96', errors.message && 'border-2 border-red-600 ')} type="text" onChange={(e) => setMessage(e.target.value)} />
                {errors.message && <p className="text-red-600">{errors.message}</p>}
            </div> */}
            <button type="submit" className="text-gray-200 full bg-gray-700 h-12 rounded-md " >press</button>

        </form>
    )
}

export default ContactForm
