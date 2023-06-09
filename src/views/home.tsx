import { Link } from 'react-router-dom'
import { useState, Fragment } from "react"
import { Dialog, Transition } from '@headlessui/react'
import QRCode from "react-qr-code";
import Rules from '../components/home/rules';

export default function Home(){

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen px-4 my-10'>
      <div className='flex flex-col items-center gap-10'>
        <div>
          <h1 className='text-center font-bold text-slate-900 text-7xl'>Serpientes y Escaleras</h1>
        </div>
        <p className='max-w-md text-center text-gray-500'>Ahora puedes iniciar una nueva partida o compartir mediante un QR.</p>
        <div className="flex gap-2 items-center justify-center">
          <Link to={'/game'} className='border rounded px-4 py-2 hover:bg-gray-50 bg-white'>Ir al juego</Link>
          <button className='border rounded px-4 py-2 hover:bg-gray-50 bg-white' onClick={()=>openModal()}>Compartir juego</button>
        </div>
      </div>
      <Rules />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[330px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className='w-full flex items-center justify-center my-10'>
                    <QRCode value="https://serpientes-y-escaleras.netlify.app/" size={150} fgColor='#0f172a'  />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <p className='text-center'>Ahora puedes compartir este juego con tus amigos</p>
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className='text-center'>Escanea el código para acceder al sitio web.</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}