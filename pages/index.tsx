import Link from 'next/link'
import Player from '../components/Player'

export default function Index() {
  const videoJsOptions = {
    techOrder: ['html5'],
    autoplay: false,
    fluid: true,
    controls: true,
    controlBar: {
      'liveDisplay': true,
      'pictureInPictureToggle': false
  },

    
    sources: [
      {
        src: '//nginx.yaje.box.ca/cov1.mp4',
        type: 'video/mp4',
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 custom bg-slate-950">

<div className='text-slate-900 text-3xl'>
Coveñas 1
</div>

      <>
      <Player {...videoJsOptions} />
    </>

      <div className='text-red-800'>
      𓂀𓁨𓁰𓁩𓁣𓀿𓀫𓀒𓀏𓀀𓂀
      </div>
      <div className='underline text-left text-blue-600'>
      <Link href={'/vid/'}>Ver Coveñas 2</Link>
      </div>

      <div className='text-left text-green-600 bg-slate-900'>
      <Link href={'https://nginx.yaje.box.ca/cov1.mp4'}>Descargar ⇩</Link>
      </div>
      
    </main>
    
  )
}
