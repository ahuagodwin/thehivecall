import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Logo } from '@common/Logo'
import { ChevronIcon, CloseIcon, MenuIcon } from '@common/Icon'
import { NAV_LINKS } from '@constants/navigation'
import { isDarkHeroPath } from '@constants/paths'
import { useUIStore } from '@store/uiStore'
import { cn, scrollToId } from '@lib/utils'

export function Header() {
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    openDropdownId,
    setOpenDropdown,
    isHeaderScrolled,
    setHeaderScrolled,
  } = useUIStore()

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 24)

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [setHeaderScrolled])

  const goTo = (href: string) => {
    closeMobileMenu()
    setOpenDropdown(null)

    if (href.includes('#')) {
      const [path, hash] = href.split('#')
      const targetPath = path || '/'

      if (location.pathname === targetPath) {
        scrollToId(`#${hash}`)
      } else {
        navigate(href)
      }

      return
    }

    navigate(href)
  }

  const showWhiteText =
    !isHeaderScrolled && isDarkHeroPath(location.pathname)

  /**
   * Mobile parent menu handler.
   *
   * If the item has children, expand/collapse it.
   * Otherwise navigate normally.
   */
  const handleMobileLink = (link: (typeof NAV_LINKS)[number]) => {
    if (link.children?.length) {
      setOpenDropdown(
        openDropdownId === link.id ? null : link.id
      )
      return
    }

    goTo(link.href)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isHeaderScrolled
          ? 'bg-cream/90 shadow-[0_1px_0_rgba(22,48,43,0.08)] backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <Container className="flex h-20 items-center justify-between md:h-24">
        <button
          onClick={() => goTo('/')}
          className="inline-flex"
          aria-label="Go to homepage"
        >
          <Logo light={showWhiteText} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <div
              key={link.id}
              className="relative"
              onMouseEnter={() =>
                link.children && setOpenDropdown(link.id)
              }
              onMouseLeave={() =>
                link.children && setOpenDropdown(null)
              }
            >
              <button
                onClick={() => goTo(link.href)}
                className={cn(
                  'flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium transition-colors',
                  showWhiteText
                    ? 'text-white hover:text-white/70'
                    : 'text-ink/85 hover:text-ink'
                )}
              >
                {link.label}

                {link.children && (
                  <ChevronIcon
                    className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      openDropdownId === link.id &&
                        'rotate-180'
                    )}
                  />
                )}
              </button>

              <AnimatePresence>
                {link.children &&
                  openDropdownId === link.id && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                      }}
                      transition={{
                        duration: 0.18,
                      }}
                      className="absolute left-0 top-full min-w-60 rounded-2xl border border-ink/10 bg-white p-2 shadow-xl"
                    >
                      {link.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() =>
                            goTo(child.href)
                          }
                          className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium text-ink/80 transition-colors hover:bg-cream hover:text-ink"
                        >
                          {child.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => goTo('/contact-us')}
            className="hidden rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-lime-dark md:inline-flex"
          >
            Contact Us
          </button>

          <button
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden',
              showWhiteText
                ? 'border-white/40 text-white'
                : 'border-ink/15 text-ink'
            )}
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden border-t border-ink/10 bg-cream lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => {
                const hasChildren =
                  !!link.children?.length

                const isOpen =
                  openDropdownId === link.id

                return (
                  <div key={link.id}>
                    {/* Parent */}
                    <button
                      onClick={() =>
                        handleMobileLink(link)
                      }
                      className={cn(
                        'flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-ink/85 transition-colors',
                        isOpen
                          ? 'bg-white text-ink'
                          : 'hover:bg-white'
                      )}
                    >
                      <span>{link.label}</span>

                      {hasChildren && (
                        <ChevronIcon
                          className={cn(
                            'h-5 w-5 transition-transform duration-200',
                            isOpen && 'rotate-180'
                          )}
                        />
                      )}
                    </button>

                    {/* Children */}
                    <AnimatePresence initial={false}>
                      {hasChildren && isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 mt-1 border-l border-ink/10 pl-3">
                            {link.children!.map(
                              (child) => (
                                <button
                                  key={child.label}
                                  onClick={() =>
                                    goTo(child.href)
                                  }
                                  className="block w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium text-ink/70 transition-colors hover:bg-white hover:text-ink"
                                >
                                  {child.label}
                                </button>
                              )
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}

              {/* Mobile Contact */}
              <button
                onClick={() =>
                  goTo('/contact-us')
                }
                className="mt-2 rounded-full bg-lime px-6 py-3 text-center text-sm font-semibold text-ink"
              >
                Contact Us
              </button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}