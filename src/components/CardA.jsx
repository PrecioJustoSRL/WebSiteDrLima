'use client';
import { removeData } from '@/firebase/database';
import { useUser } from '@/context/Context'
import Button from '@/components/Button'
import Link from 'next/link'
export default function Card({ i }) {
    const { user, userDB, item, setUserItem, setUserModal, setUserProfile, setUserSuccess, success, setUserData } = useUser()
    function handlerRemoveData() {
        removeData(`testimonies/${i.uuid}`, setUserData, setUserSuccess)
    }

    function handlerEditData() {
        setUserModal('Testimonios')
        setUserItem(i)
    }
    return (
        <>
            <div className="w-full max-w-sm  rounded-lg  mt-5">

                <div className="w-full flex flex-col items-center ">
                    <img className="w-[150px] h-[150px] mb-3 rounded-full shadow-lg" src={i.url} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900  text-[16px]">{i.perfil}</h5>
                    {/* <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
                    <p className="w-full text-gray-950 text-center italic p-5 rounded-[10px] text-[14px]" style={{ background: 'linear-gradient(to left, #CFE0E8, #ffffff)' }}>"{i.testimonio}"</p>
                    {/* <Button theme='Primary'>Contactar</Button> */}
                </div>
            </div>
            {user && <div className='grid grid-cols-2 gap-1 lg:gap-5'>
                <Button theme='Danger' click={handlerRemoveData}>Eliminar</Button>
                <Button theme='Secondary' click={handlerEditData}>Editar</Button>
            </div> }
      </>
     )
}   