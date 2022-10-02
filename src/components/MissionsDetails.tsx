import { useEffect, useState } from 'react'

import { ImageCarousel } from './Carousel'
import { LoadingSpinner } from './LoadingSpinner'
import ReactPlayer from 'react-player'
import Stack from 'react-bootstrap/Stack'
import styled from 'styled-components'
import { useGetMissionById } from '../hooks/useGetMissionById'
import { usePrepareData } from '../hooks/usePrepareData'

const CardBg = styled.div`
  background: #005288;
  padding: 2rem;
  border-radius: 20px;
`

const Card = styled.div`
  background: #dfddda;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 20px;
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
type MissionsDetailsProps = {
  missionId: string
}

export const MissionsDetails = ({ missionId }: MissionsDetailsProps) => {
  const { missionDetailsList } = useGetMissionById(missionId)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { launchDetailsList, rocketDetailsList } = usePrepareData(missionDetailsList!)

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
          <CardBody>
            <CardText>{isLoading ? <LoadingSpinner /> : missionDetailsList?.details}</CardText>
          </CardBody>
        </Card>
      </CardBg>

      <CardBg
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
        }}
      >
        <Card style={{ maxWidth: '50%' }}>
          <CardHeader>Launching video</CardHeader>
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
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Launch details</CardHeader>
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
        </Card>
      </CardBg>

      <CardBg
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
        }}
      >
        <Card style={{ maxWidth: '50%' }}>
          <CardHeader>Rocket description</CardHeader>
          <CardBody
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}
          >
            <CardText>
              {isLoading ? <LoadingSpinner /> : missionDetailsList?.rocket.rocket.description}
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Rocket details</CardHeader>
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
        </Card>
      </CardBg>

      <CardBg>
        <Card>
          <CardHeader>Ship details</CardHeader>
          <CardBody
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <img
              src='https://i.imgur.com/28dCx6G.jpg'
              alt='Ship image'
              width={'45%'}
              style={{ borderRadius: '5px' }}
            />
            <div style={{ width: '50%' }}>
              <CardItem>
                <CardItemTitle>Test</CardItemTitle>
                <CardItemValue>test2</CardItemValue>
              </CardItem>
              <CardItem>
                <CardItemTitle>Test</CardItemTitle>
                <CardItemValue>test2</CardItemValue>
              </CardItem>
              <CardItem>
                <CardItemTitle>Test</CardItemTitle>
                <CardItemValue>test2</CardItemValue>
              </CardItem>
              <CardItem>
                <CardItemTitle>Test</CardItemTitle>
                <CardItemValue>test2</CardItemValue>
              </CardItem>
              <CardItem>
                <CardItemTitle>Test</CardItemTitle>
                <CardItemValue>test2</CardItemValue>
              </CardItem>
            </div>
          </CardBody>
        </Card>
      </CardBg>

      <CardBg>
        <Card>
          <CardHeader>Media content</CardHeader>
          <CardBody
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            {isLoading ||
            !missionDetailsList ||
            missionDetailsList?.links.flickr_images.length === 0 ? (
              <LoadingSpinner />
            ) : (
              <ImageCarousel images={missionDetailsList.links.flickr_images} />
            )}

            <div
              style={{
                display: 'flex',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div>
                <Stack direction='horizontal' gap={5} style={{ marginBottom: '2rem' }}>
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
                </Stack>
                <Stack direction='horizontal' gap={5}>
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
                </Stack>
              </div>
            </div>
          </CardBody>
        </Card>
      </CardBg>
    </div>
  )
}
