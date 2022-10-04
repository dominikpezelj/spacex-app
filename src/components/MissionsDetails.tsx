import 'animate.css/animate.min.css'
import '../common/animate.min.css'
import '../common/index.css'

import { useEffect, useState } from 'react'

import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Button } from 'react-bootstrap'
import { ImageCarousel } from './Carousel'
import { LoadingSpinner } from './LoadingSpinner'
import ReactPlayer from 'react-player'
import { ShipModal } from './Modal'
import styled from 'styled-components'
import { useGetMissionById } from '../hooks/useGetMissionById'
import { usePrepareData } from '../hooks/usePrepareData'

const CardBg = styled.div`
  background: #005288;
  padding: 2rem;
  border-radius: 20px;
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'row',
`

const Card = styled.div`
  background: #dfddda;
  padding: 2rem;
  flex: 1;
  border-radius: 20px;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  border-bottom: 3px solid #005288;
`
const CardBody = styled.div`
  padding: 1rem;
`

const CardText = styled.div`
  text-align: justify;
  text-justify: inter-word;
`
const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 3px solid #005288;
  align-items: center;
  @media (max-width: 600px) {
    display: block;
  }
`
const CardItemTitle = styled.div`
  font-weight: 600;
`
const CardItemValue = styled.div`
  background: #005288;
  padding: 0.2rem 1rem 0.2rem 1rem;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  border-radius: 10px;
  color: white;
`
const Alert = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #005288;
  border-radius: 1rem;
  color: white;
  padding: 0.5rem 0 0.5rem 0;
`

const ItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #005288;
  text-transform: uppercase;
  font-weight: 600;
  color: white;
  margin-top: 2rem;
