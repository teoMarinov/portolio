import { useState } from "react"
import Input from "./Input";
import TextArea from "./TextArea";

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
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
        <form className="lg:w-10/12 w-screen lg:px-44 px-4" onSubmit={handleSubmit}>
            <input type="text" className="hidden" onChange={(e) => setHoney(e.target.value)} />
            <Input label="Name" placeholder="Enter your name" error={errors.name} onChange={(val) => setName(val)} />
            <Input label="Email" placeholder="Enter your email" error={errors.email} onChange={(val) => setEmail(val)} />
            <TextArea label="Message" placeholder="Enter your message" error={errors.message} onChange={(val) => setMessage(val)} />
            <button type="submit" className="text-gray-300 hover:text-gray-200 w-full h-12 rounded-md transition-all duration-200 hover:border-gray-500 border border-gray-600 " >Email me</button>

        </form>
    )
}

export default ContactForm
