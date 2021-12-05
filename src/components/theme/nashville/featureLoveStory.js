import Image from 'next/image'
import _ from 'lodash'
import { Container, Box, Text } from '@chakra-ui/react'

function FeatureLoveStory({ ...props }) {
  // Get Data ==================================================================
  // General
  const codeGeneral = `${props.options.code}-general`
  const general = props.feature[codeGeneral].column.reduce(
    (obj, item) => Object.assign(obj, { [item.code]: item }),
    {}
  )
  const { [`${codeGeneral}-bgHr`]: generalBgHr } = general

  // LoveStory
  const codeLoveStory = `${props.options.code}-loveStory`
  const loveStory = props.feature[codeLoveStory].column.reduce(
    (obj, item) => Object.assign(obj, { [item.code]: item }),
    {}
  )
  const {
    [`${codeLoveStory}-title`]: loveStoryTitle,
    [`${codeLoveStory}-instagram`]: loveStoryInstagram,
  } = loveStory

  return (
    <>
      <Container h="full" maxW="4xl" centerContent py="14" px="10">
        <Box position="relative" h="full" w="full" textAlign="center">
          {/* General Hr */}
          <Box mb="4">
            <Image
              src={generalBgHr.value}
              alt={generalBgHr.label}
              width="100"
              height="42.77"
            />
          </Box>

          {/* Live Wedding Title */}
          {loveStoryTitle && loveStoryTitle.is_active && (
            <Text fontFamily="nashvilleHeading" fontSize="3xl">
              {loveStoryTitle.value}
            </Text>
          )}
        </Box>
      </Container>
    </>
  )
}

export default FeatureLoveStory
