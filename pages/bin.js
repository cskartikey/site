import { Box, Container, Text, Heading, Card, Flex, Image, Link } from "theme-ui";
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import { keyframes } from "@emotion/react";
import RsvpForm from "../components/bin/rsvp-form";

const RsvpCount = () => {
  const [rsvpCount, setRsvpCount] = useState(0)
  useEffect(async () => {
    // const url = 'https://api2.hackclub.com/v0.1/The Bin/rsvp'  <- switch to this once we have api2 back up and running
    const url = '/api/bin/rsvp'
    const results = await fetch(url).then(r => r.json())
    setRsvpCount(results)
  }, [])

  return (
    <Text>{100 - rsvpCount} RSVPs until the start of...</Text>
  )
}

const wobble = keyframes({
  from: { transform: 'rotate(15deg)' },
  to: { transform: 'rotate(20deg)' }
})

export default function Bin() {
  return (
    <>
      <Meta
        as={Head}
        title="The Bin"
        description="Jump in the trash!"
      />
      <Nav light />
      <Box as="main" sx={{ pt: '3em', bg: '#ECE9E0', textAlign: 'center' }}>
        <Container sx={{ position: 'relative' }}>
          <Box as="section" sx={{ textAlign: 'center', pt: '4em' }}>
            <Heading
              as="h1"
              variant="ultratitle"
              py={3}
              sx={{
                fontSize: "6em",
                '@media (prefers-reduced-motion: no-preference)': {
                  animation: `${wobble} 2.5s ease-in-out infinite alternate`
                },
              }}
            >
              🗑️
            </Heading>
            <RsvpCount />
            <Heading
              as="h1"
              variant="ultratitle"
              py={3}
            >
              The Bin
            </Heading>
            <Text sx={{ fontWeight: 'bold' }}>An electronics starter kit, customized for <em>your</em> project</Text>
          </Box>
          <Box as="section" sx={{ textAlign: 'center' }}>
            <Card sx={{ p: 3, mt: 4, mx: 'auto', maxWidth: '40ch' }}>
              <Text as="p">High schoolers can get a kit of electronics parts for free to build their first project.</Text>
              <Text as="p" sx={{ color: 'muted' }}>RSVP to get notified when applications open.</Text>
              <RsvpForm />
            </Card>
          </Box>
          <Box as="section" sx={{ textAlign: 'center', pt: '4em' }}>
            <Heading as="h2" variant="headline">Motors & lasers & mics, oh&nbsp;my!</Heading>
            <Box sx={{ textAlign: 'left' }}>
              <Flex sx={{ my: 4 }}>
                <Box>
                  <Text as="p"><b>1. Rummage</b></Text>
                  <Text>Dig through the bin to get a randomly generated set of parts (<em>or you can choose your own</em>).</Text>
                </Box>
                <Box>
                  <Image src="https://cloud-i547pyt1f-hack-club-bot.vercel.app/0idea.png" />
                </Box>
              </Flex>
              <Flex sx={{ my: 4 }}>
                <Box>
                  <Image src="https://cloud-i547pyt1f-hack-club-bot.vercel.app/0idea.png" />
                </Box>
                <Box>
                  <Text as="p"><b>2. Ideas</b></Text>
                  <Text>With your parts picked out, <b>what will you make?</b> A voice activated laser? A portable disco party? A flashlight that only turns on in the daytime?</Text>
                </Box>
              </Flex>
              <Flex sx={{ my: 4 }}>
                <Box>
                  <Text as="p"><b>3. Prototype</b></Text>
                  <Text>Turn your idea into something almost real: simulate your project in an online editor for beginners.</Text>
                </Box>
                <Box>
                  <Image src="https://cloud-i547pyt1f-hack-club-bot.vercel.app/0idea.png" />
                </Box>
              </Flex>
              <Flex sx={{ my: 4 }}>
                <Box>
                  <Image src="https://cloud-i547pyt1f-hack-club-bot.vercel.app/0idea.png" />
                </Box>
                <Box>
                  <Text as="p"><b>4. Show off & ship it!</b></Text>
                  <Text>Show off your circuit! If it works in simulation, <b>we’ll send you the parts to build it in real life.</b></Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ a: { color: 'blue' }, pb: 4 }}>
        <Heading as="h3" variant="subheadline" mb={2}>
          A project by <a href="https://hackclub.com/">Hack Club</a>.
        </Heading>
        <Text as="p" variant="caption" mb={3} sx={{ width: ['85%', '75%', '60%'] }}>
          Hack Club is a registered 501(c)3 nonprofit organization that supports a
          network of 20k+ technical high schoolers. We believe you learn best by
          building so we're removing barriers to hardware access so any teenager can
          explore. In the past few years, we've{' '}
          <Link href="https://summer.hackclub.com" target="_blank">
            partnered with GitHub to give away $50k of hardware
          </Link>
          ,{' '}
          <Link
            href="https://github.com/hackclub/the-hacker-zephyr"
            target="_blank"
          >
            hosted the world's longest hackathon on land
          </Link>
          , and{' '}
          <Link href="https://github.com/hackclub/assemble" target="_blank">
            brought 183 teenagers to SF for a hackathon
          </Link>
          .
        </Text>
        <Text as="p" variant="caption" mb={1}>
          Illustrations by Ripley.
        </Text>
      </Box>
      <Footer />
    </>
  )
}