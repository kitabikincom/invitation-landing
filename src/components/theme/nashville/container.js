import { useState } from 'react'
import Head from 'next/head'
import _ from 'lodash'
import { Box } from '@chakra-ui/react'

import FeatureKepada from '@/components/theme/nashville/featureKepada'
import FeatureMusik from '@/components/theme/nashville/featureMusik'
import FeatureSampul from '@/components/theme/nashville/featureSampul'
import FeaturePembukaan from '@/components/theme/nashville/featurePembukaan'
import FeatureQuotes from '@/components/theme/nashville/featureQuotes'
import FeatureDetailUnduh from '@/components/theme/nashville/featureDetailUnduh'
import FeatureDetailAkad from '@/components/theme/nashville/featureDetailAkad'
import FeatureDetailResepsi from '@/components/theme/nashville/featureDetailResepsi'
import FeatureCountdownTimer from '@/components/theme/nashville/featureCountdownTimer'
import FeaturePenutupan from '@/components/theme/nashville/featurePenutupan'
import FeatureLiveWedding from '@/components/theme/nashville/featureLiveWedding'
import FeatureTurutMengundang from '@/components/theme/nashville/featureTurutMengundang'
import FeaturePanduanTamu from '@/components/theme/nashville/featurePanduanTamu'
import FeatureProtokolKesehatan from '@/components/theme/nashville/featureProtokolKesehatan'

