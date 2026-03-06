'use client'

import { useEffect } from 'react'

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  
  useEffect(() => {
    console.error("Error atrapado por Next.js:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8">
        <div className="p-8 rounded-2xl border-2 border-red-600 text-center max-w-md">
            <h2 className="text-2xl font-black text-red-600 mb-3">Error de Conexión</h2>
            <p className="text-white font-medium mb-6">
              No pudimos conectar con la API de Disney. Revisa tu conexión o intenta más tarde.
            </p>
            <button
                onClick={
                () => reset()
                }
                className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-sm active:scale-95"
            >
                Reintentar conexión
            </button>
            <p className='text-gray-500 pt-2'>{error.message}</p>
        </div>
    </div>
  )
}