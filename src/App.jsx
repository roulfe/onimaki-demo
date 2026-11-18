import { useEffect, useState } from 'react'

// Homepage-only concept: other page labels remain visible but are not links yet.
const ORDER_URL = 'https://www.ubereats.com/store/onimaki-taylor-st-chicago/5w8SF9sIX6GvaSkznZloVg?fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafWbhM1gze-imV4-I3UdwHrzdPzABEfEMU4OTecKzT7NEzWQSnXiUCcBDl3Jg_aem_winKrR0l2LiBCSkXOdKedg&utm_content=link_in_bio&utm_medium=social&utm_source=ig'
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Onimaki+1424+W+Taylor+St+Chicago+IL+60607'
const INSTAGRAM_URL = 'https://www.instagram.com/_onimaki_/'
const image = (file) => `${import.meta.env.BASE_URL}images/${file}`
const navItems = ['Menu', 'Gallery', 'Our Story', 'Contact']

// Reusable Tailwind strings — no separate site-wide CSS selectors.
const buttonStyle = 'inline-flex min-h-[50px] items-center justify-center gap-6 whitespace-nowrap border border-ink bg-ink px-[23px] pt-[18px] pb-[17px] text-[11px] font-black tracking-[.2em] text-white uppercase transition-[color,background,transform] duration-200 hover:bg-cream hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink'
const navStyle = 'whitespace-nowrap border-b-2 border-transparent py-2.5 text-[11px] font-extrabold tracking-[.2em] uppercase transition-colors max-[1130px]:tracking-[.12em] max-[720px]:border-b max-[720px]:border-[#c3bfb7] max-[720px]:py-[10px] max-[720px]:pb-[18px] max-[720px]:font-display max-[720px]:text-[46px] max-[720px]:font-black max-[720px]:tracking-[.01em]'
const smallHeading = 'text-[10px] font-black tracking-[.36em] uppercase'
const editorial = 'font-editorial font-normal tracking-[-.052em]'

function ArrowIcon({ diagonal = false, className = '' }) {
  return diagonal ? (
    <svg className={`size-[19px] shrink-0 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  ) : (
    <svg className={`size-[19px] shrink-0 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 12h18M15 6l6 6-6 6" />
    </svg>
  )
}

function BrandLogo({ onNavigate, footer = false }) {
  return (
    <a href="#top" onClick={onNavigate} aria-label="Onimaki — back to top" className="inline-flex shrink-0 items-center leading-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
      <img
        src={image('onimaki-logo-header-transparent.png')}
        alt="Onimaki"
        className={footer
          ? 'block h-auto w-[170px] object-contain max-[420px]:w-[155px]'
          : 'block h-auto w-[clamp(165px,16vw,220px)] object-contain max-[1130px]:w-[165px] max-[720px]:w-[155px]'}
      />
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-40 flex h-[94px] w-full items-center justify-between bg-cream px-[clamp(24px,4.35vw,94px)] max-[1130px]:h-[82px] max-[1130px]:px-[3.4%] max-[720px]:h-[74px] max-[720px]:px-5">
      <BrandLogo onNavigate={closeMenu} />

      <nav
        id="primary-navigation"
        aria-label="Main navigation"
        className={`flex items-center gap-[clamp(24px,3.2vw,58px)] pl-[3vw] max-[1130px]:gap-5 max-[1130px]:pl-0 max-[720px]:absolute max-[720px]:top-[74px] max-[720px]:left-0 max-[720px]:z-45 max-[720px]:h-[calc(100svh-74px)] max-[720px]:w-full max-[720px]:flex-col max-[720px]:items-stretch max-[720px]:gap-[18px] max-[720px]:bg-cream max-[720px]:px-6 max-[720px]:py-[55px] ${menuOpen ? 'max-[720px]:flex' : 'max-[720px]:hidden'}`}
      >
        <a href="#top" aria-current="page" onClick={closeMenu} className={`${navStyle} [border-bottom-color:#171714] hover:text-onimaki-red`}>Home</a>
        {navItems.map((name) => (
          <span key={name} title={`${name} page coming later`} className={`${navStyle} cursor-default hover:text-onimaki-red hover:cursor-pointer`}>{name}</span>
        ))}
      </nav>

      <a className={`${buttonStyle} max-[1130px]:gap-2.5 max-[1130px]:px-[17px] max-[720px]:hidden`} href={ORDER_URL} target="_blank" rel="noopener noreferrer">
        Order online <ArrowIcon diagonal />
      </a>

      <button
        type="button"
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setMenuOpen((current) => !current)}
        className="relative z-50 hidden size-[41px] cursor-pointer flex-col justify-center gap-1.5 border border-ink bg-transparent px-2.5 max-[720px]:flex"
      >
        <span className={`block h-[2px] w-full bg-ink transition-transform ${menuOpen ? 'translate-y-[4px] rotate-45' : ''}`} />
        <span className={`block h-[2px] w-full bg-ink transition-transform ${menuOpen ? '-translate-y-[4px] -rotate-45' : ''}`} />
      </button>
    </header>
  )
}

