import React from 'react'
import Link from 'next/link'
import getConfig from 'next/config'

//check next.config.js to read about it
const prefix = getConfig().publicRuntimeConfig.basePath

export default () => (
  <div>
    <div>About</div>
    <Link href={`${prefix}/index`}><a>to index</a></Link>
  </div>
)

