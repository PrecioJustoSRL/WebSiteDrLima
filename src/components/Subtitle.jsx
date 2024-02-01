'use client';

export default function Button({ styled, children }) {
    return (
        <h3 className={`w-full text-[#00D2FF] text-center font-bold text-[18px] p-3 uppercase ${styled}`}>{children}</h3>
    )
}
