'use client';

export default function Button({ theme, styled, click, children }) {


    switch (theme) {

        case 'Transparent':
            return <button
                type="submit"
                className="text-gray-800 bg-transparent border border-gray-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[16px] w-full px-5 py-3 my-2 text-center"
                // className="text-gray-800 bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                //  "
                onClick={click}
            >
                {children}
            </button>
            break
        case 'MiniPrimary':
            return <button
                type="submit"
                className="text-gray-800 bg-black border border-gray-100 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-950 font-medium rounded-xl text-[16px] w-full px-5 py-1 my-2 text-center transition ease-in-out"
                // className="text-gray-800 bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                //  "
                onClick={click}
            >
                {children}
            </button>
            break
        case 'Primary':
            return <button
                type="submit"
                className="text-gray-800 bg-green-500 border border-gray-100 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-950 font-bold rounded-xl text-[16px] text-gray-800 font-bold w-full  px-3 py-3 my-2 text-center transition ease-in-out"
                // className="text-gray-800 bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                //  "
                onClick={click}
            >
                {children}
            </button>
            break
        case 'Secondary':
            return <button
                type="submit"
                className="text-black bg-[#6EE6FF] hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[16px] w-full px-12 py-3 my-2 text-center"
                // className="text-gray-800 bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                //  "
                onClick={click}
            >
                {children}
            </button>

        case 'Success':
            return <button
                type="submit"
                className="text-black bg-[#00D2FF] hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[16px] w-full px-3 py-3 text-center"
                // className="text-gray-800 bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                //  "
                onClick={click}
            >
                {children}
            </button>
        case 'Danger':
            return <button
                type="submit"
                className="text-gray-800 bg-red-600 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[16px] w-full px-3 py-3 my-2 text-center"
                // className="text-gray-800 bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                //  "
                onClick={click}
            >
                {children}
            </button>
        default:

    }
}

