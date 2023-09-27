import { useEffect, useRef } from 'react'
import { useBlock } from '@dopt/react'
import RichText from '@dopt/react-rich-text'

function App() {
  const [block] = useBlock('DOPT_BLOCK_ID')

  // Create a ref for the rich text element so we can reach into it later
  const richtext = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const richtextEl = richtext.current;

    if (richtextEl) {
      // Select all the links in the rich text element
      // Links will always have the `.dopt-rich-text__link` class name
      const links = richtextEl.querySelectorAll('.dopt-rich-text__link')

      // If you only need to target a certain link, you can use a more specific selector
      // e.g., only target the second link
      // const links = richtextEl.querySelectorAll('.dopt-rich-text__link:nth-of-type(2)')

      // Iterate over each link and set target="_blank" and rel="noopener noreferrer"
      links.forEach((link) => {
        // You can also check for certain conditions here before setting these attributes
        // e.g., if the link contains certain text or points to a certain URL
        link.setAttribute('target', '_blank')
        link.setAttribute('rel', 'noopener noreferrer')
      })
    }
  }, [block])

  return (
    <RichText ref={richtext}>{block.field('body')}</RichText>
  )
}

export default App
