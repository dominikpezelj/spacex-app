import { gql } from 'graphql-request'

export const GET_ALL_LAUNCHES = gql`
  query {
    launches {
      id
      mission_name
      rocket {
        rocket_name
      }
      launch_date_local
      launch_success
    }
  }
`

export const GET_MISSION_BY_ID = gql`
  query ($id: ID!) {
    launch(id: $id) {
      details
      launch_site {
        site_name
        site_name_long
      }
      launch_success
      mission_name
      rocket {
        rocket {
          company
          country
          cost_per_launch
          description
          engines {
            number
          }
          name
          type
          wikipedia
        }
      }
      ships {
        home_port
        class
        image
        missions {
          flight
          name
        }
        model
        name
        year_built
      }
      links {
        video_link
        wikipedia
        flickr_images
        mission_patch
        presskit
        article_link
        reddit_media
      }
      launch_date_local
    }
  }
`
