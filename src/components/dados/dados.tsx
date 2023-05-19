import { useAppDispatch } from "../../store/hooks"
import { positionMove } from "../../store/slices/player/playerSlice"
import { growWins, growLoss } from "../../store/slices/questions/questionsSlice"
import { useState, Fragment } from "react"
import { Dialog, Transition } from '@headlessui/react'
import { ramdonNumbers } from '../../utils/contentFunctions'
import { useAppSelector } from "../../store/hooks"
import { verifyPosition } from "../../utils/playerPositionVerify"
export interface Question {
  id: string,
  question: string,
  answer: string
  category: string
}

interface Props {
  questions: Question[] 
}

export default function Dados({questions}: Props){
  const dispatch = useAppDispatch()
  const [number, setNumber] = useState(0)
  const [question, setQuestion] = useState<Question>({id: '', question:'', answer: '', category:''}) 
  const [answer, setAnswer] = useState("")
  const players = useAppSelector((state) => state.players)

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const generar_pregunta_aleatoria = () => {
    const indice = Math.floor(Math.random() * questions.length);
    setQuestion(questions[indice]);
  };

  

  return (
    <div className="fixed bottom-10 right-10 mt-5 flex flex-col items-center">
      <p className="text-xl mb-2">{number}</p>
      <button 
        className="border w-full rounded py-2 px-4 bg-slate-800 text-white "
        onClick={() => {
          const number = ramdonNumbers();
          setNumber(number)
          generar_pregunta_aleatoria()
          
          if(verifyPosition(number, players)){
            dispatch(positionMove(number))
          }else{
            openModal()
          }
        }}>
        🎲 Tirar el dado
      </button>

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
                  <form action="" onSubmit={
                    (e) => {
                      e.preventDefault();
                      if(question != null && question.answer === answer){
                        dispatch(positionMove(number))
                        dispatch(growWins(1))
                        closeModal()
                      }else{
                        dispatch(growLoss(1))
                        closeModal()
                      }
                      
                    }
                  }>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 mb-5"
                    >
                      <p className="w-full text-center">{question['question']}</p>
                    </Dialog.Title>
                    <div className="mt-2">
                      <input type="text" name="resp" placeholder="Responde aquí" className="w-full border px-4 py-2" onChange={(e) => setAnswer(e.target.value)} required/>
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-greeb-700 focus-visible:ring-offset-2"
                      >
                        Enviar respuesta
                      </button>
                    </div>
                    <div className="mt-2">
                      <button
                        className="w-full inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-greeb-700 focus-visible:ring-offset-2"
                        onClick={() =>
                          {
                            if(question.answer === answer){
                              //
                            }else{
                              dispatch(growLoss(1))
                              closeModal()
                            }
                          }
                        }
                      >
                        No sé la respuesta
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}