import ContactForm from "./ContactForm"

const ContactMe = () => {
  return (
    <div className="font-poppins h-screen w-screen bg-neutral-800 text-gray-400">
      <div className="w-full">
        <h1 className="text-center sm:text-8xl py-20 text-6xl font-extralight ">Contact me:</h1>
      </div>
      <div className="flex justify-between divide-x divide divide-gray-400 w-full ">
        <ContactForm />
        <div className="w-3/12 flex flex-col items-center justify-center gap-y-28">
          <li onClick={() => navigator.clipboard.writeText('+359 878 212 118')} className="hover:text-blue-400 cursor-pointer transition-all hover:-translate-y-2">+359 878 212 118</li>
          <li onClick={() => navigator.clipboard.writeText('teodor.b.marinov@gmail.com')} className="hover:text-blue-400 cursor-pointer transition-all hover:-translate-y-2">teodor.b.marinov@gmail.com</li>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
