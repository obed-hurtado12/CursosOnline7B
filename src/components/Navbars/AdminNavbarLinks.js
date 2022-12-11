// Chakra Icons
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
// Assets
import logo1 from "assets/img/Frameworks/LogoReactJs1.png";
import logo2 from "assets/img/Frameworks/LogoMongoDB4.png";
import logo3 from "assets/img/Frameworks/LogoNodeJs2.png";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import IconBox from "components/Icons/IconBox";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import B1 from "assets/img/Frameworks/B1.png";
import B2 from "assets/img/Frameworks/B2.png";
import B3 from "assets/img/Frameworks/B3.png";
import imgReact from "../../assets/img/Frameworks/LogoReactJs1.png";
import imgNode from "../../assets/img/Frameworks/LogoNodeJs2.png";
import imgHtml from "../../assets/img/Frameworks/LogoHtml3.png";
// Custom Icons
import { ProfileIcon, SettingsIcon } from "components/Icons/Icons";
// Custom Components
import { ItemContent } from "components/Menu/ItemContent";
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartIcon } from "components/Icons/Icons";

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;

  // Chakra Color Mode
  let inputBg = "#0F1535";
  let mainText = "gray.400";
  let navbarIcon = "white";
  let searchIcon = "white";

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  const settingsRef = React.useRef();
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems='center'
      flexDirection='row'>
      <InputGroup
        cursor='pointer'
        bg={inputBg}
        borderRadius='15px'
        borderColor='rgba(226, 232, 240, 0.3)'
        w={{
          sm: "128px",
          md: "200px",
        }}
        me={{ sm: "auto", md: "20px" }}>
        <InputLeftElement
          children={
            <IconButton
              bg='inherit'
              borderRadius='inherit'
              _hover='none'
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              icon={
                <SearchIcon color={searchIcon} w='15px' h='15px' />
              }></IconButton>
          }
        />
        <Input
          fontSize='xs'
          py='11px'
          color={mainText}
          placeholder='Buscar...'
          borderRadius='inherit'
        />
      </InputGroup>
      <NavLink to='/auth/signin'>
        <Button
          ms='0px'
          px='0px'
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant='transparent-with-icon'
          rightIcon={
            document.documentElement.dir ? (
              ""
            ) : (
              <ProfileIcon color={navbarIcon} w='22px' h='22px' me='0px' />
            )
          }
          leftIcon={
            document.documentElement.dir ? (
              <ProfileIcon color={navbarIcon} w='22px' h='22px' me='0px' />
            ) : (
              ""
            )
          }>
          <Text display={{ sm: "none", md: "flex" }}>Iniciar Sesión</Text>
        </Button>
      </NavLink>
      <SidebarResponsive
        iconColor='gray.500'
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        // logo={logo}
        {...rest}
      />
      <SettingsIcon
        cursor='pointer'
        ms={{ base: "16px", xl: "0px" }}
        me='16px'
        ref={settingsRef}
        onClick={props.onOpen}
        color={navbarIcon}
        w='18px'
        h='18px'
      />
      <Menu>
        <MenuButton align='center'>
          <BellIcon color={navbarIcon} mt='-4px' w='18px' h='18px' />
        </MenuButton>

        <MenuList
          border='transparent'
          backdropFilter='blur(63px)'
          bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
          borderRadius='20px'>
          <Flex flexDirection='column'>
            <MenuItem
              borderRadius='8px'
              // _hover={{
              //   bg: "transparent",
              // }}
              // _active={{
              //   bg: "transparent",
              // }}
              // _focus={{
              //   bg: "transparent",
              // }}
              mb='10px'>
              <ItemContent
                time='13 minutes ago'
                //info='from Alicia'
                boldInfo='Curso React Native'
                aName='Fernando Herrera'
                aSrc={B1}
              />
            </MenuItem>
            <MenuItem
              borderRadius='8px'
              _hover={{
                bg: "transparent",
              }}
              _active={{
                bg: "transparent",
              }}
              _focus={{
                bg: "transparent",
              }}
              //_hover={{ bg: "transparent" }}
              mb='10px'>
              <ItemContent
                time='2 days ago'
                //info='by Josh Henry'
                boldInfo='Curso MySQL'
                aName='Carlos Díaz'
                aSrc={B2}
              />
            </MenuItem>
            <MenuItem
              borderRadius='8px'
              _hover={{
                bg: "transparent",
              }}
              _active={{
                bg: "transparent",
              }}
              _focus={{
                bg: "transparent",
              }}
            >
              <ItemContent
                time='3 days ago'
                //info='Pago Realizado Exitosamente!'
                boldInfo='Curso Spring Boot'
                aName='Fernando Herrera'
                aSrc={B3}
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton align='center'>
          <CartIcon ml="10px" color={navbarIcon} mt='-4px' w='18px' h='18px' />
        </MenuButton>

        <MenuList
          border='transparent'
          backdropFilter='blur(63px)'
          bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
          borderRadius='20px'
          p="10px">
          <Flex flexDirection='column'>
            <Card style={{ marginBottom: "10px" }}>
              <CardBody>
                <Flex flexDirection="row" align="center" justify="center" w="100%">
                  <img src={imgReact} style={{ height: "70px", width: "70px", objectFit: "contain" }} />
                  <Stat style={{ marginLeft: "10px" }}>
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      React para principiantes
                    </StatLabel>

                  </Stat>
                  <Spacer />
                  <Flex>
                    <StatNumber fontSize="lg" color="#fff">
                      $200.50
                      <FontAwesomeIcon style={{marginLeft:"10px"}} icon={faTrash} />
                    </StatNumber>
                  </Flex>
                </Flex>

              </CardBody>

            </Card>
            <Card style={{ marginBottom: "10px" }}>
              <CardBody>
                <Flex flexDirection="row" align="center" justify="center" w="100%">
                  <img src={imgHtml} style={{ height: "70px", width: "70px", objectFit: "contain" }} />
                  <Stat style={{ marginLeft: "10px" }}>
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Curso HTML5, CSS y JavaScript
                    </StatLabel>

                  </Stat>
                  <Spacer />
                  <Flex>
                    <StatNumber fontSize="lg" color="#fff">
                      $320
                      <FontAwesomeIcon style={{marginLeft:"10px"}} icon={faTrash} />
                    </StatNumber>
                  </Flex>
                </Flex>

              </CardBody>

            </Card>
            <Card style={{ marginBottom: "10px" }}>
              <CardBody>
                <Flex flexDirection="row" align="center" justify="center" w="100%">
                  <img src={imgNode} style={{ height: "70px", width: "70px", objectFit: "contain" }} />
                  <Stat style={{ marginLeft: "10px" }}>
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Curso Node JS
                    </StatLabel>

                  </Stat>
                  <Spacer />
                  <Flex>
                    <StatNumber fontSize="lg" color="#fff">
                      $230.00
                      <FontAwesomeIcon style={{marginLeft:"10px"}} icon={faTrash} />
                    </StatNumber>
                  </Flex>
                </Flex>

              </CardBody>

            </Card>
            <Button
              variant="brand"
              fontSize="10px"
              fontWeight="bold"
              p="6px 32px"
              mt="10px"
            >
              $800.00
            </Button>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
