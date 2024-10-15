import { useState, useEffect } from 'react';
import {
  Flex, Stack, Input, Popover, PopoverArrow, Button, PopoverContent, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverTrigger, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Menu
} from "@chakra-ui/react";
import axios from 'axios';
import InitialFocus from "./header.RegisterPopup";
import { Link } from 'react-router-dom';

const Header = () => {
  // State for the search query and suggestions
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Fetch suggestions when the search query changes
  useEffect(() => {
    if (searchQuery.length > 2) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(`/api/products?q=${searchQuery}`);
          setSuggestions(response.data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]); // Clear suggestions if the query is too short
    }
  }, [searchQuery]);

  return (
    <>
      <div style={{ borderTop: '5px solid green' }}></div>

      <div style={{
        paddingTop: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        margin: 'auto',
        marginTop: '20px',
      }}>
        <img src="https://images.news18.com/ibnlive/uploads/2024/03/big-basket-1-2024-03-0622577b59c0ab95412f32dd4fae3f62-3x2.jpg" alt="BBLogo" width={'8%'} />

        {/* Search Input with Suggestions */}
        <Stack spacing={3} position="relative">
          <Input
            w={700}
            placeholder='Search for Products...'
            _placeholder={{ opacity: 1, color: 'gray.500' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div style={{
              position: 'absolute',
              top: '100%',
              width: '100%',
              backgroundColor: 'white',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 10,
            }}>
             {suggestions.map(product => (
  <div key={product._id} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
    {product.Product} {/* or use the correct key based on your API */}
  </div>
))}

            </div>
          )}
        </Stack>

        {/* Popover for Location */}
        <Popover>
          <PopoverTrigger>
            <Button>
              <img src="https://www.freeiconspng.com/thumbs/location-icon-png/location-symbol-png-circle-location-icon-13.png" alt="Location logo" width={35} />
              Select Location
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            <Stack spacing={3}>
              <Input
                placeholder='Search for Products...'
                _placeholder={{ opacity: 1, color: 'gray.500' }}
              />
            </Stack>
          </PopoverContent>
        </Popover>

        <InitialFocus />
      </div>

      {/* Navbar menu */}
      <div style={{
        width: '80%',
        marginTop: '20px',
        margin: 'auto'
      }}>
        <br />
        <Flex justifyContent="space-around" wrap="wrap">
          <Menu>
            <MenuButton as={Button} colorScheme="green" mt={4}>
              Shop by Category
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          <Button colorScheme="white" color="black" marginTop={4}>
            <Link to={'/productpage'}>
            Exotic Fruit & Vegetables
            </Link>
          </Button>
          <Button colorScheme="white" color="black" marginTop={4}>
            Tea
          </Button>
          <Button colorScheme="white" color="black" marginTop={4}>
            Ghee
          </Button>
          <Button colorScheme="white" color="black" marginTop={4}>
            Nandini
          </Button>
          <Button colorScheme="white" color="black" marginTop={4}>
            Fresh Vegetables
          </Button>
        </Flex>
      </div>
    </>
  );
}

export default Header;