function DesktopHero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate h-[710px] min-h-[min(770px,calc(100svh-94px))] bg-[radial-gradient(ellipse_at_48%_40%,#fbf8f4_0%,#f6f2ec_54%,#efe9df_115%)] max-[1130px]:min-h-[620px] max-[720px]:hidden max-[720px]:h-[min(690px,calc(100svh-74px))] max-[720px]:min-h-[570px] max-[420px]:h-[615px] max-[420px]:min-h-[615px]"
    >
      <div className="absolute top-[20.2%] left-[5%] z-5 flex flex-col items-center gap-[22px] max-[720px]:top-[11%] max-[720px]:left-[7.5%] max-[720px]:gap-3" aria-hidden="true">
        <span className="font-black text-[clamp(19px,1.7vw,27px)] tracking-[.15em] [writing-mode:vertical-rl] max-[720px]:text-sm">おにまき</span>
        <span className="h-[84px] w-px bg-[#1d211c] max-[720px]:h-[42px]" />
      </div>

      <div className="absolute top-[22%] left-[8.65%] z-1 w-[88%] max-[1130px]:top-[29%] max-[720px]:top-[29%] max-[720px]:left-[7%] max-[720px]:w-full">
        <h1 id="hero-title" className="w-[128%] origin-top-left scale-x-[.75] font-display text-[clamp(154px,22.3vw,366px)] leading-[.82] font-black tracking-[-.028em] whitespace-nowrap max-[720px]:w-[150%] max-[720px]:scale-x-[.66] max-[720px]:text-[29vw]">ONIMAKI</h1>
        <span aria-hidden="true" className="absolute top-[76%] left-[-1.65%] block size-[clamp(46px,4.5vw,75px)] bg-onimaki-red max-[720px]:top-[67%] max-[720px]:left-0 max-[720px]:size-[31px]" />
        <p className="absolute top-[calc(100%+39px)] left-[-3%] m-0 text-[13px] leading-[1.7] font-black tracking-[.30em] max-[720px]:top-[calc(100%+62px)] max-[720px]:left-0 max-[720px]:text-[9px] max-[720px]:leading-[1.8] max-[720px]:tracking-[.15em] max-[420px]:top-[calc(100%+56px)]">
          HAND ROLL MAKI TO-GO <span className="opacity-70">/</span><br /> MATCHA BAR
        </p>
      </div>

    <img
      src={image('strawberry-cup.png')}
      alt="Strawberry matcha latte in an Onimaki branded cup"
      fetchPriority="high"
      className="
        absolute top-[-13px] right-[8%] z-3 h-auto
        w-[clamp(280px,30vw,475px)]
        drop-shadow-[22px_22px_19px_rgba(38,34,21,0.13)]
        motion-safe:animate-rise-in

        max-[1130px]:top-[52%]
        max-[1130px]:right-auto
        max-[1130px]:left-[5%]
        max-[1130px]:w-[37%]

        max-[720px]:top-[57%]
        max-[720px]:left-[3%]
        max-[720px]:w-[45%]

        max-[420px]:top-[57%]
        max-[420px]:left-[2%]
        max-[420px]:w-[50%]
      "
    />

    <img
      src={image('shitake-roll.png')}
      alt="Onimaki shiitake mushroom hand roll in its signature packaging"
      fetchPriority="high"
      className="
        absolute right-[13.3%] bottom-[5%] z-4 h-auto
        w-[min(57.4vw,820px)]
        drop-shadow-[16px_22px_15px_rgba(38,34,21,0.17)]
        motion-safe:animate-roll-in

        max-[1130px]:right-[-3%]
        max-[1130px]:bottom-[8%]
        max-[1130px]:w-[65%]

        max-[720px]:right-[-5%]
        max-[720px]:bottom-[10%]
        max-[720px]:w-[70%]

        max-[420px]:right-[-10%]
        max-[420px]:bottom-[11%]
        max-[420px]:w-[85%]
      "
    />
      <a className="absolute right-[5%] bottom-[45px] z-5 flex items-center gap-[19px] text-[9px] font-black tracking-[.36em] uppercase max-[720px]:right-5 max-[720px]:bottom-5 max-[720px]:gap-3 max-[720px]:text-[8px] max-[720px]:tracking-[.2em]" href="#explore">
        <span>Scroll to explore</span><span aria-hidden="true" className="text-[35px] leading-none font-light max-[720px]:text-[27px]">↓</span>
      </a>
    </section>
  )
}

