
export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <video 
        src="https://v1.pinimg.com/videos/mc/720p/af/f7/14/aff7145be641f28d64ec960cfdfa863c.mp4" 
        autoPlay   
        loop       
        muted     
        playsInline
        className="w-48 h-48 object-cover rounded-full shadow-lg mb-6" 
      />
      <h2 className="text-2xl font-bold text-white animate-pulse">
        Cargando..
      </h2>
      
    </div>
  );
}