function Container({ options, data }) {
  const [display, setDisplay] = useState('block')
  const [isPlaying, setIsPlaying] = useState(false)

  // Get Data ==================================================================
  // Feature
  const feature = data.feature.reduce(
    (obj, item) => Object.assign(obj, { [item.code]: item }),
    {}
  )
  const {
    [`${options.code}-kepada`]: fKepada,
    [`${options.code}-musik`]: fMusik,
    [`${options.code}-sampul`]: fSampul,
    [`${options.code}-pembukaan`]: fPembukaan,
    [`${options.code}-quotes`]: fQuotes,
    [`${options.code}-detailUnduh`]: fDetailUnduh,
    [`${options.code}-detailAkad`]: fDetailAkad,
    [`${options.code}-detailResepsi`]: fDetailResepsi,
    [`${options.code}-countdownTimer`]: fCountdownTimer,
    [`${options.code}-penutupan`]: fPenutupan,
    [`${options.code}-liveWedding`]: fLiveWedding,
    [`${options.code}-turutMengundang`]: fTurutMengundang,
    [`${options.code}-panduanTamu`]: fPanduanTamu,
    [`${options.code}-protokolKesehatan`]: fProtokolKesehatan,
  } = feature

  // General
  const codeGeneral = `${options.code}-general`
  const general = feature[codeGeneral].column.reduce(
    (obj, item) => Object.assign(obj, { [item.code]: item }),
    {}
  )
  const {
    [`${codeGeneral}-bgColor`]: generalBgColor,
    [`${codeGeneral}-colorBody`]: generalColorBody,
    [`${codeGeneral}-bgLeaf`]: generalBgLeaf,
    [`${codeGeneral}-bgSection1`]: generalBgSection1,
    [`${codeGeneral}-bgSection2`]: generalBgSection2,
    [`${codeGeneral}-bgSection3`]: generalBgSection3,
  } = general

  // Function ==================================================================
  function handleClickKepada() {
    setDisplay('none')
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/fonts/nashville/nashville.css" />
      </Head>
      <Box color={generalColorBody.value} fontFamily="nashvilleBody">
        {/* Musik */}
        <Box zIndex="400">
          {fMusik && fMusik.is_active && (
            <FeatureMusik
              options={options}
              feature={feature}
              isPlaying={isPlaying}
              onPlayingChange={() => setIsPlaying(!isPlaying)}
            />
          )}
        </Box>

        <Box
          position="fixed"
          h="full"
          w="full"
          zIndex="500"
          bg={generalBgColor.value}
          opacity="1"
          overflowY="hidden"
          display={display}
        >
          {/* Kepada */}
          {fKepada && fKepada.is_active && (
            <FeatureKepada
              options={options}
              feature={feature}
              display={display}
              onDisplayChange={handleClickKepada}
            />
          )}
        </Box>

        <Box zIndex="300">
          {/* Sampul */}
          {fSampul && fSampul.is_active && (
            <FeatureSampul options={options} feature={feature} />
          )}
        </Box>

        <Box
          position="relative"
          py="24"
          _before={{
            bgImage: `url('${generalBgSection1.value}')`,
            bgPosition: 'top right',
            bgRepeat: 'no-repeat',
            bgSize: 'contain',
            content: "''",
            display: 'block',
            height: { base: '234px', md: '160px' },
            width: { base: 'calc(100% + 130px)', md: '100%' },
            zIndex: '99',
            position: 'absolute',
            top: { base: '-70px', md: '-100px' },
            right: { base: '-65px', md: '-90px' },
          }}
        >
          {/* Pembukaan */}
          {fPembukaan && fPembukaan.is_active && (
            <FeaturePembukaan options={options} feature={feature} />
          )}

          {/* Quotes */}
          {fQuotes && fQuotes.is_active && (
            <FeatureQuotes options={options} feature={feature} />
          )}
        </Box>

        <Box
          position="relative"
          pt="24"
          _before={{
            bgImage: `url('${generalBgLeaf.value}')`,
            bgPosition: 'top left',
            bgRepeat: 'no-repeat',
            bgSize: 'contain',
            content: "''",
            display: 'block',
            height: { base: '234px', md: '260px' },
            width: { base: 'calc(100% + 130px)', md: '100%' },
            zIndex: '99',
            position: 'absolute',
            top: { base: '-90px', md: '-100px' },
            left: { base: '-65px', md: '-70px' },
          }}
          _after={{
            bgImage: `url('${generalBgSection2.value}')`,
            bgPosition: 'top right',
            bgRepeat: 'no-repeat',
            bgSize: 'contain',
            content: "''",
            display: 'block',
            height: { base: '234px', md: '160px' },
            width: { base: 'calc(100% + 500px)', md: '100%' },
            zIndex: '99',
            position: 'absolute',
            top: { base: '-90px', md: '-100px' },
            right: { base: '-650px', md: '-550px' },
          }}
        >
          {/* Detail Unduh */}
          {fDetailUnduh && fDetailUnduh.is_active && (
            <FeatureDetailUnduh options={options} feature={feature} />
          )}

          {/* Detail Akad */}
          {fDetailAkad && fDetailAkad.is_active && (
            <FeatureDetailAkad options={options} feature={feature} />
          )}

          {/* Detail Resepsi */}
          {fDetailResepsi && fDetailResepsi.is_active && (
            <FeatureDetailResepsi options={options} feature={feature} />
          )}

          {/* Countdown Timer */}
          {fCountdownTimer && fCountdownTimer.is_active && (
            <FeatureCountdownTimer options={options} feature={feature} />
          )}

          {/* Penutupan */}
          {fPenutupan && fPenutupan.is_active && (
            <FeaturePenutupan options={options} feature={feature} />
          )}
        </Box>

        <Box
          position="relative"
          py="24"
          _before={{
            bgImage: `url('${generalBgSection3.value}')`,
            bgPosition: 'top left',
            bgRepeat: 'no-repeat',
            bgSize: 'contain',
            content: "''",
            display: 'block',
            height: { base: '234px', md: '160px' },
            width: { base: 'calc(100% + 130px)', md: '100%' },
            zIndex: '99',
            position: 'absolute',
            top: { base: '10px', md: '-10px' },
            left: { base: '-110px', md: '-260px' },
          }}
        >
          {/* Live Wedding */}
          {fLiveWedding && fLiveWedding.is_active && (
            <FeatureLiveWedding options={options} feature={feature} />
          )}

          {/* TurutMengundang */}
          {fTurutMengundang && fTurutMengundang.is_active && (
            <FeatureTurutMengundang options={options} feature={feature} />
          )}

          {/* PanduanTamu */}
          {fPanduanTamu && fPanduanTamu.is_active && (
            <FeaturePanduanTamu options={options} feature={feature} />
          )}

          {/* ProtokolKesehatan */}
          {fProtokolKesehatan && fProtokolKesehatan.is_active && (
            <FeatureProtokolKesehatan options={options} feature={feature} />
          )}
        </Box>
      </Box>
    </>
  )
}

export default Container