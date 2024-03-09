import Image from 'next/image'
import Link from 'next/link'
import { AnchorHTMLAttributes, FC } from 'react'

import githubIcon from 'public/icons/github-button.svg'
import telegramIcon from 'public/icons/telegram-button.svg'
//import vercelIcon from 'public/icons/vercel-button.svg'
import vercelIcon from 'public/images/mobula-logo.png'
import inkathonLogo from 'public/images/inkathon-logo.png'

import { cn } from '@/utils/cn'

interface StyledIconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
}

const StyledIconLink: React.FC<StyledIconLinkProps> = ({ className, children, ...rest }) => (
  <Link
    className={cn(
      'group opacity-90 transition-all hover:-translate-y-0.5 hover:opacity-100',
      className,
    )}
    {...rest}
  >
    {children}
  </Link>
)

export const HomePageTitle: FC = () => {
  const title = 'ink!athon'
  const desc = 'ink! Supported Price Discovery for On-Chain Tokens'
  const githubHref = 'https://github.com/mflittle/CryptoPriceDiscovery'
  const deployHref = 'https://mobula.io/home'
  const telegramHref = 'https://t.me/mflittle'

  return (
    <>
      <div className="flex flex-col items-center text-center font-mono">
        {/* Logo & Title */}
        <Link
          href={githubHref}
          target="_blank"
          // className="group"
          className="group flex cursor-pointer items-center gap-4 rounded-3xl px-3.5 py-1.5 transition-all hover:bg-gray-900"
        >
          <Image src={inkathonLogo} priority width={60} alt="ink!athon Logo" />
          <h1 className="text-[2.5rem] font-black tracking-tighter">{title}</h1>
        </Link>

        {/* Tagline & Lincks */}
        <p className="mb-2 mt-4 text-gray-400">{desc}</p>
        <p className="mb-8 text-xs text-gray-600">
          Built by{' '}
          <a
            href="https://www.linkedin.com/in/michaelflittle/"
            target="_blank"
            className="font-semibold text-gray-600 hover:text-gray-300"
          >
            Michael Little
          </a>{' '}

          . Supported by{' '}
          <a
            href="https://alephzero.org"
            target="_blank"
            className="font-semibold text-gray-600 hover:text-gray-300"
          >
            Aleph Zero
          </a>
          .
        </p>

        {/* Github & Vercel Buttons */}
        <div className="flex select-none space-x-2">
          <StyledIconLink href={githubHref} target="_blank">
            <Image src={githubIcon} priority height={32} alt="Github Repository" />
          </StyledIconLink>
          <StyledIconLink href={deployHref} target="_blank">
            <Image src={vercelIcon} priority height={32} alt="Mobula Resources" />
          </StyledIconLink>
          <StyledIconLink href={telegramHref} target="_blank">
            <Image src={telegramIcon} priority height={32} alt="Telegram Group" />
          </StyledIconLink>
        </div>

        <div> <img className="my-5 h-[1px] w-[1px] max-w-full bg-gray-600" 
        id = "tokenImage"/>
          </div>
      </div>
    </>
  )
}
