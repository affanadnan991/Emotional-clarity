import gsap from 'gsap'

export const animateIn = (element: HTMLElement, delay = 0) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out',
    }
  )
}

export const animateHover = (element: HTMLElement) => {
  gsap.to(element, {
    scale: 1.02,
    duration: 0.3,
    ease: 'power2.out',
  })
}

export const animateHoverOut = (element: HTMLElement) => {
  gsap.to(element, {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out',
  })
}

export const staggerChildren = (
  elements: HTMLElement[],
  staggerDelay = 0.1
) => {
  elements.forEach((el, index) => {
    animateIn(el, index * staggerDelay)
  })
}