function MobileHero() {
  return (
    <section
      aria-labelledby="mobile-hero-title"
      className="
        relative isolate overflow-hidden
        bg-[radial-gradient(ellipse_at_48%_40%,#fbf8f4_0%,#f6f2ec_54%,#efe9df_115%)]
        min-[721px]:hidden
      "
    >
      <div className="mx-auto flex w-full max-w-[520px] flex-col px-5 pt-10 pb-24">

        {/* Japanese text */}
        <div
          aria-hidden="true"
          className="mb-5 flex items-center gap-4"
        >
          <span className="shrink-0 text-[14px] font-medium tracking-[0.3em]">
            おにまき
          </span>
          <span className="h-px flex-1 bg-[#1d211c]" />
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1
            id="mobile-hero-title"
            className="
              font-display
              text-[clamp(64px,18vw,112px)]
              leading-[0.95]
              font-black
              tracking-[-0.045em]
              whitespace-nowrap
            "
          >
            ONIMAKI
          </h1>

          <p
            className="
              mt-4 text-[10px]
              leading-relaxed
              font-bold
              tracking-[0.17em]
              uppercase
              min-[420px]:text-[12px]
            "
          >
            Hand Roll Maki To-Go / Matcha Bar
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <a
            href="#explore"
            className="
              inline-flex min-h-11 flex-1
              items-center justify-center gap-3
              rounded-full bg-[#1d211c]
              px-4 py-3 text-[10px] font-bold
              tracking-[0.12em] text-white
              uppercase transition-colors
              hover:bg-[#3b3b35]
            "
          >
            View Menu
            {/* <span aria-hidden="true">↗</span> */}
          </a>

          <a
            href={ORDER_URL}
            className="
              inline-flex min-h-11 flex-1
              items-center justify-center
              rounded-full border border-[#1d211c]
              px-4 py-3 text-[10px] font-bold
              tracking-[0.12em] uppercase
              transition-colors
              hover:bg-[#1d211c] hover:text-white
            "
          >
            Order Online
          </a>
        </div>

        {/* Product composition */}
        <div
          className="
            relative mx-auto mt-8
            h-[clamp(310px,95vw,460px)]
            w-full max-w-[450px]
          "
        >
          {/* Matcha cup */}
          <img
            src={image('strawberry-cup.png')}
            alt="Strawberry matcha latte"
            fetchPriority="high"
            className="
              pointer-events-none
              absolute top-[1%] left-[3%] z-10
              h-auto w-[75%]
              object-contain
              drop-shadow-[14px_18px_16px_rgba(38,34,21,0.13)]
              motion-safe:animate-rise-in
            "
          />

          {/* Hand roll */}
          <img
            src={image('shitake-roll.png')}
            alt="Onimaki shiitake mushroom hand roll"
            fetchPriority="high"
            className="
              pointer-events-none
              absolute left-[5%] bottom-[1%] z-20
              h-auto w-[95%]
              object-contain
              drop-shadow-[12px_18px_14px_rgba(38,34,21,0.17)]
              motion-safe:animate-roll-in
            "
          />
        </div>

        {/* Bottom details */}
        {/* <div className="mt-2 flex flex-col items-center gap-3">
          <span className="text-[11px] font-bold tracking-[0.3em]">
            CHICAGO, IL
          </span>

          <a
            href="#explore"
            aria-label="Scroll to explore"
            className="text-[30px] leading-none"
          >
            ↓
          </a>
        </div> */}

      </div>
    </section>
  )
}

function DesktopShowcase() {
  return (
    <section aria-labelledby="showcase-heading" className="relative isolate h-[650px] overflow-hidden border-t-2 border-white bg-[#efeae1] max-[720px]:h-[830px]">
      <div className="relative z-3 w-[55%] pt-[89px] pl-[6%] max-[720px]:w-full max-[720px]:px-[25px] max-[720px]:pt-[55px]">
        {/* <span className={`${smallHeading} text-[#747f45]`}>The best of both worlds</span> */}
        <h2 id="showcase-heading" className={`${editorial} mt-[26px] mb-7 text-[clamp(66px,7.2vw,115px)] leading-[.88] whitespace-nowrap max-[720px]:text-[clamp(64px,13vw,98px)] max-[420px]:text-[14vw]`}>
          ROLLS <em className="font-light not-italic text-onimaki-red">/</em><br /> MATCHA
        </h2>
        <p className="m-0 text-[15px] leading-[1.65] tracking-[.04em] max-[720px]:max-w-[350px] max-[720px]:text-[13px]">
          Fresh hand rolls. Thoughtfully crafted matcha.<br /> Made for wherever the day takes you.
        </p>
        <div className="mt-[33px] flex flex-wrap gap-[33px] max-[720px]:mt-[22px] max-[720px]:gap-[18px]">
          {[
            ['Explore Menu', 'Explore Onimaki rolls on the ordering website'],
            // ['Explore matcha', 'Explore Onimaki matcha on the ordering website'],
          ].map(([label, ariaLabel]) => (
            <a key={label} href='#explore' target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="flex items-center gap-[13px] border-b border-ink pb-[9px] text-[11px] font-black tracking-[.17em] uppercase hover:border-onimaki-red hover:text-onimaki-red max-[720px]:gap-2 max-[720px]:text-[10px]">
              {label}<ArrowIcon diagonal />
            </a>
          ))}
        </div>
      </div>
      <img
        src={image('roll-matcha.jpg')}
        alt="Maki hand rolls and matcha drinks on a table"
        loading="lazy"
        className="absolute mask-l-from-80% mask-l-to-transparent top-[0%] right-0 h-[170%] w-[48.5%] object-cover object-[center_80%] max-[720px]:top-[415px] max-[720px]:right-[-10%] max-[720px]:h-[430px] max-[720px]:w-[85%] max-[720px]: max-[720px]:rounded-bl-none max-[420px]:top-[450px] max-[420px]:right-[-21%] max-[420px]:w-[95%]"
      />
    </section>
  )
}


function MobileShowcase() {
  return (
    <section
      aria-labelledby="mobile-showcase-title"
      className="
        relative isolate overflow-hidden
        h-[clamp(680px,175vw,850px)]
        bg-[#f0ebe3]
        min-[721px]:hidden
      "
    >
      {/* Curved product photograph */}
      <div
        className="
          absolute inset-x-0 top-[40%] bottom-0 z-0
          overflow-hidden
          [border-top-left-radius:100%_50%]
        "
      >
        <img
          src={image("roll-matcha.jpg")}
          alt="Maki hand rolls and matcha drinks on a table"
          loading="lazy"
          className="
            h-full w-full
            object-cover
            object-[80%_center]
            mask-b-from-90% mask-b-to-transparent
          "
        />
      </div>

      {/* Editorial content */}
      <div
        className="
          relative z-10
          px-[7%] pt-11
        "
      >
        {/* Eyebrow */}
        {/* <p
          className="
            text-[9px] font-black
            tracking-[0.32em]
            text-[#737c3b]
            uppercase
          "
        >
          The best of both worlds
        </p> */}

        {/* Large headline */}
        <h2
          id="mobile-showcase-title"
          className="
            mt-6 font-serif
            text-[clamp(56px,15vw,90px)]
            leading-[0.9]
            tracking-[-0.06em]
            text-[#1c1b18]
          "
        >
          ROLLS <span className="text-[#cb172b]">/</span>
          <br />
          MATCHA
        </h2>

        {/* Description */}
        <p
          className="
            mt-6 max-w-[310px]
            text-[13px]
            leading-[1.7]
            text-[#1c1b18]
          "
        >
          Fresh hand rolls. Thoughtfully crafted matcha.
          <br className="max-[370px]:hidden" />
          Made for wherever the day takes you.
        </p>

        {/* Links */}
        <div
          className="
            mt-7 flex flex-col
            items-start gap-4
          "
        >
          <a
            href='#explore'
            className="
              group flex items-center
              justify-between gap-8
              border-b border-[#1c1b18]
              pb-2
              text-[11px] font-black
              tracking-[0.16em]
              uppercase
              transition-colors
              hover:text-[#cb172b]
            "
          >
            Explore Menu
            <span
              className="
                text-xl font-normal
                transition-transform
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            >
              ↗
            </span>
          </a>

          {/* <a
            href={ORDER_URL}
            className="
              group flex items-center
              justify-between gap-8
              border-b border-[#1c1b18]
              pb-2
              text-[11px] font-black
              tracking-[0.16em]
              uppercase
              transition-colors
              hover:text-[#cb172b]
            "
          >
            Explore Matcha
            <span
              className="
                text-xl font-normal
                transition-transform
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            >
              ↗
            </span>
          </a> */}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <div id="explore">
      <div className="max-[720px]:hidden">
        <DesktopShowcase />
      </div>

      <MobileShowcase />
    </div>
  );
}


function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-heading" className="grid min-h-[610px] grid-cols-2 items-center px-[clamp(24px,5.6vw,90px)] pt-[clamp(70px,8.5vw,130px)] pb-[clamp(60px,7.2vw,115px)] max-[720px]:grid-cols-1 max-[720px]:gap-[30px] max-[720px]:px-6 max-[720px]:pt-[70px] max-[720px]:pb-[60px]">
      <div className="relative h-[clamp(360px,33vw,530px)] w-[91%] overflow-hidden max-[720px]:h-[430px] max-[720px]:w-full max-[420px]:h-[360px]">
        <img src={image('storefront.jpeg')} alt="Onimaki storefront in Chicago with the restaurant's white sign" loading="lazy" className="h-full w-full object-cover object-[center_35%] saturate-[.94]" />
        {/* <span className="absolute bottom-[13px] left-[15px] text-[9px] font-black tracking-[.18em] text-white [text-shadow:0_1px_8px_#0009]">CHICAGO, ILLINOIS / EST. 2026</span> */}
      </div>
      <div className="pl-[clamp(20px,3vw,65px)] max-[1130px]:pl-[5px] max-[720px]:pl-0">
        {/* <p className={`${smallHeading} flex items-center gap-[13px]`}><span className="h-[3px] w-[23px] bg-onimaki-red" />Come by</p> */}
        <h2 id="visit-heading" className={`${editorial} mt-[23px] mb-12 text-[clamp(67px,6.3vw,108px)] leading-[.94] max-[1130px]:text-[7vw] max-[720px]:mt-5 max-[720px]:mb-[35px] max-[720px]:text-[clamp(65px,12vw,98px)]`}>
          VISIT<br /><i className="not-italic">ONIMAKI</i>
        </h2>
        <div className="grid max-w-[510px] grid-cols-2 gap-[30px] pb-[38px] max-[720px]:gap-2.5">
          <div>
            <h3 className="mb-3.5 text-[10px] font-black tracking-[.23em] uppercase">Location</h3>
            <p className="m-0 text-[15px] leading-[1.65] tracking-[.045em] max-[720px]:text-sm">1424 W Taylor St<br />Chicago, IL 60607</p>
          </div>
          <div className="border-l border-[#aaa59e] pl-8 max-[720px]:pl-5">
            <h3 className="mb-3.5 text-[10px] font-black tracking-[.23em] uppercase">Hours</h3>
            <p className="m-0 text-[15px] leading-[1.65] tracking-[.045em] max-[720px]:text-sm">Daily<br />9:00 AM – 9:00 PM</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-[26px] max-[1130px]:flex-col max-[1130px]:items-start max-[720px]:flex-row max-[720px]:items-center">
          {/* <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={buttonStyle}>Get directions <ArrowIcon diagonal /></a> */}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[5px] border-b border-[#777] pb-[5px] text-[10px] font-black tracking-[.14em] uppercase hover:text-onimaki-red">
            Follow @_onimaki_ <ArrowIcon diagonal />
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-[clamp(24px,5.6vw,90px)] pb-[23px] max-[720px]:px-6 max-[720px]:pb-6">
      <div className="h-px w-full bg-[#83827c]" />
      <div className="flex min-h-[100px] items-center justify-between gap-[25px] max-[720px]:flex-wrap max-[720px]:gap-[23px] max-[720px]:py-[25px] max-[720px]:pb-5">
        <BrandLogo footer />
        <nav aria-label="Footer navigation" className="flex items-center gap-[clamp(18px,2.8vw,47px)] max-[720px]:order-3 max-[720px]:w-full max-[720px]:flex-wrap max-[720px]:justify-between max-[420px]:gap-2.5">
          <a href="#top" className="whitespace-nowrap text-[10px] font-black tracking-[.15em] uppercase hover:text-onimaki-red max-[720px]:text-[9px]">Home</a>
          {navItems.map((name) => <span key={name} title={`${name} page coming later`} className="cursor-default whitespace-nowrap text-[10px] font-black tracking-[.15em] uppercase hover:text-onimaki-red max-[720px]:text-[9px]">{name}</span>)}
        </nav>
        {/* <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap text-[10px] font-black tracking-[.15em] uppercase hover:text-onimaki-red max-[720px]:text-[9px]">Order online <ArrowIcon diagonal /></a> */}
      </div>
      <div className="flex justify-between gap-3.5 pb-[3px] text-[9px] leading-[1.7] font-bold tracking-[.1em] text-[#716f69] uppercase">
        <span>Chicago, IL</span><span>© ONIMAKI {currentYear} · DEMO</span>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => { document.title = 'ONIMAKI DEMO' }, [])

  useEffect(() => {
    // Prevent browser from restoring previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-w-[320px] overflow-clip bg-cream font-sans text-ink antialiased selection:bg-[#b3c181] selection:text-[#121512] motion-reduce:scroll-auto">
      <Header />
      <main>
        <DesktopHero />
        <MobileHero />
        <Showcase />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
