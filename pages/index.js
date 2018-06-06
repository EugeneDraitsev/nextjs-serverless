import React from 'react'
import Link from 'next/link'
import getConfig from 'next/config'

//check next.config.js to read about it
const prefix = getConfig().publicRuntimeConfig.basePath

export default () => (
  <div>
    <div>Index</div>
    <Link href={`${prefix}/about`}><a>to about</a></Link>
  </div>
)
