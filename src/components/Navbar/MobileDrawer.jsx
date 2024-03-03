import { useState } from "react";
import clsx from "clsx";

const MobileDrawer = ({ children, open, setOpen }) => {

    const [move, setMove] = useState(false);
    const [rotate, setRotate] = useState(false);

    const clickHandler = () => {
        if (open) {
            setOpen(false);
            setRotate(false);
            setTimeout(() => {
                setMove(false);
            }, 300)
        } else {
            setOpen(true);
            setMove(true);
            setTimeout(() => {
                setRotate(true);
            }, 300)
        }

    }

    return (
        <>
            <div className="z-auto">
                <button onClick={clickHandler} className={clsx("hover:bg-blue-600 size-14 rounded-full p-2 relative m-4 transition-colors z-50", move ? 'bg-blue-600' : 'bg-stone-700')}>
                    <div className={clsx("absolute rounded-md top-[49%] right-[21.9%] transition-all h-[3px] w-8 bg-gray-100 duration-300 ", move ? "translate-y-0" : "-translate-y-2", rotate && 'rotate-45')}></div>
                    <div className={clsx("absolute rounded-md top-[49%] right-[21.9%] transition-all h-[3px] w-8 bg-gray-100 duration-300", rotate && ' rotate-45')}></div>
                    <div className={clsx("absolute rounded-md top-[49%] right-[21.9%] transition-all h-[3px] w-8 bg-gray-100 duration-300", move ? "-translate-y-0" : "translate-y-2", rotate && '-rotate-45')}></div>
                </button>
            </div>
            <div className={clsx("h-screen absolute bg-stone-800 transition-all duration-300 delay-300 ", open ? 'w-[20rem]' : 'w-0')}>
{children}
            </div></>
    )
}

export default MobileDrawer
