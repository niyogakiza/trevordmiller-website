import React from 'react'
import Screen from '../components/Screen'
import Teaser from '../components/Teaser'

export const baseRoutes = {
  courses: {
    path: 'https://trevordmiller.teachable.com',
    title: 'Courses',
    description: 'Timeless courses for coders',
    visual: 'film',
  },

  blog: {
    path: '/blog',
    title: 'Blog',
    description: 'Timeless articles for coders',
    visual: 'newspaper',
  },

  projects: {
    path: '/projects',
    title: 'Projects',
    description: 'Information about my own code projects',
    visual: 'stack',
  },

  about: {
    path: '/about',
    title: 'About',
    description: 'A bit about me',
    visual: 'profile',
  },

  follow: {
    path: '/follow',
    title: 'Follow',
    description:
      'Follow along with my email list and other accounts accross the web',
    visual: 'userPlus',
  },
}

export const baseRouteKeys = Object.keys(baseRoutes)

export default () =>
  <Screen
    mainVisual="/static/trevordmiller-website.png"
    pathname="https://trevordmiller.com"
    title="Home"
    description="Links to each section of the website"
    sections={baseRouteKeys.map((baseRouteKey, index) => {
      const baseRoute = baseRoutes[baseRouteKey]

      return {
        title: baseRoute.title,
        component: (
          <Teaser
            key={index}
            visual={baseRoute.visual}
            description={baseRoute.description}
            links={[
              {
                description: `View ${baseRoute.title} page`,
                href: baseRoute.path,
              },
            ]}
          />
        ),
      }
    })}
  />
