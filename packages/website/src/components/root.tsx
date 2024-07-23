import React from 'react'
import Wave from 'components/wave'
import clsx from 'clsx'

const Center: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...rest
}) => (
  <div
    className={clsx(
      'flex justify-center mt-[56px] mb-[25.6px] xs:mt-[88px] xs:mb-[40px]',
      className
    )}
    {...rest}
  />
)

const Text: React.FC<React.ComponentProps<'span'>> = ({
  className,
  ...rest
}) => (
  <span
    className={clsx(
      'font-bold mt-0 mb-0 text-[44px] [font-family:var(--fonts-title)] tracking-[-3px] xs:text-[88px] xxs:text-[66px]',
      className
    )}
    {...rest}
  />
)

const Link: React.FC<React.ComponentProps<'a'>> = ({ className, ...rest }) => (
  <a
    className={clsx(
      '[line-height:normal] no-underline text-[8px] text-[var(--color-primary)] hover:text-[var(--color-primaryHover)] xs:text-base xxs:text-xs',
      className
    )}
    {...rest}
  />
)

const App: React.FC<Nothing> = () => (
  <div className="fixed top-0 bottom-0 left-0 right-0 opacity-100 bg-[var(--color-blue)]">
    <div className="w-full absolute bg-[var(--color-secondary)] [z-index:-1] h-[300px] xs:h-[400px]">
      <Center>
        <Link href="https://github.com/woofers/react-wavify">
          <Text>react-wavify</Text>
        </Link>
      </Center>
      <Wave />
      <div className="relative">
        <div className="absolute w-full flex justify-center items-center text-xl top-[-80px]" />
      </div>
    </div>
  </div>
)

export default App
