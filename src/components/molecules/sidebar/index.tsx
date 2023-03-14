// main tools
import { useState, useEffect } from 'react'
import Link from 'next/link'

// components
import { Logo } from '@atoms/logo'

// hooks
import { useApp } from 'hooks/app/useApp'

// prime components
import { Skeleton } from 'primereact/skeleton'
import { Divider } from 'primereact/divider'

// bootstrap components
import { PlusCircle } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'

// styles
import classes from './styles.module.scss'

// main tools
import { Icon } from 'react-bootstrap-icons'
import { FC } from 'react'

type listDataType = { label: string; href: string; icon: Icon }

export const Sidebar: FC = () => {
  const { handleShowCreate } = useApp()
  const [lists, setLists] = useState<listDataType[]>()

  useEffect(() => {
    ;(async () => {
      const res = window.localStorage.getItem('lists')

      console.log(res)

      setLists([])
    })()
  }, [])

  return (
    <aside className={classes.sidebar}>
      <section className={classes.header}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <p className={classes.title}>Shopping list</p>
      </section>

      <Divider className={classes.divider} />

      {!lists && <Skeleton height='2rem' />}
      {lists &&
        lists.map((List) => (
          <Link passHref key={List.label} href={List.href}>
            <Button className={classes.button_outline}>
              <List.icon className={classes.icon} size={32} />
              <span className={classes.text}>{List.label}</span>
            </Button>
          </Link>
        ))}
      <Button onClick={handleShowCreate} className={classes.button_outline}>
        <PlusCircle className={classes.icon} size={32} />
        <span className={classes.text}>Agregar lista</span>
      </Button>
    </aside>
  )
}
