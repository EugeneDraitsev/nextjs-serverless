import React from 'react'
import Link from 'next/link'
import getConfig from 'next/config'

const prefix = getConfig().publicRuntimeConfig.basePath || ''

export default () => (
  <div>
    <div>About</div>
    <Link href={`${prefix}/index`}>to index</Link>
  </div>
)

