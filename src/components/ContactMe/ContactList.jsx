
const ContactList = () => {
  return (
    <div className="w-full xl:w-1/3 flex flex-col items-center justify-center md:text-lg  gap-y-12 pb-20">
    <li onClick={() => navigator.clipboard.writeText('+359 878 212 118')} className="hover:text-blue-400 cursor-pointer transition-all hover:-translate-y-2">+359 878 212 118</li>
    <li onClick={() => navigator.clipboard.writeText('teodor.b.marinov@gmail.com')} className="hover:text-blue-400 cursor-pointer transition-all hover:-translate-y-2">teodor.b.marinov@gmail.com</li>
  </div>
  )
}

export default ContactList
