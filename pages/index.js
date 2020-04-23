import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Label,
  Link,
  Text,
  Textarea
} from 'theme-ui'

const CardLink = (props) => (
  <Link
    sx={{
      mt: 3,
      display: 'block',
      fontSize: 3,
      color: 'red',
      lineHeight: 'subheading',
      textDecoration: 'none',
      ':focus,:hover': {
        textDecoration: 'underline',
        textDecorationStyle: 'wavy'
      },
      ':after': { content: '"›"', pl: 1 },
      ...props.sx
    }}
    {...props}
  />
)

const grad = (theme, from, to) => `radial-gradient(
  ellipse farthest-corner at top left, ${theme.colors[from] || from}, ${
  theme.colors[to] || to
})`

export default () => (
  <>
    <Box as="header" sx={{ bg: 'dark', py: 6 }}>
      <Container sx={{ textAlign: 'center' }}>
        <Heading
          as="h1"
          variant="title"
          sx={{
            mt: 0,
            fontSize: [7, 8, 9],
            color: 'white',
            lineHeight: [0.875, 0.8],
            textShadow: (theme) => `0 0 6px ${theme.colors.red}`
          }}
        >
          COVID has changed{' '}
          <Text
            as="span"
            sx={{
              WebkitTextStroke: (theme) => theme.colors.red,
              WebkitTextStrokeWidth: '3px',
              WebkitTextFillColor: (theme) => theme.colors.white
            }}
          >
            everything
          </Text>
          .
        </Heading>
        <Text
          as="p"
          variant="subtitle"
          sx={{
            mt: 4,
            fontSize: 4,
            color: 'cyan',
            mx: 'auto',
            maxWidth: 'copyPlus',
            strong: { color: 'red' }
          }}
        >
          <strong>HACK CLUB</strong> used to be a network of high school coding
          clubs & hackathons. Someday, we’ll get back to that.
        </Text>
      </Container>
    </Box>
    <Box as="section" sx={{ bg: 'white', color: 'black', py: [4, 5, 6] }}>
      <Container
        sx={{ textAlign: 'center', maxWidth: [null, 'copyPlus', 'copyUltra'] }}
      >
        <Heading
          as="h2"
          variant="headline"
          sx={{
            fontSize: [4, 5],
            color: 'red',
            textTransform: 'uppercase',
            letterSpacing: 'headline'
          }}
        >
          During COVID-19
        </Heading>
        <Heading as="h2" variant="title" sx={{ fontSize: [5, 6], mb: 4 }}>
          We’re trying to make Hack Club the best place on the internet to be a
          teenager in tech.
        </Heading>
        <Button as="a" href="#join" variant="cta">
          Join our Slack
        </Button>
      </Container>
    </Box>
    <Box as="section" sx={{ bg: 'snow', color: 'black', py: [4, 5, 6] }}>
      <Container>
        <Heading
          as="h2"
          variant="title"
          sx={{ maxWidth: 'copyUltra', span: { display: ['inline', 'block'] } }}
        >
          <Text as="span" color="muted">
            We’re some of the 15 million U.S.&nbsp;high schoolers isolated.{' '}
          </Text>
          <Text as="span" color="orange">
            Here’s&nbsp;how we’re coming together.
          </Text>
        </Heading>
        <Grid
          columns={[null, 2]}
          gap={[3, 4]}
          sx={{
            mt: [4, 5],
            '> div': {
              p: [3, 4],
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
              position: 'relative'
            },
            h3: {
              mt: 0
            }
          }}
        >
          <Card>
            <Heading as="h3" variant="headline">
              AMAs with some of the most interesting people in tech.
            </Heading>
            <Text as="p" sx={{ color: 'muted', fontSize: 2 }}>
              Elon Musk, Simone Giertz, Tom Preston-Werner, & more
            </Text>
            <CardLink href="https://youtu.be/1pn8h2q3Cas">
              Watch a recent AMA
            </CardLink>
          </Card>
          <Card>
            <Heading as="h3" variant="headline">
              Social coding events to keep you leveling up.
            </Heading>
            <CardLink href="https://events.hackclub.com/">
              See upcoming events
            </CardLink>
          </Card>
          <Card bg="dark" color="white">
            <Heading
              as="h3"
              variant="headline"
              my={0}
              sx={{ wordBreak: 'break-word' }}
            >
              Student-run workshops on coding, cooking, drawing, everything.
            </Heading>
            <Grid columns={[null, '3fr 2fr']} gap={[3, 4]} mt={3}>
              <Image
                src="/home/workshops.jpg"
                alt="Video call with students going wild"
                sx={{ borderRadius: 'default', maxWidth: '100%' }}
              />
              <CardLink href="https://youtu.be/Xy_owni1ZVk">
                Watch a recent live-code
              </CardLink>
            </Grid>
          </Card>
          <Card>
            <Heading as="h3" variant="headline">
              Online hackathons like the{' '}
              <Link
                href="https://covidglobalhackathon.com"
                sx={{
                  color: '#0f65ff',
                  display: ['inline', 'block'],
                  textDecoration: 'none',
                  ':focus,:hover': {
                    WebkitTextStroke: 'currentColor',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextFillColor: (theme) => theme.colors.white,
                    textShadow: '0 0 4px currentColor'
                  }
                }}
              >
                COVID-19 Global Hackathon
              </Link>{' '}
              to grow as a developer.
            </Heading>
            <CardLink href="https://hackathons.hackclub.com/">
              See upcoming hackathons
            </CardLink>
          </Card>
        </Grid>
      </Container>
    </Box>
    <Box
      as="section"
      sx={{
        backgroundImage:
          'url(https://d2wkqk610zk1ag.cloudfront.net/items/413x2P2K242H0C3Z193Z/team_extended_compressed.jpg)',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        '@media (hover: hover)': { backgroundAttachment: 'fixed' },
        pt: [6, 7, 8]
      }}
    >
      <Box
        sx={{
          '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
            backgroundColor: 'rgba(255,255,255,0.5)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)'
          },
          py: [4, 5]
        }}
      >
        <Container>
          <Heading
            as="h2"
            variant="title"
            sx={{
              color: 'white',
              maxWidth: 'copyUltra'
            }}
          >
            A{' '}
            <Text as="span" color="cyan">
              24/7
            </Text>{' '}
            high schooler community. Get coding help, share projects, meet your
            closest friends.
          </Heading>
          <Text as="p" sx={{ maxWidth: 'copy', fontSize: [2, 3], mt: 3 }}>
            Have a coding question? Looking for project feedback? You’ll find
            some fabulous people to talk to in our global Slack (Discord-style
            online groupchat) with 3,000+ members, active at all hours.
          </Text>
        </Container>
      </Box>
    </Box>
    <Box
      as="section"
      sx={{ bg: 'snow', color: 'black', position: 'relative', py: [4, 5] }}
    >
      <Container>
        <Heading
          as="h2"
          variant="title"
          sx={{
            fontSize: [4, 5],
            color: 'red',
            textTransform: 'uppercase',
            letterSpacing: 'headline'
          }}
        >
          Channels on our Slack
        </Heading>
        <Grid
          columns={[null, 2]}
          gap={[3, 4]}
          sx={{
            py: [3, 4],
            div: { color: 'white' },
            h3: { my: 0 }
          }}
        >
          <Card
            sx={{
              bg: 'blue',
              backgroundImage: (theme) => `radial-gradient(
    ellipse farthest-corner at top left, ${theme.colors.cyan}, ${theme.colors.blue})`
            }}
          >
            <Heading as="h3" variant="headline">
              #ship
            </Heading>
            <Text as="p" sx={{ color: 'smoke', fontSize: 2 }}>
              Share your latest projects & get feedback
            </Text>
          </Card>
          <Card
            sx={{
              bg: 'dark',
              backgroundImage: (theme) => `radial-gradient(
    ellipse farthest-corner at top left, ${theme.colors.darkless}, ${theme.colors.darker})`
            }}
          >
            <Heading as="h3" variant="headline">
              #hack-night
            </Heading>
            <Text as="p" sx={{ color: 'smoke', fontSize: 2 }}>
              Biweekly mini-hackathon & video call hangout
            </Text>
          </Card>
        </Grid>
        <Grid
          columns={[2, 3, 5]}
          gap={3}
          sx={{
            '> div': {
              px: [3, 3],
              py: [4, 4],
              minHeight: 12 * 16,
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
              position: 'relative'
            },
            h3: {
              variant: 'text.headline',
              color: 'white',
              mt: 0
            }
          }}
        >
          <Card bg="cyan">
            <h3>#lounge</h3>
          </Card>
          <Card bg="blue">
            <h3>#code</h3>
          </Card>
          <Card bg="orange">
            <h3>#support</h3>
          </Card>
          <Card bg="dark">
            <h3>#gamedev</h3>
          </Card>
          <Card bg="red">
            <h3>#lgbtq</h3>
          </Card>
          <Card bg="green">
            <h3>
              #photo-
              <br />
              graphy
            </h3>
          </Card>
          <Card bg="yellow">
            <h3>#dogs</h3>
          </Card>
          <Card bg="red">
            <h3>#design</h3>
          </Card>
          <Card bg="green">
            <h3>#music</h3>
          </Card>
          <Card bg="orange">
            <h3>#lounge</h3>
          </Card>
        </Grid>
      </Container>
    </Box>
    <Box
      as="footer"
      sx={{
        bg: 'cyan',
        backgroundImage: (theme) => grad(theme, 'yellow', 'orange'),
        color: 'white',
        py: [5, 6]
      }}
    >
      <Container
        sx={{ textAlign: 'center', maxWidth: [null, 'copyPlus', 'copyUltra'] }}
      >
        <Heading as="h2" variant="title" sx={{ fontSize: [5, 6, 7], mb: 3 }}>
          Join our Slack
        </Heading>
        <Text
          as="p"
          variant="subtitle"
          sx={{
            fontSize: 3,
            opacity: 0.875,
            maxWidth: 'copy',
            mx: 'auto',
            mb: 4
          }}
        >
          Due to high demand from the Elon Musk AMA, we’re temporarily making
          our community invite-only. But we still want to meet you!
        </Text>
        <Card
          sx={{
            bg: 'rgba(255,255,255,0.875)',
            maxWidth: 'narrow',
            mx: 'auto',
            label: {
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
              fontSize: 2,
              mb: 3
            }
          }}
        >
          <Label>
            Full name
            <Input name="name" placeholder="Amanda Hackworth" />
          </Label>
          <Label>
            Email address
            <Input
              name="email"
              type="email"
              placeholder="amanda@hackclub.com"
            />
          </Label>
          <Label sx={{ flexDirection: 'row !important', alignItems: 'center' }}>
            <Checkbox name="student" sx={{ color: 'muted' }} />
            Are you a high school or college student?
          </Label>
          <Label>
            Why do you want to join Hack Club?
            <Textarea
              name="reason"
              placeholder="Write a few sentences."
              variant="forms.input"
              sx={{ boxShadow: 'none !important' }}
            />
          </Label>
          <Button
            as="input"
            type="submit"
            variant="cta"
            sx={{
              py: 2,
              px: 3,
              mt: 3,
              fontSize: 2,
              width: '100%',
              fontFamily: 'inherit',
              backgroundImage: (theme) => grad(theme, 'cyan', 'blue')
            }}
            value="Request invitation"
          />
        </Card>
      </Container>
    </Box>
  </>
)
