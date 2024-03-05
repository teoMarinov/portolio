import ContactForm from "./ContactForm"

const ContactMe = () => {
  return (
    <div className="flex flex-col font-poppins justify-around items-center gap-y-32 h-screen w-screen p-24 bg-neutral-800 text-gray-400">
      <div className="w-full">
        <h1 className="text-center sm:text-8xl text-6xl font-extralight ">Contact me:</h1>
      </div>
      <div className="flex justify-center gap-x-10 w-full ">
        <ContactForm />
        <p className="w-2/5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet, quam vitae fermentum viverra, magna purus lacinia quam, non ornare nulla nibh at ipsum. Quisque ut lorem leo. Nam diam lacus, dapibus sit amet pulvinar a, fermentum eget lorem. Nam vulputate rutrum consectetur. Nunc congue, nisi a egestas interdum, arcu leo maximus est, in eleifend metus mauris non quam. Curabitur in egestas nibh. Praesent id nibh tincidunt, scelerisque mi sed, scelerisque erat. Phasellus commodo, elit nec suscipit gravida, ligula erat tristique dui, id faucibus velit dolor nec mi. Cras vitae molestie dolor. Suspendisse quis dolor quis enim auctor porta non non nisi. Nunc auctor sit amet lacus sit amet placerat. Donec malesuada aliquam orci quis facilisis. Curabitur laoreet quam urna, sit amet consectetur elit facilisis tincidunt.</p>
      </div>
    </div>
  )
}

export default ContactMe
