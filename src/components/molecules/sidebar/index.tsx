// main tools
import Link from 'next/link'

// components
import { WebsiteLogo } from '@atoms/website-logo'

// hooks
import { useApp } from 'hooks/app/useApp'

// prime components
import { Skeleton } from 'primereact/skeleton'
import { Divider } from 'primereact/divider'

// bootstrap components
import { BagCheck, PlusCircle } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'

// styles
import classes from './styles.module.scss'

// main tools
import { FC } from 'react'

export const Sidebar: FC = () => {
  const { handleShowManageList, lists } = useApp()

  return (
    <aside className={classes.sidebar}>
      <section className={classes.header}>
        <div className={classes.logo}>
          <WebsiteLogo />
        </div>
        <p className={classes.title}>Shopping list</p>
      </section>

      <Divider className={classes.divider} />

      {!lists && <Skeleton className={classes.skeleton} height='2rem' />}
      {lists &&
        lists.map((List) => (
          <Link passHref key={List.href} href={List.href}>
            <Button className={classes.button_outline}>
              <BagCheck className={classes.icon} size={32} />
              <span className={classes.text}>{List.label}</span>
            </Button>
          </Link>
        ))}
      <Button
        onClick={() => handleShowManageList()}
        className={classes.button_outline}>
        <PlusCircle className={classes.icon} size={32} />
        <span className={classes.text}>Agregar lista</span>
      </Button>
    </aside>
  )
}
