import clsx from 'clsx'

import styles from './IndexHeading.module.scss'

export default function IndexHeading() {
  return (
    <h1 className={clsx('my-4 text-center text-4xl', styles.heading)}>
      Awesome Next.js starter template
    </h1>
  )
}
