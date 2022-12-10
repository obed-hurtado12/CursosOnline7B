import React from "react";
// Chakra imports
import {
  Button,
  Flex,
  Table,
  Tbody,
  Icon,
  Text,
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

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import imgReact from "../../assets/img/Frameworks/LogoReactJs1.png";
import IconBox from "components/Icons/IconBox";

// Table Components
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";

// Data
import { tablesProjectData, tablesTableData } from "variables/general";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";

export default function ShoppingCart() {
  return (
    <div>
      <Flex
        direction="row"
        pt={{ base: "120px", md: "100px" }}
        w="100%"
        h="50%"
      >
        {/* Products Table */}
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="center"
          w="65%"
          justify="center"
          py="1rem"
        >
          <Card my="22px" overflowX={{ sm: "scroll", md: "hidden" }} pb="0px">
            <CardHeader p="6px 0px 22px 0px">
              <Flex direction="column">
                <Text fontSize="lg" color="#fff" fontWeight="bold" mb=".5rem">
                  Mi compra
                </Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color="#fff" style={{marginBottom:"20px"}}>
                <Thead>
                  <Tr my=".8rem" ps="0px">
                    <Th
                      ps="0px"
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Cursos
                    </Th>
                    <Th borderBottomColor="#56577A"></Th>
                    <Th borderBottomColor="#56577A"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <img
                        src={imgReact}
                        style={{
                          height: "100px",
                          width: "100px",
                          marginRight: "9px",
                        }}
                      />
                    </Td>
                    <Td>
                      <StatLabel
                        fontSize="sm"
                        color="gray.400"
                        fontWeight="bold"
                        pb="2px"
                      >
                        Autor: Obed Ariel
                      </StatLabel>
                      <StatLabel
                        fontSize="sm"
                        color="gray.400"
                        fontWeight="bold"
                        pb="2px"
                      >
                        Duración: 6 hrs
                      </StatLabel>
                      <Flex style={{ marginTop: "10px" }}>
                        <IconBox
                          as="box"
                          h={"35px"}
                          w={"35px"}
                          bg="brand.200"
                        >
                          <WalletIcon h={"10px"} w={"10px"} color="#fff" />
                        </IconBox>
                      </Flex>
                    </Td>
                    <Td>
                      <Flex w="100%" align="right" flexDirection="column">
                        <StatNumber fontSize="lg" color="#fff">
                          $200.50
                        </StatNumber>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <img
                        src={imgReact}
                        style={{
                          height: "100px",
                          width: "100px",
                          marginRight: "9px",
                        }}
                      />
                    </Td>
                    <Td>
                      <StatLabel
                        fontSize="sm"
                        color="gray.400"
                        fontWeight="bold"
                        pb="2px"
                      >
                        Autor: Obed Ariel
                      </StatLabel>
                      <StatLabel
                        fontSize="sm"
                        color="gray.400"
                        fontWeight="bold"
                        pb="2px"
                      >
                        Duración: 6 hrs
                      </StatLabel>
                      <Flex style={{ marginTop: "10px" }}>
                        <IconBox
                          as="box"
                          h={"35px"}
                          w={"35px"}
                          bg="brand.200"
                        >
                          <WalletIcon h={"10px"} w={"10px"} color="#fff" />
                        </IconBox>
                      </Flex>
                    </Td>
                    <Td>
                      <Flex w="100%" align="right" flexDirection="column">
                        <StatNumber fontSize="lg" color="#fff">
                          $200.50
                        </StatNumber>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <img
                        src={imgReact}
                        style={{
                          height: "100px",
                          width: "100px",
                          marginRight: "9px",
                        }}
                      />
                    </Td>
                    <Td>
                      <StatLabel
                        fontSize="sm"
                        color="gray.400"
                        fontWeight="bold"
                        pb="2px"
                      >
                        Autor: Obed Ariel
                      </StatLabel>
                      <StatLabel
                        fontSize="sm"
                        color="gray.400"
                        fontWeight="bold"
                        pb="2px"
                      >
                        Duración: 6 hrs
                      </StatLabel>
                      <Flex style={{ marginTop: "10px" }}>
                        <IconBox
                          as="box"
                          h={"35px"}
                          w={"35px"}
                          bg="brand.200"
                        >
                          <WalletIcon h={"10px"} w={"10px"} color="#fff" />
                        </IconBox>
                      </Flex>
                    </Td>
                    <Td>
                      <Flex w="100%" align="right" flexDirection="column">
                        <StatNumber fontSize="lg" color="#fff">
                          $200.50
                        </StatNumber>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Flex>
        <Spacer></Spacer>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="start"
          w="30%"
          justify="right"
          py="1rem"
        >
          <Card my="22px" overflowX={{ sm: "scroll", md: "hidden" }} pb="0px">
            <CardHeader >
              <Text fontSize="lg" color="#fff" fontWeight="bold" w="100%">
                Summary
              </Text>
            </CardHeader>
            <CardBody>
              <Flex direction="column">
                <Flex align="center">
                  <Table variant="simple" color="#fff">
                    <Thead>
                      <Tr my=".8rem" ps="0px">
                        <Th borderBottomColor="#56577A"></Th>
                        <Th borderBottomColor="#56577A"></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <StatLabel
                            fontSize="sm"
                            color="gray.400"
                            fontWeight="bold"
                            pb="2px"
                          >
                            Cursos
                          </StatLabel>
                        </Td>
                        <Td>
                          <Flex w="100%" align="right" flexDirection="column">
                            <StatNumber fontSize="lg" color="#fff">
                              $200.50
                            </StatNumber>
                          </Flex>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <StatLabel
                            fontSize="sm"
                            color="gray.400"
                            fontWeight="bold"
                            pb="2px"
                          >
                            Total (iva incluido)
                          </StatLabel>
                        </Td>
                        <Td>
                          <Flex w="100%" align="right" flexDirection="column">
                            <StatNumber fontSize="lg" color="#fff">
                              $200.50
                            </StatNumber>
                          </Flex>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Flex>
                <Flex align="center" w="100%" style={{marginTop:"20px", marginBottom:"20px"}}>
                  <Button
                    variant="brand"
                    fontSize="10px"
                    fontWeight="bold"
                    p="6px 32px"
                  >
                    Checkout
                  </Button>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          

          
        </Flex>
      </Flex>
    </div>
  );
}
