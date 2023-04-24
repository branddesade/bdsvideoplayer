import Link from 'next/link'
import Player from '../../components/Player'

export default function Index() {
  const videoJsOptions = {
    techOrder: ['html5'],
    autoplay: true,
    fluid: true,
    controls: true,
    controlBar: {
      'liveDisplay': true,
      'pictureInPictureToggle': false
  },

    
    sources: [
      {
        src: '//nginx.yaje.box.ca/cov2.mp4',
        type: 'video/mp4',
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 custom2 bg-slate-950">

<h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-slate-900 from-slate-500">Coveñas 2</span></h1>

      <>
      <Player {...videoJsOptions} />
    </>

      
    
    <div className='text-red-800 my-7 '>
        𓂀𓁨𓁰𓁩𓁣𓀿𓀫𓀒𓀏𓀀𓂀
      </div>
      <div className='button2 my-4'>
        <Link href={'/'}>Ver Coveñas 1</Link>
      </div>

      <div className='button1 my-4'>
        <Link href={'https://nginx.yaje.box.ca/cov2.mp4'}>Descargar ⇩</Link>
      </div>

    </main>
    
  )
}
