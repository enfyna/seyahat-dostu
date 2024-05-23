import Footer from '@/components/Footer'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import '~/css/tailwind.css'

createInertiaApp({
  title: () => `Seyahat Dostu`,
  resolve: (name) => require(`./pages/${name}`),
  setup({ el, App, props }) {
    createRoot(el).render(
      <>
        <App {...props} />
        <Footer></Footer>
      </>
    )
  }
})
