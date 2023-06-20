
import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';


const ColorMode = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <>
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button colorScheme="teal" mb={8}>
          Log In
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
              <form>
<AddressAutofill accessToken="pk.eyJ1IjoiamFtYWxkb2UiLCJhIjoiY2xlMDBycDFqMTc0ZDNucGhpdmZ0a3MxMyJ9._kaDvAK72eaDHxAyfsuJbA">
<input
name="address" placeholder="Address" type="text"
autoComplete="address-line1"
/>
</AddressAutofill>
<input
name="apartment" placeholder="Apartment number" type="text"
autoComplete="address-line2"
/>
<input
name="city" placeholder="City" type="text"
autoComplete="address-level2"
/>
<input
name="state" placeholder="State" type="text"
autoComplete="address-level1"
/>
<input
name="country" placeholder="Country" type="text"
autoComplete="country"
/>
<input
name="postcode" placeholder="Postcode" type="text"
autoComplete="postal-code"
/>
</form>
            </>
  );
};

export default ColorMode;
