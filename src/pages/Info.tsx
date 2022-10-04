import {
  Card,
  CardBg,
  CardContent,
  CardHeader,
  Container,
  ItemTitle,
} from '../components/styled/components.styled'

import { Shield } from '../components/Shield'

export const Info = () => {
  return (
    <Container
      style={{
        marginTop: '2rem',

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <CardBg>
          <Card>
            <CardHeader>Project informations</CardHeader>

            <div style={{ padding: '0 2rem' }}>
              <ItemTitle>
                <div>Api endpoint</div>
              </ItemTitle>

              <CardContent
                style={{
                  padding: '2rem 1rem 2rem 1rem',
                  border: '3px solid #005288',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <a href='https://api.spacex.land/graphql/' target='_blank' rel='noreferrer'>
                    <img src='/static/images/info/images.png' alt='GraphQL logo' width={'100%'} />
                  </a>
                </div>
              </CardContent>
            </div>

            <div style={{ padding: '0 2rem' }}>
              <ItemTitle>
                <div>Technologies used</div>
              </ItemTitle>

              <CardContent
                style={{
                  padding: '2rem 1rem 2rem 1rem',
                  border: '3px solid #005288',
                  justifyContent: 'center',
                }}
              >
                <Shield title='React' color='61DAFB' url='https://reactjs.org/' />

                <Shield title='React Router' color='F44250' url='https://reactrouter.com/en/main' />
                <Shield title='Redux Toolkit' color='593D88' url='https://redux-toolkit.js.org/' />
                <Shield
                  title='Styled Components'
                  color='3C3C3C'
                  url='https://styled-components.com/'
                />
                <Shield
                  title='React Bootstrap'
                  color='61DAFB'
                  url='https://react-bootstrap.github.io/'
                />
              </CardContent>
            </div>
          </Card>
        </CardBg>
      </div>
    </Container>
  )
}
