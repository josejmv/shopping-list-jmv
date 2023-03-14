// next components
import Link from 'next/link'

// bootstrap icons
import { Cart } from 'react-bootstrap-icons'

// styles
import classes from './styles.module.scss'

// types
import { FC } from 'react'

export const Logo: FC = () => (
  <Link href='/' className={classes.logo}>
    <Cart size={32} />
  </Link>
)
