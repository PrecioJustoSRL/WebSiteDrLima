'use client'
import { useUser } from '@/context/Context'

import { useState } from 'react'
import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'
import List from '@/components/List'
import CardA from '@/components/CardA'
import CardH from '@/components/CardH'
import Modal from '@/components/Modal'
import Navleft from '@/components/Navleft'
import Link from 'next/link'
import { JackInTheBox, Zoom, Slide } from "react-awesome-reveal";

import { WithAuth } from '@/HOCs/WithAuth'

function Home() {

  const [whatsapp, setWhatsapp] = useState(false)
  const [msg, setMsg] = useState(false)
  const [state, setState] = useState(false)
  const { user, userDB, item, setUserItem, modal, setUserModal, setUserProfile, setUserSuccess, success, setUserDatas } = useUser()


  // function handlerState (item) {
  //   item == state 
  //   ? setState(null)
  //   : setState(item)
  // }

  function handlerState(data) {
    setUserModal(data)
  }

  const whatsappHandler = () => {
    setWhatsapp(!whatsapp)
  }

  const onChangeWhatsapp = (e) => {
    setMsg(e.target.value)
  }
  const handlerSendWhatsapp = (e) => {
    const whats = msg.replaceAll('%20')
    userDB && userDB.frontPage && userDB.frontPage['whatsapp'] && window.open(`https://api.whatsapp.com/send?phone=${userDB.frontPage['whatsapp']}&text=${whats}`, '_blank')
  }

  console.log(userDB)
  return (
    userDB && <main className="flex min-h-screen w-full flex-col items-center justify-between max-w-screen overflow-x-hidden" style={{ backgroundImage: `url(bg.png)`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom', backgroundAttachment: 'fixed' }}>
      {userDB && <Modal theme={modal} i={item} />}
      <section className='min-h-screen pt-[100px] pb-[70px] w-full lg:pt-10  flex flex-col justify-center px-[15px] lg:flex-row items-center '>
        {/* <div className='w-full h-[45vh] flex justify-center items-end px-[15px] lg:w-[50vw] lg:h-[100vh]' style={{ backgroundImage: `url(${userDB.frontPage['url']})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}></div> */}

        <Zoom className='w-full h-[30vh] flex justify-center items-end lg:w-[50vw] lg:h-[100vh] mb-5' cascade duration={1000}>
          <div className='w-full h-[30vh] flex justify-center items-end px-[15px] lg:w-[50vw] lg:h-[100vh]' 
          style={{ backgroundImage: `url(${userDB.frontPage['url']})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}
          ></div>

          {/* 
          <div className='w-full h-[45vh] flex justify-center items-end px-[15px] lg:w-[50vw] lg:h-[100vh]'>
            <img src={userDB.frontPage['url']} className='block relative w-full h-[45vh] object-cover' alt="" />
          </div> */}
        </Zoom >

        <div className='w-full flex flex-col  justify-center lg:justify-around lg:w-[50vw] lg:h-auto  lg:pb-0 lg:p-12 lg:pt-[50px]  lg:pr-[10px]'>
          {/* <div className='hidden h-[30vh] w-[30vh] lg:block' style={{ backgroundImage: `url(${userDB.frontPage['urlIMG']})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          </div> */}
          {/* <JackInTheBox cascade duration={1000} direction={'left'}>

            <div className='w-full  hidden lg:flex lg:justify-center'>
              <img src={userDB.frontPage['urlIMG']} className='hidden h-[40vh]  lg:block' alt="" />
            </div>
          </JackInTheBox> */}




          <div className='w-full min-h-[35vh] flex flex-col justify-around py-5 px-[15px]' style={{ background: 'linear-gradient(to left, #CFE0E8, #ffffff)' }}>
            <JackInTheBox cascade duration={1000} direction={'left'}>
              <h1 className='w-full text-center text-[18px] lg:text-[16px]'>
                <span className='text-gray-950 font-bold'>{userDB.frontPage['nombre']}</span>
              </h1>
            </JackInTheBox>
            <JackInTheBox cascade duration={1000} delay={100} direction={'left'}>
              <h1 className='w-full text-center text-[18px] lg:text-[16px]'>
                <span className='text-gray-800 font-bold'>{userDB.frontPage['especialidad 1']}</span>
              </h1>
            </JackInTheBox> 
            <h1 className='w-full text-left flex justify-between lg:text-[16px]'>
              <Slide cascade duration={1000} delay={100} direction={'left'}>

                <span className='flex'>
                  <svg className='mr-3' width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12L10 10V5M1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 8.8181 18.7672 7.64778 18.3149 6.55585C17.8626 5.46392 17.1997 4.47177 16.364 3.63604C15.5282 2.80031 14.5361 2.13738 13.4442 1.68508C12.3522 1.23279 11.1819 1 10 1C8.8181 1 7.64778 1.23279 6.55585 1.68508C5.46392 2.13738 4.47177 2.80031 3.63604 3.63604C2.80031 4.47177 2.13738 5.46392 1.68508 6.55585C1.23279 7.64778 1 8.8181 1 10Z" stroke="#14b8a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  Lunes a Viernes</span>
              </Slide>
              <Slide cascade duration={1000} delay={100} direction={'right'}>
                <span className=' '>11:00 - 13:30</span>
              </Slide>
            </h1>
            <h1 className='w-full text-left  flex justify-between   lg:text-[16px]'>
              <Slide cascade duration={1000} delay={100} direction={'left'}>

                <span className='flex'>
                  <svg className='mr-3' width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12L10 10V5M1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 8.8181 18.7672 7.64778 18.3149 6.55585C17.8626 5.46392 17.1997 4.47177 16.364 3.63604C15.5282 2.80031 14.5361 2.13738 13.4442 1.68508C12.3522 1.23279 11.1819 1 10 1C8.8181 1 7.64778 1.23279 6.55585 1.68508C5.46392 2.13738 4.47177 2.80031 3.63604 3.63604C2.80031 4.47177 2.13738 5.46392 1.68508 6.55585C1.23279 7.64778 1 8.8181 1 10Z" stroke="#14b8a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  Sabados
                </span>
              </Slide>
              <Slide cascade duration={1000} delay={100} direction={'right'}>
                <span className=' 	'>8:00 - 10:00</span>
              </Slide>
            </h1>
            <h1 className='  w-full text-left  flex   lg:text-[16px]'>

              <Slide cascade duration={1000} delay={100} direction={'right'}>
                <svg className='mr-3' width="20" height="20" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1894 4C14.1994 6.17 13.9694 8.73 12.8594 10.81C11.9194 12.5 10.5694 13.93 9.41939 15.5C8.91939 16.2 8.41939 16.95 8.04939 17.76C7.91939 18.03 7.82939 18.31 7.72939 18.59C7.62939 18.87 7.53939 19.15 7.44939 19.43C7.35939 19.69 7.24939 20 6.91939 20C6.52939 20 6.41939 19.56 6.33939 19.26C6.09939 18.53 5.85939 17.83 5.48939 17.16C5.06939 16.37 4.53939 15.64 3.99939 14.93L13.1894 4ZM4.03939 6.42L0.73939 10.34C1.34939 11.63 2.25939 12.73 3.12939 13.83C3.33939 14.08 3.54939 14.34 3.74939 14.61L7.91939 9.67L7.87939 9.68C6.41939 10.18 4.79939 9.44 4.21939 8C4.13939 7.83 4.07939 7.63 4.03939 7.43C3.98437 7.09894 3.98437 6.76106 4.03939 6.43V6.42ZM1.49939 2.62L1.48939 2.63C-0.13061 4.68 -0.41061 7.53 0.55939 9.94L4.54939 5.2L4.49939 5.15L1.49939 2.62ZM9.13939 0.36L5.91939 4.17L5.95939 4.16C7.29939 3.7 8.79939 4.28 9.47939 5.5C9.62939 5.78 9.74939 6.08 9.78939 6.38C9.84939 6.76 9.86939 7.03 9.79939 7.4V7.41L12.9994 3.61C12.1629 2.08939 10.7905 0.934448 9.14939 0.37L9.13939 0.36ZM4.80939 4.89L8.71939 0.24L8.67939 0.23C8.09939 0.08 7.50939 0 6.91939 0C4.94939 0 3.08939 0.85 1.76939 2.31L1.74939 2.32L4.80939 4.89Z" fill="#14b8a6" />
                </svg> <span className=' 	'>{userDB.frontPage['direccion']}</span>
              </Slide>
            </h1>
            <div>
              <Zoom duration={1000}>
                <Link href={`https://api.whatsapp.com/send?phone=${userDB.frontPage['whatsapp']}&text=Hola%20ESTIGMA%20DENTAL%20,%20quisiera%20hacer%20una%20consulta...%20`} className='w-full'><Button theme="Success" >Contactar</Button></Link>
              </Zoom>
              <Zoom duration={1000}>
                <a href="#Servicios" className='w-full'><Button theme="Secondary" >Servicios</Button></a>
              </Zoom>
            </div>
          </div>
          {/* <div className='w-full flex justify-around' >
            <div className='flex flex-col'><span className='text-[#422C39] text-[16px]'>Experiencia</span></div>
            <div className='flex flex-col'><span className='text-[#422C39] text-[16px]'>Celeridad</span></div>
          </div> 
          
          
          
          #422C39
          #422C39
          
    
          */}
          {/* <div className='w-full  lg:grid lg:grid-cols-2 lg:gap-5 '>
            <a href="#Servicios" className='w-full'><Button theme="Secondary" >Servicios</Button></a>
            <Link href={`https://api.whatsapp.com/send?phone=${userDB.frontPage['whatsapp']}&text=Hola%20ESTIGMA%20DENTAL%20,%20quisiera%20hacer%20una%20consulta...%20`} className='w-full'><Button theme="Success" >Contactar</Button></Link>
          </div> */}
        </div>


      </section>

      <section className='w-full pt-[70px]' id="Servicios">
        <Subtitle>Servicios</Subtitle>
        <ul className='w-full flex flex-col justify-between items-center lg:grid lg:grid-cols-3 px-5'>
          <JackInTheBox cascade duration={500} direction={'left'}> {
            userDB && userDB.services !== undefined && userDB.services.map((i, index) =>
              <div key={index}>

                <CardH image={i['url']} service={i['titulo de servicio']} description={i['descripcion de servicio']} remote={i['servicio remoto']} cost={i['costo']} time={i['tiempo de entrega']} whatsapp={i['whatsapp de servicio']} i={i} index={index}></CardH>

                {/* <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px my-8 bg-[#422C39] border-0 " />
                    <span className="absolute px-3 font-medium text-[#6EE6FF] -translate-x-1/2 bg-white left-1/2   z-0">•</span>
                  </div> */}
              </div>
            )
          }
          </JackInTheBox>
        </ul>
      </section>

      <section className='w-full pt-[70px]' id="Testimonios">
        <Subtitle>Testimonios</Subtitle>
        <div className=' w-full flex flex-col justify-between items-center lg:grid lg:grid-cols-3 px-5'>
          <Zoom>
            {
              userDB && userDB.testimonies && userDB.testimonies !== undefined && Object.values(userDB.testimonies).map((i, index) =>
                <div key={index}>
                  <CardA image={i.url} i={i} index={index}></CardA>
                </div>
              )
            }
          </Zoom>
        </div>
      </section>
      <section className='w-full pt-[70px]' id="De interes">
        <Subtitle>De interes</Subtitle>
        <div className='lg:grid lg:grid-cols-2 lg:gap-4 p-5 mt-5'>
          <img src={userDB && userDB.articleIMG.IMG2023.url} className='relative left-0 right-0 top-0 bottom-0 m-auto w-full pt-5 pb-5' alt="" />
          <ul className='border-l-2 border-[#01C89E] pl-5 pt-5 pb-5 flex flex-col justify-center '>
            {
              userDB && userDB.articles !== undefined && Object.keys(userDB.articles).map((i, index) =>
                <Slide cascade duration={1000} delay={100} direction={'right'}>

                  <List i={i} url={userDB.articles[i] && userDB.articles[i]['url']} title={userDB.articles[i]['titulo de articulo']} key={index} />
                </Slide>

              )
            }
          </ul>
        </div>
      </section>
      {/* <section className='w-full pt-[70px]' id="Testimonios">
        <Subtitle>Testimonios</Subtitle>
        <div className='min-h-screen w-full flex flex-col justify-between items-center lg:flex-row justify-around items-center '>
          <ul className='min-w-[80%] grid grid-cols-1 gap-4'>
            {
              userDB && userDB.services !== undefined && userDB.services.map((i, index) =>
                <div key={index}>
                  <CardH image={i['url']} service={i['titulo de servicio']} description={i['descripcion de servicio']} remote={i['servicio remoto']} cost={i['costo']} time={i['tiempo de entrega']} whatsapp={i['whatsapp de servicio']} i={i} index={index}></CardH>
                  <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px my-8 bg-[#422C39] border-0 " />
                    <span className="absolute px-3 font-medium text-[#422C39] -translate-x-1/2 bg-white left-1/2   z-0">•</span>
                  </div>
                </div>
              )
            }
          </ul>
        </div>
      </section> */}



      <Navleft funcion={handlerState}></Navleft>
      <img src="/whatsapp.svg" className="fixed h-[50px] w-[50px] bottom-[80px] right-[18px] lg:bottom-[18px] z-30" onClick={whatsappHandler} alt="" />

      <div className={`w-[80%] max-w-[400px] fixed bottom-[80px] lg:bottom-[18px] right-[18px] pt-14 pb-9 px-2 flex flex-grow flex-col justify-end rounded-[10px] border-gray-200 shadow bg-[#F1E6E0] ${whatsapp ? 'fixed' : 'hidden'} z-50`} >
        <div className='absolute top-0 left-0  w-full h-[50px] bg-[#00826A] rounded-t-[10px]'>
          <img src="/logo.png" className='absolute h-[35px] w-[35px] left-[5px] top-[7.5px]  rounded-[35px]' alt="" />
          <div className='absolute flex flex-col left-[50px] top-[12px] text-gray-800 text-[12px]'>
            <span className='block text-[10px] m-0 text-black'>Dr Lima</span>
            <span className='text-[8px] m-0 text-black'>en linea</span>
          </div>
          <span className='absolute  right-[10px] top-[12px] px-[7.5px] py-[3px]  border-[1px] text-[12px] rounded-[5px] text-black' onClick={whatsappHandler} >X</span>
        </div>
        <div
          className="ml-auto rounded-lg rounded-tr-none m-1 p-2 text-[12px] bg-[#DEF5D4] flex flex-col relative speech-bubble-right">
          <p className="">Hola...?</p>
          <p className="text-gray-600 text-[10px] text-right leading-none">{new Date().getHours()}:{new Date().getMinutes()}</p>
        </div>
        <div className="mr-auto rounded-lg rounded-tl-none m-1 p-2 text-[12px] bg-white flex flex-col relative speech-bubble-left">
          <p>Hola q tal, dinos en q podemos <br /> ayudarte...</p>
          <p className="text-gray-600 text-[10px] text-right leading-none">{new Date().getHours()}:{new Date().getMinutes()}</p>
        </div>

        <div className='flex absolute w-full left-0 bottom-0'>
          <input type="text" className=' w-full text-[12px] rounded-[18px] outline-none px-[10px] py-[2px]' onChange={onChangeWhatsapp} />
          <span className='w-[28px] p-[5px] bg-[#00826A] rounded-[18px]' onClick={handlerSendWhatsapp}><img src="/send.svg" className='h-[18px]' alt="" /></span>
        </div>
      </div>

      <footer className="w-screen bg-[#6EE6FF] text-center text-black mt-[70px] z-20" id="Contactos">
        <div className="p-4">
          <h3 className={`w-full text-black text-left font-bold text-[18px] uppercase pl-[5px]`}>Contactos</h3>
          <br />
          <p className='w-full flex justify-start items-center py-4'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.7656 33.5626L35.2656 30.0626C35.737 29.597 36.3335 29.2783 36.9825 29.1452C37.6315 29.012 38.3052 29.0702 38.9219 29.3126L43.1875 31.0157C43.8106 31.2686 44.3449 31.7004 44.7231 32.2565C45.1013 32.8126 45.3063 33.4682 45.3125 34.1407V41.9532C45.3089 42.4107 45.2127 42.8627 45.0298 43.282C44.8469 43.7013 44.581 44.0793 44.2482 44.3931C43.9153 44.707 43.5224 44.9502 43.0931 45.1083C42.6637 45.2663 42.2069 45.3358 41.75 45.3126C11.8594 43.4532 5.82812 18.1407 4.6875 8.45319C4.63455 7.97746 4.68292 7.49592 4.82945 7.04024C4.97597 6.58455 5.21731 6.16505 5.5376 5.80934C5.85789 5.45363 6.24987 5.16976 6.68774 4.97641C7.12562 4.78307 7.59947 4.68463 8.07812 4.68756H15.625C16.2984 4.68956 16.9559 4.89298 17.5128 5.27167C18.0697 5.65036 18.5006 6.187 18.75 6.81256L20.4531 11.0782C20.7035 11.6924 20.7674 12.3667 20.6368 13.017C20.5062 13.6672 20.1869 14.2646 19.7187 14.7344L16.2187 18.2344C16.2187 18.2344 18.2344 31.8751 31.7656 33.5626Z" fill="white" />
            </svg>
            <span className='pl-[18px]'>
              {userDB.contactos && userDB.contactos.telefono} - {userDB.contactos && userDB.contactos.celular}
            </span>
          </p>
          <p className='w-full flex justify-start items-center py-4'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="white" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_443)">
                <path d="M44.9028 8.33348C44.7135 8.31397 44.5227 8.31397 44.3333 8.33348H5.44445C5.19521 8.33732 4.94762 8.37469 4.70834 8.44459L24.7778 28.4307L44.9028 8.33348Z" fill="white" />
                <path d="M46.9583 10.2637L26.7361 30.4026C26.2156 30.9199 25.5116 31.2103 24.7778 31.2103C24.0439 31.2103 23.3399 30.9199 22.8194 30.4026L2.77776 10.4164C2.71615 10.6429 2.68348 10.8762 2.68054 11.1109V38.8887C2.68054 39.6254 2.9732 40.3319 3.49413 40.8529C4.01507 41.3738 4.72161 41.6664 5.45832 41.6664H44.3472C45.0839 41.6664 45.7905 41.3738 46.3114 40.8529C46.8323 40.3319 47.125 39.6254 47.125 38.8887V11.1109C47.1139 10.8215 47.0577 10.5357 46.9583 10.2637ZM7.3611 38.8887H5.43054V36.9026L15.5278 26.8887L17.4861 28.847L7.3611 38.8887ZM44.3194 38.8887H42.375L32.25 28.847L34.2083 26.8887L44.3055 36.9026L44.3194 38.8887Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_443">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className='pl-[18px]'>
              {userDB.contactos && userDB.contactos.gmail}

            </span>
          </p>
          <p className='w-full flex justify-start items-center py-4'>
            <svg width="36" height="44" viewBox="0 0 36 44" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0.125C13.4432 0.130376 9.07464 1.94292 5.85253 5.16504C2.63041 8.38716 0.817864 12.7557 0.812488 17.3125C0.80703 21.0363 2.02339 24.659 4.27499 27.625C4.27499 27.625 4.74374 28.2422 4.8203 28.3312L18 43.875L31.1859 28.3234C31.2547 28.2406 31.725 27.625 31.725 27.625L31.7265 27.6203C33.977 24.6556 35.1928 21.0346 35.1875 17.3125C35.1821 12.7557 33.3696 8.38716 30.1474 5.16504C26.9253 1.94292 22.5567 0.130376 18 0.125ZM18 23.5625C16.7639 23.5625 15.5555 23.1959 14.5277 22.5092C13.4999 21.8224 12.6988 20.8463 12.2257 19.7043C11.7527 18.5622 11.6289 17.3056 11.8701 16.0932C12.1112 14.8808 12.7065 13.7672 13.5806 12.8931C14.4546 12.019 15.5683 11.4237 16.7807 11.1826C17.9931 10.9414 19.2497 11.0652 20.3918 11.5383C21.5338 12.0113 22.5099 12.8124 23.1967 13.8402C23.8834 14.868 24.25 16.0764 24.25 17.3125C24.2479 18.9695 23.5888 20.558 22.4171 21.7296C21.2455 22.9013 19.657 23.5604 18 23.5625Z" fill="white" />
            </svg>
            <span className='pl-[34px]'>
              {userDB.contactos && userDB.contactos['direccion 1']} <br />
              {userDB.contactos && userDB.contactos['direccion 2']} <br />
              {userDB.contactos && userDB.contactos.departamento + ' - Bolivia'}
            </span>
          </p>
        </div>

        <div className="w-full px-6 pt-6 flex justify-center">
          <div className="mb-6 flex justify-center">
            <a
              href={userDB.contactos && userDB.contactos.facebook ? userDB.contactos.facebook : '#'}
              target='_blank'
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-gray-800 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="white"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href={userDB.contactos && userDB.contactos.twiter ? userDB.contactos.twiter : '#'}
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-gray-800 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="white"
                viewBox="0 0 24 24">
                <path d="M19.1696 5.13274C19.0076 5.04902 18.85 4.95725 18.6972 4.85776C18.2528 4.564 17.8454 4.21786 17.4837 3.82681C16.5788 2.79136 16.2408 1.74091 16.1163 1.00545H16.1213C16.0173 0.39498 16.0603 0 16.0668 0H11.945V15.9382C11.945 16.1522 11.945 16.3637 11.936 16.5727C11.936 16.5987 11.9335 16.6227 11.932 16.6507C11.932 16.6622 11.932 16.6742 11.9295 16.6862V16.6952C11.886 17.267 11.7027 17.8194 11.3957 18.3038C11.0886 18.7882 10.6672 19.1897 10.1686 19.473C9.64888 19.7687 9.06108 19.9238 8.46317 19.923C6.54276 19.923 4.98634 18.3571 4.98634 16.4232C4.98634 14.4893 6.54276 12.9234 8.46317 12.9234C8.82669 12.923 9.18798 12.9802 9.53361 13.0928L9.53861 8.89606C8.48935 8.76052 7.42338 8.84391 6.40795 9.14096C5.39253 9.43802 4.44969 9.94229 3.63891 10.622C2.92847 11.2392 2.33121 11.9758 1.87399 12.7984C1.7 13.0983 1.04354 14.3038 0.96404 16.2602C0.914043 17.3706 1.24753 18.5211 1.40652 18.9966V19.0066C1.50651 19.2865 1.89399 20.242 2.52546 21.0474C3.03466 21.6935 3.63625 22.2611 4.31087 22.7319V22.7219L4.32087 22.7319C6.31627 24.0878 8.52866 23.9988 8.52866 23.9988C8.91164 23.9833 10.1946 23.9988 11.6515 23.3083C13.2674 22.5429 14.1874 21.4024 14.1874 21.4024C14.7751 20.721 15.2424 19.9444 15.5693 19.106C15.9423 18.1256 16.0668 16.9497 16.0668 16.4797V8.0241C16.1168 8.0541 16.7828 8.49458 16.7828 8.49458C16.7828 8.49458 17.7422 9.10955 19.2391 9.51003C20.3131 9.79501 21.76 9.85501 21.76 9.85501V5.76321C21.253 5.81821 20.2236 5.65822 19.1696 5.13274Z" fill="white" />
              </svg>
            </a>

            <a
              href={userDB.contactos && userDB.contactos.gmail ? userDB.contactos.gmail : '#'}
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-gray-800 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="white"
                viewBox="0 0 24 24">
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fillRule="evenodd"
                  clipRule="evenodd" />
              </svg>
            </a>

            <a
              href={userDB.contactos && userDB.contactos.instagram ? userDB.contactos.instagram : '#'}
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-gray-800 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="white"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href={userDB.contactos && userDB.contactos.linkedin ? userDB.contactos.linkedin : '#'}
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-gray-800 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="white"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>

          </div>
        </div>

        <div
          className="p-4 text-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2024 Copyright
          <a className="text-gray-800hite underline" href="https://swoou.com/"
          >Swoou</a
          >
        </div>
      </footer>
    </main>
  )
}


export default WithAuth(Home)
