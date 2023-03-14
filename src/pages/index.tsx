// main tools
import { useState, useEffect } from 'react'
import Link from 'next/link'

// hooks
import { useApp } from 'hooks/app/useApp'

// prime components
import { Skeleton } from 'primereact/skeleton'

// bootstrap components
import { AlignStart, PlusCircle } from 'react-bootstrap-icons'
import { Row, Col, Button } from 'react-bootstrap'

// styles
import classes from '@styles/pages/home.module.scss'

// types
import { Icon } from 'react-bootstrap-icons'
import { NextPage } from 'next/types'

type listDataType = { label: string; href: string; icon: Icon }

const Home: NextPage = () => {
  const { handleShowCreate } = useApp()
  const [lists, setLists] = useState<(listDataType | never)[]>()

  useEffect(() => {
    ;(async () => {
      const res = window.localStorage.getItem('lists')

      console.log(res)

      setLists([])
    })()
  }, [])

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>
        Shopping list
        <span className={classes.title_label}>Made by</span>
        <span className={classes.title_name}>JoseJMV</span>
      </h1>

      <section>
        <h2 className={classes.subtitle}>
          <AlignStart /> List
        </h2>

        <Row className={classes.list}>
          {!lists && (
            <Col xs={2}>
              <Skeleton height='2rem' />
            </Col>
          )}
          {lists &&
            lists.map((Item, idx) => (
              <Col key={idx} xs={2}>
                <Link className={classes.item} href={Item.href}>
                  <Item.icon size={32} className='me-2' />{' '}
                  <div>{Item.label}</div>
                </Link>
              </Col>
            ))}
          <Col xs={3}>
            <Button
              onClick={handleShowCreate}
              className={classes.button_outline}>
              <PlusCircle className={classes.icon} size={32} />
              <span className={classes.text}>Agregar lista</span>
            </Button>
          </Col>
        </Row>
      </section>
    </main>
  )
}

export default Home
