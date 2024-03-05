import ContactForm from "./ContactForm"
import ContactList from "./ContactList"

const ContactMe = () => {
  return (
    <div className="font-poppins h-full w-screen pb-10 bg-neutral-800 text-gray-400">
      <div className="w-full">
        <h1 className="text-center py-20 sm:text-8xl text-6xl font-extralight ">Contact me:</h1>
      </div>
      <div className="flex xl:flex-row flex-col-reverse justify-between xl:divide-x  divide-gray-400 w-full xl:items-stretch items-center ">
       <ContactForm />
       <ContactList />
      </div>
    </div>
  )
}

export default ContactMe
