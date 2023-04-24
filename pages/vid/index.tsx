import Link from 'next/link'
import Player from '../../components/Player'

export default function Index() {
  const videoJsOptions = {
    techOrder: ['html5'],
    autoplay: false,
    fluid: true,
    controls: true,
    
    sources: [
      {
        src: '//nginx.yaje.box.ca/cov2.mp4',
        type: 'video/mp4',
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 custom2 bg-slate-950">

<div className='text-slate-900 text-3xl'>
Coveñas 2
</div>

      <>
      <Player {...videoJsOptions} />
    </>

      
    <div className='text-red-800'>
      𓂀𓁨𓁰𓁩𓁣𓀿𓀫𓀒𓀏𓀀𓂀
      </div>
      <div className='underline text-left text-blue-600'>
      <Link href={'/'}>Coveñas 1</Link>
      </div>
      
      
    </main>
    
  )
}
