import styled from 'styled-components'

export const HeaderStyled = styled.div`
  position: relative;
  background: url('/static/images/header/header_1.jpg') no-repeat;
  background-size: cover;
  height: 30rem;
`

export const HeaderContent = styled.div`
  position: absolute;
  top: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
`

export const SpinnerElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const SpinnerText = styled.div`
  display: flex;
  margin-left: 1rem;
  font-weight: bold;
`

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
`

export const LogoText = styled.div`
    font-size: 25px,
    font-weight: bold,
    letter-spacing: 2px,
    color: white,
    line-height: 1rem,
`

export const CardBg = styled.div`
  background: #005288;
  padding: 2rem;
  border-radius: 20px;
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'row',
`

export const Card = styled.div`
  background: #dfddda;
  padding: 2rem;
  flex: 1;
  border-radius: 20px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  border-bottom: 3px solid #005288;
`
export const CardBody = styled.div`
  padding: 1rem;
`

export const CardText = styled.div`
  text-align: justify;
  text-justify: inter-word;
`
export const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 3px solid #005288;
  align-items: center;
  @media (max-width: 600px) {
    display: block;
  }
`
export const CardItemTitle = styled.div`
  font-weight: 600;
`
export const CardItemValue = styled.div`
  background: #005288;
  padding: 0.2rem 1rem 0.2rem 1rem;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  border-radius: 10px;
  color: white;
`
export const Alert = styled.div`
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

export const ItemTitle = styled.div`
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

export const Container = styled.div`
  padding-top: 4rem;
  padding-bottom: 9rem;
`

export const FlightValue = styled.div`
  background: #005288;
  padding: 0.2rem 1rem 0.2rem 1rem;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  border-radius: 10px;
  color: white;
`

export const NavigationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  background: #005288;
  color: white;
  padding-left: 5rem;
  padding-right: 5rem;
`

export const MenuItems = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  text-transform: uppercase;
`

export const LaunchStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 1rem 0.3rem 1rem;
  border-radius: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid #005288;
`
export const ParallaxText = styled.div`
  text-align: center;
  font-family: roboto, sans-serif;
  font-weight: 400;
  color: white;
  font-size: 5vw;
  text-shadow: -0.04em 0.04em 0 #000, 0.04em 0.04em 0 #000, 0.04em -0.04em 0 #000,
    -0.04em -0.04em 0 #000;
`

export const ParallaxTextSm = styled.div`
  text-align: center;
  font-family: roboto, sans-serif;
  font-weight: 400;
  color: white;
  font-size: 3vw;
  text-shadow: -0.04em 0.04em 0 #000, 0.04em 0.04em 0 #000, 0.04em -0.04em 0 #000,
    -0.04em -0.04em 0 #000;
`
export const ContentWrapper = styled.div`
  background: #dfddda;
  display: block;
  min-height: 100vh;
  flex-direction: column;
`
export const ContainerMain = styled.div`
  max-width: 100%;
  padding: 0 5rem;
  margin: 0 auto;
`
