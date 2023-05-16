import { useAppSelector, useAppDispatch } from "../../store/hooks"
import { useEffect, useState, Fragment } from "react"
import { Dialog, Transition } from '@headlessui/react'
import { returnGame } from "../../store/slices/player/playerSlice"


export default function Dados(){

  const scores = useAppSelector((state) => state.questions)
  const players = useAppSelector((state) => state.players)
  const dispatch = useAppDispatch()
  
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    if(players.x === 1 && players.y === 9){
      openModal()
    }
  }, [players])

  return (
    <div className="w-full flex items-center justify-between my-4">
      <p className="border rounded px-4 py-1 bg-white text-gray-500"><span className="font-medium">Score</span> {scores.wins * 100}</p>
      <div className="flex items-center gap-2">
        <p className="border rounded px-4 py-1 bg-white text-gray-500"><span className="font-medium">Ganadas </span>{scores.wins}</p>
        <p className="border rounded px-4 py-1 bg-white text-gray-500"><span className="font-medium">Pérdidas </span>{scores.loss}</p>
      </div>

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Has Ganado!!
                    </Dialog.Title>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-greeb-700 focus-visible:ring-offset-2"
                        onClick={()=> {
                          dispatch(returnGame())
                          closeModal()
                        }}
                      >
                        Enviar respuesta
                      </button>
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