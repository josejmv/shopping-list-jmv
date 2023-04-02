// main tools
import { useState, useEffect } from 'react'
import Link from 'next/link'

// components
import { WebsiteLogo } from '@atoms/WebsiteLogo'

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
import { ListDataType } from 'types/List'
import { FC } from 'react'

export const Sidebar: FC = () => {
  const { handleShowManageList } = useApp()
  const [lists, setLists] = useState<ListDataType[]>()

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
          <WebsiteLogo />
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
      <Button onClick={handleShowManageList} className={classes.button_outline}>
        <PlusCircle className={classes.icon} size={32} />
        <span className={classes.text}>Agregar lista</span>
      </Button>
    </aside>
  )
}