`
type MissionsDetailsProps = {
  missionId: string
}

export const MissionsDetails = ({ missionId }: MissionsDetailsProps) => {
  const { missionDetailsList } = useGetMissionById(missionId)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { launchDetailsList, rocketDetailsList } = usePrepareData(missionDetailsList!)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (missionDetailsList) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }, [missionDetailsList])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <CardBg>
        <Card>
          <CardHeader>Mission details</CardHeader>
          <AnimationOnScroll animateIn='animate__fadeIn' duration={2}>
            <CardBody>
              <CardText>{isLoading ? <LoadingSpinner /> : missionDetailsList?.details}</CardText>
              {!missionDetailsList?.details && (
                <Alert>
                  <div>There is no provided details about this mission.</div>
                </Alert>
              )}
            </CardBody>
          </AnimationOnScroll>
        </Card>
      </CardBg>

      <CardBg>
        <CardContent>
          <Card>
            <CardHeader>Launching video</CardHeader>
            <AnimationOnScroll animateIn='animate__fadeIn' duration={2}>
              <CardBody>
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <ReactPlayer
                    url={missionDetailsList?.links.video_link}
                    controls={true}
                    width={'flex: 1'}
                  />
                )}
                {!missionDetailsList?.links.video_link && (
                  <Alert>
                    <div>There is no provided video about this mission.</div>
                  </Alert>
                )}
              </CardBody>
            </AnimationOnScroll>
          </Card>
          <Card>
            <CardHeader>Launch details</CardHeader>
            <AnimationOnScroll animateIn='animate__fadeIn' duration={2}>
              <CardBody>
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  launchDetailsList.map((item) => {
                    return (
                      <CardItem key={item.text}>
                        <CardItemTitle>{item.text}</CardItemTitle>
                        <CardItemValue>{item.value}</CardItemValue>
                      </CardItem>
                    )
                  })
                )}
              </CardBody>
            </AnimationOnScroll>
          </Card>
        </CardContent>
      </CardBg>

      <CardBg>
        <CardContent>
          <Card>
            <CardHeader>Rocket description</CardHeader>
            <AnimationOnScroll animateIn='animate__fadeIn' duration={2}>
              <CardBody>
                <CardText>
                  {isLoading && <LoadingSpinner />}
                  {missionDetailsList?.rocket.rocket.description &&
                    missionDetailsList?.rocket.rocket.description}
                  {!missionDetailsList?.rocket.rocket.description && (
                    <Alert>
                      <div>There is no provided images about this mission.</div>
                    </Alert>
                  )}
                </CardText>
              </CardBody>
            </AnimationOnScroll>
          </Card>
          <Card>
            <CardHeader>Rocket details</CardHeader>
            <AnimationOnScroll animateIn='animate__fadeIn' duration={2}>
              <CardBody>
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  rocketDetailsList.map((item) => {
                    return (
                      <CardItem key={item.text}>
                        <CardItemTitle>{item.text}</CardItemTitle>
                        <CardItemValue>{item.value}</CardItemValue>
                      </CardItem>
                    )
                  })
                )}
              </CardBody>
            </AnimationOnScroll>
          </Card>
        </CardContent>
      </CardBg>

      <CardBg>
        <Card>
          <CardHeader>Ship details</CardHeader>

          {missionDetailsList && missionDetailsList.ships.length === 0 && (
            <Alert>There is no ship details to display.</Alert>
          )}

          <div style={{ padding: '0 2rem', marginBottom: '2rem' }}>
            {missionDetailsList?.ships &&
              missionDetailsList.ships.map((item) => {
                return (
                  <AnimationOnScroll animateIn='animate__fadeIn' duration={2} key={item.name}>
                    <div>
                      <ItemTitle>
                        <div>{item.name}</div>{' '}
                        <Button
                          variant='primary'
                          onClick={() => {
                            return setIsModalOpen(true)
                          }}
                        >
                          Missions
                        </Button>
                      </ItemTitle>

                      <CardContent
                        style={{
                          padding: '2rem 1rem 1rem 1rem',

                          border: '3px solid #005288',
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          {item.image && (
                            <img
                              src={item.image}
                              alt='Ship image'
                              width={'100%'}
                              style={{ borderRadius: '5px', maxHeight: '210px' }}
                            />
                          )}
                          {!item.image && <Alert>There is no image of the ship.</Alert>}
                        </div>
                        <div
                          style={{
                            flex: 1,
                          }}
                        >
                          <CardItem style={{ borderTop: '3px solid #005288' }}>
                            <CardItemTitle>Home port</CardItemTitle>
                            <CardItemValue>
                              {item.home_port && item.home_port} {!item.home_port && '/'}
                            </CardItemValue>
                          </CardItem>
                          <CardItem>
                            <CardItemTitle>Class</CardItemTitle>
                            <CardItemValue>
                              {item.class && item.class} {!item.class && '/'}
                            </CardItemValue>
                          </CardItem>
                          <CardItem>
                            <CardItemTitle>Model</CardItemTitle>
                            <CardItemValue>
                              {item.model && item.model} {!item.model && '/'}
                            </CardItemValue>
                          </CardItem>
                          <CardItem>
                            <CardItemTitle>Year built</CardItemTitle>
                            <CardItemValue>
                              {item.year_built && item.year_built} {!item.year_built && '/'}
                            </CardItemValue>
                          </CardItem>
                        </div>
                      </CardContent>

                      <ShipModal
                        missions={item.missions}
                        missionsCount={item.missions.length}
                        show={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                      ></ShipModal>
                    </div>
                  </AnimationOnScroll>
                )
              })}
          </div>
        </Card>
      </CardBg>

      <CardBg>
        <Card>
          <CardHeader>Media content</CardHeader>
          <CardContent style={{ padding: '2rem 1rem 1rem 1rem' }}>
            {isLoading && <LoadingSpinner />}
            {missionDetailsList && missionDetailsList?.links?.flickr_images.length > 0 && (
              <ImageCarousel images={missionDetailsList.links.flickr_images} />
            )}

            {missionDetailsList?.links.flickr_images.length === 0 && (
              <Alert>
                <div>There is no provided images about this mission.</div>
              </Alert>
            )}

            <div
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div>
                <AnimationOnScroll animateIn='animate__fadeIn' duration={2}>
                  <CardContent style={{ marginBottom: '2rem', alignContent: 'center' }}>
                    {!missionDetailsList?.links.reddit_media ? (
                      ''
                    ) : (
                      <a
                        href={missionDetailsList.links.reddit_media}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img src='/static/images/logo/reddit.svg' width={200} />
                      </a>
                    )}

                    {!missionDetailsList?.links.article_link ? (
                      ''
                    ) : (
                      <a
                        href={missionDetailsList.links.article_link}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img src='/static/images/logo/news.svg' width={70} />
                      </a>
                    )}
                  </CardContent>
                  <CardContent style={{ alignItems: 'center' }}>
                    {!missionDetailsList?.links.presskit ? (
                      ''
                    ) : (
                      <a href={missionDetailsList.links.presskit} target='_blank' rel='noreferrer'>
                        <img src='/static/images/logo/spacex.svg' width={200} />
                      </a>
                    )}

                    {!missionDetailsList?.links.wikipedia ? (
                      ''
                    ) : (
                      <a href={missionDetailsList.links.wikipedia} target='_blank' rel='noreferrer'>
                        <img src='/static/images/logo/wiki.svg' width={100} />
                      </a>
                    )}
                  </CardContent>
                </AnimationOnScroll>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardBg>
    </div>
  )
}
