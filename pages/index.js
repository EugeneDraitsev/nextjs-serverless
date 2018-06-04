import React from 'react'
import Link from 'next/link'
import getConfig from 'next/config'

const prefix = getConfig().publicRuntimeConfig.basePath || ''

export default () => (
  <div>
    <div>Index</div>
    <Link href={`${prefix}/about`}>to about</Link>
  </div>
)

