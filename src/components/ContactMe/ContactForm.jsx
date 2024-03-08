import { useState, useRef } from "react"
import Input from "./Input";
import TextArea from "./TextArea";
import emailjs from '@emailjs/browser';
import clsx from "clsx";

const ContactForm = () => {

    const form = useRef();

    const [sent, setSent] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [honey, setHoney] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const sendEmail = (e) => {

        e.preventDefault();

        if (sent) return

        if (honey) return;

        setErrors({ name: '', email: '', message: '' })

        if (!name) {
            setErrors(prevErrors => ({ ...prevErrors, name: "Please enter your name" }));
            return
        }
        if (!email) {
            setErrors(prevErrors => ({ ...prevErrors, email: "Please enter your email" }));
            return
        } else if (!email.includes('@')) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Enter a valid email' }));
            return
        }
        if (!message) {
            setErrors(prevErrors => ({ ...prevErrors, message: "Please enter your message" }));
            return
        }

        emailjs
            .sendForm('service_dctgdo5', 'template_pizat4w', form.current, {
                publicKey: 'XAdBwN04OJvL4nPkH',
            })
            .then(
                () => {
                    setName('')
                    setEmail('')
                    setMessage('')
                    setSent(true)
                    alert('message sent')
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }


    return (
        <form className="lg:w-10/12 w-screen xl:px-44 px-4" ref={form} onSubmit={sendEmail}>
            <input type="text" className="hidden" onChange={(e) => setHoney(e.target.value)} />
            <Input name='user_name' label="Name" placeholder="Enter your name" error={errors.name} value={name} onChange={(val) => setName(val)} />
            <Input name="user_email" label="Email" placeholder="Enter your email" error={errors.email} value={email} onChange={(val) => setEmail(val)} />
            <TextArea name="message" label="Message" placeholder="Enter your message" error={errors.message} value={message} onChange={(val) => setMessage(val)} />
            <button type="submit" className={clsx("text-gray-300 hover:text-gray-200 w-full xl:h-12 lg:h-20 h-12 rounded-md transition-all duration-200 hover:border-gray-500 border border-gray-600 hover:bg-gray-700", sent && 'cursor-not-allowed hover:bg-none opacity-55')} >Send Email Directly</button>
        </form>
    )
}

export default ContactForm
