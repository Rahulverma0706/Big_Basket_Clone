import {CardBody, Image, Text,CardFooter, Divider, ButtonGroup, Heading, Card, Stack, Input, Popover, PopoverArrow, Button, PopoverContent, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverTrigger, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalContent, ModalBody, FormControl, FormLabel, useDisclosure, ModalFooter, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Menu} from "@chakra-ui/react"


const ItemCard = () => {
    const styles = {
        container:{
            
            display:'flex',
            width:'80%',
            margin:'auto',
            marginTop:'50px'

        }
    }
  return (
    <div  className="container" style={styles.container}>
        <div>
        <Card maxW='sm'>
        <CardBody>
    <Image
      src='https:\/\/www.bigbasket.com\/media\/uploads\/p\/l\/126906_8-aashirvaad-atta-whole-wheat.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ₹450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
  
</Card>

        </div>
        <div>
        <Card maxW='sm'>
        <CardBody>
    <Image
      src='https:\/\/www.bigbasket.com\/media\/uploads\/p\/l\/1220743_1-aashirvaad-atta-whole-wheat-5-kg-iodised-salt-1-kg.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹1250
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
  
</Card>

        </div>
        <div>
        <Card maxW='sm'>
        <CardBody>
    <Image
      src='https:\/\/www.bigbasket.com\/media\/uploads\/p\/l\/40189429_4-bb-royal-superior-mp-sharbati-atta-fortified.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹650
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
  
</Card>

        </div>
        <div>
        <Card maxW='sm'>
        <CardBody>
    <Image
      src='https:\/\/www.bigbasket.com\/media\/uploads\/p\/l\/40236231_2-aashirvaad-select-sharbati-atta-100-mp-whole-wheat-rotis-stay-softer-for-longer.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹400
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
  
</Card>

        </div>
            </div>
  )  
}

export default ItemCard

